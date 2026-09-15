import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#categorias", label: "Categorias" },
  { href: "/#equipa", label: "Equipa" },
  { href: "/#contacto", label: "Contacto" },
  { href: "/area-aluno", label: "Área do Aluno" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="A1 Norte"
            className={`h-10 w-10 rounded-full object-cover transition-all ${
              scrolled ? "" : "bg-white/95 ring-2 ring-white/80"
            }`}
          />
          <span
            className={`font-display text-xl tracking-wider transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            A1 NORTE
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Inscrever
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 ${scrolled ? "bg-foreground" : "bg-white"}`} />
            <span className={`block h-0.5 w-6 ${scrolled ? "bg-foreground" : "bg-white"}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}