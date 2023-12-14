export interface Product {
  image: string;
  listPrice: number;
  price: number;
  name: string;
  itemId: string
}

export interface CustomProperty {
  name: string;
  values: string[];
}

export interface FinalArray {
  principal: string;
  sugerido1: string;
  sugerido2: string;
  sugerido3: string;
}