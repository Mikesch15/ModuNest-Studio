# Erzeugt das PDF, das Kaeufer auf Etsy als «digitale Datei» erhalten (Link, Anleitung, Lizenz).
# Aufruf im Ordner quellcode:  python3 etsy/anleitung_pdf.py dist/ModuNest-Anleitung.pdf
# Braucht reportlab und Pillow; Schrift: DejaVu (Linux) – sonst Pfade unten anpassen.
import sys, io
from PIL import Image
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image as RLImage, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

URL = 'https://mikesch15.github.io/ModuNest-Studio/'
PRIV = URL + 'app/datenschutz/'
IMP = URL + 'app/impressum/'
MAIL = 'artvomhof@gmail.com'
INK, WARM = colors.HexColor('#1e1a17'), colors.HexColor('#c46546')
pdfmetrics.registerFont(TTFont('DV', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DVB', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
P = ParagraphStyle('p', fontName='DV', fontSize=10, leading=14.5, textColor=INK)
S = ParagraphStyle('s', parent=P, fontSize=8.5, leading=12, textColor=colors.HexColor('#6f6458'))
H = ParagraphStyle('h', fontName='DVB', fontSize=13, leading=18, spaceBefore=10, spaceAfter=2, textColor=INK)
T = ParagraphStyle('t', fontName='DVB', fontSize=21, leading=26, textColor=INK)
L = ParagraphStyle('l', fontName='DVB', fontSize=12.5, leading=17, textColor=WARM)

def logo():
    b = io.BytesIO(); Image.open('kern/logo-gross.webp').convert('RGBA').resize((300, 300)).save(b, 'PNG'); b.seek(0)
    return RLImage(b, width=70, height=70)

s = []
head = Table([[logo(), [Paragraph('ModuNest Studio', T), Paragraph('Dein Box-Konfigurator von Art vom Hof · Your box configurator', P)]]], colWidths=[82, 410])
head.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'MIDDLE'), ('LEFTPADDING', (0, 0), (-1, -1), 0)]))
s += [head, Spacer(1, 10), Paragraph(f'<link href="{URL}">{URL}</link>', L), Spacer(1, 2)]

def block(title, items):
    s.append(Paragraph(title, H))
    for i, t in enumerate(items, 1): s.append(Paragraph(f'<b>{i}.</b> {t}', P))

block('So geht’s', [
    'Öffne den Link oben – am besten am Computer oder Tablet (Chrome, Edge, Firefox oder Safari). Am Handy kannst du die Seite als App installieren.',
    'Stelle deine Kisten zusammen. Die 3D-Vorschau ist kostenlos; bei jedem Abschnitt erklärt das (i) die Einstellungen.',
    'Tippe auf «Herunterladen» und gib deine <b>Etsy-Bestellnummer</b> ein (Etsy → Käufe, oder in der Bestätigungs-E-Mail).',
    'Jede Kiste (Modul) zählt 1 – deine Bestellung enthält die gekauften Kisten. Mit dem Warenkorb holst du mehrere Konfigurationen in einem ZIP. Korrekturen sind 24 Stunden gratis, wenn jedes Mass höchstens 5 mm abweicht.',
    'Tipp: Drucke zuerst das kleine Passungs-Teststück und wähle die passende Nummer.',
    'Öffne die 3MF-Datei in Bambu Studio (oder die STL-Dateien in deinem Slicer) und drucke ohne Stützen. Optimiert für Bambu Lab P1S (Druckbett 256 mm).'])
block('How it works', [
    'Open the link above (computer or tablet recommended). On a phone you can install it as an app.',
    'Design your boxes – the 3D preview is free; the (i) in each section explains the settings.',
    'Tap «Download» and enter your <b>Etsy order number</b> (Etsy → Purchases, or your confirmation e-mail).',
    'Each box (module) counts 1 – your order contains the boxes you purchased. Use the cart to get several configurations in one ZIP. Corrections are free for 24 hours if each dimension changes by 5 mm at most.',
    'Tip: print the small fit test piece first and choose the matching number.',
    'Open the 3MF file in Bambu Studio (or the STL files in your slicer) and print without supports. Optimised for Bambu Lab P1S (256 mm bed).'])
s.append(Paragraph('Lizenz / License', H))
s.append(Paragraph('Die erzeugten Dateien und gedruckten Teile sind nur für deinen <b>privaten Gebrauch</b>. Nicht erlaubt: Weitergabe oder Verkauf der Dateien, Verkauf gedruckter Teile, Hochladen auf andere Plattformen.', P))
s.append(Spacer(1, 3))
s.append(Paragraph('Files and printed parts are for <b>personal use only</b>. Not allowed: sharing or selling the files, selling printed parts, uploading to other platforms.', P))
s.append(Paragraph('Hilfe / Help', H))
s.append(Paragraph(f'Probleme mit der Bestellnummer? Schreib mir über Etsy-Nachrichten oder an {MAIL} – mit deiner Bestellnummer. / Problems with your order number? Message me on Etsy or at {MAIL} with your order number.', P))
s += [Spacer(1, 12), Paragraph(f'Mike Ledermann · Art vom Hof · {MAIL}<br/>Impressum: <link href="{IMP}">{IMP}</link> · Datenschutz: <link href="{PRIV}">{PRIV}</link>', S),
      Paragraph('Der Begriff «Etsy» ist eine Marke von Etsy, Inc. Diese Anwendung nutzt die Etsy-API, ist aber nicht von Etsy, Inc. unterstützt oder zertifiziert.', S)]
SimpleDocTemplate(sys.argv[1] if len(sys.argv) > 1 else 'dist/ModuNest-Anleitung.pdf', pagesize=A4, leftMargin=50, rightMargin=50, topMargin=42, bottomMargin=36, title='ModuNest Studio – Anleitung', author='Art vom Hof').build(s)
