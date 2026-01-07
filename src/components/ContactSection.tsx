import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@cleanpro.pl",
    href: "mailto:kontakt@cleanpro.pl",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Czysta 15, 00-001 Warszawa",
    href: "#",
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    value: "Pon-Pt: 8:00-18:00",
    href: "#",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Wiadomość wysłana!",
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
      });
    }, 1500);
  };

  return (
    <section id="kontakt" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zamów bezpłatną wycenę sprzątania
          </h2>
          <p className="text-muted-foreground text-lg">
            Wypełnij formularz lub zadzwoń. Odpowiemy w ciągu 24 godzin 
            i przedstawimy szczegółową ofertę.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Dane kontaktowe
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps */}
            <div className="h-64 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3913185268424!2d21.00732731580091!3d52.23194506437542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja CleanPro na mapie"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Dziękujemy za wiadomość!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Wyślij kolejne zapytanie
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Imię i nazwisko *
                      </label>
                      <Input
                        type="text"
                        placeholder="Jan Kowalski"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+48 123 456 789"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="jan@przykład.pl"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Rodzaj usługi
                    </label>
                    <select className="w-full h-12 rounded-lg border border-input bg-background px-3 text-foreground">
                      <option value="">Wybierz usługę</option>
                      <option value="biuro">Sprzątanie biura</option>
                      <option value="mieszkanie">Sprzątanie mieszkania</option>
                      <option value="biurowiec">Sprzątanie biurowca</option>
                      <option value="remont">Sprzątanie po remoncie</option>
                      <option value="hotel">Sprzątanie hotelu</option>
                      <option value="hala">Sprzątanie hal i magazynów</option>
                      <option value="inne">Inne</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Wiadomość
                    </label>
                    <Textarea
                      placeholder="Opisz swoje potrzeby, podaj przybliżoną powierzchnię, częstotliwość sprzątania..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" id="consent" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij zapytanie
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
