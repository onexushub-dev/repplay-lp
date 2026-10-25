const PRO_MONTHLY_VALUE = 14.9;
const PRO_YEARLY_VALUE = 99.9;

/**
 * Prices shown on the landing page. The app itself carries no prices (the stores are the source of truth), so these
 * must be kept in sync by hand with the offers configured in App Store Connect, Google Play and RevenueCat.
 */
export const PLAN_PRICES = {
  singlePass: 'R$ 4,90',
  proMonthly: 'R$ 14,90',
  proYearly: 'R$ 99,90',
  /** The yearly price spread over 12 months. */
  proYearlyPerMonth: `R$ ${(PRO_YEARLY_VALUE / 12).toFixed(2).replace('.', ',')}`,
  /** How much cheaper the yearly plan is than twelve monthly payments. */
  yearlySavingsPercent: Math.round((1 - PRO_YEARLY_VALUE / (PRO_MONTHLY_VALUE * 12)) * 100),
  freeRecordingsPerMonth: 5,
  freeClipSeconds: 15,
  trialDays: 7,
} as const;
