/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";

const staticData = [
  {
    id: 1,
    name: "Destaque 1",
    url: "/images/destaque-1.png",
  },
  {
    id: 2,
    name: "Destaque 2",
    url: "/images/destaque-2.png",
  },
  {
    id: 3,
    name: "Destaque 3",
    url: "/images/destaque-3.png",
  },
  {
    id: 4,
    name: "Destaque 4",
    url: "/images/destaque-4.png",
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-y-8 bg-[#F0E5E7]/[0.15] pt-8 md:pt-12 xl:px-16 2xl:px-40 2xl:pt-16">
      {/* <section className="flex flex-col gap-y-8 bg-gradient-to-r from-slate-50 to-slate-300 pt-8 md:pt-12 xl:px-16 2xl:px-40 2xl:pt-16"> */}
      <h1 className="bg-gradient-to-r from-[#E29A9C] via-[#B8848C] to-[#D4A5AA] bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl">
        {/* <h1 className="bg-gradient-to-r from-rose-300 to-fuchsia-400  bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl"> */}
        {/* <h1 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl"> */}
        {/* <h1 className="bg-gradient-to-r from-slate-500 via-slate-400 to-slate-700 bg-clip-text text-center text-2xl font-extrabold text-transparent md:text-3xl xl:text-4xl 2xl:text-5xl"> */}
        Artesanato de Luxo em Crochê: <br /> Descubra Nossas Bolsas Exclusivas
      </h1>
      <Swiper
        className="h-[50vh] w-full !bg-transparent sm:h-[50vh]"
        // install Swiper modules
        navigation
        modules={[Autoplay, Navigation, Pagination]}
        effect={"fade"}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        loop
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {staticData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex h-auto !items-center !justify-center gap-0 !overflow-hidden !bg-transparent md:!gap-12"
          >
            <div className="absolute bottom-[30px] flex w-full flex-col items-center justify-center gap-2 bg-[rgba(255,255,255,0.55)] py-2 md:relative md:w-fit md:items-start md:gap-4 md:bg-transparent md:py-0">
              {/* <div className="flex h-[700px] flex-1 flex-col justify-center gap-4 bg-emerald-400 pl-16"> */}
              {/* <strong className="text-7xl text-[#C495A8]">{item.name}</strong> */}
              {/* <strong className="text-7xl text-[#D8D2CD]">{item.name}</strong> */}
              <strong className="bg-gradient-to-r from-[#E29A9C] via-[#B8848C] to-[#D4A5AA] bg-clip-text text-3xl text-[#9E6871] md:text-5xl md:text-transparent 2xl:text-7xl">
                {/* <strong className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-7xl text-transparent"> */}
                {item.name}
              </strong>

              <div className="w-fit overflow-hidden rounded-lg bg-gradient-to-r from-[#E29A9C] via-[#B8848C] to-[#D4A5AA] p-0.5">
                <Button
                  variant="outline"
                  // className="w-fit border-slate-300 px-8 py-6 text-xl text-slate-400 hover:bg-slate-100 hover:text-slate-400"
                  className="w-fit rounded-sm border-none bg-zinc-50 text-lg text-[#B8848C] hover:bg-[#fff0f0] hover:text-[#B8848C] md:px-6 md:py-4 md:text-xl 2xl:px-8 2xl:py-6"
                >
                  Conferir
                </Button>
              </div>
            </div>

            <img
              id={`teste`}
              src={item.url}
              alt={item.name}
              className="w-auto md:max-w-[40%] lg:max-w-[30%] 2xl:max-w-[50%]"
              // className="absolute bottom-0 right-1 top-0 h-full object-scale-down"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="bg-blue-500">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-zinc-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-orange-500">Slide 4</SwiperSlide> */}
      </Swiper>
    </section>
  );
}
