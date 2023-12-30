import * as React from "react";

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

function FacebookIcon({ className }: IconProps) {
  return (
    <a
      href="https://www.facebook.com/bellartecroch?sfnsn=wiwspwa&mibextid=vk8aRt"
      target="_blank"
      className="rounded-full"
    >
      <svg
        width={70}
        height={70}
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-10 w-10", className)}
      >
        <circle cx={35} cy={35} r={35} fill="url(#paint0_linear_30301_4886)" />
        <mask
          id="a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={70}
          height={70}
        >
          <circle
            cx={35}
            cy={35}
            r={35}
            fill="url(#paint1_linear_30301_4886)"
          />
        </mask>
        <g mask="url(#a)">
          <path
            d="M49.165 47.248l1.453-9.41h-9.08v-6.107c0-2.574 1.269-5.084 5.335-5.084H51v-8.012S47.255 18 43.674 18c-7.476 0-12.363 4.508-12.363 12.667v7.173H23v9.41h8.311V70H41.54V47.25l7.626-.002z"
            fill="#fff"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_30301_4886"
            x1={35}
            y1={0}
            x2={35}
            y2={70}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ABBFC" />
            <stop offset={1} stopColor="#095CFA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_30301_4886"
            x1={35}
            y1={0}
            x2={35}
            y2={70}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0ABBFC" />
            <stop offset={1} stopColor="#095BFA" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

export default FacebookIcon;
