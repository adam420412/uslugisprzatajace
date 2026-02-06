import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();

  const benefits = [
    "Bezpłatna wycena w 24h",
    "Gwarancja satysfakcji 100%",
    "Ekologiczne środki",
    "Ubezpieczenie OC",
    "Stały zespół sprzątający",
    "Elastyczne terminy",
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8">
            <Leaf className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Ekologiczne sprzątanie</span>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Gotowy na czystość
            <br />
            bez kompromisów?
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Skontaktuj się z nami już dziś i przekonaj się, jak profesjonalne sprzątanie 
            może odmienić Twoją przestrzeń.
          </p>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center sm:justify-start text-white">
                <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              asChild
            >
              <a href="/kontakt">
                Zamów bezpłatną wycenę
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <a href="tel:+48123456789">
                <Phone className="w-5 h-5 mr-2" />
                +48 123 456 789
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
