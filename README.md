# S&M Ingeniería SpA — sitio web (Astro + Vercel)

Sitio estático en Astro 5. Cada servicio tiene su propia landing en `/servicios/<slug>`.

## Desarrollo
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # genera /dist

## Estructura
- `src/data/site.ts` — contacto, imágenes y proyectos.
- `src/data/services.ts` — todo el contenido de las landings. Agregar un objeto = nueva landing.
- `src/pages/servicios/[slug].astro` — plantilla de landing (hero, alcance, proceso, proyectos, FAQ, formulario).
- `src/components/` — header con mega menú, footer, formulario, tiles.

## Rutas
/, /nosotros, /servicios, /proyectos, /contacto y 6 landings:
/servicios/ingenieria-conceptual-basica-detalle · gestion-de-abastecimiento · gestion-de-proyectos-epcm ·
ingenieria-civil-estructural · ingenieria-mecanica-piping · ingenieria-electrica-instrumentacion

## Antes de publicar
1. Formulario: crear endpoint en Formspree o Web3Forms y definir `PUBLIC_FORM_ENDPOINT` en Vercel.
2. Imágenes: hoy se cargan desde el WordPress actual. Ejecutar `./scripts/descargar-imagenes.sh`
   y cambiar `const wp` en `src/data/site.ts` a `"/img"` antes de dar de baja el sitio viejo.
3. Logo: `src/components/Logo.astro` es provisional; reemplazar por el oficial en SVG.

## Deploy
Importar el repo en Vercel (detecta Astro solo). Sitemap en `/sitemap-index.xml`.
