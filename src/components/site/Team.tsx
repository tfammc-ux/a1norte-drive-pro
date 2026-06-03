import inst1 from "@/assets/instalacoes-1.asset.json";
import inst2 from "@/assets/instalacoes-2.asset.json";

export function Team() {
  return (
    <section id="equipa" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            As Nossas Instalações
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-foreground md:text-6xl">
            Um espaço pensado para si.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Receção acolhedora e salas de formação modernas, equipadas para
            uma aprendizagem confortável e eficaz.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <img
              src={inst1.url}
              alt="Receção da escola A1 Norte"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <img
              src={inst2.url}
              alt="Sala de formação A1 Norte"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}