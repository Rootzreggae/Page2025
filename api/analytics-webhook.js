import fetch from 'node-fetch';

// Use environment variables instead of hardcoded credentials
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Validate environment variables are available
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing required environment variables for Telegram notifications');
}

export default async function handler(req, res) {
    // Rest of your code remains the same, but uses the variables from environment
    // ...
}
