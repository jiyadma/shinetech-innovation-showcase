import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import actuatorImg from "@/assets/product-valve-actuator.jpg";
import automationImg from "@/assets/product-automation.jpg";
import staticImg from "@/assets/product-static.jpg";
import servicesImg from "@/assets/product-services.jpg";
import ball from "@/assets/valve-ball.jpg";
import butterfly from "@/assets/valve-butterfly.jpg";
import check from "@/assets/valve-check.jpg";
import gate from "@/assets/valve-gate.jpg";
import globe from "@/assets/valve-globe.jpg";
import plug from "@/assets/valve-plug.jpg";
import { CtaBand, PageHero, SectionHeader } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Our Products | Shinetech Innovate FZE LLC" },
      { name: "description", content: "Valves and actuation, control and automation, field instruments, static and mechanical equipment, and special services for oil & gas." },
      { property: "og:title", content: "Our Products | Shinetech Innovate" },
      { property: "og:description", content: "Industrial valves, actuators, field instruments, automation and mechanical equipment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

const categories = [
  { id: "valves", n: "01", name: "Valves – Actuation & Control" },
  { id: "automation", n: "02", name: "Control & Automation" },
  { id: "static", n: "03", name: "Static & Mechanical" },
  { id: "services", n: "04", name: "Special Services" },
];

const valves = [
  { img: ball, name: "Ball Valves", items: ["Floating", "Trunnion", "Rising stem", "Dual Block & Bleed", "Top entry"] },
  { img: butterfly, name: "Butterfly Valves", items: ["Concentric", "Double Offset", "Triple Offset"] },
  { img: check, name: "Check Valves", items: ["Swing", "Piston", "Tilting disc", "Dual plate", "Axial"] },
  { img: gate, name: "Gate Valves", items: ["Wedge", "Double expanding", "Parallel slide", "Through conduit"] },
  { img: globe, name: "Globe Valves", items: ["Tee", "Angle", "Y-Type", "Rising and non-rising stem"] },
  { img: plug, name: "Plug Valves", items: ["Wedge", "Lubricated", "Double block and bleed"] },
];

const otherValves = [
  { name: "Control Valves", items: ["Globe", "Axial", "Angle", "Butterfly", "Rotary"] },
  { name: "Instrumentation", items: ["Needle & Gauge Valves", "Manifolds", "Fittings & Tubing", "Filter Regulators", "Gauges", "Double Block & Bleed"] },
];

const fieldInstruments = [
  { title: "Level Instruments", text: "Level transmitters, radar, guided wave, magnetic level gauges, displacers and level switches." },
  { title: "Tubing & Fittings", text: "Compression fittings, high-pressure fittings, manifolds, needle valves and instrument tubes." },
  { title: "Fire & Gas System", text: "Gas detectors, flame detectors, heat and smoke detection, and F&G control panels." },
  { title: "Pressure Instruments", text: "Pressure transmitters, switches, gauges, diaphragm seals and DP transmitters." },
  { title: "Temperature Instruments", text: "RTDs, thermocouples, temperature transmitters, thermowells and gauges." },
  { title: "Flow Instruments", text: "Orifice, venturi, Coriolis, magnetic, ultrasonic, turbine and vortex flowmeters." },
];

function SpecList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-x-8 pt-4 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-baseline gap-3 border-t border-navy/10 py-3 text-sm text-navy">
          <span className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] bg-gold" />
          {i}
        </li>
      ))}
    </ul>
  );
}

function Feature({ id, n, title, img, reverse, children }: { id: string; n: string; title: string; img: string; reverse?: boolean; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 grid items-start gap-12 md:grid-cols-12">
      <Reveal className={`md:col-span-6 ${reverse ? "md:order-2 md:col-start-7" : ""}`}>
        <div className="relative overflow-hidden">
          <img src={img} alt={title} className="aspect-[4/5] w-full object-cover" width={1024} height={1024} loading="lazy" />
        </div>
      </Reveal>
      <Reveal delay={150} className={`md:col-span-5 md:pt-10 ${reverse ? "md:col-start-1" : "md:col-start-8"}`}>
        <h2 className=" text-4xl font-extrabold leading-[1.02] text-navy md:text-5xl">{title}</h2>
        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
      </Reveal>
    </div>
  );
}

