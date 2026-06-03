const features = [
  { title: "Automóveis", desc: "Automóveis ligeiros de passageiros e mercadorias até 3 500 kg e lotação até 9 lugares (incluindo condutor)." },
  { title: "Idade mínima 18 anos", desc: "Pode iniciar 6 meses antes de completar 18 anos." },
  { title: "Formação", desc: "28 horas de formação teórica e 32 horas de formação prática de condução." },
  { title: "Online", desc: "Disponível plataforma de ensino à distância que permite realizar horas de formação teórica." },
];

export function Categories() {
  return (
    <section id="categorias" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Categoria B
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-foreground md:text-6xl">
            A carta para a tua vida.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Especializamo-nos na formação da carta de condução de categoria B.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 rounded-3xl bg-card p-10 shadow-[var(--shadow-elegant)] md:grid-cols-[auto_1fr] md:gap-16 md:p-16">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="font-display text-[10rem] leading-none text-foreground md:text-[14rem]">
                B
              </div>
              <span className="absolute -top-2 right-0 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
                Ligeiros
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 self-center sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-display text-xl text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}