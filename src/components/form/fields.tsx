import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

function FieldShell({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="field-label">
        {label}
        {required && (
          <span className="text-gold-600" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-mist-400">{hint}</p>}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (error?: string) =>
  cn(
    "field",
    error && "border-red-400 focus:border-red-500 focus:ring-red-500/10",
  );

export function Input({
  label,
  error,
  required,
  hint,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={props.id ?? ""} error={error} required={required} hint={hint}>
      <input
        className={cn(inputCls(error), className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${props.id}-error` : undefined}
        required={required}
        {...props}
      />
    </FieldShell>
  );
}

export function Select({
  label,
  error,
  required,
  hint,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  hint?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={props.id ?? ""} error={error} required={required} hint={hint}>
      <select
        className={cn(inputCls(error), "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%228%22%3E%3Cpath%20d=%22M1%201l5%205%205-5%22%20stroke=%22%23556276%22%20stroke-width=%221.5%22%20fill=%22none%22/%3E%3C/svg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${props.id}-error` : undefined}
        required={required}
        {...props}
      >
        {children}
      </select>
    </FieldShell>
  );
}

export function Textarea({
  label,
  error,
  required,
  hint,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  hint?: string;
}) {
  return (
    <FieldShell label={label} htmlFor={props.id ?? ""} error={error} required={required} hint={hint}>
      <textarea
        className={cn(inputCls(error), "min-h-[120px] resize-y", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${props.id}-error` : undefined}
        required={required}
        {...props}
      />
    </FieldShell>
  );
}