function Products() {
  return (
    <>
      <PageHero
        label="Our Products"
        title="Our Products"
        subtitle="Valves, instrumentation, automation and mechanical equipment for the full energy value chain."
      />

      {/* Category index */}
      <nav className="sticky top-[64px] z-30 border-b border-navy/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="group flex shrink-0 items-baseline gap-2 py-4 text-sm font-semibold text-navy">
                            <span className="link-underline">{c.name}</span>
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <Feature id="valves" n="01" title="Valves – Actuation & Control" img={actuatorImg}>
          <p>
            Highly specialised valve solutions for upstream, midstream and downstream oil and gas.
            Through our engineering expertise and network of approved manufacturers, we provide
            complete valve packages — from single items to full project requirements.
          </p>
          <p>Advanced valve automation tailored to customer specifications, with engineers supporting selection, sizing and integration.</p>
          <div className="grid gap-8 pt-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">Actuator types</h3>
              <p className="mt-3 text-sm">Hydraulic · Pneumatic · Gas-over-oil · Electric · Electro-hydraulic</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-navy">Configurations</h3>
              <p className="mt-3 text-sm">Single / double acting · On/Off, ESD/SDV, blowdown · Smart systems</p>
            </div>
          </div>
        </Feature>
      </section>

      {/* Types of valves */}
      <section className="bg-muted py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Types of Valves" intro="A complete range of on/off and control valves from approved manufacturers." />
          <div className="mt-16 grid border-l border-t border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {valves.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 90} className="border-b border-r border-navy/10">
                <div className="group h-full bg-card p-8 transition-colors duration-500 hover:bg-cream">
                  <img src={v.img} alt={v.name} className="mx-auto my-6 h-48 w-48 object-contain mix-blend-multiply transition duration-700 group-hover:scale-105" width={480} height={480} loading="lazy" />
                  <h3 className="text-2xl font-bold text-navy">{v.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.items.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-px grid gap-px md:grid-cols-2">
            {otherValves.map((v) => (
              <Reveal key={v.name} className="bg-navy-deep p-10">
                <h3 className="text-2xl font-bold text-navy-foreground">{v.name}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {v.items.map((i) => (
                    <li key={i} className="cut-corners-sm border border-navy-foreground/20 px-4 py-1.5 text-sm text-navy-foreground/85">{i}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <Feature id="automation" n="02" title="Control & Automation" img={automationImg} reverse>
          <p>
            Integrating sensors, actuators and control systems lets operators monitor and manage
            critical processes in real time — reducing human error, enabling predictive maintenance and
            improving reliability across the asset life cycle.
          </p>
          <SpecList items={["DCS, ESD and HMI design & services", "PLC programming", "Cyber security & digitalization", "System integration"]} />
        </Feature>
      </section>

      {/* Field instruments */}
      <section className="bg-navy-deep py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Field Instruments" intro="Accurate measurement and protection for every process variable." light />
          <div className="mx-auto mt-16 max-w-5xl">
            {fieldInstruments.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group grid gap-3 border-t border-navy-foreground/15 py-7 md:grid-cols-[24px_1fr_1.3fr] md:gap-8">
                  <span className="mt-2 h-2 w-2 bg-gold" />                  <h3 className="text-xl font-bold text-navy-foreground transition-transform duration-500 group-hover:translate-x-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-foreground/60">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <Feature id="static" n="03" title="Static & Mechanical" img={staticImg}>
          <p>
            Storage tanks, pipelines, pressure vessels, heat exchangers and compressors are the
            backbone of oil and gas operations. We supply a comprehensive range for upstream,
            midstream and downstream facilities — built for integrity and long service life.
          </p>
          <SpecList
            items={["Pipes (line pipe, seamless, welded)", "Metal and non-metallic pipes", "Gaskets, bolting & fasteners", "Flanges & pipe fittings", "Safety relief valves", "Tank terminal products & level gauges"]}
          />
        </Feature>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <Feature id="services" n="04" title="Special Services" img={servicesImg} reverse>
            <p>
              Specialised offerings tailored to the industry — from engineering support and site
              services to commissioning, maintenance and regulatory compliance.
            </p>
            <SpecList
              items={[
                "Valve & instrument repair and refurbishment",
                "Commissioning and start-up support",
                "Engineering, sizing and selection",
                "Fire and gas mapping & consultancy",
                "Project management & procurement",
                "Testing, inspection and certification",
              ]}
            />
          </Feature>
        </div>
      </section>

      <CtaBand title="Send Us Your Material List" />
    </>
  );
}
