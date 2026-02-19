import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { href: "/uslugi", label: "Usługi" },
    { href: "/cennik", label: "Cennik" },
    { href: "/opinie", label: "Opinie" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-card/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-narrow mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                Usługi Sprzątające
              </span>
              <span className="text-xs text-muted-foreground">.com.pl</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher isScrolled={true} />
            <a
              href="tel:+48575743443"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-foreground"
            >
              <Phone className="w-4 h-4" />
              +48 575 743 443
            </a>
            <Button variant="cta" size="default" asChild>
              <Link to="/kontakt">Bezpłatna wycena</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher isScrolled={true} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`block py-2 transition-colors ${
                    location.pathname === item.href 
                      ? 'text-primary font-medium' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:+48575743443"
                  className="flex items-center gap-2 text-foreground"
                >
                  <Phone className="w-4 h-4" />
                  +48 575 743 443
                </a>
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/kontakt">Bezpłatna wycena</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
