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
  Check,
  ArrowUpRight
} from "lucide-react";

const services = [
  { 
    slug: "sprzatanie-biur", 
    title: "Sprzątanie biur",
    description: "Codzienne utrzymanie czystości w biurach i przestrzeniach firmowych. Elastyczne godziny, stały zespół.",
    features: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja", "Obsługa kuchni"],
    icon: Building2,
    gradient: "from-primary to-accent",
  },
  { 
    slug: "sprzatanie-mieszkan", 
    title: "Sprzątanie mieszkań",
    description: "Jednorazowe lub regularne sprzątanie domów i apartamentów. Ekologiczne środki, gwarancja jakości.",
    features: ["Sprzątanie generalne", "Sprzątanie ekspresowe", "Mycie okien", "Prasowanie"],
    icon: Home,
    gradient: "from-accent to-primary",
  },
  { 
    slug: "sprzatanie-biurowcow", 
    title: "Sprzątanie biurowców",
    description: "Kompleksowa obsługa dużych obiektów biurowych. Serwis dzienny, obsługa 24/7.",
    features: ["Obsługa 24/7", "Serwis dzienny", "Części wspólne", "Koordynator"],
    icon: Warehouse,
    gradient: "from-primary to-accent",
  },
  { 
    slug: "sprzatanie-po-remoncie", 
    title: "Sprzątanie po remoncie",
    description: "Dokładne usunięcie kurzu, pyłu i resztek po pracach budowlanych.",
    features: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju", "Polerowanie"],
    icon: Sparkles,
    gradient: "from-accent to-primary",
  },
  { 
    slug: "sprzatanie-hoteli", 
    title: "Sprzątanie hoteli",
    description: "Profesjonalna obsługa hoteli, pensjonatów i apartamentów na wynajem.",
    features: ["Pokoje hotelowe", "Wymiana pościeli", "Pranie", "Room service"],
    icon: Hotel,
    gradient: "from-primary to-accent",
  },
  { 
    slug: "sprzatanie-hal", 
    title: "Sprzątanie hal",
    description: "Specjalistyczne czyszczenie hal produkcyjnych, magazynów i obiektów przemysłowych.",
    features: ["Posadzki przemysłowe", "Mycie maszyn", "Utylizacja", "BHP"],
    icon: Factory,
    gradient: "from-accent to-primary",
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
          <section className="pt-32 pb-24 bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Nasze usługi
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                  Kompleksowe
                  <br />
                  <span className="text-primary">usługi sprzątające</span>
                </h1>
                <p className="text-xl text-background/70 max-w-xl">
                  Od biur po hale przemysłowe - zapewniamy profesjonalne sprzątanie 
                  dostosowane do Twoich potrzeb.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-background">
            <div className="container-narrow mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-6">
                {services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  
                  return (
                    <Link 
                      key={service.slug}
                      to={`/uslugi/${service.slug}`}
                      className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                      {/* Hover gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                            <ServiceIcon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                          {service.title}
                        </h2>
                        
                        <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 transition-colors">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-muted group-hover:bg-primary-foreground/20 text-foreground group-hover:text-primary-foreground transition-colors"
                            >
                              <Check className="w-3 h-3" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-16 bg-muted/50">
            <div className="container-narrow mx-auto px-4">
              <div className="bg-card rounded-3xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Nie wiesz, czego potrzebujesz?
                  </h3>
                  <p className="text-muted-foreground">
                    Zadzwoń - doradzimy i dobierzemy usługę do Twoich potrzeb. Wycena gratis!
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

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UslugiPage;
