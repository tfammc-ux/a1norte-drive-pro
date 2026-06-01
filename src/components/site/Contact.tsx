export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Contacto
          </span>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-background md:text-7xl">
            Pronto para começar?
          </h2>
          <p className="mt-6 max-w-md text-lg text-background/70">
            Fale connosco hoje mesmo. Esclarecemos todas as suas dúvidas e
            ajudamos a escolher o plano ideal para si.
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href =
              "mailto:geral@a1norte.pt?subject=Inscrição A1 Norte";
          }}
          className="rounded-2xl bg-background/5 p-8 backdrop-blur-sm md:p-10"
        >
          <h3 className="font-display text-3xl text-background">Pedido de informações</h3>
          <p className="mt-2 text-sm text-background/60">
            Preencha e entraremos em contacto consigo.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { name: "nome", label: "Nome", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "telefone", label: "Telefone", type: "tel" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs uppercase tracking-widest text-background/50">
                  {f.label}
                </label>
                <input
                  required
                  type={f.type}
                  name={f.name}
                  className="mt-2 w-full border-b border-background/20 bg-transparent py-2 text-background outline-none placeholder:text-background/30 focus:border-accent"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-widest text-background/50">
                Categoria pretendida
              </label>
              <select
                name="categoria"
                className="mt-2 w-full border-b border-background/20 bg-transparent py-2 text-background outline-none focus:border-accent"
              >
                {["B - Ligeiros", "A1", "A2", "A", "AM", "BE"].map((o) => (
                  <option key={o} value={o} className="bg-foreground text-background">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-10 w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Enviar pedido
          </button>
        </form>
      </div>
    </section>
  );
}