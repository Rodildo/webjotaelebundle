# Sitio web de Total System

Sitio estático (HTML + CSS + un poco de JS, sin build ni dependencias) de **Total System**: servicios de software (facturación electrónica, control de asistencia, sistemas por industria, software a medida).

```
website/
  index.html                 — home: hero, servicios destacados (asistencia y facturación), 11 sistemas por industria con su flyer, software a medida, proceso, FAQ y contacto
  sistemas.html              — catálogo: 41 sistemas en 9 categorías; cada uno abre un correo prellenado
  404.html                   — página de error con la marca (GitHub Pages la sirve sola)
  css/total.css              — única hoja de estilos: tokens de marca + todos los componentes
  js/site.js                 — menú móvil (la página funciona completa sin JS)
  fonts/                     — Outfit y Manrope autohospedadas (woff2, subset latin)
  assets/
    servicios/               — los flyers de la marca; cada uno en 2 tamaños (-480.jpg y completo). Los de asistencia, facturación, MedicPro, AcademiaPro, restaurantes, gimnasios, préstamos y software a medida son los originales recortados (ver abajo); los 6 sistemas nuevos se generan desde _flyers/
    og-total-system.png      — imagen 1200x630 para compartir el link
    favicon-48.png, apple-touch-icon.png, logo-total-system-512.png
  _flyers/                   — fuente de los 6 flyers nuevos (HTML + CSS) y render.py; no se publica (ver «Flyers»)
  CNAME, robots.txt, sitemap.xml, Dockerfile, .dockerignore
  PRODUCT.md                 — contexto de producto para el skill de diseño (no es parte del sitio)
```

## Diseño

Tomado de los flyers de Total System: fondo negro-ciruela (`--ink`), magenta (`--pink`), coral (`--coral`) y una variante crema (`--cream`), con la barra magenta de cierre. Los tokens están al inicio de `css/total.css`. Tipografías: Outfit (títulos) y Manrope (texto), servidas desde `fonts/`. Las secciones alternan oscuro y crema.

## Contacto (correo y WhatsApp)

Los botones de cada servicio y los de «Pedir demo» son enlaces `mailto:` a **georjucho@gmail.com**, con asunto y mensaje prellenados según el servicio. Desde el 2026-11-11 hay además WhatsApp **+55 92 98432-1636** (`https://wa.me/5592984321636`): botón flotante verde en todas las páginas, una segunda píldora en la barra rosa de contacto y un enlace en el pie. Los flyers traen impreso el WhatsApp +58 422 330 0722 y el sitio www.totalsystem.com en su barra inferior, así que **las imágenes de `assets/servicios/` están recortadas justo encima de esa barra** para no mostrar un contacto que no es el oficial (el WhatsApp impreso en ellos es otro número). Los originales completos no están en el repo.

Para cambiar el correo: buscar y reemplazar `georjucho@gmail.com` en todos los `.html` (también aparece en el JSON-LD de `index.html`). Para cambiar el WhatsApp: buscar y reemplazar `5592984321636` (enlaces `wa.me`), `+55 92 98432-1636` (texto visible) y `+55-92-98432-1636` (JSON-LD) en `index.html`, `sistemas.html` y `404.html`.

## Flyers de los sistemas nuevos

Los flyers de academias de belleza, barberías, autolavados, entrenadores, estudios fotográficos y menú digital no son fotos: son tarjetas diseñadas en HTML/CSS con las mismas tipografías y colores del sitio, renderizadas a JPG. La fuente está en `_flyers/`: una página `sistema-*.html` por flyer, `flyer.css` con el estilo común y `flyer.js` con los íconos. Los datos que aparecen dentro (nombres, montos, horas, el QR) son ilustrativos.

Para cambiar un texto o un color, edita el HTML y vuelve a generar:

```
pip install playwright pillow
python _flyers/render.py                       # todos
python _flyers/render.py sistema-barberias     # uno solo
```

Usa el Google Chrome instalado (no descarga nada) y escribe `assets/servicios/<nombre>.jpg` (768 px) y `<nombre>-480.jpg`. La carpeta empieza con guion bajo: GitHub Pages con Jekyll (el modo actual) no la publica, y `.dockerignore` la deja fuera de la imagen.

## Publicar el sitio

Es HTML/CSS estático puro — no necesita build ni servidor con lógica.

