# SuperAI Community Site

A polished, single-page React + Vite landing site for the SuperAI community at TCET. The project presents the community’s mission, focus areas, activities, leadership, and call-to-action experience in a visually rich and animated format.

## What this project does

This site is a modern marketing and community landing page for SuperAI. It is designed to:

- introduce the SuperAI community and its purpose
- highlight the values and impact of student-led AI learning
- display upcoming activities and events
- showcase leadership and committee members
- encourage visitors to join the community
- support light/dark theme switching
- provide a smooth animated experience using Framer Motion

## Tech stack

- React 19
- Vite 5
- TypeScript
- Framer Motion
- Phosphor Icons
- CSS custom properties for theming

## Project structure

```text
superAIsite/
├── app/
│   └── globals.css          # Global styling, layout, theme variables, animations, responsive behavior
├── components/
│   ├── reveal.tsx           # Reusable motion wrapper for scroll-triggered reveal animations
│   ├── site.tsx             # Main page component containing the complete landing page UI
│   └── theme-toggle.tsx     # Theme toggle button and persistence logic
├── data/
│   └── site.ts              # Static content data for stats, missions, focus areas, team, events, etc.
├── public/
│   └── images/              # Static image assets used by the homepage
├── src/
│   └── main.tsx             # React entry point that mounts the app into the DOM
├── index.html               # Vite HTML entry
├── package.json             # Scripts and dependencies
├── tsconfig.json            # TypeScript compiler config
├── vite.config.ts          # Vite configuration
└── README.md                # Project documentation
```

## How the system works

### 1. Application startup

When the app launches, Vite serves the page from [index.html](index.html), which loads [src/main.tsx](src/main.tsx). That file renders the main page component, [components/site.tsx](components/site.tsx), into the root container.

### 2. Main page composition

The main landing page is built inside [components/site.tsx](components/site.tsx). It is composed of several sections:

- hero section with branding and CTA buttons
- community stats section
- about section
- focus areas section
- what we do section
- community impact section
- upcoming activities roadmap
- team section
- join CTA banner
- footer

Each section is assembled from reusable UI blocks and content stored in [data/site.ts](data/site.ts).

### 3. Content source

The content for most of the visible text is centralized in [data/site.ts](data/site.ts). This file exports arrays and objects such as:

- stats
- missions
- focus
- faculty
- committee
- events
- journey
- calendar
- benefits

This keeps the content easy to update without rewriting the UI structure.

### 4. Styling and theming

All core styling lives in [app/globals.css](app/globals.css). It contains:

- theme variables for light and dark mode
- global resets and typography
- component styles for the hero, sections, cards, buttons, footer, and CTA block
- responsive rules for mobile and tablet layouts
- animated and hover-based visual treatments

The theme is controlled via the data-theme attribute on the root document element. The switch is handled by [components/theme-toggle.tsx](components/theme-toggle.tsx).

### 5. Animation behavior

The site uses Framer Motion through [components/reveal.tsx](components/reveal.tsx). This wrapper adds reveal-on-scroll animation to any child element. The main page uses it to animate cards, sections, and content blocks as they enter the viewport.

### 6. Theme switch flow

The theme toggle works like this:

1. On first render, [components/theme-toggle.tsx](components/theme-toggle.tsx) reads the saved theme from localStorage or falls back to the system preference.
2. It updates the document root theme attribute and color scheme.
3. The CSS in [app/globals.css](app/globals.css) responds to the data-theme value and changes colors automatically.
4. The selected theme is saved back to localStorage for the next visit.

## File-by-file explanation

### [index.html](index.html)

The root HTML file for Vite. It defines the mount point for React and loads the main app entry.

### [src/main.tsx](src/main.tsx)

This is the React bootstrap file. It imports the global stylesheet and the main page component and mounts it to the DOM.

### [components/site.tsx](components/site.tsx)

This is the heart of the application. It contains the complete landing page UI and uses the imported data from [data/site.ts](data/site.ts) to populate the sections.

It also contains:

- the header navigation
- the hero section
- the about section
- the focus network section
- the features/work section
- the impact cards section
- the upcoming activities roadmap
- the team section
- the join CTA section
- the footer

### [components/reveal.tsx](components/reveal.tsx)

A small wrapper around Framer Motion that enables animated reveal effects for sections and cards. It improves the user experience by introducing polished transitions without requiring repeated animation boilerplate.

### [components/theme-toggle.tsx](components/theme-toggle.tsx)

Responsible for the dark/light mode toggle. It handles initialization, rendering the button, and applying the theme to the document.

### [data/site.ts](data/site.ts)

A central content module that exports static data used throughout the site. These values are mapped into the UI and keep the page content separate from the layout logic.

### [app/globals.css](app/globals.css)

Contains all visual styling and responsive behavior. This file drives the look and feel of the website and defines the theme tokens used across components.

### [public/images](public/images)

Stores static image assets such as the SuperAI logo and hero visuals used by the homepage.

## Features overview

### Hero experience

The hero section creates a bold first impression with a dark immersive background, animated art, big typography, and action buttons that guide the user to the main sections.

### Community storytelling

The site explains who SuperAI is, what it stands for, and what problems it aims to solve through community-driven learning and innovation.

### Program and activity roadmap

The upcoming activities section acts like a roadmap of future events, including aptitude tests, peer sessions, alumni connects, prompt engineering challenges, competitive coding, expert talks, and innovation challenges.

### Impact metrics

The impact section highlights measurable community achievements such as workshops, training sessions, projects, students reached, leadership involvement, and industry engagement.

### Team and leadership section

The team area introduces faculty mentors and core committee members to reinforce the human side of the community.

### Call-to-action experience

The final CTA banner invites users to join the community and connects them through email.

### Theming

The site supports a seamless theme switcher between light and dark modes, improving readability and visual flexibility.

## Development commands

From the project root, you can run:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## How the components interact

The application follows a simple, clear flow:

1. [src/main.tsx](src/main.tsx) mounts the app.
2. [components/site.tsx](components/site.tsx) builds the page layout and section structure.
3. The page pulls its content from [data/site.ts](data/site.ts).
4. Animated behavior is applied through [components/reveal.tsx](components/reveal.tsx).
5. The global appearance is shaped by [app/globals.css](app/globals.css).
6. The theme toggle updates the document theme and CSS variables via [components/theme-toggle.tsx](components/theme-toggle.tsx).

This separation of responsibilities keeps the app relatively easy to maintain:

- content is centralized
- UI structure is isolated in one main component
- styling is controlled globally
- animation is reusable
- theming is independent and stateful

## Notes

The project is intentionally structured as a lightweight static experience rather than a complex multi-page application. That keeps it fast, simple, and easy to host while still feeling polished and modern.
