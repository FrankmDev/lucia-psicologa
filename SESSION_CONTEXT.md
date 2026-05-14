Philosophy.astro is a section component with a dark cinematic background image, premium editorial layout, and sophisticated micro-interactions.

## Key Technical Details

### Dependencies
- Imports: `SectionHeader`, `GrainOverlay`, `FloatOrb`, `InkBlob`, `PageNumber`.
- Uses Unsplash for background and portrait images.

### Structure
- **Transition element (`phi-fade-in`)**: Pseudo-element at the top with a gradient from the previous section's color (`var(--cream-warm)`) to transparent, covering the first `280px`. This replaces the `SectionDivider` component and creates a smooth organic transition.
- **Background layers**:
  - `phi-bg-img`: Full-bleed background image with `brightness(0.35)`, `grayscale(25%)`, and `phi-breathe` animation.
  - `phi-overlay`: Radial and linear gradients for depth.
  - `phi-vignette`: Heavy dark vignette for cinematic effect.
  - `phi-noise`: Subtle noise texture for grain.
- **Decorative elements**: `GrainOverlay`, `FloatOrb`s (4), `InkBlob`s (3), SVG botanicals, and a watermark typography.
- **Editorial Hero (`.phi-editorial`)**: Asymmetric 2-column grid (`1.1fr 1fr`).
  - Left: `SectionHeader` (light variant), lead paragraph, decorative line with glow.
  - Right: Portrait image with `aspect-ratio: 3/4`, double border frame, and animated L-shaped corner accents.
- **Values Grid (`.phi-values-grid`)**: 3-column grid with staggered vertical rhythm (`0`, `2.5rem`, `5rem` top offsets).
  - Each card uses glassmorphism (`backdrop-filter: blur(16px)`), animated gradient border on hover, and a shine effect.
- **Quote Block (`.phi-quote-block`)**: SVG quotation marks, animated separator lines, and an editorial signature line.

### CSS Architecture
- The file is self-contained with `<style is:global>`.
- Heavily uses CSS custom properties (`var(--ease-out-expo)`, color tokens).
- Key animations: `phi-reveal` (fade-up), `phi-breathe` (slow scale/brightness), `phi-shimmer` (shine), `phi-slide-right` (line expansion).
- Parallax effects: Mouse parallax on content (`mousemove` listener) and scroll parallax on background (`requestAnimationFrame`).

### Interactions
- **IntersectionObserver** is used for:
  - Reveal animations on content (`phi-reveal` class).
  - Quote line expansion.
  - Caption reveal.
  - Values connector (a decorative line connecting the cards).
- **Hover states**:
  - Image: Corner accents expand outward.
  - Cards: Lift (`translateY(-8px)`), gradient border, glow, and shine effect.

### Responsive Behavior
- Desktop (>1024px): Full editorial layout with 2-column hero and 3-column values grid.
- Tablet (768px-1024px): Hero remains 2-column, values grid becomes 1-column.
- Mobile (<768px): Single column. Values cards switch to horizontal layout (icon + text inline). Decorative elements (botanicals, watermark) are hidden.

### Context
- This section immediately follows `Servicios` in `index.astro`.
- There is no `SectionDivider` between `Servicios` and `Philosophy`; the transition is handled by `phi-fade-in`.
- The divider *after* Philosophy transitions to `var(--parchment)` for the next section (`Proceso`).

## Usage
<Philosophy /> is placed directly after <Servicios /> in src/pages/index.astro.
