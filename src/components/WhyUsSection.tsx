import { Shield, Clock, Leaf, BadgeCheck, HeartHandshake, Banknote, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WhyUsSection = () => {
  const { t } = useTranslation();

  const mainFeatures = [
    {
      icon: Leaf,
      title: "Ekologiczne środki",
      description: "100% certyfikowane, bezpieczne dla dzieci i zwierząt.",
    },
    {
      icon: Shield,
      title: "Ubezpieczenie OC",
      description: "Pełna ochrona Twojego mienia do 1 000 000 zł.",
    },
    {
      icon: Clock,
      title: "Elastyczność 24/7",
      description: "Sprzątamy w godzinach, które Ci pasują.",
    },
  ];

  const additionalFeatures = [
    { icon: BadgeCheck, text: "Weryfikowani pracownicy" },
    { icon: HeartHandshake, text: "Stały opiekun klienta" },
    { icon: Banknote, text: "Bez ukrytych kosztów" },
  ];

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Dlaczego my?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Profesjonalizm,
              <br />
              któremu <span className="text-primary">ufają setki firm</span>
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-lg">
              Od 10 lat dostarczamy usługi sprzątania na najwyższym poziomie. 
              Nasi klienci wracają, bo wiedzą, że mogą na nas polegać.
            </p>

            {/* Additional features - horizontal list */}
            <div className="flex flex-wrap gap-6 mb-10">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-background/80">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <Link to="/kontakt">
                Poznaj nas bliżej
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Right - Feature cards stack */}
          <div className="space-y-4">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  index === 0 
                    ? 'bg-primary border-primary ml-0 lg:ml-8' 
                    : 'bg-background/10 border-background/20 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? 'bg-primary-foreground/20' : 'bg-primary/20'
                  }`}>
                    <feature.icon className={`w-7 h-7 ${
                      index === 0 ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      index === 0 ? 'text-primary-foreground' : 'text-background'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`${
                      index === 0 ? 'text-primary-foreground/80' : 'text-background/70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
