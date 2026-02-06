import { Building2, Home, Sparkles, Warehouse, Hotel, Factory, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      title: "Sprzątanie biur",
      shortDesc: "Codzienne utrzymanie czystości",
      href: "/uslugi/sprzatanie-biur",
      accent: "from-primary to-accent",
    },
    {
      icon: Home,
      title: "Sprzątanie mieszkań",
      shortDesc: "Domy i apartamenty",
      href: "/uslugi/sprzatanie-mieszkan",
      accent: "from-accent to-primary",
    },
    {
      icon: Warehouse,
      title: "Sprzątanie biurowców",
      shortDesc: "Duże obiekty komercyjne",
      href: "/uslugi/sprzatanie-biurowcow",
      accent: "from-primary to-accent",
    },
    {
      icon: Sparkles,
      title: "Sprzątanie po remoncie",
      shortDesc: "Usunięcie pyłu i resztek",
      href: "/uslugi/sprzatanie-po-remoncie",
      accent: "from-accent to-primary",
    },
    {
      icon: Hotel,
      title: "Sprzątanie hoteli",
      shortDesc: "Hotele i apartamenty",
      href: "/uslugi/sprzatanie-hoteli",
      accent: "from-primary to-accent",
    },
    {
      icon: Factory,
      title: "Sprzątanie hal",
      shortDesc: "Przemysł i magazyny",
      href: "/uslugi/sprzatanie-hal",
      accent: "from-accent to-primary",
    },
  ];

  return (
    <section id="uslugi" className="section-padding bg-muted/50 relative">
      <div className="container-narrow mx-auto">
        {/* Header with asymmetric layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Nasze usługi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Czego potrzebujesz?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Wybierz usługę, która odpowiada Twoim potrzebom. Każdą dostosowujemy indywidualnie.
          </p>
        </div>

        {/* Services - Bento grid style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                index === 0 || index === 3 ? 'md:col-span-1' : ''
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary-foreground mb-1 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-colors">
                  {service.shortDesc}
                </p>
                
                <div className="flex items-center gap-1 text-primary group-hover:text-primary-foreground text-sm font-medium transition-colors">
                  <span>Zobacz</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 bg-card rounded-3xl border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Nie wiesz, czego potrzebujesz?
            </h3>
            <p className="text-muted-foreground">
              Zadzwoń - doradzimy i dobierzemy usługę do Twoich potrzeb.
            </p>
          </div>
          <Button variant="cta" size="lg" asChild>
            <Link to="/kontakt">
              Bezpłatna konsultacja
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
