# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19.0.0 + Vite + Tailwind CSS 4.1.1. Single page application with smooth scrolling sections.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run lint       # Run ESLint code linting
npm run preview    # Preview production build locally
```

## Architecture

**Single Page Application Structure:**
- All sections rendered in App.jsx as one scrollable page
- No routing - uses anchor-based navigation between sections
- Section-based component organization under `components/sections/`

**Key Components:**
- `LoadingScreen.jsx` - Animated typewriter loading screen
- `RevealOnScroll.jsx` - Scroll animation utility using Intersection Observer
- `sections/` - Home, About, Projects, Contact sections
- `Navbar.jsx` + `MobileMenu.jsx` - Navigation with responsive design

**State Management:**
- Simple useState for component-local state only
- Loading state and mobile menu managed in App.jsx
- No global state management (Redux/Context)

**Styling Approach:**
- Tailwind CSS utility-first with custom animations in `index.css`
- Dark theme with green-cyan gradient accents
- Mobile-first responsive design

## Third-Party Services

**EmailJS Integration:**
- Contact form uses EmailJS for serverless email sending
- Configuration via environment variables (.env):
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID` 
  - `VITE_EMAILJS_PUBLIC_KEY`

## Development Notes

**Build Tool:** Vite 6.2.0 with React plugin and Tailwind CSS Vite plugin
**Code Quality:** ESLint with React hooks and refresh plugins (flat config format)
**Animation Patterns:** Custom CSS keyframes + Intersection Observer for scroll reveals
**Asset Organization:** Images in `src/assets/`, components in `src/components/`

When making changes, maintain the single-page scroll experience and ensure mobile responsiveness with Tailwind's responsive utilities.