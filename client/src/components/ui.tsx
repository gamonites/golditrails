import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type { Category } from "../lib/types";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-outline bg-surface-high shadow-sm ${className}`}>
      {children}
    </div>
  );
}

type BadgeTone = "neutral" | "cool" | "right" | "hot" | "composite";

const BADGE_TONES: Record<BadgeTone, string> = {
  neutral: "border-outline bg-surface-low text-on-surface-variant",
  cool: "border-secondary/30 bg-secondary-container text-on-secondary-container",
  right: "border-primary/30 bg-primary-container text-on-primary-container",
  hot: "border-tertiary/30 bg-tertiary-container text-on-tertiary-container",
  composite: "border-primary/40 bg-surface-high text-primary",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${BADGE_TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function categoryTone(c: Category): BadgeTone {
  return c === "just_right" ? "right" : c === "too_cool" ? "cool" : "hot";
}

export function categoryLabel(c: Category): string {
  return c === "just_right" ? "Just right" : c === "too_cool" ? "Too easy" : "Too hard";
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function Button({ variant = "primary", className = "", ...rest }: ButtonProps) {
  const variants: Record<string, string> = {
    primary: "bg-primary text-on-primary hover:opacity-90 disabled:opacity-40",
    outline: "border border-outline bg-surface-high text-on-surface hover:bg-surface-low",
    ghost: "text-primary hover:bg-primary-container",
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...rest }: InputProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1 block text-sm font-medium text-on-surface-variant">{label}</span>
      )}
      <input
        className={`w-full rounded-md border border-outline bg-surface-high px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
        {...rest}
      />
    </label>
  );
}

export function Alert({
  tone = "error",
  className = "",
  children,
}: {
  tone?: "error" | "info";
  className?: string;
  children: ReactNode;
}) {
  const styles =
    tone === "error"
      ? "border-tertiary/30 bg-tertiary-container text-on-tertiary-container"
      : "border-primary/30 bg-primary-container text-on-primary-container";
  return <div className={`rounded-lg border px-4 py-3 text-sm ${styles} ${className}`}>{children}</div>;
}

export function Spinner() {
  return (
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-outline border-t-primary" />
  );
}

export function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-outline bg-surface-high p-4">
      <div className="text-xs font-medium uppercase tracking-wide text-on-surface-variant">{label}</div>
      <div className="mt-1 text-xl font-bold tabular-nums">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-on-surface-variant">{sub}</div>}
    </div>
  );
}
