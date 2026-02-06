import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const KontaktPage = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+48 123 456 789",
      href: "tel:+48123456789"
    },
    {
      icon: Mail,
      title: t("contact.email"),
      value: "kontakt@domblasku.pl",
      href: "mailto:kontakt@domblasku.pl"
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value: "ul. Czysta 15, 00-001 Warszawa",
      href: null
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: "Pon-Pt: 8:00-18:00",
      href: null
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt | Dom Blasku Warszawa</title>
        <meta 
          name="description" 
          content="Skontaktuj się z Dom Blasku - profesjonalne usługi sprzątania w Warszawie. Zadzwoń, napisz lub wypełnij formularz. Odpowiemy w 24h!" 
        />
        <link rel="canonical" href="https://domblasku.pl/kontakt" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6">
                  {t("contact.badge")}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  {t("contact.title")}
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  {t("contact.description")}
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card/80 transition-colors"
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-sm text-secondary-foreground/70 mb-1">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-sm font-medium text-secondary-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-secondary-foreground">
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KontaktPage;
