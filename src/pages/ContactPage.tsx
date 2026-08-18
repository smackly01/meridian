import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook } from "lucide-react";
import { useI18n } from "@/i18n";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/form/ContactForm";
import { site } from "@/config/site";
import { images } from "@/config/images";

export default function ContactPage() {
  const { t } = useI18n();

  const infos = [
    { Icon: MapPin, label: t("contactPage.addressLabel"), value: site.contact.address, href: undefined },
    { Icon: Phone, label: t("contactPage.phoneLabel"), value: site.contact.phone, href: `tel:${site.contact.phone.replace(/[^+\d]/g, "")}` },
    { Icon: Mail, label: t("contactPage.emailLabel"), value: site.contact.email, href: `mailto:${site.contact.email}` },
    { Icon: Clock, label: t("contactPage.hoursLabel"), value: site.contact.hours, href: undefined },
  ];

  const socials = [
    { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
    { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
    { Icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <>
      <PageHero
        seoPath="contact"
        overline={t("contactPage.hero.overline")}
        title={t("contactPage.hero.title")}
        body={t("contactPage.hero.body")}
        image={images.contact}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <h2 className="t-h2">{t("contactPage.infoTitle")}</h2>
              <dl className="mt-8 space-y-6">
                {infos.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border border-mist-200 text-ink-800">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="font-display text-xs font-bold uppercase tracking-wider text-mist-400">
                        {label}
                      </dt>
                      <dd className="mt-1">
                        {href ? (
                          <a href={href} className="font-display font-semibold text-ink-900 hover:text-gold-600">
                            {value}
                          </a>
                        ) : (
                          <span className="font-display font-semibold text-ink-900">{value}</span>
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="mt-10 border-t border-mist-200 pt-8">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-mist-400">
                  {t("contactPage.socialLabel")}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-mist-200 text-ink-700 transition-colors hover:border-gold-500 hover:text-gold-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="rounded-[3px] border border-mist-200 bg-white p-7 shadow-card md:p-10">
                <h2 className="t-h3">{t("contactPage.formTitle")}</h2>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
