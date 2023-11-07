"use client";

import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="flex flex-col gap-y-8 pt-8 md:pt-12 xl:px-16 2xl:px-40 2xl:pt-16">
      <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl">
        Artesanato de Luxo em Crochê: <br /> Descubra Nossas Bolsas Exclusivas
      </h1>
      <Swiper
        className="h-[50vh] w-full sm:h-[70vh]"
        // install Swiper modules
        navigation
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
        <SwiperSlide className="bg-red-500">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-blue-500">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-zinc-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-orange-500">Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
}
