import { Phone, FileText, Calendar, Sparkles, CheckCircle, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Phone,
      number: "01",
      titleKey: "process.steps.contact.title",
      descKey: "process.steps.contact.description",
      fallbackTitle: "Kontakt",
      fallbackDesc: "Zadzwoń lub wypełnij formularz. Odpowiemy w ciągu 24 godzin.",
    },
    {
      icon: FileText,
      number: "02",
      titleKey: "process.steps.quote.title",
      descKey: "process.steps.quote.description",
      fallbackTitle: "Bezpłatna wycena",
      fallbackDesc: "Przyjedziemy i ocenimy zakres prac. Przedstawimy szczegółową ofertę.",
    },
    {
      icon: Calendar,
      number: "03",
      titleKey: "process.steps.schedule.title",
      descKey: "process.steps.schedule.description",
      fallbackTitle: "Ustalenie terminu",
      fallbackDesc: "Wspólnie wybierzemy dogodny termin realizacji usługi.",
    },
    {
      icon: Sparkles,
      number: "04",
      titleKey: "process.steps.execution.title",
      descKey: "process.steps.execution.description",
      fallbackTitle: "Realizacja",
      fallbackDesc: "Nasz zespół wykonuje usługę zgodnie z ustaleniami.",
    },
    {
      icon: CheckCircle,
      number: "05",
      titleKey: "process.steps.completion.title",
      descKey: "process.steps.completion.description",
      fallbackTitle: "Odbiór i rozliczenie",
      fallbackDesc: "Sprawdzasz efekty, a my wystawiamy fakturę. Gotowe!",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("process.description")}
          </p>
        </div>

        {/* Process steps - vertical timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border">
                  <ArrowDown className="absolute -bottom-3 -left-[9px] w-5 h-5 text-border" />
                </div>
              )}
              
              <div className="flex gap-6 pb-12 last:pb-0">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(step.titleKey, step.fallbackTitle)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(step.descKey, step.fallbackDesc)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
