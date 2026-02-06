import { Home, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    uslugi: [
      { labelKey: "contact.services.office", href: "/uslugi/sprzatanie-biur" },
      { labelKey: "contact.services.apartment", href: "/uslugi/sprzatanie-mieszkan" },
      { labelKey: "contact.services.building", href: "/uslugi/sprzatanie-biurowcow" },
      { labelKey: "contact.services.renovation", href: "/uslugi/sprzatanie-po-remoncie" },
      { labelKey: "contact.services.hotel", href: "/uslugi/sprzatanie-hoteli" },
      { labelKey: "contact.services.industrial", href: "/uslugi/sprzatanie-hal" },
    ],
    firma: [
      { labelKey: "footer.aboutUs", href: "#" },
      { labelKey: "nav.portfolio", href: "/#realizacje" },
      { labelKey: "nav.testimonials", href: "/#opinie" },
      { labelKey: "blog.badge", href: "#" },
      { labelKey: "footer.career", href: "#" },
    ],
    pomoc: [
      { labelKey: "nav.faq", href: "/#faq" },
      { labelKey: "nav.pricing", href: "/#cennik" },
      { labelKey: "nav.calculator", href: "/#kalkulator" },
      { labelKey: "nav.contact", href: "/#kontakt" },
      { labelKey: "footer.privacyPolicy", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main footer content */}
      <div className="container-narrow mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-secondary-foreground">Dom Blasku</span>
            </Link>
            <p className="text-secondary-foreground/60 mb-8 max-w-sm text-lg">
              {t("footer.description")}
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <a href="tel:+48123456789" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+48 123 456 789</span>
              </a>
              <a href="mailto:kontakt@domblasku.pl" className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">kontakt@domblasku.pl</span>
              </a>
              <div className="flex items-center gap-3 text-secondary-foreground/60">
                <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>ul. Czysta 15, 00-001 Warszawa</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-6">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {footerLinks.uslugi.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-6">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.firma.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-secondary-foreground font-bold mb-6">{t("footer.help", "Pomoc")}</h4>
            <ul className="space-y-3">
              {footerLinks.pomoc.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-narrow mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} Dom Blasku. {t("footer.rights")}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t("footer.privacyPolicy")}
              </a>
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
