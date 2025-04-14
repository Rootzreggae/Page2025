// api/analytics-webhook.js
import fetch from 'node-fetch';

// Your Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = '7719506114:AAFFVg6MJG60svqXRyEsg05C52BLotvpDvU';
const TELEGRAM_CHAT_ID = '1506501540'; // Your personal chat ID

export default async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { event, payload } = req.body;

        // Only process page view events
        if (event === 'pageview') {
            const { url, referrer, userAgent, ip } = payload;

            // Format message
            const message = `🔔 New Visitor!\n\nURL: ${url}\nReferrer: ${referrer || 'Direct'}\nBrowser: ${userAgent}\nIP: ${ip}`;

            // Send to Telegram
            await sendTelegramMessage(message);

            return res.status(200).json({ success: true });
        }

        return res.status(200).json({ success: true, skipped: true });
    } catch (error) {
        console.error('Error processing analytics webhook:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

async function sendTelegramMessage(message) {
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(`Telegram API error: ${JSON.stringify(error)}`);
    }

    return response.json();
}
