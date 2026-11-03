import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import heroImg from "@/assets/hero-refinery.jpg";
import { company } from "@/lib/site";
import { Reveal } from "./Reveal";

export function PageHero({
  index,
  label,
  title,
  subtitle,
  image = heroImg,
}: {
  index: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 -z-10 bg-banner-overlay" />
      <div className="absolute inset-0 -z-10 bg-grid-lines" />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:pb-20 md:pt-52">
        <div className="animate-rise flex items-center gap-3 text-navy-foreground/60">
          <Link to="/" className="label-mono hover:text-gold">Home</Link>
          <span className="label-mono">/</span>
          <span className="label-mono text-gold">{label}</span>
        </div>
        <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
          <h1 className="animate-rise text-5xl font-extrabold uppercase leading-[0.95] text-navy-foreground md:col-span-8 md:text-7xl lg:text-8xl [animation-delay:100ms]">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-rise max-w-sm text-base leading-relaxed text-navy-foreground/75 md:col-span-4 md:justify-self-end [animation-delay:250ms]">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-navy-foreground/15 pt-5 text-navy-foreground/50">
          <span className="label-mono">({index})</span>
          <span className="label-mono hidden sm:block">{company.name}</span>
          <span className="label-mono">UAE — 25.2° N</span>
        </div>
      </div>
    </section>
  );
}

/** Editorial section header: index + label on the left, headline on the right. */
export function SectionHeader({
  index,
  label,
  title,
  intro,
  light = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
}) {
  return (
    <Reveal className={`grid gap-6 border-t pt-6 md:grid-cols-12 ${light ? "border-navy-foreground/15" : "border-navy/15"}`}>
      <div className="md:col-span-3">
        <span className={`label-mono ${light ? "text-navy-foreground/55" : "text-muted-foreground"}`}>
          ({index}) <span className="text-gold">— {label}</span>
        </span>
      </div>
      <div className="md:col-span-9">
        <h2 className={`max-w-4xl text-4xl font-extrabold leading-[1.02] md:text-6xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
        {intro && <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{intro}</p>}
      </div>
    </Reveal>
  );
}

export function CtaBand({ title = "Have a project in mind?", text }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10 bg-grid-lines" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal>
          <span className="label-mono text-gold">Start a conversation</span>
          <h2 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.95] text-navy-foreground md:text-8xl">{title}</h2>
        </Reveal>
        <Reveal delay={150} className="mt-12 flex flex-col gap-8 border-t border-navy-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md text-navy-foreground/70">
            {text ?? "Send us your data sheet or material list. Our technical team replies with a quotation within 24 hours."}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={`mailto:${company.email}`} className="link-underline text-sm font-semibold text-navy-foreground">
              {company.email}
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold py-4 pl-7 pr-5 text-sm font-bold uppercase tracking-wider text-gold-foreground transition hover:bg-gold-soft"
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
