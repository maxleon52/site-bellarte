import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-4 md:px-8 xl:px-16 2xl:px-40">
      <h2 className="text-center">Não achou o que gostaria? 🙁</h2>

      <div className="flex flex-col items-center gap-1">
        <p className="text-center">
          Não se preocupe! Teremos o maior prazer em criar uma peça exclusiva
          pra você!
        </p>
        <span>🤩🤩🤩</span>
      </div>

      <p className="text-center">
        Entre em contato pelo nosso whatsapp, basta clicar no icone flutuando na
        tela.
      </p>
    </section>
  );
}
