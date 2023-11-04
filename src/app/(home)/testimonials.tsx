"use client";

import React from "react";

import { Facebook, Instagram, Quote, Twitter } from "lucide-react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="px-4 md:px-8 xl:px-16 2xl:px-40">
      <div className="">
        <Swiper
          className="border-2 border-red-500"
          // install Swiper modules
          navigation
          modules={[Autoplay, Navigation, Pagination]}
          centeredSlides
          spaceBetween={50}
          effect={"fade"}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          grabCursor={true}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <SwiperSlide key={item} className="!w-[calc(100%-550px)] flex-none">
              <div className="flex gap-8 rounded-lg border border-zinc-200 p-8">
                {/* imagem */}
                <div className="h-24 w-24 flex-none rounded-full bg-zinc-300" />

                <div className="grid gap-4">
                  <Quote className="stroke-zinc-400" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet magnam molestias quos quibusdam facilis explicabo
                    illo nisi ducimus magni, quaerat natus ab nihil, optio in
                    deleniti! Dolor illum facilis quaerat. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eveniet magnam molestias
                    quos quibusdam facilis explicabo illo nisi ducimus magni,
                    quaerat natus ab nihil, optio in deleniti! Dolor illum
                    facilis quaerat. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Eveniet magnam molestias quos quibusdam
                    facilis explicabo illo nisi ducimus magni, quaerat natus ab
                    nihil, optio in deleniti! Dolor illum facilis quaerat. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                    magnam molestias quos quibusdam facilis explicabo illo nisi
                    ducimus magni, quaerat natus ab nihil, optio in deleniti!
                    Dolor illum facilis quaerat.
                  </p>

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
