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
  CheckCircle2
} from "lucide-react";

const services = [
  { 
    slug: "sprzatanie-biur", 
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  { 
    slug: "sprzatanie-mieszkan", 
    icon: Home,
    color: "from-emerald-500 to-emerald-600"
  },
  { 
    slug: "sprzatanie-biurowcow", 
    icon: Warehouse,
    color: "from-purple-500 to-purple-600"
  },
  { 
    slug: "sprzatanie-po-remoncie", 
    icon: Sparkles,
    color: "from-amber-500 to-amber-600"
  },
  { 
    slug: "sprzatanie-hoteli", 
    icon: Hotel,
    color: "from-rose-500 to-rose-600"
  },
  { 
    slug: "sprzatanie-hal", 
    icon: Factory,
    color: "from-slate-500 to-slate-600"
  },
];

export const UslugiPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Usługi Sprzątania | Dom Blasku Warszawa</title>
        <meta 
          name="description" 
          content="Profesjonalne usługi sprzątania biur, mieszkań, biurowców i hoteli w Warszawie. Sprawdź naszą ofertę i zamów bezpłatną wycenę." 
        />
        <link rel="canonical" href="https://domblasku.pl/uslugi" />
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
                  {t("services.badge")}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  {t("services.title")}
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  {t("services.description")}
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
                  const serviceKey = `services.${service.slug.replace("sprzatanie-", "").replace("-", "")}` as const;
                  
                  // Map slugs to translation keys
                  const keyMap: Record<string, string> = {
                    "sprzatanie-biur": "office",
                    "sprzatanie-mieszkan": "apartment",
                    "sprzatanie-biurowcow": "building",
                    "sprzatanie-po-remoncie": "renovation",
                    "sprzatanie-hoteli": "hotel",
                    "sprzatanie-hal": "industrial",
                  };
                  
                  const translationKey = keyMap[service.slug];
                  
                  return (
                    <div 
                      key={service.slug}
                      className="group card-elevated p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {t(`services.${translationKey}.title`)}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6">
                        {t(`services.${translationKey}.description`)}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>{t(`services.${translationKey}.features.${Object.keys(t(`services.${translationKey}.features`, { returnObjects: true }) as object)[0]}`)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>{t(`services.${translationKey}.features.${Object.keys(t(`services.${translationKey}.features`, { returnObjects: true }) as object)[1]}`)}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <Link to={`/uslugi/${service.slug}`}>
                          {t("services.viewDetails")}
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
