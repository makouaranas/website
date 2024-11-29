export interface Activity {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  videos?: string[];
}

export interface Weather {
  temperature: number;
  wind: number;
  rain: number;
  waves: number;
  tides: number;
  pressure: number;
  humidity: number;
  fishActivity: 'low' | 'medium' | 'high';
}

export type Language = 'ar' | 'fr' | 'en' | 'it' | 'de';

export type Currency = 'MAD' | 'USD' | 'AED' | 'EUR' | 'CHF' | 'GBP' | 'SAR';