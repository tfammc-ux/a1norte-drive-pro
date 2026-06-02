const WHATSAPP_NUMBER = "351220000000";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de mais informações sobre a carta de condução na A1 Norte."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-foreground py-24 text-background md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-background md:text-7xl">
            Pronto para começar?
          </h2>
          <p className="mt-6 max-w-md text-lg text-background/70">
            Fale connosco diretamente por WhatsApp. Resposta rápida, sem
            burocracias, para esclarecer todas as suas dúvidas.
          </p>
          <div className="mt-10 space-y-6">
            {[
              { label: "Telefone", value: "+351 220 000 000" },
              { label: "Email", value: "geral@a1norte.pt" },
              { label: "Morada", value: "Rua Principal, 123 — Porto" },
              { label: "Horário", value: "Seg–Sex 09h–19h · Sáb 09h–13h" },
            ].map((c) => (
              <div key={c.label} className="border-b border-background/10 pb-4">
                <div className="text-xs uppercase tracking-[0.2em] text-background/50">
                  {c.label}
                </div>
                <div className="mt-1 text-lg text-background">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-background/5 p-10 backdrop-blur-sm md:p-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]">
            <svg
              viewBox="0 0 32 32"
              fill="white"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.1 7.9L.3 31.6l7.9-2.1c2.3 1.3 5 1.9 7.8 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.7 1.2 1.3-4.6-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3 0-7.3 6-13.2 13.3-13.2s13.2 5.9 13.2 13.2-5.9 13.4-13.2 13.4zm7.3-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3.1-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7H10c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4.1.2.3 2.8 4.3 6.8 6 4 1.7 4 1.1 4.7 1 .7-.1 2.4-1 2.7-1.9.3-1 .3-1.8.2-1.9 0-.1-.3-.2-.7-.4z" />
            </svg>
          </div>
          <h3 className="mt-6 font-display text-3xl text-background md:text-4xl">
            Fale connosco no WhatsApp
          </h3>
          <p className="mt-3 text-background/70">
            A forma mais rápida de tirar dúvidas, marcar uma visita ou começar
            a sua inscrição.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <svg viewBox="0 0 32 32" fill="white" className="h-5 w-5" aria-hidden="true">
              <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.1 7.9L.3 31.6l7.9-2.1c2.3 1.3 5 1.9 7.8 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4z" />
            </svg>
            Abrir conversa no WhatsApp
          </a>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-background/40">
            Resposta típica em poucos minutos
          </p>
        </div>
      </div>
    </section>
  );
}