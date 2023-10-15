import { Color, Product } from './types/state';

enum Colors {
  Aubergine = 'aubergine',
  Navy = 'navy',
}

export const colors: Color[] = [
  {
    name: 'aubergine',
    code: '#472C4C',
  },
  {
    name: 'navy',
    code: '#000080',
  },
  {
    name: 'graphit',
    code: '#414141',
  },
  {
    name: 'black',
    code: '#000000',
  },
  {
    name: 'olivgrun',
    code: '#5B6667',
  },
  {
    name: 'natur',
    code: '#F0E1CD',
  },
  {
    name: 'tiefblau',
    code: '#242432',
  },
];

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
    price: 59,
  },
  {
    id: '42345344676873',
    name: 'Regular: Hose mit Dobbystruktur',
    colors: [
      { code: '#242432', name: 'tiefblau' },
      { code: '#000000', name: 'black' },
    ],
    pictures: [
      { name: 'tiefblau', src: require('./assets/hose-black.png') },
      { name: 'black', src: require('./assets/hose-tiefblau.png') },
    ],
    price: 79,
  },
];
