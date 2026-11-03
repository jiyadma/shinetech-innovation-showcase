import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Compass, Eye, Target } from "lucide-react";
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
  { icon: Target, title: "Our Mission", text: "To supply world-class industrial equipment and technical solutions that keep our clients' operations safe, efficient and reliable." },
  { icon: Eye, title: "Our Vision", text: "To be the most trusted supply and solutions partner for the energy industry across the Middle East and beyond." },
  { icon: Compass, title: "Our Values", text: "Integrity, precision, responsiveness and a relentless commitment to quality in everything we deliver." },
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
        label="About Us"
        title="About Shinetech Innovate"
        subtitle="A trusted UAE-based partner for valves, instrumentation and automation across the energy sector."
        image={aboutImg}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <Reveal className="relative">
          <img src={staticImg} alt="Engineers inspecting plant equipment" className="aspect-[4/5] w-full object-cover shadow-elevated" width={1024} height={1024} loading="lazy" />
          <div className="absolute -bottom-8 -right-4 hidden bg-navy px-8 py-7 shadow-elevated md:block">
            <div className="font-wide text-4xl font-extrabold text-gold">UAE</div>
            <div className="mt-1 text-sm text-navy-foreground/80">Free Zone based</div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SectionHeader align="left" title="Innovation, Precision & Integrity" />
          <p className="mt-8 text-lg leading-relaxed text-navy">
            Shinetech Innovate FZE LLC is an industrial supply and solutions company serving the oil
            &amp; gas, LNG, petrochemical, fertilizer, power and green hydrogen industries.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            We provide valves, actuation, field instrumentation, control and automation systems, and
            static and mechanical equipment. From single components to complete project packages, we
            help operators and contractors source the right equipment — on specification, on budget
            and on time.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex gap-3 text-[15px] text-navy">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader title="Mission, Vision & Values" intro="The principles behind every order we deliver." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden bg-card p-10 text-center transition duration-500 hover:-translate-y-2 hover:shadow-elevated">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-cream text-gold transition duration-500 group-hover:bg-gold group-hover:text-gold-foreground">
                    <v.icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-7 text-2xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{v.text}</p>
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Let's Build Something Reliable Together" />
    </>
  );
}
