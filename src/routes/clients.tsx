import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import lng from "@/assets/industry-lng.jpg";
import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { clientTypes } from "@/lib/site";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Shinetech Innovate FZE LLC" },
      { name: "description", content: "Shinetech Innovate partners with oil companies, refineries, LNG operators, EPC contractors and power producers." },
      { property: "og:title", content: "Our Clients | Shinetech Innovate" },
      { property: "og:description", content: "The energy-sector organisations we proudly supply and support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Clients,
});

function Clients() {
  return (
    <>
      <PageHero title="Our Clients" subtitle="We partner with leading organisations across the global energy sector." image={lng} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle eyebrow="Partnerships" title="Trusted Across the Energy Value Chain" />
          <p className="mt-6 text-muted-foreground">
            From oil and gas conglomerates to infrastructure pioneers, each partnership is geared toward
            mutual success — marked by our commitment to tailored solutions, efficiency and integrity.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {clientTypes.map((c) => (
            <div key={c.name} className="group flex flex-col items-center justify-center gap-4 bg-card px-6 py-10 text-center transition hover:bg-navy">
              <span className="grid h-16 w-16 place-items-center border border-gold/60 font-wide text-sm font-bold text-navy transition group-hover:text-gold">
                {c.abbr}
              </span>
              <span className="text-sm font-semibold text-navy transition group-hover:text-navy-foreground">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Quote className="mx-auto h-12 w-12 text-gold" />
          <p className="mt-8 text-xl leading-relaxed text-navy-foreground md:text-2xl">
            "Every client relationship is built on reliability. We measure our success by the uptime,
            safety and confidence our equipment brings to our partners' operations."
          </p>
          <p className="eyebrow mt-8">Shinetech Innovate Management</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">Become our next partner</h2>
        <p className="mt-4 text-muted-foreground">Join our network and experience a supply partner that truly delivers.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition hover:bg-gold-soft">
          Get in Touch <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
