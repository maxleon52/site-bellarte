/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

import { imagesHero } from "@/constants";

export default function Hero() {
  return (
    <section className="flex flex-col gap-y-8 bg-[#F0E5E7]/[0.15] pt-8 md:pt-12 xl:px-16 2xl:px-40 2xl:pt-16">
      <h1 className="bg-gradient-to-r from-[#E29A9C] via-[#B8848C] to-[#D4A5AA] bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl">
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
        {imagesHero.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex h-auto !items-center !justify-center gap-0 !overflow-hidden !bg-transparent md:!gap-12"
          >
            <div className="absolute bottom-[30px] flex w-full flex-col items-center justify-center gap-2 bg-[rgba(255,255,255,0.55)] py-2 md:relative md:w-fit md:items-start md:gap-4 md:bg-transparent md:py-0">
              <strong className="from-bellarte-400 via-bellarte-300 to-bellarte-200 text-bellarte-800 bg-gradient-to-r bg-clip-text text-3xl md:text-5xl md:text-transparent 2xl:text-7xl">
                {item.name}
              </strong>
              <Button
                variant="outline"
                className="border-bellarte-300 text-bellarte-300 hover:text-bellarte-300 hover:bg-bellarte-50 w-fit bg-zinc-50 text-lg md:px-6 md:py-4 md:text-xl 2xl:px-8 2xl:py-6"
              >
                Conferir
              </Button>
            </div>

            <img
              id={`teste`}
              src={item.url}
              alt={item.name}
              className="w-auto md:max-w-[40%] lg:max-w-[30%] 2xl:max-w-[50%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
