import type { ImageMetadata } from 'astro';

// Local stand-ins for Storyblok asset fields, keyed by file name (without extension)
// as used in src/data/*.json.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', { eager: true });

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.[a-z]+$/, ''), mod.default]),
);
