import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Home, Hotel } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Właścicielka mieszkania",
    content: "Korzystam z usług od roku. Fantastyczna jakość i punktualność. Za każdym razem mieszkanie lśni czystością!",
    rating: 5,
    type: "Mieszkanie",
    icon: Home,
  },
  {
    name: "Marek Nowak",
    role: "Dyrektor operacyjny, TechCorp",
    content: "Współpracujemy przy obsłudze naszego biurowca. Profesjonalizm na najwyższym poziomie. Polecam każdej firmie.",
    rating: 5,
    type: "Biuro",
    icon: Building2,
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "Manager hotelu Bella Vista",
    content: "Niezawodni i elastyczni. Reagują na każdą potrzebę. Goście regularnie chwalą czystość pokoi.",
    rating: 5,
    type: "Hotel",
    icon: Hotel,
  },
  {
    name: "Piotr Zieliński",
    role: "Właściciel firmy IT",
    content: "Po kilku próbach z innymi firmami, w końcu znalazłem profesjonalistów. Jakość i cena idealne.",
    rating: 5,
    type: "Biuro",
    icon: Building2,
  },
  {
    name: "Magdalena Dąbrowska",
    role: "Właścicielka apartamentów",
    content: "Sprzątają moje apartamenty na wynajem. Goście zawsze są zachwyceni. Współpraca trwa już 3 lata.",
    rating: 5,
    type: "Mieszkanie",
    icon: Home,
  },
  {
    name: "Robert Lewandowski",
    role: "Kierownik administracji",
    content: "Obsługują nasz biurowiec od 5 lat. Zero skarg od najemców. Pełen profesjonalizm.",
    rating: 5,
    type: "Biurowiec",
    icon: Building2,
  },
];

const stats = [
  { value: "800+", label: "Klientów" },
  { value: "4.9", label: "Ocena", suffix: "/5" },
  { value: "98%", label: "Poleca nas" },
  { value: "10+", label: "Lat" },
];

export const OpiniePage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          {/* Hero Section - Dark with stats */}
          <section className="pt-32 pb-24 bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Opinie klientów
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                  Sprawdź, co mówią
                  <br />
                  <span className="text-primary">nasi klienci</span>
                </h1>
                <p className="text-xl text-background/70 max-w-xl">
                  Zaufały nam setki firm i rodzin. Przeczytaj ich opinie i dołącz do grona zadowolonych klientów.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-background/60 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured testimonial */}
          <section className="py-20 bg-background">
            <div className="container-narrow mx-auto px-4">
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-xl">
                  <Quote className="w-12 h-12 text-primary/30 mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">
                          {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {testimonials[activeIndex].name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {testimonials[activeIndex].role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full">
                        {(() => {
                          const ActiveIcon = testimonials[activeIndex].icon;
                          return <ActiveIcon className="w-4 h-4 text-muted-foreground" />;
                        })()}
                        <span className="text-sm text-muted-foreground">{testimonials[activeIndex].type}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Poprzednia opinia"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          index === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground/50'
                        }`}
                        aria-label={`Opinia ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Następna opinia"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* All testimonials grid */}
          <section className="py-20 bg-muted/50">
            <div className="container-narrow mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
                Wszystkie opinie
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-sm">
                            {testimonial.name}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-full">
                        {(() => {
                          const IconComponent = testimonial.icon;
                          return <IconComponent className="w-3 h-3 text-muted-foreground" />;
                        })()}
                        <span className="text-xs text-muted-foreground">{testimonial.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
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

export default OpiniePage;
