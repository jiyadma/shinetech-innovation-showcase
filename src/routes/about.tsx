import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-office.jpg";
import staticImg from "@/assets/product-static.jpg";
import { CtaBand, PageHero, SectionHeader } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Shinetech Innovate FZE LLC" },
      { name: "description", content: "Learn about Shinetech Innovate FZE LLC — a UAE-based supplier of valves, instrumentation and automation for the energy sector." },
      { property: "og:title", content: "About Shinetech Innovate FZE LLC" },
      { property: "og:description", content: "Our story, mission, vision and values as an industrial supply partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Mission", text: "To supply world-class industrial equipment and technical solutions that keep our clients' operations safe, efficient and reliable." },
  { title: "Vision", text: "To be the most trusted supply and solutions partner for the energy industry across the Middle East and beyond." },
  { title: "Values", text: "Integrity, precision, responsiveness and a relentless commitment to quality in everything we deliver." },
];

const strengths = [
  "Wide portfolio of valves, actuators and instrumentation",
  "Sourcing from approved, certified manufacturers",
  "Technical support from selection to commissioning",
  "Competitive pricing and on-time delivery",
  "Full documentation, testing and traceability",
  "Dedicated after-sales service",
];

function About() {
  return (
    <>
      <PageHero
        index="02"
        label="About Us"
        title={<>Innovation, precision <span className="text-gold">&amp; integrity.</span></>}
        subtitle="A UAE-based partner for valves, instrumentation and automation across the energy sector."
        image={aboutImg}
      />

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <SectionHeader
          index="01"
          label="Who we are"
          title="We help operators source the right equipment — on specification, on budget, on time."
        />
        <div className="mt-20 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6 md:col-start-1">
            <div className="relative">
              <img src={staticImg} alt="Engineers inspecting plant equipment" className="aspect-[4/5] w-full object-cover" width={1024} height={1024} loading="lazy" />
              <div className="absolute bottom-0 left-0 bg-navy-deep px-7 py-6">
                <div className="font-wide text-4xl font-extrabold text-gold">FZE</div>
                <div className="label-mono mt-1 text-navy-foreground/70">United Arab Emirates</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-5 md:col-start-8 md:pt-16">
            <p className="text-xl leading-relaxed text-navy">
              Shinetech Innovate FZE LLC is an industrial supply and solutions company serving the oil
              &amp; gas, LNG, petrochemical, fertilizer, power and green hydrogen industries.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We provide valves, actuation, field instrumentation, control and automation systems, and
              static and mechanical equipment. Our team combines deep technical knowledge with a
              responsive, client-first approach — from single components to complete project packages.
            </p>
            <ul className="mt-12">
              {strengths.map((s, i) => (
                <li key={s} className="flex items-baseline gap-5 border-t border-navy/15 py-4 text-navy">
                  <span className="font-mono text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader index="02" label="What drives us" title="Mission, vision & values" light />
          <div className="mt-20 grid md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className={`border-t border-navy-foreground/15 py-10 md:pr-10 ${i > 0 ? "md:border-l md:pl-10" : ""}`}>
                <span className="font-mono text-xs text-gold">/0{i + 1}</span>
                <h3 className="mt-8 text-4xl font-extrabold text-navy-foreground">{v.title}</h3>
                <p className="mt-6 leading-relaxed text-navy-foreground/65">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's build something reliable together." />
    </>
  );
}
