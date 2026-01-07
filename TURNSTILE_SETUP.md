# Cloudflare Turnstile Setup Guide

This guide explains how to configure Cloudflare Turnstile for the Contact Us page.

## Prerequisites

- Cloudflare account
- Site deployed on Cloudflare Pages
- Discord server with invite link

## Step 1: Get Cloudflare Turnstile Keys

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Turnstile** in the left sidebar
3. Click **Add Site** or **Add Widget**
4. Configure your widget:
   - **Site Name**: Sagebrush Mesh Documentation (or any name)
   - **Domain**: `www.sagebrushmesh.com` (or your domain)
   - **Widget Mode**: Managed (recommended)
5. Click **Create**
6. You'll receive two keys:
   - **Site Key** (public) - Used in the HTML/JavaScript
   - **Secret Key** (private) - Used for server-side verification

## Step 2: Configure Environment Variables in Cloudflare Pages

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
2. Select your **sagebrush-www** project
3. Go to **Settings** → **Environment variables**
4. Add the following environment variables:

   **For Production:**
   - Variable name: `TURNSTILE_SECRET_KEY`
   - Value: `<your-secret-key-from-step-1>`
   - Click **Add variable**

   - Variable name: `DISCORD_INVITE_URL`
   - Value: `https://discord.gg/YOUR_INVITE_CODE`
   - Click **Add variable**

   **Repeat for Preview (optional):**
   - Add the same variables for preview deployments if you want to test on preview branches

5. Click **Save**

## Step 3: Update the Contact Page

1. Edit `docs/contact.md`
2. Find line 10: `<div class="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY"`
3. Replace `YOUR_TURNSTILE_SITE_KEY` with your **Site Key** from Step 1
4. Commit and push the changes

## Step 4: Deploy

1. Commit all changes to your repository
2. Push to the `main` branch
3. Cloudflare Pages will automatically deploy
4. The Turnstile verification will now work on the Contact page

## How It Works

1. User visits the Contact page
2. Cloudflare Turnstile widget appears
3. User completes the challenge (usually automatic, sometimes requires interaction)
4. Turnstile generates a one-time token
5. JavaScript sends the token to `/verify-turnstile` (Cloudflare Pages Function)
6. Function verifies the token with Cloudflare API using the secret key
7. If valid, the Discord invite link is returned and displayed
8. The Discord link is **never** exposed in the page source

## Security Notes

- ✅ **Site Key is public** - Safe to commit to the repository
- ❌ **Secret Key is private** - NEVER commit this to the repository, only store in Cloudflare Pages environment variables
- ✅ **Discord invite stays hidden** - Only revealed after successful verification
- ✅ **Server-side verification** - Bots cannot bypass by inspecting page source

## Troubleshooting

**Turnstile widget not appearing:**
- Check that the site key is correctly set in `docs/contact.md`
- Verify the domain matches what you configured in Cloudflare Turnstile

**Verification always fails:**
- Check that environment variables are set in Cloudflare Pages
- Verify the secret key is correct
- Check Cloudflare Pages deployment logs for errors

**Discord link not showing after verification:**
- Check browser console for JavaScript errors
- Verify `DISCORD_INVITE_URL` environment variable is set correctly
- Test the `/verify-turnstile` endpoint is accessible

## Regenerating Discord Invite

If your Discord invite gets compromised:

1. Create a new Discord invite link
2. Update the `DISCORD_INVITE_URL` environment variable in Cloudflare Pages
3. No code changes or redeployment needed - the change takes effect immediately
