import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    uslugi: [
      { label: "Sprzątanie biur", href: "/uslugi/sprzatanie-biur" },
      { label: "Sprzątanie mieszkań", href: "/uslugi/sprzatanie-mieszkan" },
      { label: "Sprzątanie biurowców", href: "/uslugi/sprzatanie-biurowcow" },
      { label: "Sprzątanie po remoncie", href: "/uslugi/sprzatanie-po-remoncie" },
      { label: "Sprzątanie hoteli", href: "/uslugi/sprzatanie-hoteli" },
      { label: "Sprzątanie hal", href: "/uslugi/sprzatanie-hal" },
    ],
    firma: [
      { label: "O nas", href: "#" },
      { label: "Kariera", href: "#" },
      { label: "Blog", href: "/blog" },
    ],
    pomoc: [
      { label: "FAQ", href: "/faq" },
      { label: "Cennik", href: "/cennik" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="container-narrow mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-background block">Usługi Sprzątające</span>
                <span className="text-sm text-background/50">.com.pl</span>
              </div>
            </Link>
            <p className="text-background/60 mb-8 max-w-sm">
              Profesjonalne usługi sprzątania dla firm i osób prywatnych. 
              Dbamy o czystość, żebyś Ty mógł skupić się na tym, co ważne.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <a href="tel:+48575743443" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+48 575 743 443</span>
              </a>
              <a href="mailto:kontakt@uslugisprzatajace.com.pl" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">kontakt@uslugisprzatajace.com.pl</span>
              </a>
              <div className="flex items-center gap-3 text-background/60">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>ul. Przykładowa 10, 00-001 Warszawa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-background font-bold mb-6">Usługi</h4>
            <ul className="space-y-3">
              {footerLinks.uslugi.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-background font-bold mb-6">Firma</h4>
            <ul className="space-y-3">
              {footerLinks.firma.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-background font-bold mb-6">Pomoc</h4>
            <ul className="space-y-3">
              {footerLinks.pomoc.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-narrow mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} uslugisprzatajace.com.pl. Wszelkie prawa zastrzeżone.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-primary transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
