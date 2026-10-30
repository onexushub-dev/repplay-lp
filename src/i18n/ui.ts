export const locales = ['pt-BR', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt-BR';

/** Each language is named in its own language, with the flag shown next to it in the language menu. */
export const localeMeta: Record<Locale, { label: string; flag: 'br' | 'us' | 'es' }> = {
  'pt-BR': { label: 'Português', flag: 'br' },
  en: { label: 'English', flag: 'us' },
  es: { label: 'Español', flag: 'es' },
};

export const ui = {
  'pt-BR': {
    'meta.siteName': 'Revi',
    'meta.homeTitle': 'Revi: seu lance. De novo. | App de replay para esportes',
    'meta.homeDescription':
      'App de replay para esportes: o celular grava o jogo todo e guarda só o lance que você salvar. Sem cadastro e sem enviar nada para a nuvem.',
    'meta.ogImageAlt': 'Revi: seu lance. De novo.',
    'notFound.title': 'Página não encontrada',
    'notFound.body': 'O endereço que você abriu não existe ou mudou de lugar.',
    'a11y.skip': 'Pular para o conteúdo',
    'a11y.home': 'Revi, página inicial',
    'nav.privacy': 'Privacidade',
    'nav.terms': 'Termos',
    'lang.label': 'Idioma',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Em breve',
    'store.availableOn': 'Baixar na',
    'footer.company':
      'Revi é um produto da Nexus Hub, nome fantasia de Victor Hugo Marques Ltda., CNPJ 64.669.130/0001-02, São Paulo/SP.',
    'footer.contact': 'Contato e suporte',
    'footer.rights': 'Todos os direitos reservados.',
    'legal.updated': 'Última atualização',
    'legal.backHome': 'Voltar ao início',
  },
  en: {
    'meta.siteName': 'Revi',
    'meta.homeTitle': 'Revi: your play. Again. | Instant replay app for sports',
    'meta.homeDescription':
      'Instant replay app for sports: your phone records the whole game and keeps only the play you save. No sign-up, nothing sent to the cloud.',
    'meta.ogImageAlt': 'Revi: your play. Again.',
    'notFound.title': 'Page not found',
    'notFound.body': 'The address you opened does not exist or has moved.',
    'a11y.skip': 'Skip to content',
    'a11y.home': 'Revi, home page',
    'nav.privacy': 'Privacy',
    'nav.terms': 'Terms',
    'lang.label': 'Language',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Coming soon',
    'store.availableOn': 'Download on',
    'footer.company':
      'Revi is a product of Nexus Hub, trade name of Victor Hugo Marques Ltda., Brazilian company registration (CNPJ) 64.669.130/0001-02, São Paulo, Brazil.',
    'footer.contact': 'Contact and support',
    'footer.rights': 'All rights reserved.',
    'legal.updated': 'Last updated',
    'legal.backHome': 'Back to home',
  },
  es: {
    'meta.siteName': 'Revi',
    'meta.homeTitle': 'Revi: tu jugada. Otra vez. | App de replay para deportes',
    'meta.homeDescription':
      'App de replay para deportes: tu celular graba todo el juego y guarda solo la jugada que decidas. Sin registro y sin enviar nada a la nube.',
    'meta.ogImageAlt': 'Revi: tu jugada. Otra vez.',
    'notFound.title': 'Página no encontrada',
    'notFound.body': 'La dirección que abriste no existe o cambió de lugar.',
    'a11y.skip': 'Saltar al contenido',
    'a11y.home': 'Revi, página de inicio',
    'nav.privacy': 'Privacidad',
    'nav.terms': 'Términos',
    'lang.label': 'Idioma',
    'store.appStore': 'App Store',
    'store.googlePlay': 'Google Play',
    'store.soon': 'Próximamente',
    'store.availableOn': 'Descargar en',
    'footer.company':
      'Revi es un producto de Nexus Hub, nombre comercial de Victor Hugo Marques Ltda., CNPJ 64.669.130/0001-02, São Paulo, Brasil.',
    'footer.contact': 'Contacto y soporte',
    'footer.rights': 'Todos los derechos reservados.',
    'legal.updated': 'Última actualización',
    'legal.backHome': 'Volver al inicio',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['pt-BR'];

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

export const SUPPORT_EMAIL = 'support@userevi.app';
