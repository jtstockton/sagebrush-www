# Contributing to Sagebrush Mesh Documentation

Thank you for your interest in contributing to the Sagebrush Mesh documentation! This is a community-driven project, and we welcome contributions from everyone.

## Ways to Contribute

### Quick Edits (Non-Technical)

The easiest way to contribute is to edit pages directly on GitHub:

1. Visit any page on the documentation site
2. Click the edit icon (✏️) in the top right corner
3. Make your changes in GitHub's web editor
4. Write a brief description of your changes
5. Click "Propose changes" to create a pull request
6. A maintainer will review and merge your changes

This method is perfect for:
- Fixing typos or grammatical errors
- Clarifying confusing sections
- Adding small pieces of information
- Updating outdated content

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
```

The development server will be available at http://127.0.0.1:8000 with live reloading.

## Content Guidelines

### Writing Style

- **Be clear and concise** - Use simple language that's easy to understand
- **Be accurate** - Verify technical information before adding it
- **Be helpful** - Focus on what users need to know to accomplish their goals
- **Be welcoming** - Remember that readers may be new to mesh networking

### Formatting

- Use **Markdown** for all content
- Include **headings** to structure your content (h2 `##`, h3 `###`, etc.)
- Use **code blocks** for commands, configuration files, and code snippets
- Add **links** to related pages and external resources
- Include **examples** when explaining technical concepts

### Examples

**Good code block:**
```bash
# Configure your node channel
meshtastic --set lora.region US
```

**Good link:**
See the [Getting Started](getting-started.md) guide for initial setup instructions.

**Good admonition (note/warning):**
!!! note
    Remember to save your configuration changes before rebooting.

## Creating New Pages

When adding a new page:

1. Create a `.md` file in the `docs/` directory
2. Add appropriate frontmatter and heading structure
3. Update `mkdocs.yml` to include the page in navigation
4. Test locally before submitting

## Pull Request Guidelines

### Before Submitting

- Test your changes locally with `mkdocs serve`
- Check for spelling and grammatical errors
- Verify all links work correctly
- Ensure images (if any) are properly sized and optimized

### Pull Request Description

Include in your PR description:
- **What** you changed
- **Why** you made the change
- **How** to test/verify the change (if applicable)

### After Submitting

- Respond to any review feedback promptly
- Make requested changes in new commits
- Don't force-push after creating the PR (unless requested)

## Reporting Issues

Found a problem but don't have time to fix it? Open an issue on GitHub:

1. Go to [GitHub Issues](https://github.com/jtstockton/sagebrush-www/issues)
2. Click "New Issue"
3. Describe the problem clearly
4. Include the page URL and any relevant screenshots

## Adding Technical Documentation

When documenting technical topics:

- **Start with the basics** - Don't assume prior knowledge
- **Include prerequisites** - List what users need before starting
- **Use screenshots** - Visual aids help clarify complex concepts
- **Provide troubleshooting** - Include common issues and solutions
- **Test your instructions** - Follow your own guide to ensure it works

## Community Standards

- Be respectful and constructive in all interactions
- Focus on improving the documentation, not criticizing contributors
- Welcome newcomers and help them learn
- Give credit where it's due

## Questions?

If you have questions about contributing:

- Join our [Discord](discord.md) community
- Open a [GitHub Discussion](https://github.com/jtstockton/sagebrush-www/discussions)
- Check existing [Issues](https://github.com/jtstockton/sagebrush-www/issues) for similar questions

## License

By contributing to this documentation, you agree that your contributions will be licensed under the [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license.

---

Thank you for helping make the Sagebrush Mesh documentation better for everyone!
