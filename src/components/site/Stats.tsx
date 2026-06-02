const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "+1.000", label: "Alunos aprovados" },
  { value: "Categoria B", label: "Especialistas em ligeiros" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-foreground py-16 text-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-display text-5xl text-background md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-background/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}