import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Star, Users, Award, ThumbsUp } from "lucide-react";

export const OpiniePage = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: "800+", label: "Zadowolonych klientów" },
    { icon: Star, value: "4.9", label: "Średnia ocena" },
    { icon: Award, value: "10+", label: "Lat doświadczenia" },
    { icon: ThumbsUp, value: "98%", label: "Poleca nas dalej" },
  ];

  return (
    <>
      <Helmet>
        <title>Opinie Klientów | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Zobacz opinie naszych klientów o usługach sprzątania. Ponad 800 zadowolonych klientów." 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/opinie" />
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
                  Opinie
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  Co mówią nasi klienci
                </h1>
                <p className="text-xl text-secondary-foreground/80">
                  Zaufały nam setki firm i rodzin. Zobacz, co o nas mówią.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-secondary-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-foreground/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TestimonialsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OpiniePage;
