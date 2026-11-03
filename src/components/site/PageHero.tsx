import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import heroImg from "@/assets/hero-refinery.jpg";
import { company } from "@/lib/site";
import { Reveal } from "./Reveal";

export function PageHero({
  label,
  title,
  subtitle,
  image = heroImg,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img src={image} alt="" className="animate-slow-zoom absolute inset-0 -z-20 h-full w-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 -z-10 bg-banner-overlay" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-44 text-center md:pb-28 md:pt-52">
        <h1 className="animate-rise text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl md:text-6xl">{title}</h1>
        <span className="gold-rule animate-rise mx-auto mt-6 [animation-delay:100ms]" />
        {subtitle && (
          <p className="animate-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80 [animation-delay:200ms]">{subtitle}</p>
        )}
        <div className="animate-rise mt-8 inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-deep/40 px-5 py-2 text-sm text-navy-foreground/75 backdrop-blur [animation-delay:300ms]">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold">{label}</span>
        </div>
      </div>
    </section>
  );
}

/** Centered section headline with a gold rule and optional intro text. */
export function SectionHeader({
  title,
  intro,
  light = false,
  align = "center",
}: {
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`text-3xl font-extrabold leading-tight md:text-5xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
      <span className={`gold-rule mt-6 ${center ? "mx-auto" : ""}`} />
      {intro && <p className={`mt-6 text-lg leading-relaxed ${light ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{intro}</p>}
    </Reveal>
  );
}

export function CtaBand({ title = "Have a Project in Mind?", text }: { title?: string; text?: string }) {
  return (
    <section className="bg-gold">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-navy md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-navy/80">
            {text ?? `Send us your data sheet or material list at ${company.email} — we reply with a quotation within 24 hours.`}
          </p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-navy-foreground transition hover:bg-navy-deep"
        >
          Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
