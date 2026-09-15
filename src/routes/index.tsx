import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Categories } from "@/components/site/Categories";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A1 Norte — Escola de Condução" },
      { name: "description", content: "Escola de Condução A1 Norte. Formação profissional para todas as categorias de carta. Inscreva-se hoje." },
      { property: "og:title", content: "A1 Norte — Escola de Condução" },
      { property: "og:description", content: "Formação profissional para todas as categorias de carta no Norte de Portugal." },
      { property: "og:url", content: "https://www.escoladeconducaoa1norte.pt/" },
    ],
    links: [
      { rel: "canonical", href: "https://www.escoladeconducaoa1norte.pt/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Escola de Condução A1 Norte",
          url: "https://www.escoladeconducaoa1norte.pt/",
          telephone: "+351 936 241 316",
          email: "ec.a1norte@gmail.com",
          areaServed: "PT",
          sameAs: [
            "https://www.instagram.com/a1_norte/",
            "https://www.facebook.com/ec.a1norte/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Categories />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
