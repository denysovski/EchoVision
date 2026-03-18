# NOVA PRO X

Premium Audio Product Experience - Concept Landing Interface

A modern premium landing page for the Nova Pro X headphones, designed around a cinematic product-first narrative and high-end hardware storytelling.

The interface blends bold editorial typography, layered depth composition, and smooth motion choreography to communicate performance, precision, and material quality.

The experience is built to feel immersive and technical while remaining fully responsive and usable across desktop and mobile.

## Development Approach

This project was built with an AI-assisted workflow using GitHub Copilot inside VS Code, enabling rapid iteration on:

- smooth scrolling behaviour and transition timing with Lenis
- modular section architecture with reusable React components
- scroll-driven animation choreography using GSAP and ScrollTrigger
- interaction patterns including expandable sidebar navigation, floating social controls, and progressive reveal sequences
- staged page-load entrance timing for headline, CTA, and hero-product layering

The process prioritized speed without sacrificing design clarity, code readability, or maintainability.

## Visual Design & Theme

The visual language uses a strict dark premium palette with deep blacks, layered grays, and violet accent energy, combined with high-contrast typography and intentional negative space.

The theme direction emphasizes:

- abstract premium audio minimalism
- editorial spacing with asymmetrical visual composition
- material-driven product tone inspired by industrial hardware design

Subtle glow layers, cinematic gradients, and restrained motion cues guide attention without overwhelming the content.

## Hero Section

The landing hero establishes product identity immediately with oversized typography, staged motion timing, and foreground headphone composition.

It includes:

- split headline reveal for Sound / Beyond with accelerated timing
- product-positioning statement and conversion-oriented CTA controls
- delayed hero-headphone entrance after text lockup load
- layered foreground product treatment with deep drop shadows and ambient glow
- atmospheric background orbs reacting to pointer movement

## Experience Structure

The page is organized into reusable narrative modules that scale as the product story grows:

- Philosophy - brand intent and development metrics
- Features - bento-style technical capability cards
- Materials - craft and component quality storytelling
- Colorways - interactive variant previews with swatch controls
- Praise - testimonial credibility section
- Specifications - structured technical breakdown table
- Footer CTA - preorder and launch-notification capture

## Motion & Interaction Highlights

- Lenis-powered smooth scrolling with tuned duration and wheel response
- staged page-load sequence for eyebrow, headline, CTA, stats, and delayed hero image
- scroll-triggered reveal timelines for Features, Materials, Colorways, Praise, and Specifications
- continuous highlight shimmer on the hero intro pill
- fixed social controls with fade-in/fade-out back-to-top behavior
- expandable left sidebar with smooth width interpolation and progressive label reveal

## Styling System

- Tailwind CSS utility architecture with custom tokens in `src/index.css`
- custom gradient utilities (`text-gradient-purple`, `bg-gradient-dark`, `bg-gradient-section`)
- component-level motion classes coordinated with GSAP timelines
- rounded card language and premium depth shadows for hardware emphasis
- typography stack tuned for contrast: display-forward headings with restrained body copy

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui foundation
- GSAP + ScrollTrigger
- Lenis (smooth scroll)
- Lucide React (iconography)

## Live Preview

```bash
npm install
npm run dev
```

Local preview:

- http://localhost:8080

Production build:

```bash
npm run build
npm run preview
```
