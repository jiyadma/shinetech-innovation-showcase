import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import heroImg from "@/assets/hero-refinery.jpg";
import { company } from "@/lib/site";
import { Reveal } from "./Reveal";

/** The two angled bars from the Shinetech "S" mark. */
export function SlashMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden>
      <span className="slash-mark" />
      <span className="slash-mark opacity-40" />
    </span>
  );
}

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
      <div className="absolute inset-0 -z-30 bg-diagonal" />
      <div className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[58%]">
        <div className="absolute inset-0 -translate-x-6 bg-gold lg:clip-slant" />
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover lg:clip-slant" width={1920} height={1088} />
        <div className="absolute inset-0 bg-navy-deep/75 lg:bg-navy-deep/25 lg:clip-slant" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="max-w-xl">
          <div className="animate-rise flex items-center gap-3 text-sm font-semibold text-navy-foreground/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold">{label}</span>
          </div>
          <h1 className="animate-rise mt-6 text-4xl font-extrabold leading-[1.06] text-navy-foreground sm:text-5xl md:text-6xl [animation-delay:100ms]">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-rise mt-6 text-lg leading-relaxed text-navy-foreground/75 [animation-delay:200ms]">{subtitle}</p>
          )}
          <SlashMark className="animate-rise mt-8 [animation-delay:300ms]" />
        </div>
      </div>
    </section>
  );
}

/** Section headline: gold slash mark, headline, optional intro beside it. */
export function SectionHeader({
  title,
  intro,
  light = false,
  align = "left",
}: {
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const titleCls = `text-3xl font-extrabold leading-[1.1] md:text-5xl ${light ? "text-navy-foreground" : "text-navy"}`;
  const introCls = `text-lg leading-relaxed ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`;

  if (align === "center") {
    return (
      <Reveal className="mx-auto max-w-3xl text-center">
        <SlashMark />
        <h2 className={`mt-5 ${titleCls}`}>{title}</h2>
        {intro && <p className={`mt-6 ${introCls}`}>{intro}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className={`grid gap-6 ${intro ? "md:grid-cols-2 md:items-end md:gap-16" : ""}`}>
      <div>
        <SlashMark />
        <h2 className={`mt-5 max-w-xl ${titleCls}`}>{title}</h2>
      </div>
      {intro && <p className={`max-w-lg md:justify-self-end ${introCls}`}>{intro}</p>}
    </Reveal>
  );
}

export function CtaBand({ title = "Have a Project in Mind?", text }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <div className="absolute inset-0 -z-20 bg-diagonal" />
      <div className="glow-gold absolute -right-40 -top-40 -z-10 h-[520px] w-[520px]" />
      <div className="absolute -right-10 top-0 -z-10 hidden h-full w-72 skew-x-[-24deg] bg-gold/90 lg:block" />
      <div className="absolute right-60 top-0 -z-10 hidden h-full w-16 skew-x-[-24deg] bg-gold/30 lg:block" />
      <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SlashMark />
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-foreground md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-foreground/70">
            {text ?? `Send your data sheet or material list to ${company.email} — we reply with a quotation within 24 hours.`}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 lg:col-span-5">
          <Link
            to="/contact"
            className="cut-corners group inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold text-gold-foreground transition hover:bg-gold-soft"
          >
            Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={company.phoneHref}
            className="cut-corners inline-flex items-center gap-2 bg-navy px-8 py-4 text-sm font-bold text-navy-foreground transition hover:bg-navy-foreground hover:text-navy"
          >
            <Phone className="h-4 w-4" /> {company.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
