"use client";

import React from "react";

import { Facebook, Instagram, Quote, Twitter } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const datafake = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit Ea distinctio error necessitatibus debitis molestiae, iure recusandae. Nemo tempora excepturi laudantium facere animi tempore dolorem incidunt ex libero. Ab, deserunt ex?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ea distinctio error necessitatibus debitis molestiae, iure recusandae. Nemo tempora excepturi laudantium facere animi tempore dolorem incidunt ex libero. Ab, deserunt ex?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio error necessitatibus debitis molestiae, iure recusandae. Nemo tempora excepturi laudantium facere animi tempore dolorem incidunt ex libero. Ab, deserunt ex?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio error necessitatibus debitis molestiae, iure recusandae. Nemo tempora excepturi laudantium facere animi tempore dolorem incidunt ex libero. Ab, deserunt ex?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolore aspernatur vel, natus aperiam reprehenderit deserunt sed similique dolorum dolores possimus suscipit earum, esse ipsum eum, commodi nam culpa laudantium.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio error necessitatibus debitis molestiae, iure recusandae. Nemo tempora excepturi laudantium facere animi tempore dolorem incidunt ex libero. Ab, deserunt ex?",
];
export default function Testimonials() {
  return (
    <section className="flex flex-col gap-4 bg-bellarte-25/[0.15] py-12 md:gap-6 xl:gap-8 ">
      <h2 className=" bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text px-4 text-3xl font-bold text-transparent md:px-8 md:text-5xl xl:px-16 2xl:px-40 2xl:text-7xl">
        Avaliações
      </h2>

      <p className="px-4 text-zinc-400 md:px-8 md:text-lg xl:px-16 xl:text-xl 2xl:px-40">
        Veja o que nossos clientes estão falando.
      </p>

      <div>
        <Swiper
          className="swiper-testimonial pb-4"
          // install Swiper modules
          navigation
          modules={[Autoplay, Navigation, Pagination]}
          centeredSlides
          spaceBetween={50}
          effect={"fade"}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            300: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 50,
            },
          }}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {datafake.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className="!max-w-[calc(100%-15%)] flex-none sm:!max-w-[calc(100%-50%)]"
            >
              <div className="grid justify-items-center gap-8 rounded-lg border border-zinc-200 bg-white p-8 2xl:flex">
                {/* imagem */}
                <img
                  src="/images/eu.webp"
                  alt="foto do usuário"
                  className="h-20 w-20 flex-none rounded-full bg-zinc-300 object-cover 2xl:h-24 2xl:w-24"
                />

                <div className="grid gap-4">
                  <Quote className="stroke-zinc-400" />
                  <p className="text-justify text-sm xl:text-base">{item}</p>

                  <div className="flex items-center justify-between">
                    <strong>Fulano de tal</strong>
                    <div className="flex gap-2">
                      <small>veja em:</small>
                      <a href="">
                        <Instagram className="h-4 w-4 transition-all hover:stroke-violet-500" />
                      </a>
                      <a href="">
                        <Facebook className="h-4 w-4 transition-all hover:stroke-blue-500" />
                      </a>
                      <a href="">
                        <Twitter className="h-4 w-4 transition-all hover:stroke-sky-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
