import { Check, TrendingUp, Heart, Zap, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      titleKey: "benefits.items.productivity.title",
      descKey: "benefits.items.productivity.description",
      fallbackTitle: "Zwiększona produktywność",
      fallbackDesc: "Czyste biuro to efektywni pracownicy. Badania pokazują, że czystość wpływa na koncentrację i motywację.",
      stat: "+35%",
      statLabel: "wydajności",
    },
    {
      icon: Heart,
      titleKey: "benefits.items.health.title",
      descKey: "benefits.items.health.description",
      fallbackTitle: "Zdrowe środowisko",
      fallbackDesc: "Regularne sprzątanie eliminuje alergeny, kurz i bakterie, dbając o zdrowie Twoje i Twoich bliskich.",
      stat: "-60%",
      statLabel: "alergenów",
    },
    {
      icon: Zap,
      titleKey: "benefits.items.time.title",
      descKey: "benefits.items.time.description",
      fallbackTitle: "Oszczędność czasu",
      fallbackDesc: "Skup się na tym, co ważne. My zajmiemy się sprzątaniem, a Ty zyskasz cenny czas dla siebie.",
      stat: "10h",
      statLabel: "tygodniowo",
    },
  ];

  const features = [
    t("benefits.features.flexible", "Elastyczne terminy sprzątania"),
    t("benefits.features.equipment", "Własny sprzęt i środki czystości"),
    t("benefits.features.insurance", "Ubezpieczenie od szkód"),
    t("benefits.features.team", "Stała ekipa sprzątająca"),
    t("benefits.features.invoice", "Faktura VAT"),
    t("benefits.features.nohidden", "Brak ukrytych kosztów"),
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("benefits.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("benefits.title")}
          </h2>
        </div>

        {/* Benefits cards - horizontal layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="h-full p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300">
                {/* Stat badge */}
                <div className="absolute -top-4 right-8 bg-primary text-primary-foreground rounded-full px-4 py-1 font-bold text-lg">
                  {benefit.stat}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(benefit.titleKey, benefit.fallbackTitle)}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {t(benefit.descKey, benefit.fallbackDesc)}
                </p>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">{benefit.stat}</span> {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features checklist */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl" />
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t("benefits.included", "W cenie każdej usługi:")}
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-80">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary mb-1">100%</div>
                    <div className="text-muted-foreground">{t("benefits.guarantee.title", "Gwarancja satysfakcji")}</div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    {t("benefits.guarantee.description", "Jeśli nie będziesz zadowolony z naszych usług, wrócimy i poprawimy bez dodatkowych opłat.")}
                  </p>
                  <Button variant="cta" className="w-full" asChild>
                    <a href="#kontakt">
                      Zamów wycenę
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
