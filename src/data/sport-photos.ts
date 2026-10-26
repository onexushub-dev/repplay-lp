import beachTennis from '../assets/sports/beach-tennis.jpg';
import footvolley from '../assets/sports/footvolley.jpg';
import beachVolley from '../assets/sports/beach-volleyball.jpg';
import tennis from '../assets/sports/tennis.jpg';
import padel from '../assets/sports/padel.jpg';
import tableTennis from '../assets/sports/table-tennis.jpg';
import volleyball from '../assets/sports/volleyball.jpg';
import basketball from '../assets/sports/basketball.jpg';
import handball from '../assets/sports/handball.jpg';
import futsal from '../assets/sports/futsal.jpg';
import societyFootball from '../assets/sports/society-football.jpg';
import peteca from '../assets/sports/peteca.jpg';
import snooker from '../assets/sports/snooker.jpg';
import type { SportKey } from '../i18n/home';

/**
 * Photo of each sport. Every file is already cropped to 4:5 (1080x1350) around the athlete, from the full-size original,
 * so it can be resized for the cards without losing sharpness. Credits are listed in docs/media-credits.md.
 */
export const sportPhotos: Record<Exclude<SportKey, 'any'>, ImageMetadata> = {
  beachTennis,
  footvolley,
  beachVolley,
  tennis,
  padel,
  tableTennis,
  volleyball,
  basketball,
  handball,
  futsal,
  societyFootball,
  peteca,
  snooker,
};

/** Order of the carousel: the sand sports first, then the rest, and the catch-all card last. */
export const sportOrder: SportKey[] = [
  'beachTennis',
  'footvolley',
  'beachVolley',
  'tennis',
  'padel',
  'tableTennis',
  'societyFootball',
  'volleyball',
  'basketball',
  'handball',
  'futsal',
  'peteca',
  'snooker',
  'any',
];
