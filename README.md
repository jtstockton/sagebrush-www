# Sagebrush Mesh Documentation

Community documentation for Sagebrush Mesh, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed on Cloudflare Pages.

## Contributing

We welcome contributions from the community! There are two ways to contribute:

### Quick Edits (Non-Technical)

1. Visit any page on the documentation site
2. Click the edit icon (✏️) in the top right
3. Make your changes directly in GitHub's editor
4. Submit a pull request
5. A maintainer will review and merge your changes

### Local Development (Technical)

For more extensive changes, you can run the documentation locally:

```bash
# Clone the repository
git clone https://github.com/jtstockton/sagebrush-www.git
cd sagebrush-www

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
mkdocs serve

# Build static site
mkdocs build
```

The development server will be available at http://127.0.0.1:8000 with live reloading.

## Deployment

This site is automatically deployed to Cloudflare Pages when changes are merged to the `main` branch.

### Cloudflare Pages Configuration

**Build settings:**
- **Build command:** `pip install -r requirements.txt && mkdocs build`
- **Build output directory:** `site`
- **Root directory:** `/`

**Note:** Initial builds may take 3-5 minutes as Cloudflare Pages compiles Python. Subsequent builds with no dependency changes should be faster due to caching.

## Project Structure

```
sagebrush-www/
├── docs/              # Markdown documentation files
│   ├── index.md       # Homepage
│   └── ...            # Other pages
├── mkdocs.yml         # MkDocs configuration
├── requirements.txt   # Python dependencies
└── README.md          # This file
```

## License
CC BY 4.0
