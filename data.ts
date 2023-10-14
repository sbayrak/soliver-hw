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
      { name: 'aubergine', src: 'strickpullover-aubergine.png' },
      { name: 'navy', src: 'strickpullover-navy.png' },
      {
        name: 'graphit',
        src: 'strickpullover-graphit.png',
      },
      { name: 'black', src: 'strickpullover-black.png' },
    ],
    price: '49,99 €',
  },
];
