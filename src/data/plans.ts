/**
 * Prices shown on the landing page. The app itself carries no prices (the stores are the source of truth), so these
 * must be kept in sync by hand with the offers configured in App Store Connect, Google Play and RevenueCat.
 *
 * Portuguese shows Brazilian reais; English and Spanish show US dollars. In the stores, each country then gets its
 * own local price (the dollar list is the base for every country outside Brazil).
 */
const common = {
  freeRecordingsPerMonth: 3,
  freeClipSeconds: 15,
  trialDays: 7,
} as const;

const SINGLE_PASS = { BRL: 4.9, USD: 2.49 };
const PRO_MONTHLY = { BRL: 14.9, USD: 6.9 };
const PRO_YEARLY = { BRL: 119.9, USD: 49.9 };

/** How much cheaper the yearly plan is than twelve monthly payments. */
const savings = (monthly: number, yearly: number) => Math.round((1 - yearly / (monthly * 12)) * 100);

const brl = (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`;
const usd = (symbol: string) => (value: number) => `${symbol}${value.toFixed(2)}`;

const build = (currency: 'BRL' | 'USD', format: (value: number) => string) => ({
  singlePass: format(SINGLE_PASS[currency]),
  proMonthly: format(PRO_MONTHLY[currency]),
  proYearly: format(PRO_YEARLY[currency]),
  /** The yearly price spread over 12 months. */
  proYearlyPerMonth: format(PRO_YEARLY[currency] / 12),
  yearlySavingsPercent: savings(PRO_MONTHLY[currency], PRO_YEARLY[currency]),
  free: format(0).replace(/0[.,]00$/, '0'),
  ...common,
});

export const PLAN_PRICES = build('BRL', brl);
export const PLAN_PRICES_USD = build('USD', usd('$'));
export const PLAN_PRICES_USD_ES = build('USD', usd('US$ '));
