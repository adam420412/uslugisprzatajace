import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import cleanOffice from "@/assets/clean-office.jpg";

export const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    "Wycena w ciągu 24 godzin",
    "Własny sprzęt i środki czystości",
    "Ekologiczne produkty",
    "Faktura VAT",
    "Stały opiekun klienta",
    "Gwarancja satysfakcji",
    "Ubezpieczenie OC",
    "Elastyczne terminy",
  ];

  const stats = [
    { value: "10+", label: "lat doświadczenia" },
    { value: "800+", label: "stałych klientów" },
    { value: "50+", label: "wykwalifikowanych pracowników" },
    { value: "24h", label: "czas odpowiedzi" },
  ];

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with stats overlay */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={cleanOffice} 
                alt="Czyste biuro" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8">
              <div className="bg-card rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              Co oferujemy
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kompleksowa obsługa
              <br />
              <span className="text-primary">bez zmartwień</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Zajmujemy się wszystkim - od wyceny po regularne sprzątanie. 
              Ty zyskujesz czas i spokój, a my dbamy o każdy szczegół.
            </p>

            {/* Benefits checklist */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href="/kontakt">
                Zamów bezpłatną wycenę
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
