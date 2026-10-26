import type { TestimonialKey } from '../i18n/home';
import marcus from '../assets/people/marcus.jpg';
import sara from '../assets/people/sara.jpg';
import lorenzo from '../assets/people/lorenzo.jpg';
import lyandra from '../assets/people/lyandra.jpg';
import victor from '../assets/people/victor.jpg';
import yasmin from '../assets/people/yasmin.jpg';

/**
 * People shown in the testimonials section, in display order (men and women alternate). The photos are generic
 * placeholders from Pexels (see docs/media-credits.md) until the real ones arrive: replace each file in
 * src/assets/people/ with a square image of the person, keeping the file name. The quotes live in src/i18n/home.ts and
 * should be confirmed by each person before launch.
 */
export interface Testimonial {
  key: TestimonialKey;
  name: string;
  photo?: ImageMetadata;
}

export const testimonials: Testimonial[] = [
  { key: 'marcus', name: 'Marcus', photo: marcus },
  { key: 'sara', name: 'Sara', photo: sara },
  { key: 'lorenzo', name: 'Lorenzo', photo: lorenzo },
  { key: 'lyandra', name: 'Lyandra', photo: lyandra },
  { key: 'victor', name: 'Victor', photo: victor },
  { key: 'yasmin', name: 'Yasmin', photo: yasmin },
];
