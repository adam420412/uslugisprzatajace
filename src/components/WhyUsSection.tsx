import { Shield, Clock, Leaf, BadgeCheck, HeartHandshake, Banknote } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WhyUsSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Leaf,
      title: "Ekologiczne środki",
      description: "Stosujemy wyłącznie certyfikowane, przyjazne środowisku produkty bezpieczne dla ludzi i zwierząt.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "Elastyczne godziny",
      description: "Sprzątamy wtedy, kiedy Tobie pasuje - rano, wieczorem, w weekendy. Dostosujemy się.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Shield,
      title: "Pełne ubezpieczenie",
      description: "Jesteśmy ubezpieczeni od odpowiedzialności cywilnej. Twoje mienie jest w 100% bezpieczne.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: BadgeCheck,
      title: "Sprawdzony zespół",
      description: "Każdy pracownik przechodzi weryfikację i szkolenie. Znamy nasz zespół i Ty też możesz mu zaufać.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: HeartHandshake,
      title: "Stała ekipa",
      description: "Przydzielamy Ci dedykowany zespół, który zna Twoje preferencje i przestrzeń.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Banknote,
      title: "Przejrzyste ceny",
      description: "Bez ukrytych kosztów. Wycena przed rozpoczęciem pracy - dokładnie wiesz, ile zapłacisz.",
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Dlaczego my?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Zaufaj profesjonalistom
          </h2>
          <p className="text-lg text-muted-foreground">
            Od ponad 10 lat dbamy o czystość w firmach i domach. Wiemy, czego potrzebujesz.
          </p>
        </div>

        {/* Features grid - asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
