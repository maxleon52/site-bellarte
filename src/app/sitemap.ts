import { MetadataRoute } from "next";

import { client } from "@/lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type == 'product']{
    "slug":slug.current,
  }`;

  const response = await client.fetch(query);

  return [
    ...response.map((item: any) => ({
      url: `https://www.bellartecroche.com.br/${item.slug}`,
      lastModified: new Date(),
    })),
  ];
}
