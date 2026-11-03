import { createFileRoute } from "@tanstack/react-router";
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
import { PageHero, SectionTitle } from "@/components/site/PageHero";

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

function ListBlock({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
      {items.map((i) => (
        <li key={i} className="flex items-center justify-center gap-2">
          <span className="h-1 w-1 bg-gold" /> {i}
        </li>
      ))}
    </ul>
  );
}

function Feature({ n, title, img, reverse, children }: { n: number; title: string; img: string; reverse?: boolean; children: React.ReactNode }) {
  return (
    <div className={`grid items-center gap-12 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative">
        <img src={img} alt={title} className="aspect-square w-full object-cover shadow-elevated" width={1024} height={1024} loading="lazy" />
        <span className="absolute -top-5 left-6 bg-gold px-4 py-2 font-wide text-lg font-extrabold text-gold-foreground">0{n}</span>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{title}</h2>
        <span className="gold-rule mt-5" />
        <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <>
      <PageHero title="Our Products" subtitle="Complete valve, instrumentation, automation and mechanical solutions for the energy industry." />

      {/* 1. Valves */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Feature n={1} title="Valves – Actuation & Control" img={actuatorImg}>
          <p>
            Shinetech Innovate offers highly specialised valve solutions for the oil and gas industry —
            upstream, midstream and downstream. Leveraging our engineering expertise and network of
            approved manufacturers, we provide complete valve packages from single items to complete
            project requirements.
          </p>
          <p>
            We offer advanced valve automation solutions tailored to customer specifications, with
            experienced engineers supporting selection, sizing and integration.
          </p>
          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-bold text-navy">Actuator types</h3>
              <p className="mt-2 text-sm">Hydraulic · Pneumatic · Gas-over-oil · Electric · Electro-hydraulic</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h3 className="font-bold text-navy">Configurations</h3>
              <p className="mt-2 text-sm">Single acting · Double acting · On/Off, ESD/SDV and blowdown · Smart systems</p>
            </div>
          </div>
        </Feature>
      </section>

      {/* Types of valves */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Range" title="Types of Valves" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valves.map((v) => (
              <div key={v.name} className="group border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="overflow-hidden">
                  <img src={v.img} alt={v.name} className="mx-auto h-48 w-48 object-contain transition duration-500 group-hover:scale-105" width={480} height={480} loading="lazy" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{v.name}</h3>
                <ListBlock items={v.items} />
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherValves.map((v) => (
              <div key={v.name} className="border-t-2 border-gold bg-navy p-8 text-center">
                <h3 className="text-lg font-bold text-navy-foreground">{v.name}</h3>
                <ul className="mt-4 flex flex-wrap justify-center gap-2">
                  {v.items.map((i) => (
                    <li key={i} className="border border-navy-foreground/20 px-3 py-1 text-xs text-navy-foreground/85">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Control & Automation */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Feature n={2} title="Control & Automation" img={automationImg} reverse>
          <p>
            Control and automation play a pivotal role in the oil and gas industry, revolutionising
            operations and enhancing efficiency and safety. By integrating advanced technologies such
            as sensors, actuators and control systems, companies can remotely monitor and manage
            critical processes in real time.
          </p>
          <p>
            Automation streamlines drilling, production and refining, reduces human error and improves
            overall reliability — enabling predictive maintenance and optimised performance across
            the asset life cycle.
          </p>
          <ul className="grid gap-2 pt-2 text-sm sm:grid-cols-2">
            {["DCS, ESD and HMI design & services", "PLC programming", "Cyber security & digitalization", "System integration"].map((i) => (
              <li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" />{i}</li>
            ))}
          </ul>
        </Feature>
      </section>

      {/* Field instruments */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Measurement" title="Field Instruments" light />
          <div className="mt-14 grid gap-px bg-navy-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {fieldInstruments.map((f) => (
              <div key={f.title} className="bg-navy p-8">
                <h3 className="text-lg font-bold text-gold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Static & Mechanical */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Feature n={3} title="Static & Mechanical" img={staticImg}>
          <p>
            Static and mechanical equipment are fundamental components of oil and gas operations,
            essential for exploration, production and processing. This includes equipment such as
            storage tanks, pipelines, pressure vessels, heat exchangers and compressors.
          </p>
          <p>
            We supply a comprehensive range of static and mechanical equipment for upstream,
            midstream and downstream facilities — ensuring operational integrity, efficiency and
            long service life.
          </p>
          <ul className="grid gap-2 pt-2 text-sm sm:grid-cols-2">
            {["Pipes (line pipe, seamless, welded)", "Metal and non-metallic pipes", "Gaskets, bolting & fasteners", "Flanges & pipe fittings", "Safety relief valves", "Tank terminal products & level gauges"].map((i) => (
              <li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" />{i}</li>
            ))}
          </ul>
        </Feature>
      </section>

      {/* 4. Special Services */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Feature n={4} title="Special Services" img={servicesImg} reverse>
            <p>
              Our special services cover a range of specialised offerings tailored to the unique needs
              of the industry — from engineering support and site services to commissioning,
              maintenance and regulatory compliance.
            </p>
            <ul className="grid gap-2 pt-2 text-sm">
              {[
                "Valve and instrument repair & refurbishment",
                "Commissioning and start-up support",
                "Engineering, sizing and selection support",
                "Fire and gas mapping & consultancy",
                "Project management & procurement services",
                "Testing, inspection and certification support",
              ].map((i) => (
                <li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-gold" />{i}</li>
              ))}
            </ul>
          </Feature>
        </div>
      </section>
    </>
  );
}
