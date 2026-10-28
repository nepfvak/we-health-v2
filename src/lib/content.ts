import doctors from '../data/doctors.json';
import home from '../data/home.json';
import reviews from '../data/reviews.json';
import site from '../data/site.json';
import treatments from '../data/treatments.json';

export type Block = { _uid: string; component: string; [key: string]: any };
export type Story = { name: string; slug: string; content: { body: Block[]; [key: string]: any } };
export type Treatment = (typeof treatments)[number];
export type Doctor = (typeof doctors)[number];

const stories: Record<string, Story> = { home };

// Content is read from local JSON shaped like Storyblok stories and content types, so
// pages render the same once this file is switched to the Storyblok Content API.
export async function getStory(slug: string): Promise<Story> {
  const story = stories[slug];
  if (!story) throw new Error(`No story for "${slug}"`);
  return story;
}

export function getSite() {
  return site;
}

export function getTreatments(): Treatment[] {
  return treatments;
}

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getDoctors(): Doctor[] {
  return doctors;
}

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getReviews() {
  return reviews;
}
