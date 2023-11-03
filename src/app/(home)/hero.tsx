"use client";

import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="pt-4 xl:px-16 2xl:px-40">
      <h1 className="text-center text-[56px]">Uma frase de efeito</h1>
      <Swiper
        className="h-[50vh] sm:h-[70vh] "
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
