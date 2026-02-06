import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FAQPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>FAQ - Najczęstsze Pytania | Dom Blasku Warszawa</title>
        <meta 
          name="description" 
          content="Odpowiedzi na najczęściej zadawane pytania o usługi sprzątania Dom Blasku. Dowiedz się więcej o naszych usługach, cenach i gwarancjach." 
        />
        <link rel="canonical" href="https://domblasku.pl/faq" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  {t("faq.title")}
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  {t("faq.description")}
                </p>
              </div>
            </div>
          </section>

          <FAQSection />

          {/* Contact Section */}
          <section className="section-padding bg-muted/50">
            <div className="container-narrow mx-auto">
              <div className="text-center max-w-2xl mx-auto">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("faq.otherQuestion")}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t("faq.contactUs")}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg" asChild>
                    <a href="tel:+48123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      +48 123 456 789
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/kontakt">
                      <Mail className="w-5 h-5 mr-2" />
                      Napisz do nas
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
