interface Room {
  name: {
    cs: string;
    en: string;
  };
  size: string;
  bold?: boolean;
}

export interface Apartment {
  id: number;
  title: string;
  floor: {
    cs: string;
    en: string;
  };
  area: {
    cs: string;
    en: string;
  };
  terrace: {
    cs: string;
    en: string;
  };
  sold: boolean;
  price: string;
  description: {
    cs: string;
    en: string;
  };
  mainImage: string;
  images: string[];
  plan: string;
  rooms: Room[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    title: 'APARTMÁN V1',
    floor: {
      cs: '1. patro / 2+ kk',
      en: '1st floor / 2+ rooms'
    },
    area: {
      cs: 'Vnitřní užitná plocha 46 m²',
      en: 'Interior area 46 m²'
    },
    terrace: {
      cs: 'Terasa 17 m²',
      en: 'Terrace 17 m²'
    },
    sold: false,
    price: '9 999 999 Kč',
    description: {
      cs: 'Testovací text o konkrétním apartmánu. Apartmán nabízí krásný výhled na krajinu a skvělou dostupnost.',
      en: 'Test text about the specific apartment. The apartment offers beautiful landscape views and great accessibility.'
    },
    mainImage: '/img/Photo_apartman.png',
    images: [
      '/img/Photo1.png',
      '/img/Photo2.png',
      '/img/Photo_apartman.png'
    ],
    plan: '/img/planek.png',
    rooms: [
      {
        name: {
          cs: 'Obývací pokoj s kuchyní',
          en: 'Living Room with Kitchen'
        },
        size: '25,7 m²'
      },
      {
        name: {
          cs: 'Ložnice',
          en: 'Bedroom'
        },
        size: '15,7 m²'
      },
      {
        name: {
          cs: 'Koupelna',
          en: 'Bathroom'
        },
        size: '4,6 m²'
      },
      {
        name: {
          cs: 'Vnitřní užitná plocha',
          en: 'Interior Area'
        },
        size: '46,0 m²',
        bold: true
      },
      {
        name: {
          cs: 'Terasa',
          en: 'Terrace'
        },
        size: '17,0 m²'
      }
    ]
  },
  {
    id: 2,
    title: 'APARTMÁN V2',
    floor: {
      cs: '1. patro / 2+ kk',
      en: '1st floor / 2+ rooms'
    },
    area: {
      cs: 'Vnitřní užitná plocha 41,6 m²',
      en: 'Interior area 41.6 m²'
    },
    terrace: {
      cs: 'Terasy 17 m² a 7,7 m²',
      en: 'Terraces 17 m² and 7.7 m²'
    },
    sold: true,
    price: '9 999 999 Kč',
    description: {
      cs: 'Testovací text o konkrétním apartmánu. Apartmán nabízí krásný výhled na krajinu a skvělou dostupnost.',
      en: 'Test text about the specific apartment. The apartment offers beautiful landscape views and great accessibility.'
    },
    mainImage: '/img/Photo_apartman.png',
    images: [
      '/img/Photo1.png',
      '/img/Photo2.png',
      '/img/Photo_apartman.png'
    ],
    plan: '/img/planek.png',
    rooms: [
      {
        name: {
          cs: 'Obývací pokoj s kuchyní',
          en: 'Living Room with Kitchen'
        },
        size: '25,7 m²'
      },
      {
        name: {
          cs: 'Ložnice',
          en: 'Bedroom'
        },
        size: '15,7 m²'
      },
      {
        name: {
          cs: 'Koupelna',
          en: 'Bathroom'
        },
        size: '4,6 m²'
      },
      {
        name: {
          cs: 'Vnitřní užitná plocha',
          en: 'Interior Area'
        },
        size: '41,6 m²',
        bold: true
      },
      {
        name: {
          cs: 'Terasy',
          en: 'Terraces'
        },
        size: '17,0 m² a 7,7 m²'
      }
    ]
  },
  {
    id: 3,
    title: 'APARTMÁN V3',
    floor: {
      cs: '2. patro / 2+ kk',
      en: '2nd floor / 2+ rooms'
    },
    area: {
      cs: 'Vnitřní užitná plocha 46 m²',
      en: 'Interior area 46 m²'
    },
    terrace: {
      cs: 'Terasa 17 m²',
      en: 'Terrace 17 m²'
    },
    sold: false,
    price: '9 999 999 Kč',
    description: {
      cs: 'Testovací text o konkrétním apartmánu. Apartmán nabízí krásný výhled na krajinu a skvělou dostupnost.',
      en: 'Test text about the specific apartment. The apartment offers beautiful landscape views and great accessibility.'
    },
    mainImage: '/img/Photo_apartman.png',
    images: [
      '/img/Photo1.png',
      '/img/Photo2.png',
      '/img/Photo_apartman.png'
    ],
    plan: '/img/planek.png',
    rooms: [
      {
        name: {
          cs: 'Obývací pokoj s kuchyní',
          en: 'Living Room with Kitchen'
        },
        size: '25,7 m²'
      },
      {
        name: {
          cs: 'Ložnice',
          en: 'Bedroom'
        },
        size: '15,7 m²'
      },
      {
        name: {
          cs: 'Koupelna',
          en: 'Bathroom'
        },
        size: '4,6 m²'
      },
      {
        name: {
          cs: 'Vnitřní užitná plocha',
          en: 'Interior Area'
        },
        size: '46,0 m²',
        bold: true
      },
      {
        name: {
          cs: 'Terasa',
          en: 'Terrace'
        },
        size: '17,0 m²'
      }
    ]
  },
  {
    id: 4,
    title: 'APARTMÁN V4',
    floor: {
      cs: '2. patro / 2+ kk',
      en: '2nd floor / 2+ rooms'
    },
    area: {
      cs: 'Vnitřní užitná plocha 41,6 m²',
      en: 'Interior area 41.6 m²'
    },
    terrace: {
      cs: 'Terasy 17 m² a 7,7 m²',
      en: 'Terraces 17 m² and 7.7 m²'
    },
    sold: false,
    price: '9 999 999 Kč',
    description: {
      cs: 'Testovací text o konkrétním apartmánu. Apartmán nabízí krásný výhled na krajinu a skvělou dostupnost.',
      en: 'Test text about the specific apartment. The apartment offers beautiful landscape views and great accessibility.'
    },
    mainImage: '/img/Photo_apartman.png',
    images: [
      '/img/Photo1.png',
      '/img/Photo2.png',
      '/img/Photo_apartman.png'
    ],
    plan: '/img/planek.png',
    rooms: [
      {
        name: {
          cs: 'Obývací pokoj s kuchyní',
          en: 'Living Room with Kitchen'
        },
        size: '25,7 m²'
      },
      {
        name: {
          cs: 'Ložnice',
          en: 'Bedroom'
        },
        size: '15,7 m²'
      },
      {
        name: {
          cs: 'Koupelna',
          en: 'Bathroom'
        },
        size: '4,6 m²'
      },
      {
        name: {
          cs: 'Vnitřní užitná plocha',
          en: 'Interior Area'
        },
        size: '41,6 m²',
        bold: true
      },
      {
        name: {
          cs: 'Terasy',
          en: 'Terraces'
        },
        size: '17,0 m² a 7,7 m²'
      }
    ]
  }
]; 