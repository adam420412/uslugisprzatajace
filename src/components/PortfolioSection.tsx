import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cleanOffice from "@/assets/clean-office.jpg";
import cleanApartment from "@/assets/clean-apartment.jpg";
import cleanLobby from "@/assets/clean-lobby.jpg";
import cleanHotel from "@/assets/clean-hotel.jpg";

const projects = [
  {
    title: "Biurowiec Centrum Warszawy",
    category: "Sprzątanie biurowców",
    description: "Kompleksowa obsługa 15-piętrowego biurowca. Codzienny serwis dla 500+ pracowników.",
    stats: "8 000 m²",
    image: cleanLobby,
    href: "/uslugi/sprzatanie-biurowcow",
  },
  {
    title: "Apartament premium",
    category: "Sprzątanie mieszkań",
    description: "Regularne sprzątanie luksusowego apartamentu. Dbałość o każdy detal.",
    stats: "180 m²",
    image: cleanApartment,
    href: "/uslugi/sprzatanie-mieszkan",
  },
  {
    title: "Sieć hoteli",
    category: "Sprzątanie hoteli",
    description: "Obsługa 3 hoteli w centrum miasta. Codzienne sprzątanie 200+ pokoi.",
    stats: "200+ pokoi",
    image: cleanHotel,
    href: "/uslugi/sprzatanie-hoteli",
  },
  {
    title: "Biuro korporacyjne",
    category: "Sprzątanie biur",
    description: "Utrzymanie czystości w nowoczesnym biurze open-space dla firmy IT.",
    stats: "1 200 m²",
    image: cleanOffice,
    href: "/uslugi/sprzatanie-biur",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="realizacje" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nasze realizacje
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zaufali nam klienci z różnych branż
          </h2>
          <p className="text-muted-foreground text-lg">
            Zobacz przykłady naszych realizacji. Obsługujemy zarówno duże firmy, 
            jak i klientów indywidualnych.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {project.stats}
                  </span>
                  <Link 
                    to={project.href}
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    Zobacz usługę
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#kontakt">
              Zostań naszym klientem
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
