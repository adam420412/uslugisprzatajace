import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 575 743 443",
    description: "Pon-Pt: 7:00-20:00",
    href: "tel:+48575743443",
    primary: true,
  },
  {
    icon: Mail,
    title: "Email",
    value: "kontakt@uslugisprzatajace.com.pl",
    description: "Odpowiadamy w 24h",
    href: "mailto:kontakt@uslugisprzatajace.com.pl",
    primary: false,
  },
  {
    icon: MapPin,
    title: "Adres",
    value: "ul. Przykładowa 10",
    description: "00-001 Warszawa",
    href: null,
    primary: false,
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    value: "Pon-Pt: 7:00-20:00",
    description: "Sob: 8:00-16:00",
    href: null,
    primary: false,
  },
];

export const KontaktPage = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Wiadomość wysłana!",
        description: "Odpowiemy w ciągu 24 godzin.",
      });
    }, 1500);
  };

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
          <section className="pt-32 pb-8 bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Kontakt
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                  Porozmawiajmy
                  <br />
                  <span className="text-primary">o Twoich potrzebach</span>
                </h1>
                <p className="text-lg text-background/70">
                  Wypełnij formularz lub zadzwoń - odpowiemy w ciągu 24 godzin 
                  i przygotujemy bezpłatną wycenę.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="bg-foreground pb-20">
            <div className="container-narrow mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contactCards.map((card, index) => {
                  const CardIcon = card.icon;
                  return (
                    <div 
                      key={index}
                      className={`rounded-2xl p-6 transition-all ${
                        card.primary 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-background/10 text-background border border-background/20'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        card.primary ? 'bg-primary-foreground/20' : 'bg-background/10'
                      }`}>
                        <CardIcon className="w-6 h-6" />
                      </div>
                      <div className="text-sm opacity-70 mb-1">{card.title}</div>
                      {card.href ? (
                        <a 
                          href={card.href}
                          className="font-semibold hover:underline block mb-1"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <div className="font-semibold mb-1">{card.value}</div>
                      )}
                      <div className="text-sm opacity-60">{card.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-20 bg-background">
            <div className="container-narrow mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left - Form */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Wyślij zapytanie
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Wypełnij formularz, a my przygotujemy bezpłatną wycenę.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-card rounded-3xl border border-border p-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Dziękujemy!
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Twoja wiadomość została wysłana. Odpowiemy w ciągu 24 godzin.
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
                            className="h-12 rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Telefon *
                          </label>
                          <Input
                            type="tel"
                            placeholder="+48 575 743 443"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="jan@firma.pl"
                          className="h-12 rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Rodzaj usługi
                        </label>
                        <select className="w-full h-12 rounded-xl border border-input bg-background px-3 text-foreground">
                          <option value="">Wybierz usługę</option>
                          <option value="biuro">Sprzątanie biur</option>
                          <option value="mieszkanie">Sprzątanie mieszkań</option>
                          <option value="biurowiec">Sprzątanie biurowców</option>
                          <option value="remont">Sprzątanie po remoncie</option>
                          <option value="hotel">Sprzątanie hoteli</option>
                          <option value="hala">Sprzątanie hal</option>
                          <option value="inne">Inne</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Wiadomość
                        </label>
                        <Textarea
                          placeholder="Opisz swoje potrzeby - metraż, częstotliwość, specjalne wymagania..."
                          rows={5}
                          className="rounded-xl"
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-border" id="consent" />
                        <label htmlFor="consent" className="text-sm text-muted-foreground">
                          Wyrażam zgodę na przetwarzanie danych osobowych w celu obsługi zapytania. *
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

                {/* Right - Map and info */}
                <div className="space-y-8">
                  <div className="bg-card rounded-3xl border border-border p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Dlaczego warto do nas zadzwonić?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Bezpłatna wycena</div>
                          <div className="text-sm text-muted-foreground">Przyjedziemy i wycenimy za darmo</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Odpowiedź w 24h</div>
                          <div className="text-sm text-muted-foreground">Szybko reagujemy na zapytania</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Bez zobowiązań</div>
                          <div className="text-sm text-muted-foreground">Wycena nie zobowiązuje do zamówienia</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Map */}
                  <div className="h-80 rounded-3xl overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3913185268424!2d21.00732731580091!3d52.23194506437542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokalizacja na mapie"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default KontaktPage;
