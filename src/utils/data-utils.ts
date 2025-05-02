import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                id: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagId: string) {
    const filteredPosts: CollectionEntry<'blog'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagId));
    return filteredPosts;
}

// Extract the first image URL from a markdown body
export function extractFirstImageUrl(markdown: string): string | undefined {
    // Regular expression to match markdown image syntax: ![alt](url)
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = markdown.match(imageRegex);
    
    if (match && match[1]) {
        return match[1];
    }
    
    return undefined;
}

// Extract all image URLs from a markdown body
export function extractAllImageUrls(markdown: string): string[] {
    // Regular expression to match all markdown image syntax: ![alt](url)
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const urls: string[] = [];
    
    let match;
    while ((match = imageRegex.exec(markdown)) !== null) {
        if (match[1]) {
            urls.push(match[1]);
        }
    }
    
    return urls;
}
