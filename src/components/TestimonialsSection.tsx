import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      nameKey: "testimonials.items.anna.name",
      roleKey: "testimonials.items.anna.role",
      contentKey: "testimonials.items.anna.content",
      fallbackName: "Anna Kowalska",
      fallbackRole: "Właścicielka mieszkania",
      fallbackContent: "Korzystam z usług Dom Blasku od roku. Fantastyczna jakość i punktualność. Polecam każdemu!",
      rating: 5,
      initial: "AK",
    },
    {
      nameKey: "testimonials.items.marek.name",
      roleKey: "testimonials.items.marek.role",
      contentKey: "testimonials.items.marek.content",
      fallbackName: "Marek Nowak",
      fallbackRole: "Dyrektor operacyjny, TechCorp",
      fallbackContent: "Współpracujemy z Dom Blasku przy obsłudze naszego biurowca. Profesjonalizm na najwyższym poziomie.",
      rating: 5,
      initial: "MN",
    },
    {
      nameKey: "testimonials.items.katarzyna.name",
      roleKey: "testimonials.items.katarzyna.role",
      contentKey: "testimonials.items.katarzyna.content",
      fallbackName: "Katarzyna Wiśniewska",
      fallbackRole: "Manager hotelu",
      fallbackContent: "Niezawodni i elastyczni. Reagują na każdą potrzebę. Goście chwalą czystość pokoi.",
      rating: 5,
      initial: "KW",
    },
    {
      nameKey: "testimonials.items.piotr.name",
      roleKey: "testimonials.items.piotr.role",
      contentKey: "testimonials.items.piotr.content",
      fallbackName: "Piotr Zieliński",
      fallbackRole: "Właściciel firmy",
      fallbackContent: "Po kilku próbach z innymi firmami, w końcu znalazłem Dom Blasku. Jakość i cena idealne.",
      rating: 5,
      initial: "PZ",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="opinie" className="section-padding bg-primary/5">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Featured testimonial - large card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
            {/* Quote icon */}
            <Quote className="w-16 h-16 text-primary/20 mb-6" />
            
            {/* Content */}
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
              "{t(testimonials[activeIndex].contentKey, testimonials[activeIndex].fallbackContent)}"
            </blockquote>
            
            {/* Author and rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">
                    {testimonials[activeIndex].initial}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">
                    {t(testimonials[activeIndex].nameKey, testimonials[activeIndex].fallbackName)}
                  </div>
                  <div className="text-muted-foreground">
                    {t(testimonials[activeIndex].roleKey, testimonials[activeIndex].fallbackRole)}
                  </div>
                </div>
              </div>
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-primary' : 'bg-border hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Zadowolonych klientów</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Lat doświadczenia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-muted-foreground">Ocena Google</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Gwarancja jakości</div>
          </div>
        </div>
      </div>
    </section>
  );
};
