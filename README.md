# Lucía Millán Jiménez — Psicología

Sitio estático de Lucía Millán Jiménez, psicóloga general sanitaria en Ciudad Real, construido con Astro.

## Stack

- Astro 7 con salida estática.
- TypeScript en modo estricto y validación con `astro check`.
- CSS nativo, estilos encapsulados por componente y tokens globales.
- Fuentes autoalojadas mediante la API de fuentes de Astro.
- Imágenes locales optimizadas con `astro:assets`.
- Bun como único gestor de paquetes.

## Comandos

```bash
bun install       # Instalar dependencias
bun run dev       # Servidor de desarrollo
bun run check     # Validar Astro y TypeScript
bun run build     # Generar el sitio en dist/
bun run qa        # Ejecutar tipos, build y validación del HTML generado
bun run preview   # Previsualizar el build
```

## Estructura

```text
src/
├── assets/       # Imágenes y vídeo procesados por Astro
├── components/   # Secciones de página y componentes compartidos
│   └── ui/       # Primitivas visuales reutilizables
├── data/         # Contenido estructurado y datos globales
├── layouts/      # Layout principal y layout de páginas legales
├── pages/        # Rutas de Astro
└── styles/       # Tokens y estilos globales
scripts/           # Validaciones automatizadas del build
```

Las rutas principales se generan desde `src/pages/`. La portada compone sus secciones en `src/pages/index.astro`; el blog obtiene sus artículos de `src/data/blog.ts`; y los datos de contacto compartidos se mantienen en `src/data/site.ts`.

## Convenciones

- Mantener los assets importados dentro de `src/assets/` para que Astro pueda optimizarlos.
- Reservar `public/` para archivos que deban conservar una URL pública estable.
- Centralizar datos compartidos antes de repetirlos en componentes.
- Ejecutar `bun run qa` antes de publicar.
