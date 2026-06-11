---
name: "Lucía — Psicóloga Clínica"
description: "Landing page profesional para psicología clínica con enfoque Organic Editorial."
colors:
  cream: "#F5F0E8"
  cream-warm: "#EDE7DC"
  white-warm: "#FDFBF7"
  parchment: "#FAF8F3"
  paper: "#F6F3EE"
  taupe: "#9E9488"
  taupe-dark: "#7A7166"
  earth: "#6B7D6A"
  earth-light: "#8A9A89"
  ink: "#2C2C2C"
  ink-soft: "#5A5A5A"
  mint: "#7DD4CC"
  sage: "#A8A99E"
  sage-dark: "#8A8B7E"
  sage-light: "#C4C5BA"
  gold: "#B8A88A"
  line: "#E5DFD4"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(2.6rem, 7vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(2.6rem, 6vw, 4.8rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(1.28rem, 2vw, 1.55rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "max(0.58rem, 10px)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.3em"
rounded:
  organic: "12px 2px 12px 2px"
  micro: "2px"
  pill: "999px"
  none: "0"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.earth}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "16px 36px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 0"
    typography: "{typography.label}"
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 0 10px"
    typography: "{typography.body}"
  nav-island:
    backgroundColor: "{colors.white-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
---

# Design System: Lucía — Psicóloga Clínica

## 1. Overview

**Creative North Star: "The Editorial Sanctuary"**

Una revista de bienestar de autor, no una clínica fría. Este sistema visual transmite calma, calidez y profesionalidad a través de una paleta orgánica, tipografía editorial con carácter, y detalles táctiles que evocan un espacio de escucha. La densidad es generosa pero nunca abrumadora; cada sección respira.

El sistema rechaza explícitamente el estilo clínico/institucional (blanco puro, azul corporativo, iconografía médica), el estilo SaaS genérico (hero-metric, gradientes de acento, cards idénticas), y el estilo "AI default" de 2026 (fondos crema sin criterio, tipografía sans universal). La calidez no es un extra, es un requisito.

**Key Characteristics:**
- Paleta orgánica earth + sage + mint sobre fondos cálidos, nunca fríos.
- Tipografía serif italic (Cormorant Garamond) para display, sans humanista (DM Sans) para cuerpo.
- Texturas naturales: grain overlay, bordes irregulares, gradientes radiales suaves.
- Animaciones con propósito emocional: entrada suave, parallax sutil, micro-interacciones reconfortantes.
- Jerarquía editorial rica con espacio intencional; nunca minimalismo por omisión.

## 2. Colors

Una paleta orgánica y terrosa que evoca la naturaleza, la calma y la calidez. El verde musgo actúa como acento principal, mientras que los neutros cálidos crean un fondo acogedor.

### Primary
- **Moss Earth** (#6B7D6A): El color de acento principal. Se usa en botones primarios, estados de foco, y elementos de confianza. Transmite calma y conexión con la naturaleza.
- **Soft Mint** (#7DD4CC): Acento secundario para selecciones de texto (::selection), scroll progress, y detalles sutiles. No debe usarse en superficies grandes.

### Secondary
- **Worn Gold** (#B8A88A): Para separadores decorativos, acentos en hero oscuro, y detalles de lujo sutil. Su uso es ≤5% de cualquier pantalla.
- **Sage** (#A8A99E): Para bordes sutiles, fondos de credenciales, y elementos de soporte. Actúa como un gris cálido.

### Neutral
- **Warm Cream** (#F5F0E8): Fondo de página por defecto. Un blanco cálido con tinte terroso, nunca frío.
- **Parchment** (#FAF8F3): Superficie elevada para cards, paneles y secciones de contenido.
- **White Warm** (#FDFBF7): Fondo de navegación y elementos flotantes.
- **Deep Ink** (#2C2C2C): Color de texto principal. Alto contraste (≥4.5:1) sobre todos los fondos claros.
- **Aged Taupe** (#9E9488): Texto secundario, metadatos, etiquetas, y detalles. Usar con cuidado para mantener legibilidad.
- **Line** (#E5DFD4): Bordes, divisores, y líneas de formulario. Siempre sutil.

### Named Rules
**The Earth Voice Rule.** El verde musgo (Moss Earth) es la única voz de color en la interfaz. Su rareza es el punto: usado en ≤10% de cualquier pantalla, siempre con propósito.

**The Warmth First Rule.** Nunca usar un fondo neutro frío (gris puro, blanco azulado) cuando un fondo cálido (Warm Cream, Parchment) puede hacer el trabajo. La calidez no es decorativa, es funcional.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Character:** Una pareja editorial con contraste claro. El serif italic aporta elegancia y calidez humana al display; el sans humanista garantiza legibilidad y cercanía en el cuerpo. No hay tercera fuente.

### Hierarchy
- **Display** (300, clamp(2.6rem, 7vw, 5.5rem), 1.08): Hero headlines y títulos de sección. Siempre italic, siempre con letter-spacing ≥ -0.02em. Nunca usar en párrafos.
- **Headline** (300, clamp(2.6rem, 6vw, 4.8rem), 1.08): Títulos de sección secundarios. Mismo tratamiento que Display.
- **Title** (300, clamp(1.28rem, 2vw, 1.55rem), 1.1): Títulos de cards, sub-secciones, y valores. Puede ser italic o romano según contexto.
- **Body** (300, 16px, 1.7): Todo el texto corrido. Máximo 65–75ch por línea. Nunca usar en fondos oscuros sin ajustar peso a 400.
- **Label** (400, max(0.58rem, 10px), 1.4, letter-spacing 0.3em, uppercase): Eyebrows, metadatos, botones, y navegación. Siempre rastreado, siempre uppercase.

### Named Rules
**The Italic Rule.** El display serif italic es la firma tipográfica del sistema. Usarlo en títulos de sección y hero. No usar italic en body text ni en labels.

**The Tracked Label Rule.** Los labels (eyebrows, botones, nav) siempre usan letter-spacing ≥ 0.2em y uppercase. Esto los distingue del texto corrido y añade un aire de editorial.

## 4. Elevation

El sistema usa una estrategia híbrida: **tonal layering como base, sombras como respuesta a estado**. Las superficies en reposo son planas; la profundidad se crea mediante gradientes radiales, overlays de textura, y variaciones de fondo (Warm Cream → Parchment). Las sombras aparecen solo en hover o elevación activa (botones, cards, navegación flotante), y son siempre difusas, nunca duras.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 4px 16px rgba(44, 44, 44, 0.06)`): Hover sutil en botones y cards. Difuso y casi imperceptible.
- **Ambient Medium** (`box-shadow: 0 12px 30px rgba(44, 44, 44, 0.12)`): Hover elevado en botones primarios. Aporta lift sin pesadez.
- **Hover Lift** (`box-shadow: 0 8px 24px rgba(86, 100, 90, 0.18)`): Elevación para la navegación flotante (island) y elementos de confianza. Tintada hacia Moss Earth para coherencia cromática.

### Named Rules
**The Flat-By-Default Rule.** Las superficies en reposo son planas. Las sombras son una respuesta, no una decoración. Si una card tiene sombra sin hover, reescribirla.

**The Diffuse Shadow Rule.** Las sombras deben ser tan suaves que el usuario sienta el lift antes de ver la sombra. Nunca usar sombras oscuras duras (rgba(0,0,0,0.3) o mayores). Si la sombra se ve como una línea, es demasiado dura.

## 5. Components

### Buttons
- **Shape:** Cápsula (border-radius: 999px) para el primario; sin radio para el ghost.
- **Primary:** Fondo Moss Earth (#6B7D6A), texto blanco, padding 16px 36px, tipografía Label (uppercase, tracked). Sin borde. Un pseudo-elemento ::before con transform scaleX anima el hover desde la derecha.
- **Hover / Focus:** El pseudo-elemento se expande con background #2C2C2C (Deep Ink), el botón se eleva 2px con shadow Ambient Medium. Transición: 0.5s cubic-bezier(0.16, 1, 0.3, 1).
- **Ghost:** Sin fondo, texto Deep Ink, solo un underline animado (::after) en hover. Tipografía Label. Usado para CTAs secundarios en hero.

### Chips / Credentials
- **Style:** Fondo con gradiente linear (blanco semi-transparente a crema), borde 1px solid #A8A99E (Sage) al 18% de opacidad, border-radius 999px.
- **Typography:** Label (max(0.58rem, 10px), uppercase, tracked).
- **State:** Sin interacción; son informativos.

### Cards / Value Cards
- **Corner Style:** Sin radio (0px). Bordes horizontales (border-block) de 1px solid Sage al 16%.
- **Background:** Gradiente radial + linear de Parchment a blanco semi-transparente.
- **Shadow Strategy:** Ninguna en reposo. En hover: translateY(-0.18rem) + border-color más oscuro + background más opaco. Nunca sombra en reposo.
- **Border:** Solo bordes horizontales. Nunca bordes verticales gruesos como acento.
- **Internal Padding:** clamp(1.3rem, 2.5vw, 1.85rem).

### Inputs / Fields
- **Style:** Fondo transparente, sin borde completo, solo border-bottom 1px solid Line (#E5DFD4). Sin radio.
- **Focus:** Border-bottom cambia a Sage Dark (#8A8B7E). El label flota hacia arriba con una transición suave.
- **Error / Disabled:** No definido explícitamente en el sistema actual. Usar borde rojo sutil para error y opacidad reducida para disabled.

### Navigation
- **Style:** "Chameleon Island". Transparente sobre hero (texto claro), luego se convierte en isla de cristal cálido (background: rgba(251, 248, 241, 0.82), backdrop-filter: blur(14px) saturate(1.1)) al hacer scroll.
- **Typography:** Label (max(0.58rem, 10px), uppercase, tracked) para links. Mark: serif italic para el logo.
- **States:** Hover en links → underline animado con track-fill. Active → mismo tratamiento. Mobile: overlay full-screen oscuro con links grandes serif italic.
- **Mobile:** Trigger hamburguesa con dos líneas que rotan a X. Island se reduce a tamaño mínimo.

### Hero CTA (Signature Component)
- **Style:** Un botón sólido en el hero sobre fondo oscuro. Fondo semi-transparente crema (rgba(245, 240, 232, 0.08)), borde 1px solid Worn Gold al 20%, border-radius 999px. Texto crema claro, tipografía Label.
- **Hover:** Fondo crema más opaco, borde más intenso, texto blanco. Sutil y seguro.

## 6. Do's and Don'ts

### Do:
- **Do** usar Warm Cream (#F5F0E8) como fondo de página por defecto. Nunca blanco puro (#FFFFFF).
- **Do** usar Cormorant Garamond italic en todos los títulos de sección y hero. Es la firma del sistema.
- **Do** usar letter-spacing ≥ 0.2em en todos los labels, botones, y navegación. Es el sello editorial.
- **Do** usar gradientes radiales suaves y overlays de textura (grain, paper) para crear profundidad sin sombras.
- **Do** respetar `prefers-reduced-motion: reduce` con transiciones instantáneas o crossfade.
- **Do** mantener el contraste de texto de cuerpo ≥ 4.5:1 contra fondos claros. Si Deep Ink sobre Warm Cream es 4.5:1, Aged Taupe sobre Warm Cream puede ser insuficiente; usar con cuidado.
- **Do** usar border-radius 999px para botones y pills; 0px para cards y value cards; 12px 2px 12px 2px (organic) solo para elementos decorativos específicos.

### Don't:
- **Don't** usar blanco puro (#FFFFFF) como fondo de sección. Siempre un tono cálido (Warm Cream, Parchment, White Warm).
- **Don't** usar glassmorphism como decoración. El blur en la navegación tiene un propósito funcional (transición sobre hero); en cualquier otro lugar es prohibido.
- **Don't** usar gradient text (`background-clip: text`). El énfasis tipográfico se logra con peso, tamaño, y italic. Nunca con gradientes.
- **Don't** usar border-left o border-right > 1px como acento en cards o listas. Si necesitas un acento, usa un fondo tintado, un icono, o un número.
- **Don't** usar el patrón hero-metric (número grande + label pequeño). Este es un sitio de calma, no un dashboard SaaS.
- **Don't** usar cards idénticas con icono + título + texto repetidos en loop. Cada sección debe tener una identidad visual propia.
- **Don't** usar cejas en mayúsculas (eyebrows) sobre cada sección. Uno o dos por página como guía editorial están bien; una en cada sección es AI grammar.
- **Don't** usar números de sección (01, 02, 03) como scaffolding por defecto. Los números ganan su lugar cuando la secuencia realmente importa (proceso de 3 pasos, timeline). En otras secciones, usen identificadores visuales distintos.
- **Don't** usar tipografía sans-serif en títulos de display. El contraste serif/sans es el eje tipográfico del sistema.
- **Don't** usar sombras oscuras duras (rgba(0,0,0,0.3) o mayores). Las sombras deben ser difusas, casi imperceptibles.
- **Don't** usar fondos crema/beige sin criterio como el "AI default" de 2026. La calidez aquí es intencional, no un default de entrenamiento.
- **Don't** usar iconografía médica o clínica (cruces, estetoscopios, batas blancas). La iconografía es orgánica, minimalista, y SVG hand-drawn.
