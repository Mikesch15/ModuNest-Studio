# Baut die Webseite aus kern/ + produkte/<id>/ (Aufruf im Ordner quellcode):  python3 assemble.py
# Ergebnis (eine Ebene hoeher, im Repo-Wurzelordner):
#   <id>/index.html je Produkt, index.html (Produktauswahl; bei nur einem Produkt Weiterleitung),
#   admin/index.html, manifest.webmanifest + admin/manifest.webmanifest, sw.js, icons/*
# Zusaetzlich dist/<id>.html (fuer Tests). Braucht Python 3 mit Pillow (Icons).
import re,base64,json,os,glob,hashlib
from PIL import Image,ImageDraw

K='kern/'
b64=lambda p:base64.b64encode(open(p,'rb').read()).decode()
s=open(K+'src_sign.html').read()
def cut(a,b):
    i=s.index(a); j=s.index(b,i); return s[i:j]
core=cut("const area=r=>","/* ================= Layout & Raster")
mk=cut("function mk(","function drawShape(")
exp=cut("function weld(","function threeMF(")
dl=re.search(r"function download\(blob,name\)\{.*?\n",s).group(0)
rend=cut("const cv=document.getElementById('gl');","/* ================= UI")
rend=rend.replace("const fit=()=>{cam.dist=Math.max(S.W*1.9,S.H*2.5)};","let fit=()=>{};").replace("[cam.tx,cam.ty,0]","[cam.tx,cam.ty,cam.tz]").replace("cam.dist*Math.sin(cam.el)]","cam.tz+cam.dist*Math.sin(cam.el)]").replace("tx:0,ty:0}","tx:0,ty:0,tz:0}")
assert "cam.tz+cam.dist" in rend and "tz:0" in rend and "let fit" in rend
ub=cut("const panel=document.getElementById('panel')","(function ui(){")
ub=ub.replace("S[key]","(c._t||S)[key]")
ub=ub.replace("const panel=document.getElementById('panel'),status=document.getElementById('status');","")
css=re.search(r"<style>\n/\*FONTFACES\*/\n(.*?)</style>",s,re.S).group(1)
LOGO="data:image/webp;base64,"+b64(K+'logo.webp')  # Logo Art vom Hof
FONT="data:font/woff2;base64,"+b64(K+'fonts/dancing-700.woff2')  # Dancing Script, SIL OFL 1.1 (kern/fonts/OFL-dancing-script.txt)
faces='@font-face{font-family:"KFModern";src:url(data:font/woff;base64,%s) format("woff");font-weight:400}\n'%b64(K+'fonts/poppins-bold.woff')
faces+='@font-face{font-family:"Script";src:url(%s) format("woff2");font-weight:700;font-display:swap}\n'%FONT

prods=[json.load(open(p)) for p in sorted(glob.glob('produkte/*/produkt.json'))]
assert prods,'kein Produkt gefunden'
os.makedirs('dist',exist_ok=True)
REPO=os.path.exists('../config.js')  # nur im Repo die Webseite schreiben
out_files={}
def write(rel,data):
    out_files[rel]=data if isinstance(data,bytes) else data.encode()
    if REPO:
        os.makedirs(os.path.dirname('../'+rel) or '..',exist_ok=True)
        open('../'+rel,'wb').write(out_files[rel])

