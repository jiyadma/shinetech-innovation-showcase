import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Cog,
  Eye,
  Gauge,
  Handshake,
  Leaf,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-refinery.jpg";
import oilgas from "@/assets/industry-oilgas.jpg";
import lng from "@/assets/industry-lng.jpg";
import chemicals from "@/assets/industry-chemicals.jpg";
import power from "@/assets/industry-power.jpg";
import hydrogen from "@/assets/industry-hydrogen.jpg";
import valveActuator from "@/assets/product-valve-actuator.jpg";
import { CtaBand, SectionHeader, SlashMark } from "@/components/site/PageHero";
import { ClientMarquee } from "@/components/site/ClientLogos";
import { Reveal } from "@/components/site/Reveal";

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

const categories = [
  { icon: Settings2, title: "Valves & Actuation", text: "Ball, gate, globe, butterfly, check and plug valves." },
  { icon: Gauge, title: "Field Instruments", text: "Pressure, temperature, flow and level measurement." },
  { icon: Cog, title: "Control & Automation", text: "Control systems, positioners and safety solutions." },
  { icon: Wrench, title: "Mechanical Equipment", text: "Static equipment, spares and special services." },
];

const pillars = [
  { icon: Cog, title: "Engineered Supply", text: "Sourced to exact project specifications and international standards." },
  { icon: Award, title: "Expertise that Delivers", text: "A technical team that understands process plants and their demands." },
  { icon: Leaf, title: "Sustainability First", text: "Responsible sourcing and energy-efficient equipment for a cleaner future." },
];

const industries = [
  { img: oilgas, title: "Oil & Gas, Refinery", text: "Isolation and control valves, instruments and spares for upstream and refining." },
  { img: lng, title: "Liquefied Natural Gas", text: "Cryogenic-rated valves and instrumentation for liquefaction and export terminals." },
  { img: chemicals, title: "Fertilizer & Chemicals", text: "Corrosion-resistant materials and severe-service equipment for chemical plants." },
  { img: power, title: "Power", text: "Steam, feedwater and turbine-auxiliary valves and controls for power generation." },
  { img: hydrogen, title: "Green Hydrogen", text: "High-integrity components for electrolysis, storage and new-energy projects." },
];

const qualities = [
  { icon: ShieldCheck, title: "Trusted by Industry", text: "Chosen by operators and EPC contractors for reliability and consistent quality." },
  { icon: Zap, title: "Agile and Responsive", text: "Fast quotations, quick sourcing and personal support that keep projects on schedule." },
  { icon: Eye, title: "Transparent Operations", text: "Clear pricing, documentation and traceability at every step of the order." },
  { icon: Handshake, title: "Building Partnerships", text: "Long-term relationships built on trust, integrity and mutual success." },
  { icon: TrendingUp, title: "Growth Through Innovation", text: "Adopting new technologies and smarter ways to serve the energy sector." },
  { icon: Sparkles, title: "Excellence in Every Order", text: "Superior service, from the first enquiry to after-sales support." },
];

