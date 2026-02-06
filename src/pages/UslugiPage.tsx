import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Home, 
  Warehouse, 
  Sparkles, 
  Hotel, 
  Factory,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  { 
    slug: "sprzatanie-biur", 
    title: "Sprzątanie biur",
    description: "Codzienne utrzymanie czystości w biurach i przestrzeniach firmowych.",
    features: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja powierzchni"],
    icon: Building2,
  },
  { 
    slug: "sprzatanie-mieszkan", 
    title: "Sprzątanie mieszkań",
    description: "Jednorazowe lub regularne sprzątanie domów i apartamentów.",
    features: ["Sprzątanie generalne", "Sprzątanie po remoncie", "Mycie okien"],
    icon: Home,
  },
  { 
    slug: "sprzatanie-biurowcow", 
    title: "Sprzątanie biurowców",
    description: "Kompleksowa obsługa dużych obiektów biurowych.",
    features: ["Obsługa 24/7", "Serwis dzienny", "Części wspólne"],
    icon: Warehouse,
  },
  { 
    slug: "sprzatanie-po-remoncie", 
    title: "Sprzątanie po remoncie",
    description: "Dokładne usunięcie kurzu i resztek po pracach budowlanych.",
    features: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju i farby"],
    icon: Sparkles,
  },
  { 
    slug: "sprzatanie-hoteli", 
    title: "Sprzątanie hoteli",
    description: "Profesjonalna obsługa hoteli i apartamentów na wynajem.",
    features: ["Pokoje hotelowe", "Wymiana pościeli", "Pranie i prasowanie"],
    icon: Hotel,
  },
  { 
    slug: "sprzatanie-hal", 
    title: "Sprzątanie hal",
    description: "Specjalistyczne czyszczenie hal produkcyjnych i magazynów.",
    features: ["Posadzki przemysłowe", "Mycie maszyn", "Utylizacja odpadów"],
    icon: Factory,
  },
];

export const UslugiPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Usługi Sprzątania | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Profesjonalne usługi sprzątania biur, mieszkań, biurowców i hoteli. Sprawdź naszą ofertę i zamów bezpłatną wycenę." 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/uslugi" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                  Nasze usługi
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  Kompleksowe usługi sprzątające
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  Oferujemy szeroki zakres profesjonalnych usług sprzątania dla firm i osób prywatnych.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const ServiceIcon = service.icon;
                  
                  return (
                    <div 
                      key={service.slug}
                      className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <ServiceIcon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <Link to={`/uslugi/${service.slug}`}>
                          Dowiedz się więcej
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UslugiPage;
