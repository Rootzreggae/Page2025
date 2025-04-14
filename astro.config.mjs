import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import 'dotenv/config'; // Add this line to load environment variables

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        react()
    ],
    // Optional: You can also define public environment variables here
    vite: {
        define: {
            // Note: Do NOT put sensitive info here as these become public
            'process.env.PUBLIC_VARIABLE': JSON.stringify(process.env.PUBLIC_VARIABLE)
        }
    }
});
