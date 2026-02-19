import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Phone, Mail, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqCategories = [
  {
    name: "Ogólne",
    questions: [
      {
        q: "Jak zamówić usługę sprzątania?",
        a: "Wystarczy zadzwonić pod numer +48 575 743 443 lub wypełnić formularz kontaktowy. Odpowiemy w ciągu 24 godzin i umówimy się na bezpłatną wycenę.",
      },
      {
        q: "Czy wycena jest bezpłatna?",
        a: "Tak, wycena jest całkowicie bezpłatna i niezobowiązująca. Przyjedziemy, ocenimy zakres prac i przedstawimy szczegółową ofertę cenową.",
      },
      {
        q: "Jak szybko możecie rozpocząć sprzątanie?",
        a: "W większości przypadków jesteśmy w stanie rozpocząć współpracę w ciągu 2-3 dni roboczych od akceptacji wyceny.",
      },
    ],
  },
  {
    name: "Środki i sprzęt",
    questions: [
      {
        q: "Jakie środki czystości stosujecie?",
        a: "Używamy wyłącznie certyfikowanych, ekologicznych środków czystości, które są bezpieczne dla ludzi, zwierząt i środowiska.",
      },
      {
        q: "Czy macie własny sprzęt?",
        a: "Tak, przyjeżdżamy z pełnym wyposażeniem - profesjonalne odkurzacze, mopy, środki czystości i wszystkie niezbędne akcesoria.",
      },
      {
        q: "Czy mogę poprosić o użycie moich środków?",
        a: "Oczywiście! Jeśli masz ulubione produkty lub środki specjalistyczne, chętnie z nich skorzystamy.",
      },
    ],
  },
  {
    name: "Płatności i dokumenty",
    questions: [
      {
        q: "Czy wystawiacie faktury VAT?",
        a: "Tak, jesteśmy zarejestrowanym płatnikiem VAT i wystawiamy faktury dla firm oraz rachunki dla osób prywatnych.",
      },
      {
        q: "Jakie formy płatności akceptujecie?",
        a: "Akceptujemy przelewy bankowe, płatności kartą oraz gotówkę. Dla firm oferujemy również płatność z odroczonym terminem.",
      },
      {
        q: "Czy macie ubezpieczenie?",
        a: "Tak, posiadamy pełne ubezpieczenie OC do 1 000 000 zł, które chroni zarówno nas, jak i naszych klientów na wypadek ewentualnych szkód.",
      },
    ],
  },
  {
    name: "Gwarancje i reklamacje",
    questions: [
      {
        q: "Co jeśli nie będę zadowolony z usługi?",
        a: "Oferujemy gwarancję satysfakcji. Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów w ciągu 24 godzin od zgłoszenia.",
      },
      {
        q: "Jak zgłosić reklamację?",
        a: "Reklamację można zgłosić telefonicznie, mailowo lub przez formularz kontaktowy. Odpowiadamy w ciągu 24 godzin.",
      },
    ],
  },
];

export const FAQPage = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const allQuestions = faqCategories.flatMap((cat, catIndex) => 
    cat.questions.map((q, qIndex) => ({
      ...q,
      id: `${catIndex}-${qIndex}`,
      category: cat.name,
    }))
  );

  const filteredQuestions = searchQuery 
    ? allQuestions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <>
      <Helmet>
        <title>FAQ - Najczęstsze Pytania | uslugisprzatajace.com.pl</title>
        <meta 
          name="description" 
          content="Odpowiedzi na najczęściej zadawane pytania o usługi sprzątania. Dowiedz się więcej o naszych usługach, cenach i gwarancjach." 
        />
        <link rel="canonical" href="https://uslugisprzatajace.com.pl/faq" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  FAQ
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
                  Masz pytania?
                  <br />
                  <span className="text-primary">Mamy odpowiedzi</span>
                </h1>
                <p className="text-lg text-background/70 mb-8">
                  Znajdź odpowiedzi na najczęściej zadawane pytania
                </p>

                {/* Search */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-background/50" />
                  <input
                    type="text"
                    placeholder="Wyszukaj pytanie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-20 bg-background">
            <div className="container-narrow mx-auto px-4">
              {filteredQuestions ? (
                // Search results
                <div className="max-w-3xl mx-auto">
                  <p className="text-muted-foreground mb-6">
                    Znaleziono {filteredQuestions.length} wyników
                  </p>
                  <div className="space-y-4">
                    {filteredQuestions.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-card rounded-2xl border border-border overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full p-6 text-left flex items-center justify-between gap-4"
                        >
                          <div>
                            <span className="text-xs text-primary font-medium uppercase tracking-wider block mb-1">
                              {item.category}
                            </span>
                            <span className="font-semibold text-foreground">{item.q}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                            openItems.includes(item.id) ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {openItems.includes(item.id) && (
                          <div className="px-6 pb-6 text-muted-foreground">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Categories view
                <div className="max-w-3xl mx-auto space-y-12">
                  {faqCategories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                          {catIndex + 1}
                        </span>
                        {category.name}
                      </h2>
                      <div className="space-y-3">
                        {category.questions.map((item, qIndex) => {
                          const id = `${catIndex}-${qIndex}`;
                          return (
                            <div 
                              key={qIndex}
                              className="bg-card rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-md"
                            >
                              <button
                                onClick={() => toggleItem(id)}
                                className="w-full p-5 text-left flex items-center justify-between gap-4"
                              >
                                <span className="font-medium text-foreground">{item.q}</span>
                                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                                  openItems.includes(id) ? 'rotate-180' : ''
                                }`} />
                              </button>
                              {openItems.includes(id) && (
                                <div className="px-5 pb-5 text-muted-foreground border-t border-border pt-4">
                                  {item.a}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 bg-muted/50">
            <div className="container-narrow mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Nie znalazłeś odpowiedzi?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Skontaktuj się z nami - chętnie odpowiemy na wszystkie Twoje pytania.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg" asChild>
                    <a href="tel:+48575743443">
                      <Phone className="w-5 h-5 mr-2" />
                      +48 575 743 443
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
