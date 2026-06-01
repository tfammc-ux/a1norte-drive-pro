const categories = [
  { code: "B", title: "Ligeiros", desc: "Automóveis até 3.500 kg e 9 lugares.", age: "18 anos" },
  { code: "A1", title: "Motociclos 125cc", desc: "Motociclos até 125 cc e 11 kW.", age: "16 anos" },
  { code: "A2", title: "Motociclos médios", desc: "Motociclos até 35 kW de potência.", age: "18 anos" },
  { code: "A", title: "Motociclos", desc: "Sem limite de cilindrada ou potência.", age: "24 anos" },
  { code: "AM", title: "Ciclomotores", desc: "Ciclomotores até 50 cc e 45 km/h.", age: "16 anos" },
  { code: "BE", title: "Ligeiros c/ reboque", desc: "Conjunto até 7.000 kg de PB.", age: "18 anos" },
];

export function Categories() {
  return (
    <section id="categorias" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Categorias
            </span>
            <h2 className="mt-4 font-display text-5xl leading-[1] text-foreground md:text-6xl">
              Escolha a sua carta.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Formação completa em todas as categorias de carta de condução,
            adaptada ao seu ritmo e objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div
              key={c.code}
              className="group relative bg-card p-8 transition-colors hover:bg-foreground"
            >
              <div className="flex items-start justify-between">
                <div className="font-display text-7xl leading-none text-foreground transition-colors group-hover:text-accent">
                  {c.code}
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-background/20 group-hover:text-background/70">
                  ≥ {c.age}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground transition-colors group-hover:text-background">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-background/70">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}