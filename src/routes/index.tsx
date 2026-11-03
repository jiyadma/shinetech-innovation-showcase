import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-refinery.jpg";
import oilgas from "@/assets/industry-oilgas.jpg";
import lng from "@/assets/industry-lng.jpg";
import chemicals from "@/assets/industry-chemicals.jpg";
import power from "@/assets/industry-power.jpg";
import hydrogen from "@/assets/industry-hydrogen.jpg";
import automation from "@/assets/product-automation.jpg";
import actuator from "@/assets/product-valve-actuator.jpg";
import { CtaBand, SectionHeader } from "@/components/site/PageHero";
import { ClientMarquee } from "@/components/site/ClientLogos";
import { Reveal } from "@/components/site/Reveal";
import { clients } from "@/lib/clients";

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
  { title: "Engineered Supply", text: "Valves, actuators and instruments sourced to exact project specifications and international standards." },
  { title: "Expertise that Delivers", text: "A technical team that understands process plants and turns requirements into reliable solutions." },
  { title: "Sustainability First", text: "Responsible sourcing and energy-efficient equipment for a cleaner energy future." },
];

const industries = [
  { img: oilgas, title: "Oil & Gas, Refinery", tag: "Upstream → Downstream" },
  { img: lng, title: "Liquefied Natural Gas", tag: "Liquefaction & terminals" },
  { img: chemicals, title: "Fertilizer & Chemicals", tag: "Process plants" },
  { img: power, title: "Power", tag: "Generation & utilities" },
  { img: hydrogen, title: "Green Hydrogen", tag: "Energy transition" },
];

const qualities = [
  { title: "Trusted by Industry", text: "Chosen by operators and EPC contractors for reliability and consistent quality." },
  { title: "Agile and Responsive", text: "Fast quotations, quick sourcing and personal support that keep your project on schedule." },
  { title: "Transparent Operations", text: "Clear pricing, documentation and traceability at every step of the order." },
  { title: "Building Partnerships", text: "Long-term relationships built on trust, integrity and mutual success." },
  { title: "Growth Through Innovation", text: "Continuously adopting new technologies and smarter ways to serve the energy sector." },
  { title: "Excellence in Every Order", text: "Superior service and outcomes, from first enquiry to after-sales support." },
];

