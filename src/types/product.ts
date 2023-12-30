export type Product = {
  _id: string;
  order: number;
  name: string;
  description: string[];
  price: number;
  slug: string;
  images: any;
  category: {
    name: string;
    slug: string;
  };
};
