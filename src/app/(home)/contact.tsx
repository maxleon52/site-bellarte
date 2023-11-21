import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-4 py-12 md:px-8 xl:px-16 2xl:px-40">
      <h3 className="text-xl font-bold text-slate-400 text-transparent md:text-3xl">
        Não achou o que gostaria? 🙁
      </h3>

      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-lg font-semibold text-slate-400 md:text-xl">
          Não se preocupe! Teremos o maior prazer em criar uma peça exclusiva
          pra você!
        </p>
        <span className="md:text-xl">🤩🤩🤩</span>
      </div>

      <p className="text-center text-lg font-semibold text-slate-400 md:text-xl">
        Entre em contato pelo nosso whatsapp, basta clicar no icone flutuando na
        tela.
      </p>
    </section>
  );
}
