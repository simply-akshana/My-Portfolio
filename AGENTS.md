# AGENTS.md — AI CODING & DESIGN AGENT GUIDELINES

This document governs the behavior and decision-making of any AI coding assistant, pair programmer, or automated agent working on this repository (`porto-aksan`).

---

## 1. MANDATORY FIRST STEP
Before proposing or making any UI/UX or content change, **you MUST read and adhere to `DESIGN_SYSTEM.md`**.
All design decisions must follow the primary principle:
> **Purpose → UX → Hierarchy → System → Aesthetics**
> *(Never: Trend → Decoration → Effects → Cards → UI)*

---

## 2. STRICT BEHAVIORAL CONSTRAINTS

### A. Zero Toleration of AI-Slop
* **NO excessive glassmorphism, blur, or frosted overlays.**
* **NO neon glow, glowing drop-shadows, or glowing borders.**
* **NO gradient headlines or random gradient text.** Use solid, high-contrast typography.
* **NO card-for-everything layouts.** Rely on editorial whitespace, typographic scale, and subtle hairline dividers before reaching for a card container.
* **NO giant pill buttons or hyper-rounded corners.** Keep border radii disciplined (6px to 14px maximum).
* **NO decorative blobs, floating geometric shapes, or random particle effects.**

### B. Truthful Content & Zero Hallucination
* **NEVER invent or inflate metrics** (e.g., "5+ Tahun", "40+ Proyek", "99% Client Satisfaction"). If verified quantitative data does not exist, omit statistics entirely.
* **NEVER fabricate professional titles or company names** (e.g., "Senior Frontend Engineer leading 6 developers at TechNova"). Represent Aksan's experience truthfully and proportionally.
* **NEVER invent client testimonials or fake endorsements.**
* **NEVER use placeholder or dummy contacts** (e.g., `example.com`, fake phone numbers). Use verified contact information (`aksan.zulkarnain@gmail.com`).
* **NEVER use arbitrary skill percentage bars** (e.g., "React 95%"). Group skills by real-world workflow (`Core`, `Working With`, `Exploring & Tools`).
* **Categorize projects honestly**: Label each project accurately as `Personal Project`, `Client Work`, `Concept`, or `Experimental`.

### C. Design Discipline & Systems Thinking
* **Preserve established tokens**: Always reference the color, typography, spacing, and radius tokens defined in `DESIGN_SYSTEM.md`.
* **Editorial over SaaS**: This is a personal portfolio of a craftsperson, not a generic B2B SaaS dashboard. Emphasize editorial typography, calm asymmetry, clear problem statements, and real engineering choices.
* **Responsive Composition**: Do not simply shrink desktop layouts. Ensure mobile compositions are intentionally designed with comfortable touch targets (44×44px minimum) and legible typography.
* **Accessibility**: Always test contrast ratios (WCAG AA compliant), maintain visible focus states, and ensure semantic HTML.

---

## 3. CHANGE VERIFICATION CHECKLIST
Before completing any task, every agent must answer:
1. Did I read `DESIGN_SYSTEM.md` before changing styles?
2. Does every added element serve a clear functional purpose?
3. Did I introduce any AI-slop (glow, random cards, buzzwords)?
4. Is all copy concrete, human, and believable?
5. Does the portfolio authentically represent Aksan Zulkarnain?
