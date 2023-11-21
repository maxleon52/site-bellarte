import Link from "next/link";
import React from "react";

import { client, urlFor } from "@/lib/sanity";
import { HighlightsTypes } from "@/types/home";

async function getData() {
  const query = `*[_type == 'highlightsImages'] | order(order asc){
    _id,
    order,
    name,
    image,
    description,
    category->{name, "slug": slug.current},
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Highlights() {
  const data: HighlightsTypes[] = await getData();

  return (
    <section className="flex flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
        Destaques
      </h2>

      <div className="flex gap-2 overflow-scroll pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-hidden">
        {data.map((item) => (
          <Link
            href={`/produtos/${item.category.slug}/${item._id}`}
            key={item._id}
            className="w-[96%] flex-none md:w-full"
          >
            <div className="group relative flex h-44 w-[96%] flex-none cursor-pointer justify-end overflow-hidden rounded-lg border border-slate-100 shadow-sm md:h-52 md:w-full xl:h-64">
              <div className="absolute left-[5%] top-[50%] flex w-[50%] flex-col justify-center">
                <span className="text-2xl font-semibold text-bellarte-200 lg:text-3xl xl:text-4xl">
                  {item.name}
                </span>
                <span className="hidden font-medium text-slate-400 xl:flex xl:text-xl">
                  {item.description}
                </span>
              </div>

              <img
                loading="lazy"
                src={urlFor(item.image).url()}
                alt="imagem de carinho de compras"
                className="w-[50%] object-cover transition-all group-hover:scale-110"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
