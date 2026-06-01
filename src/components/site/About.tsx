import alunaImg from "@/assets/aluna-carta.asset.json";

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <img
            src={alunaImg.url}
            alt="Aluna com a sua nova carta de condução"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent p-6 text-accent-foreground shadow-[var(--shadow-card)] md:block">
            <div className="font-display text-4xl">+2.500</div>
            <div className="text-xs uppercase tracking-widest">
              Cartas entregues
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Sobre Nós
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-foreground md:text-6xl">
            Uma escola feita<br />para o seu sucesso.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Na A1 Norte acreditamos que aprender a conduzir é muito mais do
            que obter uma carta. É ganhar autonomia, confiança e segurança
            para uma vida inteira ao volante.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Com uma equipa qualificada, viaturas modernas e horários
            flexíveis, acompanhamos cada aluno em todas as etapas — do
            código à prova prática.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              "Instrutores certificados",
              "Viaturas recentes",
              "Horários flexíveis",
              "Apoio personalizado",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}