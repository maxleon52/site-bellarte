import React from "react";

import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";
import MessengerIcon from "./messenger";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 bg-zinc-50 p-4 shadow-sm sm:flex-row sm:py-10 md:px-8 xl:px-16 2xl:px-40">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 md:h-16 md:w-16">
          B
        </div>

        <p>© Copyright 2023 - Bellarte-crochê</p>
      </div>

      <div className="flex gap-2">
        <InstagramIcon />
        <FacebookIcon />
        <MessengerIcon />
      </div>
    </footer>
  );
}
