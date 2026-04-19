# 🌐 FemtoClaw Project Pages (`femtoclaw.github.io`)

This repository contains the source code and assets for the **FemtoClaw Project's** secondary web presence, hosted via GitHub Pages (https://femtoclaw.github.io). While the main project site is located at [femtoclaw.org](../femtoclaw.org), this site serves as a lightweight, developer-focused portal and an entry point for users discovering the project directly through GitHub.

---

## 🎨 Unified Design System: Industrial Drafting

This site strictly adheres to the FemtoClaw **"Industrial Technical Drafting"** design system to ensure a seamless experience for users navigating between different project domains.

### Key Visual Standards:
- **Atmosphere**: Uses the standard `40px` technical drafting grid on a high-contrast `#FDFDFD` background.
- **Typography**: Employs **'Syne'** for authoritative section headers and **'IBM Plex Mono'** for all technical content and documentation snippets.
- **Color Invariants**: Utilizes **Signal Orange** (`#FF4D00`) for interaction highlights and **Deep Charcoal** (`#1A1A1B`) for structural borders and primary text.

---

## 🏗️ Site Architecture

The repository is structured as a zero-dependency, static frontend to ensure maximum security and instant page loads.

### Component Map:
- `/index.html`: The primary landing page, featuring a high-impact hero section and direct links to the core repositories.
- `/assets/css/style.css`: The portable version of the FemtoClaw drafting design system.
- `/assets/js/main.js`: Handles lightweight terminal-style interactions and site-wide theme persistence.
- `/assets/img/`: Localized versions of the official branding assets.

---

## 🚀 Purpose & Content Strategy

Unlike the comprehensive `femtoclaw.org`, which contains full guides and press kits, the GitHub Pages site focuses on:

1.  **Fast Discovery**: A concise overview of the "Execution Authority" model for users who land here from the organization profile.
2.  **Repo Navigation**: Direct, one-click access to the `femtoclaw-core`, `femtoclaw-spec`, and `femtoclaw-skills` repositories.
3.  **Terminal Simulation**: Implements high-fidelity terminal effects to demonstrate the deterministic nature of the FemtoClaw control loop.
4.  **Mirror Documentation**: Serves as a reliable mirror for critical quickstart information in case of primary domain issues.

---

## 🛠️ Maintenance & Workflows

### Deployment
This site is automatically deployed by GitHub Actions whenever a change is merged into the `main` branch. 
- **Validation**: Every deployment undergoes an automated accessibility check (WCAG AA) and link verification.

### Synchronizing Designs
When the core design system in `femtoclaw-brand` or `femtoclaw.org` is updated, the changes MUST be back-ported to this repository to maintain brand integrity.
- **Priority**: Always update `style.css` from the canonical source in the brand repository.

---

## 🤝 Community Involvement

As a public-facing entry point, we encourage the community to help improve the site's clarity and developer experience.
- **Feedback**: Open an issue if any technical details are outdated or if the drafting aesthetic is compromised by browser-specific rendering issues.
- **Translations**: We are actively seeking community help to provide localized versions of the quickstart guide on this portal.

---

## 📄 License
The website source and content are licensed under **Apache 2.0**. Brand assets are subject to the organization's central branding guidelines.

Copyright © 2026 FemtoClaw Project.
