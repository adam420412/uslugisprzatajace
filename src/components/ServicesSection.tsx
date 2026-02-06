import { Building2, Home, Sparkles, Warehouse, Hotel, Factory, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      titleKey: "services.office.title",
      descKey: "services.office.description",
      featuresKeys: ["services.office.features.daily", "services.office.features.windows", "services.office.features.disinfection"],
      fallbackFeatures: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja powierzchni"],
      href: "/uslugi/sprzatanie-biur",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      icon: Home,
      titleKey: "services.apartment.title",
      descKey: "services.apartment.description",
      featuresKeys: ["services.apartment.features.general", "services.apartment.features.renovation", "services.apartment.features.windows"],
      fallbackFeatures: ["Sprzątanie generalne", "Sprzątanie po remoncie", "Mycie okien"],
      href: "/uslugi/sprzatanie-mieszkan",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      icon: Warehouse,
      titleKey: "services.building.title",
      descKey: "services.building.description",
      featuresKeys: ["services.building.features.24h", "services.building.features.day", "services.building.features.common"],
      fallbackFeatures: ["Obsługa całodobowa", "Serwis dzienny", "Sprzątanie części wspólnych"],
      href: "/uslugi/sprzatanie-biurowcow",
      accent: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      titleKey: "services.renovation.title",
      descKey: "services.renovation.description",
      featuresKeys: ["services.renovation.features.windows", "services.renovation.features.floors", "services.renovation.features.glue"],
      fallbackFeatures: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju i farby"],
      href: "/uslugi/sprzatanie-po-remoncie",
      accent: "from-amber-500 to-orange-500",
    },
    {
      icon: Hotel,
      titleKey: "services.hotel.title",
      descKey: "services.hotel.description",
      featuresKeys: ["services.hotel.features.rooms", "services.hotel.features.bedding", "services.hotel.features.laundry"],
      fallbackFeatures: ["Sprzątanie pokoi", "Wymiana pościeli", "Pranie i prasowanie"],
      href: "/uslugi/sprzatanie-hoteli",
      accent: "from-rose-500 to-pink-500",
    },
    {
      icon: Factory,
      titleKey: "services.industrial.title",
      descKey: "services.industrial.description",
      featuresKeys: ["services.industrial.features.floors", "services.industrial.features.machines", "services.industrial.features.waste"],
      fallbackFeatures: ["Czyszczenie posadzek", "Mycie maszyn", "Utylizacja odpadów"],
      href: "/uslugi/sprzatanie-hal",
      accent: "from-slate-500 to-zinc-600",
    },
  ];

  return (
    <section id="uslugi" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("services.description")}
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <a href="#kontakt">
              Wszystkie usługi
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Services - horizontal cards */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group block"
            >
              <article className="relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Icon column */}
                  <div className={`md:w-48 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br ${service.accent}`}>
                    <service.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {t(service.titleKey)}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {t(service.descKey)}
                        </p>
                        
                        {/* Features tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.fallbackFeatures.map((feature, fIndex) => (
                            <span
                              key={fIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                            >
                              {t(service.featuresKeys[fIndex], feature)}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-muted group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
