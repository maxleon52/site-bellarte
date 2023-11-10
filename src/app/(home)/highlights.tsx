/* eslint-disable @next/next/no-img-element */
import React from "react";

import { imagesHighlights } from "@/constants";

export default function Highlights() {
  return (
    <section className="flex flex-col gap-6 px-4 py-8 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl 2xl:text-7xl">
        Destaques
      </h2>

      <div className="flex gap-2 overflow-scroll pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-hidden">
        {imagesHighlights.map((item) => (
          <div
            key={item.id}
            className="group relative flex h-44 w-[96%] flex-none cursor-pointer justify-end overflow-hidden rounded-md shadow-md md:h-52 md:w-full xl:h-64"
          >
            <div className="absolute left-[5%] top-[50%] flex flex-col justify-center">
              <span className="text-2xl font-semibold text-bellarte-200 lg:text-3xl xl:text-4xl">
                {item.name}
              </span>
              <span className="text-zinc-400 md:text-lg xl:text-xl">
                Breve descrição
              </span>
            </div>

            <img
              loading="lazy"
              src={item.url}
              alt="imagem de carinho de compras"
              className="w-[50%] object-cover transition-all group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
