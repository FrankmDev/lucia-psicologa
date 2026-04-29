# Lucía — Psicóloga en Granada

Landing page profesional para Lucía, psicóloga colegiada en Granada especializada en ansiedad, duelo, autoestima, relaciones de pareja, terapia EMDR y mindfulness.

## Diseño "Organic Editorial"

Esta landing page sigue el concepto de diseño **"Organic Editorial"** — una revista de bienestar de autor, no una clínica. Características principales:

- **Tipografía expresiva**: Playfair Display (serif elegante) + DM Sans (humanista moderna)
- **Paleta cálida**: Slate azul-gris (#4A5568) + Mint suave (#81D8D0) sobre fondo blanco cálido (#FAFAF8)
- **Layout asimétrico**: Texto que rompe el grid, elementos flotantes sin contenedor
- **Detalles orgánicos**: Líneas SVG curvas, formas inspiradas en el cerebro/corazón del logo
- **Grain overlay sutil**: Textura de ruido CSS para evitar el aspecto digital puro
- **Cursor personalizado**: Círculo mint que sigue el mouse con movimiento suave
- **Animaciones staggered**: Entrada de texto línea por línea con delays

## Estructura de la Página

1. **Hero** — Pantalla completa con titular expresivo y forma decorativa orgánica
2. **Sobre Mí** — Layout partido con foto en clip-path orgánico y pull quote destacado
3. **Especialidades** — Lista horizontal con separadores finos y efectos hover
4. **Cómo Funciona** — Proceso en 3 pasos con línea conectora curva
5. **Testimonios** — Carrusel horizontal con fondo oscuro (único momento dark)
6. **FAQ** — Acordeón minimalista con signo + que rota a ×
7. **Contacto** — Formulario editorial con inputs de borde inferior únicamente
8. **Footer** — Minimalista con gradiente de borde superior

## Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) v6.1.6
- **Estilos**: Tailwind CSS v4 con @apply para clases recurrentes
- **Tipografías**: Google Fonts (Playfair Display + DM Sans)
- **Animaciones**: CSS @keyframes + IntersectionObserver para scroll reveal
- **Iconos**: SVG hand-drawn style personalizados

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## SEO & Accesibilidad

- Meta descripción optimizada
- Schema.org ProfessionalService
- Enlaces de navegación interna
- Estados focus visibles
- Contraste de color accesible
- Estructura semántica HTML5

## Personalización

Para actualizar el contenido, edita los archivos en `/src/components/`:

- `Hero.astro` — Titular principal y CTA
- `SobreMi.astro` — Biografía y foto
- `Especialidades.astro` — Lista de servicios
- `ComoFunciona.astro` — Proceso de trabajo
- `Testimonios.astro` — Citas de clientes
- `FAQ.astro` — Preguntas frecuentes
- `Contacto.astro` — Formulario e info de contacto

## Créditos

Diseño y desarrollo con concepto "Organic Editorial" para transmitir calma, calidez y profesionalidad en el contexto de la psicología.

---

*Vault-Tec is not responsible for any unforeseen website awesomeness.*
# lucia-psicologa
