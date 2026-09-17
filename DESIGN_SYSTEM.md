# DESIGN SYSTEM — PORTO AKSAN

## Three-Layer Design Architecture & Anti-AI-Slop Constitution

This design system defines the philosophy, design tokens, component standards, and project-specific constraints for the personal portfolio of **Aksan Zulkarnain**.

---

# LAYER 1 — PERMANENT DESIGN PHILOSOPHY

### 1. Purpose Before Decoration
Every visual element must justify its existence. Before adding or modifying an element, ask:
> *"What purpose does this element serve?"*

If an element does not directly contribute to:
* Usability & comprehension
* Clear visual hierarchy
* Intuitive navigation
* Feedback for user actions
* Authentic personal branding
* Accessibility across diverse devices and users

...then it must be removed. Whitespace is a deliberate, structural design choice, not an empty void waiting to be filled with decorative clutter.

### 2. UX Before Aesthetics
A visually flashy interface with poor usability is a failed interface.
Prioritize:
1. User goals and information access
2. Information architecture & hierarchy
3. Interaction clarity and immediate feedback
4. Readability and typographic rhythm
5. Accessibility & semantic structure
6. Systematic aesthetics

Aesthetic choices must reinforce comprehension rather than distract from it.

### 3. Designer First, AI Second
AI is an execution partner, not the arbitrary arbiter of design trends.
* AI must not blindly generate default patterns common in AI templates.
* AI must execute the human's product vision with discipline, rigor, and restraint.
* AI must identify inconsistencies, respect existing tokens, and challenge unnecessary complexity.

### 4. Zero Tolerance for "AI-Slop"
The following patterns are forbidden when used automatically or without functional justification:
* Excessive glassmorphism, multi-layer blur, and frosted backdrop abuse
* Neon glow effects, glowing borders, and pulsating halos
* Gradient text used merely as decoration
* Arbitrary card nesting ("Card → Card → Card → Card")
* Giant pill-shaped buttons and hyper-rounded cards everywhere
* Floating geometric blobs and random particle backgrounds
* Arbitrary percentage skill bars (e.g., "React: 95%")
* Unsubstantiated metrics and fake statistics (e.g., "99% Client Satisfaction", "40+ Projects")
* Generic buzzwords ("Clean & Scalable", "Solusi Bisnis Nyata", "Modern & Elegan")
* Generic stock photography masquerading as real proprietary case studies

### 5. Intentional Visual Hierarchy
Information hierarchy must be communicated through:
* Typographic scale and weight contrast
* Proximity and whitespace rhythm
* Position and layout grouping
* Restrained use of a single accent color

When everything is loud, bold, or glowing, nothing is emphasized.

### 6. Accessibility & Inclusivity
* Minimum WCAG AA color contrast across both Light and Dark modes.
* Visible, high-contrast focus indicators on all interactive elements.
* Touch target size of at least 44×44px on mobile devices.
* Clean semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Never use color as the sole indicator of state or meaning.
* Full respect for `prefers-reduced-motion`.

---

# LAYER 2 — VISUAL DESIGN SYSTEM & TOKENS

### 1. Color System
The palette is built on an **Editorial × Technical** foundation: deep obsidian for dark mode, crisp warm paper for light mode, and a single restrained indigo/cobalt accent.

#### Dark Mode Tokens
* `--bg-canvas`: `#09090b` (Deep obsidian black)
* `--bg-surface`: `#121215` (Elevated surface)
* `--bg-surface-subtle`: `#18181c` (Secondary card / tag surface)
* `--text-primary`: `#fafafa` (High-contrast white)
* `--text-secondary`: `#a1a1aa` (Zinc-400, clear body copy)
* `--text-muted`: `#71717a` (Zinc-500, metadata & labels)
* `--border-subtle`: `#27272a` (Zinc-800, 1px structural hairlines)
* `--border-medium`: `#3f3f46` (Zinc-700, interactive borders)
* `--accent-primary`: `#6366f1` (Indigo-500, intentional focus/action)
* `--accent-hover`: `#818cf8` (Indigo-400)
* `--accent-subtle`: `rgba(99, 102, 241, 0.12)`

