import React from "react";

import { faqs } from "@/constants";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-slate-100 p-4 py-12 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="w-full bg-gradient-to-r from-bellarte-400 via-bellarte-300 to-bellarte-200 bg-clip-text text-left text-3xl font-bold text-transparent md:h-14 md:text-center md:text-5xl">
        Perguntas frequentes
      </h2>

      <div className="w-full xl:max-w-[50%]">
        {faqs.map((item) => (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value={item.question}>
              <AccordionTrigger className="text-left text-base font-bold text-slate-400 md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-semibold text-slate-400 md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
