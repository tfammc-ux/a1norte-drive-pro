import { motion } from "motion/react";
import heroImg from "@/assets/aluna-carro.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Escola de Condução A1 Norte"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">
              Escola de Condução
            </span>
          </div>
          <h1 className="font-display text-6xl leading-[0.95] text-white md:text-8xl lg:text-9xl">
            A tua carta<br />
            <span className="text-accent">começa aqui.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-white/80 md:text-xl">
            Aprender a conduzir pode ser simples.<br />
            Com rigor, segurança e proximidade.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/351936241316?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20carta%20de%20condu%C3%A7%C3%A3o%20na%20A1%20Norte."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105"
            >
              Inscrever agora
            </a>
            <a
              href="#categorias"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
            >
              Ver categorias
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
}