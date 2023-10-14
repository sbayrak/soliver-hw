export type Color = {
  code: string;
  name: string;
};

export type Picture = {
  src: string;
  name: string;
};

export type Product = {
  pictures: Picture[];
  name: string;
  colors: Color[];
  price: string;
};
