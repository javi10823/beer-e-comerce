export type Product = {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: {
    code: string;
    name: string;
  }[];
};

export type Stock = {
  stock: number;
  price: number;
};

export type ResumeProduct = {
  id: number;
  brand: string;
  image: string;
  stock: Stock;
};
