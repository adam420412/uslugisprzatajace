import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Shield, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-cleaning.jpg";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium text-primary">5.0 Google Reviews</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ubezpieczeni</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {t("hero.title")}{" "}
              <span className="relative">
                <span className="text-primary">{t("hero.titleHighlight")}</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" fill="currentColor">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t("hero.description")}
            </p>

            {/* Features row */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">24h</div>
                  <div className="text-muted-foreground">Wycena</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">100%</div>
                  <div className="text-muted-foreground">Gwarancja</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-muted-foreground">Klientów</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#kontakt">
                  {t("hero.cta")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+48123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  +48 123 456 789
                </a>
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Main image container with decorative elements */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -rotate-3" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt={t("hero.imageAlt")} 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">8+ lat</div>
                    <div className="text-sm text-muted-foreground">Doświadczenia</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-5 py-2 shadow-lg">
                <span className="font-semibold">Bezpłatna wycena</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
