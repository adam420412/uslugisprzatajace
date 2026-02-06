import { Phone, FileText, Users, Sparkles, ThumbsUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Kontakt",
      description: "Zadzwoń lub wypełnij formularz. Odpowiemy w ciągu 24 godzin.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Wycena",
      description: "Przyjedziemy na miejsce lub wycenimy zdalnie. Bezpłatnie!",
    },
    {
      number: "03",
      icon: Users,
      title: "Dobór zespołu",
      description: "Przydzielimy Ci dedykowany zespół dopasowany do Twoich potrzeb.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Realizacja",
      description: "Sprzątamy zgodnie z ustalonym harmonogramem i standardami.",
    },
    {
      number: "05",
      icon: ThumbsUp,
      title: "Kontrola jakości",
      description: "Sprawdzamy efekty i zbieramy feedback. Twoja satysfakcja to nasz cel.",
    },
  ];

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Jak działamy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            5 kroków do czystości
          </h2>
          <p className="text-lg text-background/70">
            Prosty proces współpracy - od pierwszego kontaktu do lśniącej przestrzeni.
          </p>
        </div>

        {/* Steps - timeline style */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-background/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-full bg-background/10 border-2 border-background/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <step.icon className="w-8 h-8 text-background group-hover:text-primary-foreground transition-colors" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-background mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-background/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
