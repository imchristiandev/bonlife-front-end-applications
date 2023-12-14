export interface PromotionItem {
  active: boolean;
  image: string;
  urlImage: string;
  position?: string;
  link: string;
  textLink: string;
  link_two: string;
  textLink_two: string;
  background: string
}

export interface Promotion {
  popups: PromotionItem[];
}