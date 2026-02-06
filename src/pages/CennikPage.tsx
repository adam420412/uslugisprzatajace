import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { PriceCalculator } from "@/components/PriceCalculator";
import { CTASection } from "@/components/CTASection";

export const CennikPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cennik Usług Sprzątania | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Sprawdź cennik usług sprzątania. Transparentne ceny, brak ukrytych kosztów. Zamów bezpłatną wycenę." 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/cennik" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-12 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                  Cennik
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  Przejrzyste ceny usług
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  Bez ukrytych kosztów. Dokładnie wiesz, ile zapłacisz przed rozpoczęciem pracy.
                </p>
              </div>
            </div>
          </section>

          <PricingSection />
          <PriceCalculator />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CennikPage;
