export type HeroTypes = {
  images: any[];
  category: {
    name: string;
    slug: string;
  };
  _id: string;
  order: number;
  name: string;
};

export type HighlightsTypes = {
  image: any;
  category: {
    name: string;
    slug: string;
  };
  _id: string;
  order: number;
  name: string;
  description: string;
};

export type ProductsTypes = {
  images: any;
  category: {
    name: string;
    slug: string;
  };
  _id: string;
  order: number;
  name: string;
  description: string;
  price: number;
  slug: string;
};
