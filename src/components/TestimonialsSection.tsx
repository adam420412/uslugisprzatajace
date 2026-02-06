import { Star, Quote, Building2, Home, Hotel } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Anna Kowalska",
      role: "Właścicielka mieszkania",
      content: "Korzystam z usług od roku. Fantastyczna jakość i punktualność!",
      rating: 5,
      icon: Home,
    },
    {
      name: "Marek Nowak",
      role: "Dyrektor, TechCorp",
      content: "Profesjonalizm na najwyższym poziomie. Polecam!",
      rating: 5,
      icon: Building2,
    },
    {
      name: "Katarzyna Wiśniewska",
      role: "Manager hotelu",
      content: "Goście regularnie chwalą czystość pokoi.",
      rating: 5,
      icon: Hotel,
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Opinie
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Co mówią nasi klienci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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
              
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              
              <p className="text-foreground mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <testimonial.icon className="w-5 h-5 text-primary" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
