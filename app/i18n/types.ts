import type { createI18nServer } from 'next-international/server'

const i18n = {
  common: {
    navigation: {
      home: '',
      apartments: '',
      locality: '',
      contact: '',
    },
    buttons: {
      book: '',
      contact: '',
      more: '',
      interested: '',
      sold: '',
      menu: '',
      close: '',
      apartments_offer: '',
    },
  },
  home: {
    title: '',
    subtitle: '',
    hero_title: '',
    hero_subtitle: '',
  },
  apartments: {
    title: '',
    floor: '',
    interior_area: '',
    terrace: '',
    terraces: '',
    living_room: '',
    bedroom: '',
    bathroom: '',
    apartment_detail: '',
    price: {
      title: '',
      on_request: '',
    },
    legal_notice: '',
    disclaimer: '',
  },
  contact: {
    title: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
  },
  footer: {
    copyright: '',
  },
  error: {
    title: '',
    try_again: '',
    not_found: '',
    back_home: '',
  },
  location: {
    activities_title: '',
    map: {
      description: '',
    },
    info: {
      address: '',
      title: '',
      distances: {
        beach: '',
        restaurant: '',
        bakery: '',
        shop: '',
        pharmacy: '',
        marina: '',
        ferry: '',
      },
    },
    activities: {
      beaches: {
        title: '',
        description: '',
      },
      trips: {
        title: '',
        description: '',
      },
      relax: {
        title: '',
        description: '',
      },
      kids: {
        title: '',
        description: '',
      },
    },
  },
} as const

type Join<K, P> = K extends string | number ?
  P extends string | number ?
    `${K}${'' extends P ? '' : '.'}${P}`
    : never : never;

type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: K extends string | number ?
      `${K}` | Join<K, Paths<T[K], Prev[D]>>
      : never
  }[keyof T] : '';

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

export type TranslationKeys = Paths<typeof i18n>

declare module 'next-international/server' {
  export function createI18nServer<Locales extends Record<string, () => Promise<any>>>(config: Locales): {
    getI18n: () => (key: TranslationKeys) => string;
    getScopedI18n: () => <Scope extends keyof typeof i18n>(scope: Scope) => (key: Paths<(typeof i18n)[Scope]>) => string;
    getStaticParams: () => Promise<{ locale: keyof Locales }[]>;
  }
}

declare module 'next-international/client' {
  export function createI18nClient<Locales extends Record<string, () => Promise<any>>>(config: Locales): {
    useI18n: () => (key: TranslationKeys) => string;
    useScopedI18n: () => <Scope extends keyof typeof i18n>(scope: Scope) => (key: Paths<(typeof i18n)[Scope]>) => string;
    I18nProviderClient: React.FC<{ locale: keyof Locales; children: React.ReactNode }>;
    useCurrentLocale: () => keyof Locales;
    useChangeLocale: () => (locale: keyof Locales) => Promise<void>;
  }
} 