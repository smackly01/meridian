import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useI18n } from "@/i18n";
import { CONTACT_ENDPOINT } from "@/config/site";
import { Input, Textarea } from "./fields";
import { Button } from "../Button";
import { ScrollReveal } from "../ScrollReveal";

interface FormState {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
  website: string;
}

const EMPTY: FormState = {
  name: "",
  organisation: "",
  role: "",
  email: "",
  phone: "",
  country: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const { t } = useI18n();
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    const required = ["name", "email", "subject", "message"] as const;
    required.forEach((k) => {
      if (!values[k].trim()) next[k] = t("contactPage.form.errors.required");
    });
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = t("contactPage.form.errors.email");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    // honeypot - silently drop bots
    if (values.website) return;
    if (!validate()) return;
    setSending(true);
    try {
      const payload = { ...values, timestamp: new Date().toISOString() };
      await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // No backend connected yet - the payload is logged for development.
      console.info("[contact] request queued", values);
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <ScrollReveal>
        <div className="flex flex-col items-center gap-4 rounded-[3px] border border-emerald-500/30 bg-emerald-50 px-8 py-14 text-center">
          <CheckCircle2 className="h-12 w-12 text-emerald-600" aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-ink-900">
            {t("contactPage.form.successTitle")}
          </h3>
          <p className="max-w-md text-sm text-mist-600">{t("contactPage.form.successBody")}</p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="c-name"
          label={t("contactPage.form.name")}
          placeholder={t("contactPage.form.namePh")}
          value={values.name}
          onChange={(e) => set("name")(e.target.value)}
          error={errors.name}
          required
          autoComplete="name"
        />
        <Input
          id="c-org"
          label={t("contactPage.form.organisation")}
          placeholder={t("contactPage.form.organisationPh")}
          value={values.organisation}
          onChange={(e) => set("organisation")(e.target.value)}
          autoComplete="organization"
        />
        <Input
          id="c-role"
          label={t("contactPage.form.role")}
          placeholder={t("contactPage.form.rolePh")}
          value={values.role}
          onChange={(e) => set("role")(e.target.value)}
        />
        <Input
          id="c-email"
          type="email"
          label={t("contactPage.form.email")}
          placeholder={t("contactPage.form.emailPh")}
          value={values.email}
          onChange={(e) => set("email")(e.target.value)}
          error={errors.email}
          required
          autoComplete="email"
        />
        <Input
          id="c-phone"
          type="tel"
          label={t("contactPage.form.phone")}
          placeholder={t("contactPage.form.phonePh")}
          value={values.phone}
          onChange={(e) => set("phone")(e.target.value)}
          autoComplete="tel"
        />
        <Input
          id="c-country"
          label={t("contactPage.form.country")}
          placeholder={t("contactPage.form.countryPh")}
          value={values.country}
          onChange={(e) => set("country")(e.target.value)}
        />
      </div>

      <Input
        id="c-subject"
        label={t("contactPage.form.subject")}
        placeholder={t("contactPage.form.subjectPh")}
        value={values.subject}
        onChange={(e) => set("subject")(e.target.value)}
        error={errors.subject}
        required
      />

      <Textarea
        id="c-message"
        label={t("contactPage.form.message")}
        placeholder={t("contactPage.form.messagePh")}
        value={values.message}
        onChange={(e) => set("message")(e.target.value)}
        error={errors.message}
        required
        className="min-h-[160px]"
      />

      {/* Honeypot - hidden from humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="c-website">Website</label>
        <input
          id="c-website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website")(e.target.value)}
        />
      </div>

      <p className="text-xs text-mist-400">{t("contactPage.form.privacy")}</p>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
        <Send className="h-4 w-4" aria-hidden="true" />
        {sending ? t("common.send") : t("contactPage.form.send")}
      </Button>
    </form>
  );
}
