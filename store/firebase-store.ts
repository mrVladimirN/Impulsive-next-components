import Subscription from '@/types/subscription';
import { create } from 'zustand';

export type LanguagesSupported =
  | 'en'
  | 'de'
  | 'fr'
  | 'es'
  | 'hi'
  | 'ja'
  | 'la'
  | 'ru'
  | 'zh'
  | 'ar';

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: 'English',
  de: 'German',
  fr: 'French',
  es: 'Spanish',
  hi: 'Hindi',
  ja: 'Japanese',
  la: 'Latin',
  ru: 'Russian',
  zh: 'Mandarin',
  ar: 'Arabic'
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  // eslint-disable-next-line no-unused-vars
  setSubscription: (subscription: Subscription | null) => void;
}

/* use for global state */
export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription })
}));
