import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="A1 Norte" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-display text-lg tracking-wider">A1 NORTE</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Escola de Condução A1 Norte. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="https://www.facebook.com/ec.a1norte/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Facebook</a>
          <a href="https://www.instagram.com/a1_norte/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
          <a href="https://wa.me/351936241316" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}