const stats = [
  ["500+", "Product lines sourced"],
  ["05", "Energy sectors served"],
  ["24h", "Quotation turnaround"],
  [String(clients.length), "Major industry clients"],
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep">
        <img src={heroImg} alt="Refinery at night" className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="absolute inset-0 -z-10 bg-grid-lines" />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-10 pt-40">
          <div className="animate-rise flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="label-mono text-gold">Industrial supply partner — UAE</span>
          </div>
          <h1 className="animate-rise mt-8 text-[13vw] font-extrabold uppercase leading-[0.86] text-navy-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem] [animation-delay:120ms]">
            Powering
            <br />
            industry with
            <br />
            <span className="text-gold">precision.</span>
          </h1>

          <div className="animate-rise mt-12 grid gap-8 md:grid-cols-12 md:items-end [animation-delay:280ms]">
            <p className="max-w-md text-lg leading-relaxed text-navy-foreground/80 md:col-span-5">
              Valves, instrumentation and automation for the energy sector — sourced to specification,
              delivered on time, backed by people who understand process plants.
            </p>
            <div className="flex flex-wrap gap-4 md:col-span-7 md:justify-end">
              <Link to="/products" className="group inline-flex items-center gap-3 bg-gold py-4 pl-7 pr-5 text-sm font-bold uppercase tracking-wider text-gold-foreground transition hover:bg-gold-soft">
                Explore products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 border border-navy-foreground/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-navy-foreground transition hover:border-gold hover:text-gold">
                Talk to an engineer
              </Link>
            </div>
          </div>

          {/* Pillars */}
          <div className="animate-rise mt-16 grid border-t border-navy-foreground/15 md:grid-cols-3 [animation-delay:420ms]">
            {pillars.map((p, i) => (
              <div key={p.title} className={`py-7 md:px-8 ${i > 0 ? "border-t border-navy-foreground/15 md:border-l md:border-t-0" : "md:pl-0"}`}>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-gold">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-navy-foreground">{p.title}</h3>
                </div>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-navy-foreground/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <SectionHeader
          index="01"
          label="Who we are"
          title={
            <>
              Dependable equipment for operations where <span className="text-gold">failure is not an option.</span>
            </>
          }
          intro="Shinetech Innovate FZE LLC supplies the valves, instruments and control systems that keep refineries, LNG trains and power plants running safely — with the transparency and speed today's projects demand."
        />
        <div className="mt-20 grid grid-cols-2 border-t border-navy/15 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 100} className={`py-8 pr-6 ${i > 0 ? "md:border-l md:border-navy/15 md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-navy/15 pl-6" : ""}`}>
              <div className="font-wide text-5xl font-extrabold text-navy md:text-6xl">{n}</div>
              <div className="label-mono mt-3 text-muted-foreground">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-navy-deep py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="02" label="Sectors" title="Industries we serve" light />
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl gap-px px-6 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 90}>
              <Link to="/products" className="group relative block aspect-[3/4.4] overflow-hidden bg-navy">
                <img src={ind.img} alt={ind.title} className="h-full w-full object-cover opacity-80 transition duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-100" width={800} height={1008} loading="lazy" />
                <div className="absolute inset-0 bg-card-fade" />
                <span className="label-mono absolute left-5 top-5 text-navy-foreground/70">0{i + 1}</span>
                <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-gold opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="label-mono text-gold">{ind.tag}</span>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-navy-foreground">{ind.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities split */}
      <section className="mx-auto grid max-w-7xl gap-px px-6 py-28 md:grid-cols-2 md:py-36">
        {[
          { img: actuator, n: "A", title: "Valves & Actuation", text: "Ball, gate, globe, check, butterfly and plug valves with hydraulic, pneumatic and electric actuation." },
          { img: automation, n: "B", title: "Control & Automation", text: "DCS, ESD, PLC and field instrumentation that turn process data into safe, efficient operations." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 150}>
            <Link to="/products" className="group block">
              <div className="overflow-hidden bg-muted">
                <img src={c.img} alt={c.title} className="aspect-[4/3] w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-105" width={1024} height={1024} loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-6 pt-6 md:pr-10">
                <div>
                  <span className="label-mono text-gold">Capability {c.n}</span>
                  <h3 className="mt-2 text-3xl font-extrabold text-navy">{c.title}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">{c.text}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-navy/20 text-navy transition group-hover:border-gold group-hover:bg-gold">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Quality Services */}
      <section className="bg-muted py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="03"
            label="Why Shinetech"
            title="Quality services, measured in uptime."
            intro="We lead with transparency, efficiency and reliability in every supply."
          />
          <div className="mt-16 md:ml-[25%]">
            {qualities.map((q, i) => (
              <Reveal key={q.title} delay={i * 60}>
                <div className="group grid gap-3 border-t border-navy/15 py-8 transition-colors md:grid-cols-[80px_1fr_1.2fr] md:gap-8">
                  <span className="font-mono text-sm text-gold">/0{i + 1}</span>
                  <h3 className="text-2xl font-bold text-navy transition-transform duration-500 group-hover:translate-x-2">{q.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{q.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            index="04"
            label="Partnerships"
            title="Our major clients"
            intro="Operators, energy majors and EPC contractors trust Shinetech for equipment that performs."
          />
        </div>
        <div className="mt-16">
          <ClientMarquee />
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl justify-end px-6">
          <Link to="/clients" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-navy">
            <span className="link-underline">View all clients</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaBand title="Need valves or instruments for your next project?" />
    </>
  );
}