#### Light Mode Tokens
* `--bg-canvas`: `#fbfbfb` (Warm architectural paper)
* `--bg-surface`: `#ffffff` (Clean white surface)
* `--bg-surface-subtle`: `#f4f4f5` (Zinc-100, secondary surface)
* `--text-primary`: `#09090b` (Zinc-950, crisp editorial black)
* `--text-secondary`: `#3f3f46` (Zinc-700, comfortable reading)
* `--text-muted`: `#71717a` (Zinc-500, secondary specs)
* `--border-subtle`: `#e4e4e7` (Zinc-200, 1px subtle divider)
* `--border-medium`: `#d4d4d8` (Zinc-300, input borders)
* `--accent-primary`: `#4f46e5` (Indigo-600, high readability)
* `--accent-hover`: `#4338ca` (Indigo-700)
* `--accent-subtle`: `rgba(79, 70, 229, 0.08)`

### 2. Typography System
* **Display & Body Font**: `Plus Jakarta Sans` / `Inter`, `-0.02em` to `-0.03em` tracking on headings.
* **Mono & Spec Font**: `JetBrains Mono`, used strictly for index numbers (`01 /`), dates, metadata labels, and code.

#### Typographic Scale
* **Display / Hero**: `3rem` to `4.25rem` (`48px` - `68px`), `font-weight: 800`, line-height `1.1`
* **H1 / Section Titles**: `2rem` to `2.75rem` (`32px` - `44px`), `font-weight: 700`, line-height `1.2`
* **H2 / Project Titles**: `1.25rem` to `1.75rem` (`20px` - `28px`), `font-weight: 600`, line-height `1.3`
* **Body / Narrative**: `1rem` to `1.125rem` (`16px` - `18px`), `font-weight: 400`, line-height `1.65`
* **Metadata / Tags**: `0.75rem` to `0.8125rem` (`12px` - `13px`), `font-mono`, `letter-spacing: 0.05em`

### 3. Spacing Rhythm
* `--space-xs`: `4px`
* `--space-sm`: `8px`
* `--space-md`: `16px`
* `--space-lg`: `24px`
* `--space-xl`: `32px`
* `--space-2xl`: `48px`
* `--space-3xl`: `64px`
* `--space-4xl`: `96px`

### 4. Radii Scale
Never use 30px+ pill radii on regular containers.
* `--radius-sm`: `6px` (Tags, chips, small badges)
* `--radius-md`: `10px` (Buttons, inputs, inner components)
* `--radius-lg`: `14px` (Cards, images, dialogs)

### 5. Shadows & Elevation
* **Subtle**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
* **Surface**: `0 4px 12px 0 rgba(0, 0, 0, 0.08)`
* **Modal**: `0 20px 40px -10px rgba(0, 0, 0, 0.35)`
* *No glowing colored drop-shadows.*

### 6. Motion & Transitions
* Transition duration: `150ms` to `250ms`.
* Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (snappy, physical ease-out).
* Every animation must communicate state, feedback, or spatial context.

---

# LAYER 3 — PROJECT-SPECIFIC RULES (PORTO AKSAN)

### 1. Portfolio Identity: Editorial × Technical × Personal
* **Voice**: Direct, humble, articulate, and technical without pompous jargon.
* **Persona**: Aksan Zulkarnain — a disciplined software developer & interface builder. He cares about code that remains understandable, interfaces that feel natural, and systems built with longevity in mind.
* **Tone**: Evidence over adjectives. Show the problem, role, technical approach, and key learnings rather than boasting.

### 2. Information Architecture
The site follows a deliberate hierarchy:
1. **Identity (Hero)**: Who is Aksan, what he builds, his focus, and how to reach him.
2. **Selected Work**: 3–4 deep case studies with honest project categorization.
3. **Thinking & Craft (About)**: Personal engineering and design philosophy presented in an editorial spread (no generic 3 cards).
4. **Capabilities (Tech Stack)**: Clear categorization (`Core`, `Working With`, `Exploring & Tools`) without arbitrary percentage bars.
5. **Journey (Experience)**: Grounded timeline of actual experience and learning.
6. **Contact (Closing)**: Direct, dignified closing with verified contact details.

### 3. Content Rules & Anti-Placeholder Mandate
* Real email only: `aksan.zulkarnain@gmail.com`.
* No `example.com` or dummy phone numbers.
* No fake companies or inflated job titles.
* Project categories must be truthful: `Personal Project`, `Client Work`, `Concept`, or `Experimental`.

### 4. Self-Critique Checklist Before Shipping
1. Does every major element have an undeniable purpose?
2. Is the visual hierarchy immediately obvious?
3. Does the copy sound like a real human builder or an AI template?
4. If all decorative elements were stripped away, would the typography and layout still feel strong and coherent?
5. Is the mobile experience intentionally composed, not just shrunken desktop?
