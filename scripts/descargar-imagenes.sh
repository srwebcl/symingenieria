#!/usr/bin/env bash
# Descarga las imágenes del sitio actual a /public/img, manteniendo la estructura de carpetas.
# Luego, en src/data/site.ts, cambiar `const wp = "https://www.sym-ingenieria.cl/wp-content/uploads"` por `const wp = "/img"`.
set -e
BASE="https://www.sym-ingenieria.cl/wp-content/uploads"
for f in 2019/05/pexels-photo-416405-1024x640.jpeg 2019/06/Foto-1-Resized.png 2019/06/Foto-2-Resized.png \
  2019/06/Foto-3-Resized.png 2019/06/cropped-Foto-4-Resized.png 2019/06/Balmaceda-1625-Of-32-1024x768.jpg \
  2019/06/PA-01.jpg 2019/06/EOLICAS-CHANCADOR-5-ESCONDIDA.jpg 2019/06/EDIFICIO-DESGAUADORES-MAGNETITA.png \
  2019/06/PLANTA-DE-HSD-CNN.png; do
  mkdir -p "public/img/$(dirname $f)"; curl -fsSL "$BASE/$f" -o "public/img/$f"; echo "ok $f"
done
