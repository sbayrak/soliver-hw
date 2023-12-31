import { ImageSourcePropType } from 'react-native';

export type Color = {
  code: string;
  name: string;
};

export type Picture = {
  src: ImageSourcePropType;
  name: string;
};

export type Product = {
  id: string;
  pictures: Picture[];
  name: string;
  colors: Color[];
  price: number;
};
