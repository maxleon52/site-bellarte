"use client";

import Link from "next/link";
import React from "react";

import { urlFor } from "@/lib/sanity";
import { HeroTypes } from "@/types/home";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

interface HeroProps {
  data: HeroTypes[];
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="flex flex-col gap-y-8 bg-slate-100 pt-8 md:pt-12 xl:px-16 2xl:px-40 2xl:pt-16">
      <h1 className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl">
        Artesanato de Luxo em Crochê: <br /> Descubra Nossas peças Exclusivas
      </h1>
      <Swiper
        className="h-[50vh] w-full !bg-transparent sm:h-[50vh]"
        navigation
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination]}
        effect={"fade"}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item._id}
            className="!flex h-auto !items-center !justify-center gap-0 !overflow-hidden !bg-transparent md:!gap-12"
          >
            <div className="absolute bottom-[30px] flex w-full flex-col items-center justify-center gap-2 bg-[rgba(255,255,255,0.55)] py-2 md:relative md:w-fit md:items-start md:gap-4 md:bg-transparent md:py-0">
              <strong className="bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-3xl text-bellarte-800 md:text-5xl md:text-transparent">
                {item.name}
              </strong>
              <Link href={`produtos/${item.category.slug}/${item._id}`}>
                <Button
                  variant="outline"
                  className="w-fit border-bellarte-300 bg-zinc-50 text-lg text-bellarte-300 hover:bg-bellarte-50 hover:text-bellarte-300 md:px-6 md:py-4 md:text-xl 2xl:px-8 2xl:py-6"
                >
                  Conferir
                </Button>
              </Link>
            </div>

            <img
              loading="lazy"
              src={urlFor(item.images[0]).url()}
              alt={item.name}
              className="w-auto md:max-w-[40%] lg:max-w-[30%] 2xl:max-w-[50%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
