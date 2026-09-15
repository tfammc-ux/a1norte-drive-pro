import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/area-aluno")({
  head: () => ({
    meta: [
      { title: "Área do Aluno — A1 Norte" },
      {
        name: "description",
        content:
          "Área reservada aos alunos da Escola de Condução A1 Norte: horário das aulas de código e avisos importantes.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Área do Aluno — A1 Norte" },
      {
        property: "og:description",
        content: "Horário das aulas de código e avisos para os alunos da A1 Norte.",
      },
      { property: "og:url", content: "https://www.escoladeconducaoa1norte.pt/area-aluno" },
    ],
    links: [
      { rel: "canonical", href: "https://www.escoladeconducaoa1norte.pt/area-aluno" },
    ],
  }),
  component: AreaAluno,
});

const STORAGE_KEY = "a1norte-area-aluno";
const ACCESS_CODE = "A1norte";

const horarioHoras = ["10H", "15H", "18H"];
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const indiceSemAulas = 2; // Quarta-feira sem aulas

const avisos = [
  {
    titulo: "Chega 10 minutos antes",
    texto:
      "Chega com antecedência para te instalares com calma. As aulas começam à hora marcada para não interromper a sessão.",
  },
  {
    titulo: "Sem marcação",
    texto:
      "Não é necessária marcação para assistir às aulas de código: basta aparecer no horário que te der mais jeito.",
  },
  {
    titulo: "Testes de código",
    texto:
      "Os testes de código estão disponíveis online ou presencialmente nos computadores da escola. Faz pelo menos 3 testes antes do dia do exame — é a melhor forma de garantir a aprovação.",
  },
];

function AreaAluno() {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === ACCESS_CODE);
    setChecked(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      localStorage.setItem(STORAGE_KEY, ACCESS_CODE);
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setCode("");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="A1 Norte" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display text-xl tracking-wider text-foreground">A1 NORTE</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {!checked ? null : unlocked ? (
        <AlunoContent />
      ) : (
        <section className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card sm:p-10">
            <div className="mb-6 flex flex-col items-center text-center">
              <img
                src={logo}
                alt="A1 Norte"
                className="mb-4 h-16 w-16 rounded-full object-cover"
              />
              <h1 className="font-display text-3xl tracking-wide text-foreground">
                Área do Aluno
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Introduz o código de acesso para entrares na tua área reservada.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="codigo"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Código de Acesso
                </label>
                <input
                  id="codigo"
                  type="password"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError(false);
                  }}
                  placeholder="Insere o teu código"
                  autoFocus
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-center text-lg tracking-widest outline-none transition-colors placeholder:text-sm placeholder:tracking-normal ${
                    error
                      ? "border-destructive focus:border-destructive"
                      : "border-input focus:border-accent"
                  }`}
                />
                {error && (
                  <p className="mt-2 text-sm text-destructive">
                    Código incorreto. Tenta novamente ou contacta a escola.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Entrar
              </button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

function AlunoContent() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Área reservada
        </p>
        <h1 className="mt-1 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Bem-vindo, Aluno
        </h1>
        <p className="mt-2 text-muted-foreground">
          Aqui encontras o teu horário de aulas de código e as informações mais importantes.
        </p>
      </div>

      {/* Horário */}
      <section className="mb-14">
        <h2 className="mb-5 font-display text-2xl tracking-wide text-foreground sm:text-3xl">
          Horário das Aulas de Código
        </h2>

        {/* Tabela (desktop) */}
        <div className="hidden overflow-hidden rounded-2xl border border-border bg-card shadow-card md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Dia
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Hora
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Tema
                </th>
              </tr>
            </thead>
            <tbody>
              {horario.map((h) => (
                <tr key={h.dia} className="border-b border-border last:border-0">
                  <td className="px-6 py-4 font-medium text-foreground">{h.dia}</td>
                  <td className="px-6 py-4 text-muted-foreground">{h.hora}</td>
                  <td className="px-6 py-4 text-muted-foreground">{h.tema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cartões (telemóvel) */}
        <div className="space-y-3 md:hidden">
          {horario.map((h) => (
            <div key={h.dia} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg tracking-wide text-foreground">{h.dia}</span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                  {h.hora}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{h.tema}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avisos */}
      <section>
        <h2 className="mb-5 font-display text-2xl tracking-wide text-foreground sm:text-3xl">
          Avisos e Informações Relevantes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {avisos.map((a) => (
            <article
              key={a.titulo}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <h3 className="font-display text-xl tracking-wide text-foreground">{a.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
