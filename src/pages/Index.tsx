import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Usługi Sprzątające | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Profesjonalne usługi sprzątania biur, mieszkań i obiektów przemysłowych. Ekologiczne środki, doświadczony zespół, bezpłatna wycena w 24h. Zadzwoń!" 
        />
        <meta 
          name="keywords" 
          content="usługi sprzątające, sprzątanie biur, sprzątanie mieszkań, firma sprzątająca, sprzątanie Warszawa, sprzątanie po remoncie, usługi sprzątania" 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Profesjonalne Usługi Sprzątające | uslugisprzatajace.com.pl" />
        <meta property="og:description" content="Profesjonalne usługi sprzątania dla firm i osób prywatnych. Bezpłatna wycena w 24h." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:url" content="https://uslugisprzatajace.com.pl" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Usługi Sprzątające",
            "description": "Profesjonalne usługi sprzątania biur, mieszkań i obiektów przemysłowych",
            "url": "https://uslugisprzatajace.com.pl",
            "telephone": "+48123456789",
            "email": "kontakt@uslugisprzatajace.com.pl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. Przykładowa 10",
              "addressLocality": "Warszawa",
              "postalCode": "00-001",
              "addressCountry": "PL"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-20:00, Sa 08:00-16:00",
            "sameAs": [],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 52.2297,
                "longitude": 21.0122
              },
              "geoRadius": "50000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhyUsSection />
          <BenefitsSection />
          <ServicesSection />
          <ProcessSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
