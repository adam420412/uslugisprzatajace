import { Button } from "@/components/ui/button";
import { ArrowRight, ImagePlus, Building2, Home, Hotel, Factory, Sparkles, Warehouse } from "lucide-react";
import { useTranslation } from "react-i18next";

// Placeholder slots for future photos from clients
const portfolioSlots = [
  {
    id: 1,
    categoryKey: "building",
    titlePlaceholder: "Biurowiec / Office Building",
    icon: Warehouse,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    categoryKey: "apartment",
    titlePlaceholder: "Apartament / Apartment",
    icon: Home,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    categoryKey: "hotel",
    titlePlaceholder: "Hotel",
    icon: Hotel,
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    id: 4,
    categoryKey: "office",
    titlePlaceholder: "Biuro / Office",
    icon: Building2,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: 5,
    categoryKey: "industrial",
    titlePlaceholder: "Hala / Warehouse",
    icon: Factory,
    gradient: "from-slate-500/20 to-zinc-500/20",
  },
  {
    id: 6,
    categoryKey: "renovation",
    titlePlaceholder: "Po remoncie / Post-renovation",
    icon: Sparkles,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <section id="realizacje" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t("portfolio.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("portfolio.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("portfolio.description")}
            </p>
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSlots.map((slot) => (
            <article
              key={slot.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder Image Area with gradient */}
              <div className={`h-64 bg-gradient-to-br ${slot.gradient} flex flex-col items-center justify-center gap-4 relative overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />
                
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <slot.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="relative z-10 text-center px-4">
                  <p className="text-sm font-medium text-foreground/70">
                    {t("portfolio.comingSoon")}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {t(`contact.services.${slot.categoryKey}`)}
                </span>
                <h3 className="font-bold text-foreground mb-2">
                  {slot.titlePlaceholder}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t("portfolio.placeholder")}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" asChild>
            <a href="#kontakt">
              {t("portfolio.becomeClient")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
