export const locales = ['pt-BR', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-BR';

/** Each language is named in its own language, with the flag shown next to it in the language menu. */
export const localeMeta: Record<Locale, { label: string; flag: 'br' | 'us' }> = {
  'pt-BR': { label: 'Português', flag: 'br' },
  en: { label: 'English', flag: 'us' },
};

export const ui = {
  'pt-BR': {
    'meta.siteName': 'Repplay',
    'meta.homeTitle': 'Repplay: seu lance. De novo.',
    'meta.homeDescription':
      'Grave o jogo inteiro e guarde só o lance. O Repplay usa o celular preso na grade para salvar a jogada que você escolher, sem cadastro e sem enviar nada para a nuvem.',
    'a11y.skip': 'Pular para o conteúdo',
    'a11y.home': 'Repplay, página inicial',
    'nav.privacy': 'Privacidade',
    'nav.terms': 'Termos',
    'lang.label': 'Idioma',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Em breve',
    'store.availableOn': 'Baixar na',
    'footer.company':
      'Repplay é um produto da Nexus Hub, nome fantasia de Victor Hugo Marques Ltda., CNPJ 64.669.130/0001-02, São Paulo/SP.',
    'footer.contact': 'Contato e suporte',
    'footer.rights': 'Todos os direitos reservados.',
    'legal.updated': 'Última atualização',
    'legal.backHome': 'Voltar ao início',
  },
  en: {
    'meta.siteName': 'Repplay',
    'meta.homeTitle': 'Repplay: your play. Again.',
    'meta.homeDescription':
      'Record the whole game and keep only the play. Repplay turns the phone on the fence into an instant replay of the moment you pick, with no sign-up and nothing sent to the cloud.',
    'a11y.skip': 'Skip to content',
    'a11y.home': 'Repplay, home page',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'lang.label': 'Language',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Coming soon',
    'store.availableOn': 'Download on',
    'footer.company':
      'Repplay is a product of Nexus Hub, trade name of Victor Hugo Marques Ltda., Brazilian company registration (CNPJ) 64.669.130/0001-02, São Paulo, Brazil.',
    'footer.contact': 'Contact and support',
    'footer.rights': 'All rights reserved.',
    'legal.updated': 'Last updated',
    'legal.backHome': 'Back to home',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['pt-BR'];

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export const SUPPORT_EMAIL = 'support@repplay.app';
