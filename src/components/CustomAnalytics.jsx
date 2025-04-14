// CustomAnalytics.js (place in your components folder)
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function CustomAnalytics() {
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return;

        // Check if this is a new session
        const sessionKey = 'visitor_session';
        const hasSession = sessionStorage.getItem(sessionKey);

        if (!hasSession) {
            // Mark this as a session to prevent multiple notifications
            sessionStorage.setItem(sessionKey, 'true');

            // Send notification about new visitor
            fetch('/api/analytics-webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    event: 'pageview',
                    payload: {
                        url: window.location.href,
                        referrer: document.referrer,
                        userAgent: navigator.userAgent,
                        // Note: IP will be determined server-side
                        ip: 'will-be-determined-server-side'
                    }
                })
            }).catch((err) => console.error('Failed to send analytics event:', err));
        }
    }, []);

    return <Analytics />; // Still use Vercel Analytics for standard tracking
}
