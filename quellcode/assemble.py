import re,base64
s=open('src_sign.html').read()
def cut(a,b,inc_b=False):
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
gate=open("gate.js").read()
css=re.search(r"<style>\n/\*FONTFACES\*/\n(.*?)</style>",s,re.S).group(1)
head=open('head.html').read().replace("/*CSS*/",css)
# CSS aus Zeichen-Reihenfolge: eigene Overrides stehen nach /*CSS*/ -> Marker oben ersetzt, Overrides folgen
app=open('app.js').read().replace("/*UIBUILDERS*/",ub).replace("/*GATE*/",gate)
faces=''.join('@font-face{font-family:"%s";src:url(data:font/woff;base64,%s) format("woff");font-weight:400}\n'%(n,base64.b64encode(open('fonts/%s.woff'%f,'rb').read()).decode()) for n,f in [('KFModern','poppins-bold')])
out=head+core+mk+exp+dl+rend+open('geo.js').read()+open('planner.js').read()+open('geo2.js').read()+open('ui.js').read()+app
faces+='@font-face{font-family:"Script";src:url(data:font/woff2;base64,%s) format("woff2");font-weight:700;font-display:swap}\n'%base64.b64encode(open('fonts/dancing-700.woff2','rb').read()).decode()  # Dancing Script, SIL OFL 1.1 (fonts/OFL-dancing-script.txt)
out=out.replace("/*FONTFACES*/",faces)
out=out.replace("LOGO_DATA","data:image/webp;base64,"+base64.b64encode(open('logo.webp','rb').read()).decode())  # Logo Art vom Hof
import os;os.makedirs('dist',exist_ok=True);open('dist/modunest-studio.html','w').write(out);print(len(out)//1024,'KB')
# im Repo liegt die Webseite eine Ebene hoeher als index.html (neben config.js)
if os.path.exists('../config.js'):open('../index.html','w').write(out);print('-> ../index.html')
