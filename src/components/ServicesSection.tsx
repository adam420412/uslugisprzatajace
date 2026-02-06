import { Building2, Home, Sparkles, Warehouse, Hotel, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      title: "Sprzątanie biur",
      description: "Codzienne utrzymanie czystości, dezynfekcja, mycie okien i podłóg.",
      features: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja"],
      href: "/uslugi/sprzatanie-biur",
    },
    {
      icon: Home,
      title: "Sprzątanie mieszkań",
      description: "Jednorazowe lub regularne sprzątanie domów i apartamentów.",
      features: ["Sprzątanie generalne", "Sprzątanie po remoncie", "Mycie okien"],
      href: "/uslugi/sprzatanie-mieszkan",
    },
    {
      icon: Warehouse,
      title: "Sprzątanie biurowców",
      description: "Kompleksowa obsługa dużych obiektów biurowych i korporacyjnych.",
      features: ["Obsługa 24/7", "Serwis dzienny", "Części wspólne"],
      href: "/uslugi/sprzatanie-biurowcow",
    },
    {
      icon: Sparkles,
      title: "Sprzątanie po remoncie",
      description: "Dokładne usunięcie kurzu, pyłu i resztek po pracach budowlanych.",
      features: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju"],
      href: "/uslugi/sprzatanie-po-remoncie",
    },
    {
      icon: Hotel,
      title: "Sprzątanie hoteli",
      description: "Profesjonalna obsługa hoteli, pensjonatów i apartamentów na wynajem.",
      features: ["Pokoje hotelowe", "Wymiana pościeli", "Pranie"],
      href: "/uslugi/sprzatanie-hoteli",
    },
    {
      icon: Factory,
      title: "Sprzątanie hal",
      description: "Specjalistyczne czyszczenie hal produkcyjnych i magazynów.",
      features: ["Posadzki przemysłowe", "Maszyny", "Utylizacja"],
      href: "/uslugi/sprzatanie-hal",
    },
  ];

  return (
    <section id="uslugi" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nasze usługi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kompleksowe usługi sprzątające
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferujemy szeroki zakres usług dla firm i osób prywatnych. 
            Każdą usługę dostosowujemy do Twoich potrzeb.
          </p>
        </div>

        {/* Services grid - card layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group"
            >
              <article className="h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/uslugi">
              Zobacz wszystkie usługi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
