import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Cog, Gauge, Handshake, Leaf, ShieldCheck, Sparkles, TrendingUp, Zap, Eye } from "lucide-react";
import heroImg from "@/assets/hero-refinery.jpg";
import oilgas from "@/assets/industry-oilgas.jpg";
import lng from "@/assets/industry-lng.jpg";
import chemicals from "@/assets/industry-chemicals.jpg";
import power from "@/assets/industry-power.jpg";
import hydrogen from "@/assets/industry-hydrogen.jpg";
import automation from "@/assets/product-automation.jpg";
import { SectionTitle } from "@/components/site/PageHero";
import { clientTypes } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shinetech Innovate FZE LLC | Valves, Instrumentation & Automation" },
      { name: "description", content: "Shinetech Innovate supplies valves, actuators, field instruments and automation for oil & gas, LNG, chemicals, power and green hydrogen." },
      { property: "og:title", content: "Shinetech Innovate FZE LLC | Industrial Supply Partner" },
      { property: "og:description", content: "Valves, instrumentation, automation and mechanical equipment for the energy sector." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: Cog, title: "Engineered Supply", text: "Valves, actuators and instruments sourced to exact project specifications and international standards." },
  { icon: Award, title: "Expertise that Delivers", text: "An experienced technical team that understands process plants and turns requirements into reliable solutions." },
  { icon: Leaf, title: "Sustainability First", text: "Responsible sourcing and energy-efficient equipment that supports a cleaner energy future." },
];

const industries = [
  { img: oilgas, title: "Oil & Gas, Refinery" },
  { img: lng, title: "Liquified Natural Gas" },
  { img: chemicals, title: "Fertilizer & Chemicals" },
  { img: power, title: "Power" },
  { img: hydrogen, title: "Green Hydrogen" },
];

const qualities = [
  { icon: ShieldCheck, title: "Trusted by Industry", text: "Chosen by operators and contractors for reliability and consistent quality." },
  { icon: Zap, title: "Agile and Responsive", text: "Fast quotations, quick sourcing and personalised support that keep your project on schedule." },
  { icon: Eye, title: "Transparent Operations", text: "Clear pricing, documentation and traceability at every step of the order." },
  { icon: Handshake, title: "Building Partnerships", text: "Long-term relationships built on trust, integrity and mutual success." },
  { icon: TrendingUp, title: "Growth Through Innovation", text: "Continuously adopting new technologies and smarter ways to serve the energy sector." },
  { icon: Sparkles, title: "Excellence in Every Order", text: "Superior service and outcomes, from the first enquiry to after-sales support." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img src={heroImg} alt="Refinery at night" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-48 pt-28 text-center md:pb-56 md:pt-36">
          <span className="eyebrow animate-rise">Shinetech Innovate FZE LLC</span>
          <h1 className="animate-rise mt-6 text-4xl font-extrabold leading-tight text-navy-foreground md:text-7xl">
            Powering Industry With <span className="text-gold">Precision</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-navy-foreground/85 [animation-delay:150ms]">
            Shinetech Innovate supplies valves, instrumentation and automation solutions to the
            energy sector — combining innovation and expertise to build lasting partnerships.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:300ms]">
            <Link to="/products" className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition hover:bg-gold-soft">
              Our Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-navy-foreground/60 px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-foreground transition hover:border-gold hover:text-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars overlapping hero */}
      <section className="relative z-10 mx-auto -mt-32 max-w-6xl px-6">
        <div className="grid shadow-elevated md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.title} className={`px-8 py-12 text-center ${i === 1 ? "bg-navy text-navy-foreground md:-mt-6 md:pb-18" : "bg-card"}`}>
              <div className={`mx-auto grid h-16 w-16 place-items-center border ${i === 1 ? "border-gold text-gold" : "border-gold/50 text-gold"}`}>
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className={`mt-6 text-lg font-bold ${i === 1 ? "text-navy-foreground" : "text-navy"}`}>{p.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Sectors" title="Industries We Serve" />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {industries.map((ind) => (
            <div key={ind.title} className="group relative aspect-[3/4] overflow-hidden bg-navy">
              <img src={ind.img} alt={ind.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" width={800} height={1008} loading="lazy" />
              <div className="absolute inset-0 bg-card-fade" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-3 block h-0.5 w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                <h3 className="text-base font-bold text-navy-foreground">{ind.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empowering band */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img src={automation} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" width={1024} height={1024} loading="lazy" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-foreground md:text-5xl">Empowering Energy Excellence</h2>
            <p className="mt-6 max-w-xl text-navy-foreground/80">
              Shinetech Innovate delivers dependable equipment and technical solutions focused on
              efficiency, transparency and safety — helping our clients achieve industry-leading results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-navy-foreground/15">
            {[
              ["500+", "Products sourced"],
              ["5", "Industries served"],
              ["24h", "Quotation response"],
              ["100%", "Commitment to quality"],
            ].map(([n, l]) => (
              <div key={l} className="bg-navy/90 p-6">
                <div className="font-wide text-3xl font-extrabold text-gold">{n}</div>
                <div className="mt-1 text-sm text-navy-foreground/75">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Services */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Why Shinetech" title="Quality Services" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            We lead with innovation, emphasising transparency, efficiency and reliability in every supply.
          </p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {qualities.map((q) => (
              <div key={q.title} className="group bg-card p-8 transition hover:bg-navy">
                <q.icon className="h-9 w-9 text-gold" />
                <h3 className="mt-5 text-lg font-bold text-navy transition group-hover:text-navy-foreground">{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition group-hover:text-navy-foreground/75">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionTitle eyebrow="Partnerships" title="Our Major Clients" />
          <p className="mt-6 text-muted-foreground">
            We partner with leading players across the energy sector — from national oil companies to
            EPC contractors and infrastructure pioneers. Every partnership is built on tailored
            solutions, efficiency and integrity.
          </p>
        </div>
        <div className="relative mt-14 overflow-hidden">
          <div className="animate-marquee flex w-max gap-4">
            {[...clientTypes, ...clientTypes].map((c, i) => (
              <div key={i} className="flex h-24 w-64 shrink-0 items-center gap-4 border bg-card px-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy font-wide text-xs font-bold text-gold">{c.abbr}</span>
                <span className="text-sm font-semibold text-navy">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/clients" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy hover:text-gold">
            View all clients <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 md:flex-row">
          <div className="flex items-center gap-4">
            <Gauge className="h-10 w-10 text-navy" />
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Need valves or instruments for your next project?</h2>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy-foreground transition hover:bg-navy-deep">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
