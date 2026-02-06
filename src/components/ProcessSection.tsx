import { Phone, FileText, Calendar, Sparkles, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Phone,
      number: "1",
      titleKey: "process.steps.contact.title",
      descKey: "process.steps.contact.description",
      fallbackTitle: "Kontakt",
      fallbackDesc: "Zadzwoń lub wypełnij formularz. Odpowiemy w ciągu 24 godzin.",
    },
    {
      icon: FileText,
      number: "2",
      titleKey: "process.steps.quote.title",
      descKey: "process.steps.quote.description",
      fallbackTitle: "Bezpłatna wycena",
      fallbackDesc: "Przyjedziemy i ocenimy zakres prac. Przedstawimy szczegółową ofertę.",
    },
    {
      icon: Calendar,
      number: "3",
      titleKey: "process.steps.schedule.title",
      descKey: "process.steps.schedule.description",
      fallbackTitle: "Ustalenie terminu",
      fallbackDesc: "Wspólnie wybierzemy dogodny termin realizacji usługi.",
    },
    {
      icon: Sparkles,
      number: "4",
      titleKey: "process.steps.execution.title",
      descKey: "process.steps.execution.description",
      fallbackTitle: "Realizacja",
      fallbackDesc: "Nasz zespół wykonuje usługę zgodnie z ustaleniami.",
    },
    {
      icon: CheckCircle,
      number: "5",
      titleKey: "process.steps.completion.title",
      descKey: "process.steps.completion.description",
      fallbackTitle: "Odbiór i rozliczenie",
      fallbackDesc: "Sprawdzasz efekty, a my wystawiamy fakturę. Gotowe!",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            {t("process.title")}
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            {t("process.description")}
          </p>
        </div>

        {/* Process steps - horizontal cards */}
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-primary/40 rotate-45" />
                </div>
              )}
              
              <div className="bg-card rounded-2xl p-6 h-full text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(step.titleKey, step.fallbackTitle)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(step.descKey, step.fallbackDesc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
