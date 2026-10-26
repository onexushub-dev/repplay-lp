import type { TestimonialKey } from '../i18n/home';

/**
 * People shown in the testimonials section, in display order. Until their pictures arrive the cards show a generic
 * silhouette: to use a real photo, drop a square image in src/assets/people/ (kebab-case, at least 240x240) and import
 * it here as `photo`. The quotes live in src/i18n/home.ts and should be confirmed by each person before launch.
 */
export interface Testimonial {
  key: TestimonialKey;
  name: string;
  photo?: ImageMetadata;
}

export const testimonials: Testimonial[] = [
  { key: 'marcus', name: 'Marcus' },
  { key: 'lorenzo', name: 'Lorenzo' },
  { key: 'victor', name: 'Victor' },
];
