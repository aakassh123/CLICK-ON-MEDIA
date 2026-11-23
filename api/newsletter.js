/**
 * Vercel Serverless Function: /api/newsletter
 * Handles newsletter subscriptions securely.
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Only POST is accepted.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { email } = body || {};

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    console.log(`[NEWSLETTER_SUBSCRIBE] Email: ${email}`);

    // Optional webhook forwarding to Mailchimp / Resend / Brevo
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, timestamp: new Date().toISOString() })
        });
      } catch (err) {
        console.error('Newsletter webhook error:', err.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Subscribed successfully! Welcome to Click On Media insights.'
    });
  } catch (err) {
    console.error('Newsletter handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'Unable to process newsletter subscription.'
    });
  }
}