function Index() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Hero — split layout with the logo's slanted cut */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 -z-30 bg-diagonal" />
        <div className="glow-gold absolute -left-60 top-20 -z-20 h-[640px] w-[640px] opacity-50" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-36 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-24 lg:pt-44">
          <div className="lg:col-span-6">
            <div className="animate-rise flex items-center gap-4">
              <SlashMark />
              <span className="text-sm font-semibold text-navy-foreground/70">Industrial supply partner · United Arab Emirates</span>
            </div>
            <h1 className="animate-rise mt-8 text-[2.6rem] font-extrabold leading-[1.04] text-navy-foreground sm:text-6xl xl:text-7xl [animation-delay:120ms]">
              Engineered supply for the <span className="text-gold">energy industry</span>
            </h1>
            <p className="animate-rise mt-7 max-w-lg text-lg leading-relaxed text-navy-foreground/75 [animation-delay:220ms]">
              Valves, instrumentation, automation and mechanical equipment — sourced from approved
              manufacturers and delivered with full documentation, on time.
            </p>
            <div className="animate-rise mt-10 flex flex-wrap gap-4 [animation-delay:320ms]">
              <Link to="/products" className="cut-corners group inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold transition hover:bg-gold-soft">
                Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="cut-corners inline-flex items-center gap-2 bg-navy px-8 py-4 text-sm font-bold text-navy-foreground transition hover:bg-navy-foreground hover:text-navy">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="animate-rise relative h-80 sm:h-[440px] lg:col-span-6 lg:h-[560px] [animation-delay:200ms]">
            <div className="clip-para absolute inset-y-0 left-[6%] right-0 translate-x-5 translate-y-5 bg-gold" />
            <div className="clip-para absolute inset-y-0 left-[6%] right-0 overflow-hidden bg-navy">
              <img src={heroImg} alt="Refinery at night" className="animate-slow-zoom h-full w-full object-cover" width={1920} height={1088} />
            </div>
            <div className="cut-corners absolute -bottom-6 left-0 hidden max-w-[260px] bg-card p-6 shadow-elevated sm:block">
              <ShieldCheck className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <p className="mt-3 text-lg font-bold leading-snug text-navy" style={{ fontFamily: "var(--font-display)" }}>
                Approved brands, certified quality
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Material certificates and test reports with every order.</p>
            </div>
          </div>
        </div>

        {/* Product category strip */}
        <div className="border-t border-navy-foreground/10">
          <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                to="/products"
                className="group relative flex gap-4 border-b border-navy-foreground/10 px-6 py-8 transition hover:bg-navy sm:border-r lg:border-b-0"
              >
                <c.icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <h3 className="flex items-center gap-2 font-bold text-navy-foreground">
                    {c.title}
                    <ArrowUpRight className="h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/60">{c.text}</p>
                </div>
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-5">
          <div className="cut-corners relative aspect-[4/5] overflow-hidden">
            <img src={valveActuator} alt="Actuated industrial valve" className="h-full w-full object-cover" width={1024} height={1024} loading="lazy" />
          </div>
          <div className="absolute -right-4 -top-4 -z-10 h-2/3 w-2/3 bg-gold/20" />
          <div className="cut-corners absolute -bottom-8 right-6 bg-navy px-7 py-6 text-navy-foreground shadow-elevated">
            <p className="text-3xl font-extrabold text-gold" style={{ fontFamily: "var(--font-display)" }}>24h</p>
            <p className="mt-1 text-sm text-navy-foreground/70">Quotation turnaround</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeader title="A supply partner built on precision and integrity" />
          <Reveal delay={100}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Shinetech Innovate helps operators and EPC contractors source the right equipment the
              first time — combining technical know-how with dependable sourcing, transparent pricing
              and personal support from enquiry to delivery.
            </p>
          </Reveal>
          <div className="mt-10 divide-y border-y">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={150 + i * 80}>
                <div className="group flex items-start gap-5 py-6">
                  <div className="cut-corners-sm grid h-12 w-12 shrink-0 place-items-center bg-cream text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                    <p className="mt-1 text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <Link to="/about" className="group mt-10 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
              <span className="link-underline">More about Shinetech</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industries — expanding panels */}
      <section className="relative isolate overflow-hidden bg-navy">
        <div className="absolute inset-0 -z-10 bg-diagonal" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader light title="Industries We Serve" intro="Dependable equipment for every stage of the energy value chain — from wellhead to power grid." />

          <Reveal className="mt-16 flex flex-col gap-3 lg:h-[540px] lg:flex-row">
            {industries.map((ind, i) => {
              const isActive = active === i;
              return (
                <Link
                  key={ind.title}
                  to="/products"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`cut-corners group relative h-64 overflow-hidden transition-[flex-grow] duration-700 ease-out lg:h-auto ${
                    isActive ? "lg:flex-[4]" : "lg:flex-1"
                  }`}
                >
                  <img src={ind.img} alt={ind.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" width={800} height={1008} loading="lazy" />
                  <div className="bg-card-fade absolute inset-0" />
                  <div className={`absolute inset-0 bg-navy-deep/40 transition duration-700 ${isActive ? "lg:opacity-0" : "lg:opacity-100"}`} />
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <span className={`block h-1 bg-gold transition-all duration-700 ${isActive ? "w-14" : "w-14 lg:w-6"}`} />
                    <h3 className={`mt-4 font-extrabold text-navy-foreground transition-all duration-500 ${isActive ? "text-2xl" : "text-xl lg:text-base"}`}>
                      {ind.title}
                    </h3>
                    <p
                      className={`mt-2 max-w-sm text-sm leading-relaxed text-navy-foreground/75 transition-all duration-500 ${
                        isActive ? "lg:max-h-24 lg:opacity-100" : "lg:max-h-0 lg:overflow-hidden lg:opacity-0"
                      }`}
                    >
                      {ind.text}
                    </p>
                  </div>
                </Link>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Why Shinetech */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeader title="Why Clients Choose Shinetech" />
              <Reveal delay={100}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  We lead with transparency, efficiency and reliability — so every supply arrives right,
                  documented and on schedule.
                </p>
                <Link to="/contact" className="cut-corners group mt-9 inline-flex items-center gap-2 bg-navy px-7 py-4 text-sm font-bold text-navy-foreground transition hover:bg-gold hover:text-gold-foreground">
                  Talk to Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:col-span-8">
            {qualities.map((q, i) => (
              <Reveal key={q.title} delay={(i % 2) * 100} className="bg-card">
                <div className="group relative h-full p-9 transition duration-500 hover:bg-navy">
                  <div className="cut-corners-sm grid h-12 w-12 place-items-center bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-gold-foreground">
                    <q.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy transition group-hover:text-navy-foreground">{q.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground transition group-hover:text-navy-foreground/70">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader title="Our Major Clients" />
            <Reveal className="max-w-md">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Energy majors and EPC contractors trust us for tailored solutions, efficiency and integrity.
              </p>
              <Link to="/clients" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold">
                <span className="link-underline">View all clients</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="mt-16">
          <ClientMarquee />
        </div>
      </section>

      <CtaBand title="Need Valves or Instruments for Your Next Project?" />
    </>
  );
}
