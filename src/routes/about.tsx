import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Eye, Target } from "lucide-react";
import aboutImg from "@/assets/about-office.jpg";
import staticImg from "@/assets/product-static.jpg";
import { PageHero, SectionTitle } from "@/components/site/PageHero";

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
      <PageHero title="About Us" subtitle="A trusted partner for valves, instrumentation and automation in the energy sector." image={aboutImg} />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="relative">
          <img src={staticImg} alt="Engineers inspecting plant equipment" className="aspect-[4/5] w-full object-cover shadow-elevated" width={1024} height={1024} loading="lazy" />
          <div className="absolute -bottom-8 -right-4 hidden bg-navy p-8 md:block">
            <div className="font-wide text-4xl font-extrabold text-gold">UAE</div>
            <div className="mt-1 text-sm text-navy-foreground/80">Free Zone based</div>
          </div>
        </div>
        <div>
          <SectionTitle eyebrow="Who we are" title="Innovation, Precision & Integrity" center={false} />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Shinetech Innovate FZE LLC is an industrial supply and solutions company serving the oil &amp;
            gas, LNG, petrochemical, fertilizer, power and green hydrogen industries. We provide a
            comprehensive range of valves, actuation, field instrumentation, control and automation
            systems, and static and mechanical equipment.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our team combines deep technical knowledge with a responsive, client-first approach. From
            single components to complete project packages, we help operators and contractors source
            the right equipment — on specification, on budget and on time.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-navy">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="What drives us" title="Mission, Vision & Values" light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border border-navy-foreground/15 p-10 transition hover:border-gold">
                <v.icon className="h-10 w-10 text-gold" />
                <h3 className="mt-6 text-xl font-bold text-navy-foreground">{v.title}</h3>
                <p className="mt-4 leading-relaxed text-navy-foreground/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">Let's build something reliable together</h2>
        <p className="mt-4 text-muted-foreground">Tell us about your project and our team will respond with the right solution.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition hover:bg-gold-soft">
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
