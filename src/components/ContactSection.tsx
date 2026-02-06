import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: "+48 123 456 789",
      href: "tel:+48123456789",
    },
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "kontakt@domblasku.pl",
      href: "mailto:kontakt@domblasku.pl",
    },
    {
      icon: MapPin,
      labelKey: "contact.address",
      value: "ul. Czysta 15, 00-001 Warszawa",
      href: "#",
    },
    {
      icon: Clock,
      labelKey: "contact.hours",
      value: "Pon-Pt: 8:00-18:00",
      href: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: t("contact.form.success"),
        description: t("contact.form.successDescription"),
      });
    }, 1500);
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact form */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-3xl border border-border p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t("contact.form.success")}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {t("contact.form.successDescription")}
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    {t("contact.form.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <Input
                        type="text"
                        placeholder={t("contact.form.namePlaceholder")}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.form.phone")} *
                      </label>
                      <Input
                        type="tel"
                        placeholder={t("contact.form.phonePlaceholder")}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.service")}
                    </label>
                    <select className="w-full h-12 rounded-xl border border-input bg-background px-3 text-foreground">
                      <option value="">{t("contact.form.servicePlaceholder")}</option>
                      <option value="biuro">{t("contact.services.office")}</option>
                      <option value="mieszkanie">{t("contact.services.apartment")}</option>
                      <option value="biurowiec">{t("contact.services.building")}</option>
                      <option value="remont">{t("contact.services.renovation")}</option>
                      <option value="hotel">{t("contact.services.hotel")}</option>
                      <option value="hala">{t("contact.services.industrial")}</option>
                      <option value="inne">{t("contact.services.other")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-border" id="consent" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      {t("contact.form.consent")} *
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
                      t("contact.form.sending")
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right - Contact info */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {t("contact.contactData", "Dane kontaktowe")}
              </h3>
              
              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        {t(item.labelKey)}
                      </div>
                      <div className="font-semibold text-foreground">
                        {item.value}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Google Maps */}
              <div className="h-64 rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3913185268424!2d21.00732731580091!3d52.23194506437542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("contact.mapTitle", "Lokalizacja na mapie")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
