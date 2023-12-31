import { MetadataRoute } from "next";

import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == 'product']{
    _id,
    "slug":slug.current,
    category->{name, "slug": slug.current},
  }`;

  const response = await client.fetch(query);

  return [
    ...response.map((item: any) => ({
      url: `https://www.bellartecroche.com.br/produtos/${item.category.name}/${item._id}`,
      lastModified: new Date(),
    })),
  ];
}
