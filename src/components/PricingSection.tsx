import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: "pricing.plans.oneTime.name",
      descKey: "pricing.plans.oneTime.description",
      priceKey: "pricing.plans.oneTime.price",
      unitKey: "pricing.plans.oneTime.unit",
      featuresKey: "pricing.plans.oneTime.features",
      popular: false,
      accent: "border-border",
    },
    {
      nameKey: "pricing.plans.regular.name",
      descKey: "pricing.plans.regular.description",
      priceKey: "pricing.plans.regular.price",
      unitKey: "pricing.plans.regular.unit",
      featuresKey: "pricing.plans.regular.features",
      popular: true,
      accent: "border-primary",
    },
    {
      nameKey: "pricing.plans.office.name",
      descKey: "pricing.plans.office.description",
      priceKey: "pricing.plans.office.price",
      unitKey: "pricing.plans.office.unit",
      featuresKey: "pricing.plans.office.features",
      popular: false,
      accent: "border-border",
    },
  ];

  return (
    <section id="cennik" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("pricing.description")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey, { returnObjects: true }) as string[];
            
            return (
              <div
                key={index}
                className={`relative rounded-3xl border-2 p-8 flex flex-col bg-card transition-all duration-300 hover:shadow-xl ${plan.accent} ${
                  plan.popular ? 'shadow-lg scale-105 z-10' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      {t("pricing.popular")}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(plan.nameKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t(plan.descKey)}
                  </p>
                  
                  <div className="relative inline-block">
                    <span className="text-4xl font-bold text-foreground">
                      {t(plan.priceKey)}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{t(plan.unitKey)}</div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {Array.isArray(features) && features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-primary/20' : 'bg-muted'
                        }`}>
                          <Check className={`w-4 h-4 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#kontakt">
                    {t("pricing.orderQuote")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
};
