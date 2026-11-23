/**
 * Vercel Serverless Function: /api/enquiry
 * Handles project enquiry submissions securely.
 */

export default async function handler(req, res) {
  // CORS & Security headers
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
    const { name, email, phone, company, services, budget, timeline, message } = body || {};

    if (!name || (!email && !phone)) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: Name and at least one contact method (Email or Phone) are mandatory.'
      });
    }

    const referenceId = `COM-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;

    // Optional webhook forwarding if environment variables are configured
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `*New Click On Media Proposal Enquiry [${referenceId}]*\n*Client:* ${name} (${company || 'N/A'})\n*Phone:* ${phone || 'N/A'}\n*Email:* ${email || 'N/A'}\n*Services:* ${(services || []).join(', ')}\n*Budget:* ${budget}\n*Timeline:* ${timeline}\n*Notes:* ${message || 'None'}`
          })
        });
      } catch (webhookErr) {
        console.error('Webhook notification failed:', webhookErr.message);
        // Do not fail the client request if the webhook notification has a non-fatal timeout
      }
    }

    console.log(`[ENQUIRY_RECEIVED] Ref: ${referenceId} | Name: ${name} | Phone: ${phone} | Email: ${email}`);

    return res.status(200).json({
      success: true,
      message: 'Your project specifications have been securely recorded. Our Senior Growth Strategist will contact you within 24 hours.',
      referenceId
    });
  } catch (err) {
    console.error('Enquiry handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your proposal request.'
    });
  }
}
