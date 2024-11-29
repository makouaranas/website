import create from 'zustand';
import { Language, Currency } from '../types';

interface Store {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (currency: Currency) => void;
}

export const useStore = create<Store>((set) => ({
  language: 'en',
  currency: 'MAD',
  setLanguage: (language) => set({ language }),
  setCurrency: (currency) => set({ currency }),
}));