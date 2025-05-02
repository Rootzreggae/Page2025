import { createWriteStream } from 'fs';
import { get } from 'https';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageUrls = [
    'https://picsum.photos/1920/1080?random=1',
    'https://picsum.photos/1920/1080?random=2',
    'https://picsum.photos/1920/1080?random=3'
];

const downloadImage = (url, path) => {
    return new Promise((resolve, reject) => {
        get(url, (response) => {
            if (response.statusCode === 200) {
                const file = createWriteStream(path);
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Failed to download image: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            reject(err.message);
        });
    });
};

async function generateImages() {
    for (let i = 0; i < imageUrls.length; i++) {
        const path = join(__dirname, '..', 'public', 'carousel', `image${i + 1}.jpg`);
        try {
            await downloadImage(imageUrls[i], path);
            console.log(`Downloaded image${i + 1}.jpg`);
        } catch (error) {
            console.error(`Error downloading image${i + 1}.jpg:`, error);
        }
    }
}

generateImages();