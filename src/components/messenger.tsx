import * as React from "react";

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

function MessengerIcon({ className }: IconProps) {
  return (
    <a href="" className="rounded-full">
      <svg
        width={70}
        height={70}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10 w-10", className)}
      >
        <circle cx={35} cy={35} r={35} fill="url(#paint0_linear_30304_4900)" />
        <path
          d="M15 34.4C15 23.253 23.733 15 35 15s20 8.253 20 19.4c0 11.148-8.733 19.4-20 19.4-2.025 0-3.965-.267-5.79-.767a1.597 1.597 0 00-1.068.075l-3.97 1.755a1.6 1.6 0 01-2.245-1.416l-.11-3.557a1.598 1.598 0 00-.537-1.14C17.39 45.27 15 40.23 15 34.4zm13.865-3.647l-5.875 9.32c-.563.895.535 1.902 1.378 1.264l6.312-4.79a1.2 1.2 0 011.445-.005l4.672 3.505a3 3 0 004.338-.8l5.875-9.32c.565-.895-.535-1.902-1.377-1.264l-6.313 4.79a1.2 1.2 0 01-1.445.005l-4.672-3.508a3 3 0 00-4.338.8v.003z"
          fill="#fff"
        />
        <defs>
          <linearGradient
            id="paint0_linear_30304_4900"
            x1={9.1}
            y1={75.95}
            x2={77.5}
            y2={-24}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A6DFF" />
            <stop offset={0.604453} stopColor="#C822FF" stopOpacity={0.82} />
            <stop offset={0.844119} stopColor="#6DC7FF" />
            <stop offset={1} stopColor="#E6ABFF" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

export default MessengerIcon;
