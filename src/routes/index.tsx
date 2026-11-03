import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Cog, Eye, Handshake, Leaf, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import heroImg from "@/assets/hero-refinery.jpg";
import oilgas from "@/assets/industry-oilgas.jpg";
import lng from "@/assets/industry-lng.jpg";
import chemicals from "@/assets/industry-chemicals.jpg";
import power from "@/assets/industry-power.jpg";
import hydrogen from "@/assets/industry-hydrogen.jpg";
import automation from "@/assets/product-automation.jpg";
import { CtaBand, SectionHeader } from "@/components/site/PageHero";
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
  { icon: Cog, title: "Engineered Supply", text: "Valves, actuators and instruments sourced to exact project specifications and international standards." },
  { icon: Award, title: "Expertise that Delivers", text: "An experienced technical team that understands process plants and turns requirements into reliable solutions." },
  { icon: Leaf, title: "Sustainability First", text: "Responsible sourcing and energy-efficient equipment that supports a cleaner energy future." },
];

const industries = [
  { img: oilgas, title: "Oil & Gas, Refinery" },
  { img: lng, title: "Liquefied Natural Gas" },
  { img: chemicals, title: "Fertilizer & Chemicals" },
  { img: power, title: "Power" },
  { img: hydrogen, title: "Green Hydrogen" },
];

const qualities = [
  { icon: ShieldCheck, title: "Trusted by Industry", text: "Chosen by operators and EPC contractors for reliability and consistent quality." },
  { icon: Zap, title: "Agile and Responsive", text: "Fast quotations, quick sourcing and personal support that keep your project on schedule." },
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
        <img src={heroImg} alt="Refinery at night" className="animate-slow-zoom absolute inset-0 -z-20 h-full w-full object-cover" width={1920} height={1088} />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-56 pt-44 text-center md:pb-64 md:pt-52">
          <h1 className="animate-rise text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl md:text-7xl">
            Powering Industry
            <br />
            With <span className="text-gold">Precision</span>
          </h1>
          <p className="animate-rise mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/85 [animation-delay:150ms]">
            Shinetech Innovate supplies valves, instrumentation and automation solutions to the energy
            sector — combining technical expertise and reliable sourcing to build lasting partnerships.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:300ms]">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-gold-foreground shadow-gold transition hover:bg-gold-soft">
              Our Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/60 px-8 py-4 text-sm font-bold text-navy-foreground transition hover:border-gold hover:text-gold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars overlapping the hero */}
      <section className="relative z-10 mx-auto -mt-36 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3 md:gap-0">
          {pillars.map((p, i) => {
            const featured = i === 1;
            return (
              <Reveal key={p.title} delay={i * 120}>
                <div
                  className={`group relative h-full overflow-hidden px-8 py-12 text-center shadow-elevated transition duration-500 hover:-translate-y-2 ${
                    featured ? "bg-navy md:-mt-6 md:pb-[4.5rem]" : "bg-card"
                  }`}
                >
                  <div className={`mx-auto grid h-20 w-20 place-items-center rounded-full ${featured ? "bg-gold text-gold-foreground" : "bg-cream text-gold"}`}>
                    <p.icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                  <h3 className={`mt-7 text-xl font-bold ${featured ? "text-navy-foreground" : "text-navy"}`}>{p.title}</h3>
                  <p className={`mt-4 text-[15px] leading-relaxed ${featured ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{p.text}</p>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeader title="Industries We Serve" intro="Dependable equipment for every stage of the energy value chain." />
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 90} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <Link to="/products" className="group block overflow-hidden bg-card shadow-elevated">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={ind.img} alt={ind.title} className="h-full w-full object-cover transition duration-[1.2s] ease-out group-hover:scale-110" width={800} height={1008} loading="lazy" />
                  <div className="absolute inset-0 bg-navy-deep/0 transition duration-500 group-hover:bg-navy-deep/25" />
                </div>
                <div className="relative px-4 py-5 text-center">
                  <span className="absolute left-1/2 top-0 h-0.5 w-10 -translate-x-1/2 bg-gold transition-all duration-500 group-hover:w-full" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wide text-navy md:text-base">{ind.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Empowering band */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img src={automation} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1024} height={1024} loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-navy-deep/80" />
        <Reveal className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <h2 className="text-4xl font-extrabold text-navy-foreground md:text-6xl">Empowering Energy Excellence</h2>
          <span className="gold-rule mx-auto mt-6" />
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">
            Shinetech Innovate delivers dependable equipment and technical solutions focused on
            efficiency, transparency and safety — helping our clients achieve industry-leading results.
          </p>
          <Link to="/about" className="group mt-10 inline-flex items-center gap-2 rounded-full border border-gold px-8 py-4 text-sm font-bold text-gold transition hover:bg-gold hover:text-gold-foreground">
            Learn More About Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* Quality Services */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader
            title="Quality Services"
            intro="We lead with innovation, emphasising transparency, efficiency and reliability in every supply."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualities.map((q, i) => (
              <Reveal key={q.title} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden bg-card p-10 text-center transition duration-500 hover:-translate-y-2 hover:shadow-elevated">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40 text-gold transition duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                    <q.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy">{q.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{q.text}</p>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeader
          title="Our Major Clients"
          intro="We partner with leading players across the global energy sector — from energy majors to EPC contractors. Every partnership is built on tailored solutions, efficiency and integrity."
        />
        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 70}>
              <div className="group flex h-36 items-center justify-center border bg-card p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-elevated">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-24 w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
                  width={375}
                  height={240}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/clients" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-navy hover:text-gold">
            View All Clients <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaBand title="Need Valves or Instruments for Your Next Project?" />
    </>
  );
}
