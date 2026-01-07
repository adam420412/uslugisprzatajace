import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import cleanOffice from "@/assets/clean-office.jpg";
import cleanApartment from "@/assets/clean-apartment.jpg";
import cleaningSupplies from "@/assets/cleaning-supplies.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "jak-utrzymac-czyste-biuro",
    title: "Jak utrzymać czyste biuro przez cały tydzień?",
    excerpt: "Poznaj sprawdzone metody, które pozwolą Ci zachować porządek w biurze bez codziennego sprzątania. Praktyczne wskazówki dla każdego.",
    image: cleanOffice,
    category: "Porady",
    author: "Anna Kowalska",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: 2,
    slug: "ekologiczne-sprzatanie-domu",
    title: "Ekologiczne sprzątanie domu – naturalne środki czystości",
    excerpt: "Odkryj moc naturalnych środków czystości. Ocet, soda i cytryna mogą zdziałać cuda! Sprawdź nasze przepisy na domowe detergenty.",
    image: cleaningSupplies,
    category: "Eko",
    author: "Marcin Nowak",
    date: "2024-01-10",
    readTime: "7 min",
  },
  {
    id: 3,
    slug: "sprzatanie-mieszkania-przed-swietami",
    title: "Sprzątanie mieszkania przed świętami – kompletny przewodnik",
    excerpt: "Święta tuż tuż! Przygotowaliśmy dla Ciebie kompletny przewodnik jak posprzątać mieszkanie przed przyjazdem gości.",
    image: cleanApartment,
    category: "Poradnik",
    author: "Katarzyna Wiśniewska",
    date: "2024-01-05",
    readTime: "10 min",
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Blog i poradnik
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Porady ekspertów od sprzątania
          </h2>
          <p className="text-muted-foreground text-lg">
            Dzielimy się wiedzą i doświadczeniem. Znajdziesz tu praktyczne porady, 
            triki i inspiracje dotyczące utrzymania czystości.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-elevated overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("pl-PL")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
                  >
                    Czytaj
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              Zobacz wszystkie artykuły
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