# ---- Produktseiten ----
for P in prods:
    d='produkte/%s/'%P['id']
    head=open(K+'head.html').read().replace("/*CSS*/",css).replace('PRODUCT_TITLE',P['name']['de'])
    shell=open(K+'shell.js').read().replace("/*UIBUILDERS*/",ub).replace("/*GATE*/",open(K+'gate.js').read())
    src=''.join(open(d+f).read() for f in P['dateien'])
    out=head+core+mk+exp+dl+rend+open(K+'texte.js').read()+src+'const PRODUCT_COUNT=%d;\n'%len(prods)+shell
    out=out.replace("/*FONTFACES*/",faces).replace("LOGO_DATA",LOGO)
    open('dist/%s.html'%P['id'],'w').write(out)
    write(P['id']+'/index.html',out)
    print(P['id'],len(out)//1024,'KB')

# ---- Startseite (Produktauswahl) ----
lst=[{'id':P['id'],'name':P['name'],'text':P['text'],'bild':('data:image/webp;base64,'+b64('produkte/%s/bild.webp'%P['id'])) if os.path.exists('produkte/%s/bild.webp'%P['id']) else ''} for P in prods]
st=open(K+'start.html').read().replace('PRODUCTS_JSON',json.dumps(lst,ensure_ascii=False)).replace('LOGO_DATA',LOGO).replace('FONT_DATA',FONT)
write('index.html',st)

# ---- Admin ----
write('admin/index.html',open(K+'admin.html').read().replace('PRODUCTS_JSON',json.dumps([{'id':P['id'],'name':P['name']} for P in prods],ensure_ascii=False)).replace('LOGO_DATA',LOGO).replace('FONT_DATA',FONT))

# ---- App-Symbole ----
big=Image.open(K+'logo-gross.webp').convert('RGBA')
def icon(n,bg,scale,ring=None):
    im=Image.new('RGBA',(n,n),bg or (0,0,0,0))
    if ring:
        r=int(n*scale/2)+max(2,n//40);c=n//2;ImageDraw.Draw(im).ellipse((c-r,c-r,c+r,c+r),fill=ring)
    l=big.resize((int(n*scale),)*2,Image.LANCZOS);im.alpha_composite(l,((n-l.width)//2,)*2)
    from io import BytesIO;b=BytesIO();im.quantize(256,method=Image.FASTOCTREE).save(b,'PNG',optimize=True);return b.getvalue()  # Palette: kleinere Dateien
CREAM=(253,250,242,255);INK=(30,26,23,255);RUST=(196,101,70,255)
for n in (192,512):write('icons/icon-%d.png'%n,icon(n,None,1))
write('icons/maskable-512.png',icon(512,CREAM,.78));write('icons/apple-180.png',icon(180,CREAM,.9))
for n in (192,512):write('icons/admin-%d.png'%n,icon(n,INK,.74,RUST))
write('icons/admin-maskable-512.png',icon(512,INK,.66,RUST));write('icons/admin-apple-180.png',icon(180,INK,.8,RUST))

# ---- Manifeste ----
# App-Kennung (id) wird vom Browser gegen die Domain aufgeloest, nicht gegen den Ordner: './' ergaebe fuer alle Apps
# auf mikesch15.github.io dieselbe Kennung ('schon installiert'). Darum absoluter Pfad, je App verschieden.
SITE='/ModuNest-Studio/'  # Pfad der GitHub-Pages-Seite (Repo-Name)
icons=lambda pre,a:[{'src':pre+a+'-192.png','sizes':'192x192','type':'image/png'},{'src':pre+a+'-512.png','sizes':'512x512','type':'image/png'},{'src':pre+(a+'-maskable-512.png' if a=='admin' else 'maskable-512.png'),'sizes':'512x512','type':'image/png','purpose':'maskable'}]
write('manifest.webmanifest',json.dumps({'name':'ModuNest Studio','short_name':'ModuNest','description':'Konfigurator von Art vom Hof','id':SITE,'start_url':'./','scope':'./','display':'standalone','lang':'de','background_color':'#f6f0e4','theme_color':'#fdfaf2','icons':icons('icons/','icon')},ensure_ascii=False,indent=1))
write('admin/manifest.webmanifest',json.dumps({'name':'ModuNest Admin','short_name':'MN Admin','id':SITE+'admin/','start_url':'./','scope':'./','display':'standalone','lang':'de','background_color':'#151412','theme_color':'#1e1a17','icons':icons('../icons/','admin')},ensure_ascii=False,indent=1))

# ---- Service Worker (Version = Inhalt aller Dateien, damit Updates ankommen) ----
pre=['./','config.js']+sorted(k.replace('index.html','') for k in out_files)
ver=hashlib.sha1(b''.join(out_files[k] for k in sorted(out_files))).hexdigest()[:10]
write('sw.js',open(K+'sw.js').read().replace('VERSION',ver).replace('PRECACHE',json.dumps(sorted(set(pre)))))
print('Startseite, Admin, Icons, Manifeste, sw.js (Version %s)%s'%(ver,'' if REPO else ' – nur dist/, kein Repo gefunden'))
