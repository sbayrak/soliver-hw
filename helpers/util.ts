import { ImageSourcePropType } from 'react-native';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type Images =
  | 'strickpullover-aubergine.png'
  | 'strickpullover-black.png'
  | 'strickpullover-graphit.png'
  | 'strickpullover-navy.png';

export const getAsset = (src: Images) => {
  const path = '../assets/' + src;
  return '../assets/strickpullover-aubergine.png';
};
