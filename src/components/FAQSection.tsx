import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      questionKey: "faq.items.order.question",
      answerKey: "faq.items.order.answer",
      fallbackQ: "Jak zamówić usługę sprzątania?",
      fallbackA: "Wystarczy zadzwonić pod numer +48 575 743 443 lub wypełnić formularz kontaktowy na naszej stronie. Odpowiemy w ciągu 24 godzin i umówimy się na bezpłatną wycenę.",
    },
    {
      questionKey: "faq.items.quote.question",
      answerKey: "faq.items.quote.answer",
      fallbackQ: "Czy wycena jest bezpłatna?",
      fallbackA: "Tak, wycena jest całkowicie bezpłatna i niezobowiązująca. Przyjedziemy, ocenimy zakres prac i przedstawimy szczegółową ofertę cenową.",
    },
    {
      questionKey: "faq.items.products.question",
      answerKey: "faq.items.products.answer",
      fallbackQ: "Jakie środki czystości stosujecie?",
      fallbackA: "Używamy wyłącznie certyfikowanych, ekologicznych środków czystości, które są bezpieczne dla ludzi, zwierząt i środowiska.",
    },
    {
      questionKey: "faq.items.equipment.question",
      answerKey: "faq.items.equipment.answer",
      fallbackQ: "Czy macie własny sprzęt?",
      fallbackA: "Tak, przyjeżdżamy z pełnym wyposażeniem - profesjonalne odkurzacze, mopy, środki czystości i wszystkie niezbędne akcesoria.",
    },
    {
      questionKey: "faq.items.hours.question",
      answerKey: "faq.items.hours.answer",
      fallbackQ: "Czy możecie sprzątać wieczorami lub w weekendy?",
      fallbackA: "Oczywiście! Dostosowujemy się do potrzeb klienta. Sprzątamy w godzinach porannych, wieczornych, a także w weekendy i święta.",
    },
    {
      questionKey: "faq.items.satisfaction.question",
      answerKey: "faq.items.satisfaction.answer",
      fallbackQ: "Co jeśli nie będę zadowolony z usługi?",
      fallbackA: "Oferujemy gwarancję satysfakcji. Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów w ciągu 24 godzin od zgłoszenia.",
    },
    {
      questionKey: "faq.items.invoice.question",
      answerKey: "faq.items.invoice.answer",
      fallbackQ: "Czy wystawiacie faktury VAT?",
      fallbackA: "Tak, jesteśmy zarejestrowanym płatnikiem VAT i wystawiamy faktury dla firm oraz rachunki dla osób prywatnych.",
    },
    {
      questionKey: "faq.items.insurance.question",
      answerKey: "faq.items.insurance.answer",
      fallbackQ: "Czy macie ubezpieczenie?",
      fallbackA: "Tak, posiadamy pełne ubezpieczenie OC, które chroni zarówno nas, jak i naszych klientów na wypadek ewentualnych szkód.",
    },
  ];

  // Split faqs into two columns
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("faq.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("faq.description")}
          </p>
        </div>

        {/* Two column FAQ layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {t(faq.questionKey, faq.fallbackQ)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {t(faq.answerKey, faq.fallbackA)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {t(faq.questionKey, faq.fallbackQ)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {t(faq.answerKey, faq.fallbackA)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t("faq.otherQuestion", "Masz inne pytanie?")}
              </h3>
              <p className="text-muted-foreground">
                {t("faq.contactUs", "Skontaktuj się z nami telefonicznie lub mailowo. Chętnie odpowiemy na wszystkie Twoje pytania.")}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+48575743443"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +48 575 743 443
              </a>
              <a
                href="mailto:kontakt@uslugisprzatajace.com.pl"
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
