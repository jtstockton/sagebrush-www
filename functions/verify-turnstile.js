/**
 * Cloudflare Pages Function to verify Turnstile token and return Discord invite
 *
 * Required environment variables in Cloudflare Pages:
 * - TURNSTILE_SECRET_KEY: Your Cloudflare Turnstile secret key
 * - DISCORD_INVITE_URL: Your Discord invite link (e.g., https://discord.gg/abc123)
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    // Get the token from the request
    const { token } = await request.json();

    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Missing token' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    // Verify the token with Cloudflare Turnstile API
    const verifyUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const verifyResult = await verifyResponse.json();

    if (verifyResult.success) {
      // Verification successful, return Discord invite
      return new Response(JSON.stringify({
        success: true,
        discordUrl: env.DISCORD_INVITE_URL,
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    } else {
      // Verification failed
      return new Response(JSON.stringify({
        success: false,
        error: 'Verification failed',
      }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Server error',
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  }
}
