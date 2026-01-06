# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a community-driven documentation website for Sagebrush Mesh, built with MkDocs Material and deployed on Cloudflare Pages. The site is designed to be wiki-like, allowing community members to propose changes via GitHub pull requests.

## Development Commands

### Setup
```bash
# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Development
```bash
# Start local development server with live reload at http://127.0.0.1:8000
mkdocs serve

# Build static site to site/ directory
mkdocs build

# Build with strict mode (fails on warnings)
mkdocs build --strict
```

### Testing
```bash
# Validate the build (used in CI)
mkdocs build --strict
```

## Architecture

### Directory Structure
- `docs/` - All markdown documentation files
- `mkdocs.yml` - Main configuration file for site structure, theme, and plugins
- `requirements.txt` - Python dependencies
- `.github/workflows/` - GitHub Actions for PR validation

### Key Components

**MkDocs Material Theme**: Provides the UI with features like:
- Light/dark mode toggle
- Built-in search
- Mobile-responsive navigation
- "Edit this page" links on every page

**Content Management**:
- All content is in Markdown files in the `docs/` directory
- Navigation structure is defined in `mkdocs.yml` under the `nav:` section
- Each page automatically gets an "edit" button linking to GitHub

**Plugins**:
- `search` - Full-text search
- `git-revision-date-localized` - Shows last updated dates from git history
- `minify` - Minifies HTML for production

### Deployment

**Cloudflare Pages** automatically builds and deploys from the `main` branch:
- Build command: `pip install -r requirements.txt && mkdocs build`
- Build output directory: `site`
- Environment: Python 3.11

**GitHub Actions** validates builds on pull requests to catch errors before merge.

## Editing Content

### Adding a New Page
1. Create a new `.md` file in `docs/`
2. Add the page to the `nav:` section in `mkdocs.yml`
3. Content will be automatically included in search and navigation

### Modifying Navigation
Edit the `nav:` section in `mkdocs.yml`. Structure supports:
- Top-level pages
- Tabbed sections
- Nested subsections

### Theme Customization
Modify the `theme:` section in `mkdocs.yml` for:
- Color schemes (primary/accent colors)
- Feature flags (navigation behavior, code copy, etc.)
- Icons and branding

### Markdown Extensions
Available extensions (configured in `mkdocs.yml`):
- Code highlighting with copy button
- Admonitions (note/warning/tip boxes)
- Task lists
- Tables
- Tabbed content
- Details/summary (collapsible sections)

## Repository Configuration

**Repository**: https://github.com/jtstockton/sagebrush-www
**License**: CC BY 4.0 (Creative Commons Attribution 4.0 International)

**Edit Links**: The "Edit this page" button on each page is configured via:
- `repo_url` in `mkdocs.yml` - Points to GitHub repository
- `edit_uri` in `mkdocs.yml` - Defaults to `edit/main/docs/`
