import type { Locale } from '../i18n/ui';

/**
 * Real app screenshots, produced by the screenshot automation (see docs/screenshots-plan.md) into
 * public/screens/<name>.<locale>.png. While a screen is missing here, the landing page shows its HTML stand-in.
 * Register a screen by adding its public path per locale, e.g.:
 *
 *   recording: { 'pt-BR': '/screens/recording.pt-BR.png', en: '/screens/recording.en.png' },
 */
export type ScreenName = 'recording' | 'editor';

export const screens: Partial<Record<ScreenName, Record<Locale, string>>> = {};
