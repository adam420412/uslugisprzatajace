import { Shield, Clock, Leaf, Award, Users, Headphones, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WhyUsSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Shield,
      titleKey: "whyUs.reasons.guarantee.title",
      descKey: "whyUs.reasons.guarantee.description",
      fallbackTitle: "Gwarancja jakości",
      fallbackDesc: "Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów.",
      color: "bg-blue-500",
    },
    {
      icon: Clock,
      titleKey: "whyUs.reasons.punctuality.title",
      descKey: "whyUs.reasons.punctuality.description",
      fallbackTitle: "Punktualność",
      fallbackDesc: "Szanujemy Twój czas. Zawsze przyjeżdżamy o ustalonej godzinie.",
      color: "bg-emerald-500",
    },
    {
      icon: Leaf,
      titleKey: "whyUs.reasons.eco.title",
      descKey: "whyUs.reasons.eco.description",
      fallbackTitle: "Ekologiczne środki",
      fallbackDesc: "Używamy certyfikowanych środków bezpiecznych dla ludzi i środowiska.",
      color: "bg-green-500",
    },
    {
      icon: Award,
      titleKey: "whyUs.reasons.experience.title",
      descKey: "whyUs.reasons.experience.description",
      fallbackTitle: "Doświadczony zespół",
      fallbackDesc: "Nasi pracownicy są przeszkoleni i posiadają wieloletnie doświadczenie.",
      color: "bg-amber-500",
    },
    {
      icon: Users,
      titleKey: "whyUs.reasons.individual.title",
      descKey: "whyUs.reasons.individual.description",
      fallbackTitle: "Indywidualne podejście",
      fallbackDesc: "Dostosowujemy usługi do Twoich potrzeb i preferencji.",
      color: "bg-violet-500",
    },
    {
      icon: Headphones,
      titleKey: "whyUs.reasons.support.title",
      descKey: "whyUs.reasons.support.description",
      fallbackTitle: "Wsparcie 24/7",
      fallbackDesc: "Jesteśmy dostępni, gdy nas potrzebujesz. Zadzwoń o każdej porze.",
      color: "bg-rose-500",
    },
  ];

  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("whyUs.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("whyUs.title")}
          </h2>
          <p className="text-secondary-foreground/70 text-lg">
            {t("whyUs.description")}
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-300 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Colored accent line */}
              <div className={`absolute top-0 left-8 right-8 h-1 ${reason.color} rounded-b-full opacity-60`} />
              
              <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                {t(reason.titleKey, reason.fallbackTitle)}
              </h3>
              
              <p className="text-secondary-foreground/70">
                {t(reason.descKey, reason.fallbackDesc)}
              </p>
              
              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">Gwarantowane</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
