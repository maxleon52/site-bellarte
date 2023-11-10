import Image from "next/image";
import Link from "next/link";
import React from "react";

import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";
import MessengerIcon from "./messenger";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 bg-bellarte-25/[0.15] p-4 shadow-sm sm:flex-row sm:py-10 md:px-8 xl:px-16 2xl:px-40">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/">
          <Image
            src="/svgs/logo-bellarte.svg"
            alt="logo da bellarte"
            width={150}
            height={150}
            className="!h-8 md:!h-12"
          />
        </Link>

        <p className="text-base text-zinc-400">
          © Copyright 2023 - Bellarte-crochê
        </p>
      </div>

      <div className="flex gap-2">
        <InstagramIcon />
        <FacebookIcon />
        <MessengerIcon />
      </div>
    </footer>
  );
}
