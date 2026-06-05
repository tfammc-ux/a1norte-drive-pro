const WHATSAPP_NUMBER = "351936241316";
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
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Contacto
        </span>
        <h2 className="mt-4 font-display text-5xl leading-[1] text-background md:text-7xl">
          Pronto para começar?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-background/70">
          Fala connosco diretamente. Resposta rápida, sem burocracias.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="tel:+351936241316"
            className="rounded-2xl border border-background/10 bg-background/5 p-8 text-left transition-colors hover:bg-background/10"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-background/50">Telefone</div>
            <div className="mt-2 font-display text-2xl text-background">936 241 316</div>
          </a>
          <a
            href="mailto:ec.a1norte@gmail.com"
            className="rounded-2xl border border-background/10 bg-background/5 p-8 text-left transition-colors hover:bg-background/10"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-background/50">Email</div>
            <div className="mt-2 font-display text-2xl text-background break-all">ec.a1norte@gmail.com</div>
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          <svg viewBox="0 0 32 32" fill="white" className="h-5 w-5" aria-hidden="true">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.1 7.9L.3 31.6l7.9-2.1c2.3 1.3 5 1.9 7.8 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4z" />
          </svg>
          Falar no WhatsApp
        </a>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-background/60">
          <a href="https://www.instagram.com/a1_norte/" target="_blank" rel="noopener noreferrer" className="hover:text-background">Instagram</a>
          <span className="text-background/20">·</span>
          <a href="https://www.facebook.com/ec.a1norte/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-background">Facebook</a>
        </div>
      </div>
    </section>
  );
}