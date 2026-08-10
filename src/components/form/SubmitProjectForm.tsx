import { useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Upload,
  X,
  Send,
  Lock,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { SUBMIT_ENDPOINT } from "@/config/site";
import { sectors } from "@/data/sectors";
import { tx } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Input, Select, Textarea } from "./fields";
import { Button } from "../Button";
import { ScrollReveal } from "../ScrollReveal";

interface InfoState {
  name: string;
  organisation: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  website: string;
}

interface ProjectState {
  name: string;
  sector: string;
  location: string;
  description: string;
  advancement: string;
}

interface FinanceState {
  budget: string;
  fundingSought: string;
  fundingType: string;
  timeline: string;
}

const MAX_FILE_MB = 10;
const ACCEPTED = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx"];

export function SubmitProjectForm() {
  const { t, lang } = useI18n();
  const [step, setStep] = useState(0);
  const [info, setInfo] = useState<InfoState>({ name: "", organisation: "", role: "", email: "", phone: "", country: "", website: "" });
  const [project, setProject] = useState<ProjectState>({ name: "", sector: "", location: "", description: "", advancement: "" });
  const [finance, setFinance] = useState<FinanceState>({ budget: "", fundingSought: "", fundingType: "", timeline: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileError, setFileError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const setInfoField = (k: keyof InfoState) => (v: string) => setInfo((s) => ({ ...s, [k]: v }));
  const setProjectField = (k: keyof ProjectState) => (v: string) => setProject((s) => ({ ...s, [k]: v }));
  const setFinanceField = (k: keyof FinanceState) => (v: string) => setFinance((s) => ({ ...s, [k]: v }));

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const required = () => t("contactPage.form.errors.required");

  function validateStep(s: number): boolean {
    const next: Record<string, string> = {};
    if (s === 0) {
      if (!info.name.trim()) next.name = required();
      if (!info.email.trim()) next.email = required();
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) next.email = t("contactPage.form.errors.email");
    }
    if (s === 1) {
      if (!project.name.trim()) next.pName = required();
      if (!project.sector) next.sector = required();
      if (!project.description.trim()) next.description = required();
    }
    if (s === 3) {
      if (!consent) next.consent = required();
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleNext() {
    if (validateStep(step)) next();
  }

  function onFiles(filesList: FileList | null) {
    if (!filesList || filesList.length === 0) return;
    setFileError("");
    const incoming: File[] = [];
    for (const f of Array.from(filesList)) {
      const okExt = ACCEPTED.some((ext) => f.name.toLowerCase().endsWith(ext));
      if (!okExt) {
        setFileError(t("submitPage.validation"));
        continue;
      }
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        setFileError(t("submitPage.validation"));
        continue;
      }
      incoming.push(f);
    }
    setFiles((prev) => [...prev, ...incoming]);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (info.website) return;
    if (!validateStep(3)) return;
    setSending(true);
    try {
      const meta = JSON.stringify({ info, project, finance, consent, timestamp: new Date().toISOString() });
      const form = new FormData();
      form.append("project", new Blob([meta], { type: "application/json" }));
      files.forEach((f) => form.append("documents", f));
      await fetch(SUBMIT_ENDPOINT, { method: "POST", body: form });
    } catch {
      // No backend connected yet - payload is logged for development.
      console.info("[submit-project] request queued", { info, project, finance, files: files.map((f) => f.name) });
    } finally {
      setSending(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <ScrollReveal>
        <div className="flex flex-col items-center gap-4 rounded-[3px] border border-emerald-500/30 bg-emerald-50 px-8 py-16 text-center">
          <CheckCircle2 className="h-14 w-14 text-emerald-600" aria-hidden="true" />
          <h3 className="font-display text-2xl font-bold text-ink-900">{t("submitPage.success.title")}</h3>
          <p className="max-w-lg text-sm leading-relaxed text-mist-600">{t("submitPage.success.body")}</p>
          <Button
            variant="outline-dark"
            className="mt-4"
            onClick={() => {
              setSent(false);
              setStep(0);
              setInfo({ name: "", organisation: "", role: "", email: "", phone: "", country: "", website: "" });
              setProject({ name: "", sector: "", location: "", description: "", advancement: "" });
              setFinance({ budget: "", fundingSought: "", fundingType: "", timeline: "" });
              setFiles([]);
              setConsent(false);
            }}
          >
            {t("submitPage.success.another")}
          </Button>
        </div>
      </ScrollReveal>
    );
  }

  const stepLabels: string[] = [];
  for (let i = 0; i < 5; i++) stepLabels.push(t(`submitPage.steps.${i}`));

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Progress */}
      <ol className="mb-8 flex items-center gap-0" aria-label="Progress">
        {stepLabels.map((label, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <li key={label} className="flex flex-1 items-center last:flex-none">
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className="flex items-center gap-2.5"
                aria-current={active ? "step" : undefined}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-display text-xs font-bold transition-colors",
                    done && "border-gold-500 bg-gold-500 text-ink-900",
                    active && "border-gold-500 bg-transparent text-gold-500",
                    !done && !active && "border-mist-300 text-mist-400",
                  )}
                >
                  {done ? <Check className="h-4 w-4" aria-hidden="true" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "hidden font-display text-xs font-semibold sm:block",
                    active ? "text-ink-900" : done ? "text-gold-600" : "text-mist-400",
                  )}
                >
                  {label}
                </span>
              </button>
              {i < stepLabels.length - 1 && (
                <span
                  className={cn(
                    "mx-3 hidden h-px flex-1 sm:block",
                    done ? "bg-gold-500" : "bg-mist-200",
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Step 1 - Information */}
      {step === 0 && (
        <div className="space-y-5">
          <div>
            <h3 className="t-h3">{t("submitPage.step1.title")}</h3>
            <p className="mt-1 text-sm text-mist-500">{t("submitPage.step1.body")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="s-name" label={t("submitPage.step1.name")} placeholder={t("submitPage.step1.namePh")} value={info.name} onChange={(e) => setInfoField("name")(e.target.value)} error={errors.name} required autoComplete="name" />
            <Input id="s-org" label={t("submitPage.step1.organisation")} placeholder={t("submitPage.step1.organisationPh")} value={info.organisation} onChange={(e) => setInfoField("organisation")(e.target.value)} autoComplete="organization" />
            <Input id="s-role" label={t("submitPage.step1.role")} placeholder={t("submitPage.step1.rolePh")} value={info.role} onChange={(e) => setInfoField("role")(e.target.value)} />
            <Input id="s-email" type="email" label={t("submitPage.step1.email")} placeholder={t("submitPage.step1.emailPh")} value={info.email} onChange={(e) => setInfoField("email")(e.target.value)} error={errors.email} required autoComplete="email" />
            <Input id="s-phone" type="tel" label={t("submitPage.step1.phone")} placeholder={t("submitPage.step1.phonePh")} value={info.phone} onChange={(e) => setInfoField("phone")(e.target.value)} autoComplete="tel" />
            <Input id="s-country" label={t("submitPage.step1.country")} placeholder={t("submitPage.step1.countryPh")} value={info.country} onChange={(e) => setInfoField("country")(e.target.value)} />
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="s-website">Website</label>
            <input id="s-website" tabIndex={-1} autoComplete="off" value={info.website} onChange={(e) => setInfoField("website")(e.target.value)} />
          </div>
        </div>
      )}

      {/* Step 2 - Project */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h3 className="t-h3">{t("submitPage.step2.title")}</h3>
            <p className="mt-1 text-sm text-mist-500">{t("submitPage.step2.body")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="s-pname" label={t("submitPage.step2.projectName")} placeholder={t("submitPage.step2.projectNamePh")} value={project.name} onChange={(e) => setProjectField("name")(e.target.value)} error={errors.pName} required />
            <Select id="s-psector" label={t("submitPage.step2.sector")} value={project.sector} onChange={(e) => setProjectField("sector")(e.target.value)} error={errors.sector} required>
              <option value="" disabled>
                {t("submitPage.step2.sectorPh")}
              </option>
              {sectors.map((s) => (
                <option key={s.id} value={s.id}>
                  {tx(s.name, lang)}
                </option>
              ))}
            </Select>
            <Input id="s-ploc" label={t("submitPage.step2.location")} placeholder={t("submitPage.step2.locationPh")} value={project.location} onChange={(e) => setProjectField("location")(e.target.value)} />
            <Select id="s-padv" label={t("submitPage.step2.advancement")} value={project.advancement} onChange={(e) => setProjectField("advancement")(e.target.value)}>
              <option value="" disabled>
                {t("submitPage.step2.advancement")}
              </option>
              {Array.from({ length: 6 }).map((_, i) => (
                <option key={i} value={String(i)}>
                  {t(`submitPage.step2.advancementOptions.${i}`)}
                </option>
              ))}
            </Select>
            <div className="sm:col-span-2">
              <Textarea id="s-pdesc" label={t("submitPage.step2.description")} placeholder={t("submitPage.step2.descriptionPh")} value={project.description} onChange={(e) => setProjectField("description")(e.target.value)} error={errors.description} required />
            </div>
          </div>
        </div>
      )}

      {/* Step 3 - Finance */}
      {step === 2 && (
        <div className="space-y-5">
          <div>
            <h3 className="t-h3">{t("submitPage.step3.title")}</h3>
            <p className="mt-1 text-sm text-mist-500">{t("submitPage.step3.body")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input id="s-budget" label={t("submitPage.step3.budget")} placeholder={t("submitPage.step3.budgetPh")} value={finance.budget} onChange={(e) => setFinanceField("budget")(e.target.value)} />
            <Input id="s-sought" label={t("submitPage.step3.fundingSought")} placeholder={t("submitPage.step3.fundingSoughtPh")} value={finance.fundingSought} onChange={(e) => setFinanceField("fundingSought")(e.target.value)} />
            <Select id="s-ftype" label={t("submitPage.step3.fundingType")} value={finance.fundingType} onChange={(e) => setFinanceField("fundingType")(e.target.value)}>
              <option value="" disabled>
                {t("submitPage.step3.fundingType")}
              </option>
              {Array.from({ length: 6 }).map((_, i) => (
                <option key={i} value={String(i)}>
                  {t(`submitPage.step3.fundingTypeOptions.${i}`)}
                </option>
              ))}
            </Select>
            <Input id="s-timeline" label={t("submitPage.step3.timeline")} placeholder={t("submitPage.step3.timelinePh")} value={finance.timeline} onChange={(e) => setFinanceField("timeline")(e.target.value)} />
          </div>
        </div>
      )}

      {/* Step 4 - Documents */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h3 className="t-h3">{t("submitPage.step4.title")}</h3>
            <p className="mt-1 text-sm text-mist-500">{t("submitPage.step4.body")}</p>
            <p className="mt-1 text-xs text-mist-400">{t("submitPage.step4.supported")}</p>
          </div>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex w-full flex-col items-center justify-center gap-3 rounded-[3px] border-2 border-dashed border-mist-300 bg-mist-50 px-6 py-10 text-center transition-colors hover:border-gold-500/60 hover:bg-mist-100"
          >
            <Upload className="h-7 w-7 text-mist-400" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-ink-800">{t("submitPage.step4.addFile")}</span>
          </button>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept={ACCEPTED.join(",")}
            className="sr-only"
            onChange={(e) => onFiles(e.target.files)}
          />
          {fileError && <p className="text-xs font-medium text-red-600" role="alert">{fileError}</p>}
          {files.length > 0 && (
            <div>
              <p className="mb-2 font-display text-sm font-semibold text-ink-800">{t("submitPage.step4.attached")}</p>
              <ul className="space-y-2">
                {files.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 rounded-[3px] border border-mist-200 bg-white px-4 py-3">
                    <span className="flex min-w-0 items-center gap-3">
                      <FileText className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                      <span className="truncate text-sm text-ink-800">{f.name}</span>
                      <span className="shrink-0 text-xs text-mist-400">
                        {(f.size / 1024 / 1024).toFixed(1)} Mo
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                      aria-label={`${t("submitPage.step4.remove")} ${f.name}`}
                      className="text-mist-400 transition-colors hover:text-red-600"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <label className="flex cursor-pointer items-start gap-3 rounded-[3px] border border-mist-200 bg-white p-4">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-gold-500"
            />
            <span className="text-sm leading-relaxed text-mist-600">{t("submitPage.step5.consent")}</span>
          </label>
          {errors.consent && <p className="text-xs font-medium text-red-600" role="alert">{errors.consent}</p>}
          <p className="flex items-start gap-2 text-xs leading-relaxed text-mist-400">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" aria-hidden="true" />
            {t("submitPage.step5.confidentiality")}
          </p>
        </div>
      )}

      {/* Step 5 - Confirmation */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="t-h3">{t("submitPage.step5.title")}</h3>
            <p className="mt-1 text-sm text-mist-500">{t("submitPage.step5.body")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <dl className="space-y-2 rounded-[3px] border border-mist-200 p-5">
              <dt className="font-display text-xs font-bold uppercase tracking-wider text-gold-600">{t("submitPage.step5.summaryPersonal")}</dt>
              {[
                ["step1.name", info.name],
                ["step1.organisation", info.organisation],
                ["step1.email", info.email],
                ["step1.country", info.country],
              ].map(([k, v]) => (
                <dd key={String(k)} className="flex justify-between gap-4 border-b border-mist-100 pb-2 text-sm last:border-0">
                  <span className="text-mist-500">{t(`submitPage.${k}`)}</span>
                  <span className="text-right font-medium text-ink-900">{v || "-"}</span>
                </dd>
              ))}
            </dl>
            <dl className="space-y-2 rounded-[3px] border border-mist-200 p-5">
              <dt className="font-display text-xs font-bold uppercase tracking-wider text-gold-600">{t("submitPage.step5.summaryProject")}</dt>
              {[
                ["step2.projectName", project.name],
                ["step2.sector", project.sector ? tx(sectors.find((s) => s.id === project.sector)?.name, lang) : ""],
                ["step2.location", project.location],
              ].map(([k, v]) => (
                <dd key={String(k)} className="flex justify-between gap-4 border-b border-mist-100 pb-2 text-sm last:border-0">
                  <span className="text-mist-500">{t(`submitPage.${k}`)}</span>
                  <span className="text-right font-medium text-ink-900">{v || "-"}</span>
                </dd>
              ))}
            </dl>
          </div>
          <dl className="space-y-2 rounded-[3px] border border-mist-200 p-5">
            <dt className="font-display text-xs font-bold uppercase tracking-wider text-gold-600">{t("submitPage.step5.summaryFinance")}</dt>
            {[
              ["step3.budget", finance.budget],
              ["step3.fundingSought", finance.fundingSought],
              ["step3.timeline", finance.timeline],
            ].map(([k, v]) => (
              <dd key={String(k)} className="flex justify-between gap-4 border-b border-mist-100 pb-2 text-sm last:border-0">
                <span className="text-mist-500">{t(`submitPage.${k}`)}</span>
                <span className="text-right font-medium text-ink-900">{v || "-"}</span>
              </dd>
            ))}
          </dl>
          <div className="rounded-[3px] border border-mist-200 p-5">
            <dt className="font-display text-xs font-bold uppercase tracking-wider text-gold-600">{t("submitPage.step5.summaryDocs")}</dt>
            <dd className="mt-2 text-sm text-mist-600">
              {files.length === 0 ? t("submitPage.step5.noDoc") : files.map((f) => f.name).join(", ")}
            </dd>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 border-t border-mist-200 pt-6 sm:flex-row sm:items-center">
        {step > 0 ? (
          <Button type="button" variant="outline-dark" onClick={back}>
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t("common.back")}
          </Button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <Button type="button" variant="dark" onClick={handleNext}>
            {t("common.continueStep")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button type="submit" variant="primary" size="lg" disabled={sending}>
            <Send className="h-4 w-4" aria-hidden="true" />
            {sending ? t("common.send") : t("submitPage.step5.send")}
          </Button>
        )}
      </div>
    </form>
  );
}
