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
        mdx({
            // Enable better component usage in MDX
            extendMarkdownConfig: true,
            // Configure the extension for importing components in MDX
            optimize: true,
            // Allow importing components directly in MDX
            components: {
                // You can add shorthand component references here if needed
            }
        }),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        react()
    ],
    redirects: {
        '/works': '/projects',
        '/projects/open-source-designer/': '/projects/open-source-designer-1/'
    },
    // Optional: You can also define public environment variables here
    vite: {
        define: {
            // Note: Do NOT put sensitive info here as these become public
            'process.env.PUBLIC_VARIABLE': JSON.stringify(process.env.PUBLIC_VARIABLE)
        },
        // Add special handling for MDX component imports
        optimizeDeps: {
            include: ['react', 'react-dom']
        }
    }
});
