import { Product } from './types/state';

export const products: Product[] = [
  {
    id: '123456789',
    name: 'Strickpullover aus Baumwolle',
    colors: [
      { code: '#472C4C', name: 'aubergine' },
      { code: '#000080', name: 'navy' },
      { code: '#414141', name: 'graphit' },
      { code: '#000000', name: 'black' },
    ],
    pictures: [
      {
        name: 'aubergine',
        src: require('./assets/strickpullover-aubergine.png'),
      },
      { name: 'navy', src: require('./assets/strickpullover-navy.png') },
      {
        name: 'graphit',
        src: require('./assets/strickpullover-graphit.png'),
      },
      { name: 'black', src: require('./assets/strickpullover-black.png') },
    ],
    price: 49,
  },
  {
    id: '1231231235',
    name: 'Steppjacke',
    colors: [
      { code: '#5B6667', name: 'olivgrun' },
      { code: '#000080', name: 'navy' },
      { code: '#000000', name: 'black' },
    ],
    pictures: [
      { name: 'navy', src: require('./assets/steppjacke-navy.png') },
      { name: 'olivgrun', src: require('./assets/steppjacke-navy.png') },
      { name: 'black', src: require('./assets/steppjacke-black.png') },
    ],
    price: 129,
  },
  {
    id: '5343461342452',
    name: 'Jacke aus Schaffell-Imitat',
    colors: [
      { code: '#F0E1CD', name: 'natur' },
      { code: '#000080', name: 'navy' },
    ],
    pictures: [
      { name: 'navy', src: require('./assets/jacke-navy.png') },
      { name: 'natur', src: require('./assets/jacke-natur.png') },
    ],
    price: 129,
  },
];
