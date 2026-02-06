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
      title: "Telefon",
      value: "+48 123 456 789",
      href: "tel:+48123456789"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kontakt@uslugisprzatajace.com.pl",
      href: "mailto:kontakt@uslugisprzatajace.com.pl"
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "ul. Przykładowa 10, 00-001 Warszawa",
      href: null
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      value: "Pon-Pt: 7:00-20:00, Sob: 8:00-16:00",
      href: null
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontakt | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Skontaktuj się z nami - profesjonalne usługi sprzątania. Zadzwoń, napisz lub wypełnij formularz. Odpowiemy w 24h!" 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/kontakt" />
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
                  Kontakt
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  Skontaktuj się z nami
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  Masz pytania? Chętnie pomożemy! Wypełnij formularz lub zadzwoń - odpowiemy w ciągu 24 godzin.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-card/80 transition-colors border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.title}
                    </div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">
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
