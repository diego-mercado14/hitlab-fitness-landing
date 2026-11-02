# HitLab Fitness and Fight Studio

Landing comercial de una sola página para presentar HitLab y convertir consultas por WhatsApp. El contenido está en español y el sitio funciona como build estático de Vite, sin backend.

**Repositorio:** https://github.com/diego-mercado14/hitlab-fitness-landing  
**Sitio público:** https://diego-mercado14.github.io/hitlab-fitness-landing/  
**Desarrollo:** DATARYA.

## Stack y estructura

- React + Vite + TypeScript para los componentes y el build.
- Tailwind CSS 4 como base de estilos y CSS de marca en `src/styles.css`.
- Swiper para las galerías táctiles, con controles y mensajes accesibles en español.
- Barlow Condensed y DM Sans se sirven desde los assets del build de GitHub Pages.
- Datos de contacto, ubicación y rutas de medios editables en `src/content.ts`.

```text
hitlab-landing/
├─ public/
│  ├─ media/                 fotos, videos, miniaturas e imagen social
│  ├─ logo-provisional.svg   trazo vectorial pendiente de aprobación
│  └─ favicon.svg
├─ src/
│  ├─ components/            marca, CTA, títulos y galerías
│  ├─ App.tsx                secciones de la landing
│  ├─ content.ts             datos editables
│  └─ styles.css             diseño y responsive
├─ index.html                SEO, redes y datos estructurados
├─ vite.config.ts            build y URL social
├─ .github/workflows/deploy.yml  publicación automática en GitHub Pages
└─ RIGHTS.md
```

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ y npm.

```bash
npm ci
npm run dev
npm run build
```

`npm run dev` muestra la URL local. `npm run build` genera `dist/`. Para revisar ese build: `npm run preview`.

## Contenido y conversión

El mensaje de WhatsApp, teléfono, Instagram, dirección, mapa embebido y enlace a la ficha exacta de Google Maps están en `src/content.ts`. El enlace de Maps se comprobó contra la ficha **HitLab**, Av Xochitl 4385, El Zapote, Zapopan, con teléfono **33 3992 6430**. No se muestran precios ni horarios no confirmados. Las reseñas se presentan como resumen de temas, sin citas atribuidas.

## Fotos y videos

Hay dos fotos reales. En escritorio se muestran en cuadrícula; en móvil, con swipe. Los cuatro videos se presentan en 9:16, sin recorte, con controles nativos de reproducción y pausa. Al reproducir uno se pausan los demás; al cambiar de diapositiva o pestaña también se pausan. Los MP4 usan H.264/AAC y tienen el índice `moov` al inicio para facilitar la reproducción progresiva. Cada video tiene una miniatura extraída del propio clip y usa `preload="none"`.

| Archivo | Fuente en Drive, carpeta “hitlab pagina” |
| --- | --- |
| `hitlab-01.jpg` | `WhatsApp Image 2026-10-26 at 3.29.06 PM.jpeg` |
| `hitlab-02.jpg` | `WhatsApp Image 2026-10-26 at 3.29.07 PM.jpeg` |
| `hitlab-video-01.mp4` | `WhatsApp Video 2026-10-26 at 3.29.06 PM (1).mp4` |
| `hitlab-video-02.mp4` | `WhatsApp Video 2026-10-26 at 3.29.05 PM.mp4` |
| `hitlab-video-03.mp4` | `WhatsApp Video 2026-10-26 at 3.29.04 PM.mp4` |
| `hitlab-video-04.mp4` | `WhatsApp Video 2026-10-28 at 1.33.48 PM (1).mp4` |

Para reemplazar o ampliar medios:

1. Copia los archivos a `public/media/` y conserva nombres descriptivos.
2. Edita los arreglos `photos` y `videos` en `src/content.ts`.
3. Añade un `alt` a cada foto y un `label` y `poster` a cada video.
4. Genera la miniatura desde un fotograma representativo. Ejemplo con FFmpeg: `ffmpeg -ss 5 -i video.mp4 -frames:v 1 -vf scale=360:-2 -q:v 3 video-poster.jpg`.
5. Verifica móvil, escritorio y `npm run build`.

`hitlab-social.jpg` es la imagen de 1200 × 630 para compartir. El sitio no depende de URLs privadas de Drive.

## Logo

`public/logo-provisional.svg` y `public/favicon.svg` reconstruyen la geometría visible en el logo superpuesto al tercer video. El azul se aproximó a partir de ese fotograma. **Son versiones provisionales, no el archivo maestro oficial.** La leyenda diminuta del fotograma parece decir “Wellness and Fitness Studio”; se usó “Fitness and Fight Studio” conforme al nombre confirmado para esta página. Si HitLab proporciona el archivo maestro, actualiza la ruta de imagen en `src/components/Brand.tsx` y el favicon.

## SEO y GitHub Pages

`index.html` incluye descripción, Open Graph, Twitter Card, idioma `es-MX` y datos estructurados básicos. `vite.config.ts` usa la base `/hitlab-fitness-landing/` y fija las URL canónica y social del sitio público. Las rutas de imágenes, videos, miniaturas y logo usan esa base.

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala con `npm ci`, compila con `npm run build` y publica `dist` en GitHub Pages. La fuente de publicación en Settings → Pages es **GitHub Actions**. Para cambios futuros:

1. Modifica el código en este directorio y ejecuta `npm ci` y `npm run build`.
2. Revisa los cambios y haz push a `main`.
3. Comprueba el workflow y la URL pública, incluidos mapa, WhatsApp, fotos y videos.

No se necesitan variables de entorno ni secretos para compilar. `node_modules/`, `dist/`, archivos temporales y `.env` están excluidos por `.gitignore`. Las licencias de las tipografías están en `public/font-licenses/`.

## Controles para cambios futuros

- Revisa teléfono, dirección, Instagram y texto comercial si cambian los datos del negocio.
- Confirma la autorización antes de añadir fotos, videos o marcas de terceros. Lee `RIGHTS.md`.
- Comprueba la URL pública y al menos un tamaño móvil y uno de escritorio después de cada despliegue.

Desarrollado por DATARYA.
