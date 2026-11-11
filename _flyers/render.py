"""Renderiza los flyers de _flyers/*.html a ../assets/servicios/<nombre>.jpg (768 px de ancho)
y <nombre>-480.jpg, igual que el resto de los flyers del sitio.

Uso (desde la raíz del sitio):
    python _flyers/render.py                 # todos
    python _flyers/render.py sistema-barberias   # solo uno (nombre del html sin extensión)

Requiere: pip install playwright pillow, y Google Chrome instalado (usa el Chrome del
sistema, no descarga nada). Se renderiza al doble de resolución y se reduce, para que
los textos queden nítidos.
"""
import io
import sys
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

AQUI = Path(__file__).resolve().parent
SALIDA = AQUI.parent / "assets" / "servicios"
ANCHO, ALTO = 768, 1222


def guardar(img: Image.Image, nombre: str) -> None:
    for ancho, sufijo in ((768, ""), (480, "-480")):
        alto = round(img.height * ancho / img.width)
        reducida = img.resize((ancho, alto), Image.LANCZOS)
        ruta = SALIDA / f"{nombre}{sufijo}.jpg"
        reducida.save(ruta, "JPEG", quality=88, optimize=True, progressive=True, subsampling=0)
        print(f"  {ruta.relative_to(AQUI.parent)}  {ancho}x{alto}  {ruta.stat().st_size // 1024} KB")


def main() -> None:
    pedidos = set(sys.argv[1:])
    paginas = sorted(p for p in AQUI.glob("sistema-*.html") if not pedidos or p.stem in pedidos)
    if not paginas:
        sys.exit("No hay flyers que renderizar.")
    SALIDA.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        navegador = p.chromium.launch(channel="chrome")
        pagina = navegador.new_page(viewport={"width": ANCHO, "height": ALTO}, device_scale_factor=2)
        for html in paginas:
            print(html.stem)
            pagina.goto(html.as_uri())
            pagina.wait_for_function("document.documentElement.dataset.ready === '1'")
            pagina.evaluate("document.fonts.ready")
            pagina.wait_for_timeout(250)
            png = pagina.screenshot(type="png")
            guardar(Image.open(io.BytesIO(png)).convert("RGB"), html.stem)
        navegador.close()


if __name__ == "__main__":
    main()
