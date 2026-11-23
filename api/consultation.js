/**
 * Vercel Serverless Function: /api/consultation
 * Handles consultation booking requests.
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
    const { name, email, phone, date, time, topic } = body || {};

    if (!name || !email || !phone || !date) {
      return res.status(400).json({
        success: false,
        error: 'Missing required consultation details. Name, Email, Phone, and Date are mandatory.'
      });
    }

    const requestId = `REQ-${Date.now().toString(36).toUpperCase()}`;

    // Optional webhook forwarding
    const webhookUrl = process.env.CONSULTATION_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `*New Strategy Consultation Request [${requestId}]*\n*Client:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Requested Slot:* ${date} at ${time}\n*Topic:* ${topic}`
          })
        });
      } catch (webhookErr) {
        console.error('Consultation webhook notification failed:', webhookErr.message);
      }
    }

    console.log(`[CONSULTATION_REQUEST] Ref: ${requestId} | Name: ${name} | Slot: ${date} ${time}`);

    return res.status(200).json({
      success: true,
      message: 'Consultation request received successfully. Our team will verify slot availability and contact you via WhatsApp / Phone to confirm your appointment.',
      requestId
    });
  } catch (err) {
    console.error('Consultation handler error:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while logging your consultation request.'
    });
  }
}
