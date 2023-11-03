/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Highlights() {
  return (
    <section className="border-2 border-red-500 px-4 md:px-8 xl:px-16 2xl:px-40">
      <h2>Destaques</h2>

      <div className="flex gap-2 overflow-scroll pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-hidden">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="relative flex h-44 w-[96%] flex-none overflow-hidden rounded-md shadow-sm md:h-52 md:w-full xl:h-64"
          >
            <div className="absolute left-[5%] top-[50%] flex flex-col justify-center border">
              <span>Item 1</span>
              <span>Breve descrição</span>
            </div>

            <img
              src="images/no-item.png"
              alt="imagem de carinho de compras"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
