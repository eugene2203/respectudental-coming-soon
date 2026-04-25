# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for Respect U Dental Lab - a "coming soon" website with contact information and branding. The site is a single-page HTML file with embedded CSS, using no build tools or frameworks.

## Architecture

- **Single HTML file**: `index.html` contains all markup, styles, and structure
- **Static assets**: WebP images for logo and background
- **External dependencies**: Google Fonts (Inter) and Font Awesome icons loaded via CDN
- **No build process**: Direct deployment of HTML file

## Design System

Color palette defined in CSS variables:
- `--primary-color: #9BCDCB` (mint from logo)
- `--accent-color: #92C18D` (green from logo)
- `--dark-blue: #2c3e50`
- `--light-bg: #f8fbfb`

## Development

To preview locally, open `index.html` in a browser or use a simple HTTP server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

## Deployment

This is a static site - deploy by uploading all files to any web server or static hosting service (GitHub Pages, Netlify, Vercel, S3, etc.). No build step required.

## Content Structure

- Logo and branding at top
- "Launching Soon" status badge
- Company name and slogan
- Contact information (currently only email is active, phone and address are commented out)
- Social media links (placeholders with # hrefs)

## Making Changes

When editing:
- All styles are embedded in the `<style>` tag in the HTML head
- Contact info is in the `.contact-info` grid section
- Commented-out sections (address, phone) can be uncommented when ready
- Social links need actual URLs replacing the `#` placeholders
- Background image can be switched between `background-v1.webp` and `background-v2.webp` (currently using v2)