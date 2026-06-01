import equipaImg from "@/assets/equipa.asset.json";

export function Team() {
  return (
    <section id="equipa" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            A Nossa Equipa
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-foreground md:text-6xl">
            Pessoas que fazem a diferença.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Instrutores experientes, dedicados e apaixonados pelo que fazem.
            Estamos consigo desde a primeira aula até ao dia da prova.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
          <img
            src={equipaImg.url}
            alt="Equipa A1 Norte"
            className="aspect-[16/9] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-12">
            <p className="font-display text-3xl text-white md:text-4xl">
              Mais do que uma escola.
            </p>
            <p className="mt-2 text-white/80">Uma família que celebra cada conquista.</p>
          </div>
        </div>
      </div>
    </section>
  );
}