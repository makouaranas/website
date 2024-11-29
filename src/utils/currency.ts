import { Currency } from '../types';

const exchangeRates: Record<Currency, number> = {
  MAD: 1,
  USD: 0.1,
  EUR: 0.092,
  GBP: 0.079,
  CHF: 0.087,
  AED: 0.37,
  SAR: 0.38
};

export function formatCurrency(amount: number, currency: Currency): string {
  const converted = amount * exchangeRates[currency];
  
  return new Intl.NumberFormat(getCurrencyLocale(currency), {
    style: 'currency',
    currency
  }).format(converted);
}

function getCurrencyLocale(currency: Currency): string {
  const locales: Record<Currency, string> = {
    MAD: 'ar-MA',
    USD: 'en-US',
    EUR: 'de-DE',
    GBP: 'en-GB',
    CHF: 'de-CH',
    AED: 'ar-AE',
    SAR: 'ar-SA'
  };
  
  return locales[currency];
}