**Decisión tomada (22 de septiembre de 2026):** esta carpeta se publica en su propio repo, [`Rodildo/webjotaelebundle`](https://github.com/Rodildo/webjotaelebundle), extraído de aquí con `git subtree push --prefix=website website-repo main` (el remote `website-repo` ya queda configurado en el repo principal, apunta a esa URL). Cada vez que se edite algo en `website/`, se vuelve a correr ese mismo comando para republicar — no hace falta recordar la sintaxis exacta, basta con pedir "sube la página web" otra vez.

**Decisión revisada (23 de septiembre de 2026):** en vez de EasyPanel, el sitio se publica con **GitHub Pages** sobre ese mismo repo `webjotaelebundle`, con el dominio propio `www.jotaelebundle.com` (comprado en IONOS) apuntando ahí. Pasos ya dados y pendientes:

1. Archivo `CNAME` en la raíz de `website/` con el contenido `www.jotaelebundle.com` — ya está, se publica junto con el resto del sitio en cada `git subtree push`.
2. En GitHub, dentro de `Rodildo/webjotaelebundle` → `Settings` → `Pages`: `Source` = `Deploy from a branch`, rama `main`, carpeta `/ (root)`. Guardar.
3. En el mismo panel de `Pages`, en `Custom domain` debe aparecer (o escribirse) `www.jotaelebundle.com` y guardarse — GitHub verifica el DNS automáticamente una vez esté configurado (paso 4).
4. En IONOS, en la gestión DNS de `jotaelebundle.com`, agregar un registro:
   - Tipo `CNAME`, host/nombre `www`, valor `rodildo.github.io.` (con el punto final si IONOS lo pide, o `rodildo.github.io` si no lo acepta).
   - La propagación puede tardar de minutos a un par de horas.
5. Una vez GitHub detecta el DNS válido, activar `Enforce HTTPS` en el mismo panel de `Pages` (tarda un poco en aparecer disponible tras verificar el dominio).
6. Opcional: quien escriba `jotaelebundle.com` sin `www` no llega al sitio a menos que se configure aparte (un dominio raíz no puede usar CNAME por spec de DNS). Si se quiere cubrir ese caso, IONOS suele tener una opción de "redirección/forwarding" de dominio para mandar `jotaelebundle.com` → `https://www.jotaelebundle.com`, configurable desde su panel sin tocar este repo.

EasyPanel ya no hace falta para este sitio — el static site en EasyPanel documentado arriba queda descartado a favor de GitHub Pages.

## SEO

Hecho en el HTML de cada página:

- `<title>` (≤ 60 caracteres) y `<meta name="description">` (≤ 160) únicos, con las palabras clave del servicio.
- `<link rel="canonical">`, `robots` con `max-image-preview:large`, `lang="es"`, `theme-color`.
- Open Graph y Twitter Card (`summary_large_image`) con `assets/og-total-system.png` (1200x630).
- Datos estructurados JSON-LD: `Organization` (con `OfferCatalog` de los servicios principales y del catálogo), `WebSite` y `FAQPage` en `index.html`; `CollectionPage` + `ItemList` (41 entradas, generada desde el propio HTML del catálogo) y `BreadcrumbList` en `sistemas.html`. El texto del FAQ del JSON-LD es idéntico al visible.
- Un solo `<h1>` por página, jerarquía h2/h3 correcta, cada servicio es texto indexable (no solo imagen), `alt` descriptivo en cada flyer, `width`/`height` en todas las imágenes (sin saltos de layout), `loading="lazy"` bajo el primer pantallazo, `srcset` con versión de 480 px, precarga de fuentes y de la imagen principal.
- `sitemap.xml` con las 2 páginas, `robots.txt` apuntando a él, `404.html` con `noindex`.
- Accesibilidad: enlace para saltar al contenido, foco visible, contraste AA, `prefers-reduced-motion`, menú móvil con `aria-expanded`.

**Dominio:** el sitio se sirve desde `www.jotaelebundle.com` (CNAME). Los flyers dicen `www.totalsystem.com`; si se conecta ese dominio hay que cambiarlo en `CNAME`, `robots.txt`, `sitemap.xml`, y en los `canonical`, `og:url`, `og:image` y JSON-LD de los `.html` (buscar y reemplazar `https://www.jotaelebundle.com`).

**Pendiente (a petición del usuario, para una sesión futura):** verificar la propiedad del dominio en **Google Search Console** y enviar el `sitemap.xml` ahí para que Google empiece a indexar el sitio. Suele pedir uno de estos dos métodos:
- Subir un archivo HTML de verificación a la raíz del sitio (a `website/`, y volver a publicar con `git subtree push`), o
- Agregar un registro TXT en el DNS de `jotaelebundle.com` en IONOS.
