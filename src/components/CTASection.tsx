import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();

  const benefits = [
    "Bezpłatna wycena w 24h",
    "Gwarancja satysfakcji",
    "Ekologiczne środki",
    "Ubezpieczenie OC",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Profesjonalne sprzątanie</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              {t("cta.description")}
            </p>

            {/* Benefits list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-white/80" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="#kontakt">
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="tel:+48123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("cta.phone")}
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Stats card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Zadowolonych klientów w Warszawie</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-sm text-white/70">Lat na rynku</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">24h</div>
                  <div className="text-sm text-white/70">Czas odpowiedzi</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/70">Gwarancja</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">5.0</div>
                  <div className="text-sm text-white/70">Ocena Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
