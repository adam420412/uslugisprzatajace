import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Building2, Home, Warehouse, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Sprzątanie jednorazowe",
    description: "Idealne na specjalne okazje lub po remoncie",
    price: "od 25",
    unit: "zł/m²",
    features: [
      "Kompleksowe sprzątanie",
      "Własny sprzęt i środki",
      "Mycie okien w cenie",
      "Gwarancja jakości",
      "Faktura VAT",
    ],
    popular: false,
    icon: Home,
  },
  {
    name: "Sprzątanie regularne",
    description: "Stała współpraca z rabatem do 30%",
    price: "od 18",
    unit: "zł/m²",
    features: [
      "Wszystko z jednorazowego",
      "Rabat do 30%",
      "Stały zespół sprzątający",
      "Elastyczny harmonogram",
      "Dedykowany opiekun",
      "Priorytetowa obsługa",
    ],
    popular: true,
    icon: Building2,
  },
  {
    name: "Dla dużych obiektów",
    description: "Biurowce, hotele, centra handlowe",
    price: "Wycena",
    unit: "indywidualna",
    features: [
      "Obsługa 24/7",
      "Serwis dzienny",
      "Koordynator projektu",
      "Raporty miesięczne",
      "SLA gwarancji",
      "Rozliczenie miesięczne",
    ],
    popular: false,
    icon: Warehouse,
  },
];

const additionalServices = [
  { name: "Mycie okien", price: "od 15 zł/m²" },
  { name: "Pranie dywanów", price: "od 20 zł/m²" },
  { name: "Pranie tapicerki", price: "od 50 zł/szt" },
  { name: "Czyszczenie po remoncie", price: "od 30 zł/m²" },
  { name: "Dezynfekcja", price: "od 10 zł/m²" },
  { name: "Sprzątanie po imprezie", price: "od 500 zł" },
];

export const CennikPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cennik Sprzątania Gdańsk | Koszt Usług Sprzątających</title>
        <meta 
          name="description" 
          content="Sprawdź cennik usług sprzątających w Gdańsku. Transparentne stawki za sprzątanie biur, mieszkań, hoteli i hal. Zamów darmową wycenę online już dziś!" 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/cennik" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-24 bg-foreground text-background relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Cennik
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                  Przejrzyste ceny,
                  <br />
                  <span className="text-primary">bez niespodzianek</span>
                </h1>
                <p className="text-xl text-background/70 max-w-xl">
                  Dokładnie wiesz, ile zapłacisz. Bez ukrytych kosztów. 
                  Wycena przed rozpoczęciem pracy.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="py-20 bg-background relative">
            <div className="container-narrow mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 -mt-20 relative z-20">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground shadow-2xl scale-105 z-10' 
                        : 'bg-card border border-border shadow-lg'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-2 bg-foreground text-background text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                          <Sparkles className="w-4 h-4" />
                          Najpopularniejszy
                        </div>
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                    }`}>
                      <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ml-1 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {plan.unit}
                      </span>
                    </div>

                    <ul className="space-y-3 flex-grow mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                          }`}>
                            <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                          </div>
                          <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "secondary" : "cta"}
                      size="lg"
                      className={`w-full ${plan.popular ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' : ''}`}
                      asChild
                    >
                      <Link to="/kontakt">
                        Zamów wycenę
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Services */}
          <section className="py-20 bg-muted/50">
            <div className="container-narrow mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Usługi dodatkowe
                </h2>
                <p className="text-muted-foreground">
                  Możesz dołączyć do każdego pakietu
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {additionalServices.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-5 bg-card rounded-xl border border-border"
                  >
                    <span className="font-medium text-foreground">{service.name}</span>
                    <span className="text-primary font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-16 bg-background">
            <div className="container-narrow mx-auto px-4">
              <div className="bg-card rounded-3xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Potrzebujesz indywidualnej wyceny?
                  </h3>
                  <p className="text-muted-foreground">
                    Zadzwoń lub napisz - przygotujemy ofertę dopasowaną do Twoich potrzeb.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" asChild>
                    <a href="tel:+48123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/kontakt">
                      Formularz kontaktowy
                    </Link>
                  </Button>
                </div>
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

export default CennikPage;
