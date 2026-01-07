# Contact Us

Join the Sagebrush Mesh community! We use Discord for community discussions, support, and collaboration.

## Join Our Discord

To help protect our community from bots and spam, please complete the verification below to access the Discord invite link.

<div id="turnstile-container">
  <div class="cf-turnstile" data-sitekey="0x4AAAAAACK9BM1Z30LotBnK" data-callback="onTurnstileSuccess"></div>
</div>

<div id="discord-link" style="display: none; margin-top: 20px; padding: 15px; background-color: var(--md-code-bg-color); border-radius: 5px;">
  <p><strong>✓ Verification successful!</strong></p>
  <p id="discord-link-content">Verifying...</p>
</div>

<div id="error-message" style="display: none; margin-top: 20px; padding: 15px; background-color: #ffebee; border-radius: 5px; color: #c62828;">
  <p><strong>⚠ Verification failed</strong></p>
  <p>Please try again or contact us through one of the other methods below.</p>
</div>

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script>
// Reset page state when navigating to this page
function resetPageState() {
  const turnstileContainer = document.getElementById('turnstile-container');
  const discordLinkDiv = document.getElementById('discord-link');
  const errorDiv = document.getElementById('error-message');

  if (turnstileContainer) {
    turnstileContainer.style.display = 'block';
  }
  if (discordLinkDiv) {
    discordLinkDiv.style.display = 'none';
  }
  if (errorDiv) {
    errorDiv.style.display = 'none';
  }

  // Reset Turnstile widget
  const turnstileWidget = document.querySelector('.cf-turnstile');
  if (turnstileWidget && window.turnstile) {
    // Remove old widget and create new one
    const parent = turnstileWidget.parentElement;
    turnstileWidget.remove();
    const newWidget = document.createElement('div');
    newWidget.className = 'cf-turnstile';
    newWidget.setAttribute('data-sitekey', '0x4AAAAAACK9BM1Z30LotBnK');
    newWidget.setAttribute('data-callback', 'onTurnstileSuccess');
    parent.appendChild(newWidget);

    // Render the new widget
    window.turnstile.render(newWidget);
  }
}

async function onTurnstileSuccess(token) {
  const discordLinkDiv = document.getElementById('discord-link');
  const errorDiv = document.getElementById('error-message');
  const contentP = document.getElementById('discord-link-content');

  // Show loading state
  discordLinkDiv.style.display = 'block';
  contentP.textContent = 'Verifying...';

  try {
    // Send token to our Cloudflare Pages Function for verification
    const response = await fetch('/verify-turnstile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const result = await response.json();

    if (result.success && result.discordUrl) {
      // Success! Show the Discord link
      contentP.innerHTML = `Join our Discord community: <a href="${result.discordUrl}" target="_blank" rel="noopener noreferrer">${result.discordUrl}</a>`;
      document.getElementById('turnstile-container').style.display = 'none';
    } else {
      // Verification failed
      discordLinkDiv.style.display = 'none';
      errorDiv.style.display = 'block';
    }
  } catch (error) {
    // Network or other error
    discordLinkDiv.style.display = 'none';
    errorDiv.style.display = 'block';
  }
}

// Reset state on initial page load
document.addEventListener('DOMContentLoaded', resetPageState);

// Reset state when navigating back to this page (MkDocs Material instant navigation)
document$.subscribe(function() {
  resetPageState();
});
</script>

## Other Ways to Connect

- **GitHub Discussions**: [Join the conversation](https://github.com/jtstockton/sagebrush-www/discussions)
- **GitHub Issues**: [Report bugs or request features](https://github.com/jtstockton/sagebrush-www/issues)
- **Edit the Docs**: Found an error? Click the edit button on any page to suggest changes
