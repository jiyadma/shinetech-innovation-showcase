import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import lng from "@/assets/industry-lng.jpg";
import { CtaBand, PageHero, SectionHeader } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { clients } from "@/lib/clients";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients | Shinetech Innovate FZE LLC" },
      { name: "description", content: "Shinetech Innovate supplies Shell, Oman LNG, Petrofac, Worley, Técnicas Reunidas, Galfar and other leading energy and EPC companies." },
      { property: "og:title", content: "Our Clients | Shinetech Innovate" },
      { property: "og:description", content: "The energy majors and EPC contractors we proudly supply and support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Clients,
});

function Clients() {
  return (
    <>
      <PageHero
        label="Our Clients"
        title="Our Clients"
        subtitle="We partner with leading organisations across the global energy sector."
        image={lng}
      />

      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeader
          title="Trusted Across the Energy Value Chain"
          intro="From oil and gas majors to engineering contractors, every partnership is built on tailored solutions, efficiency and integrity."
        />
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 80}>
              <div className="group h-full border bg-card text-center transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-elevated">
                <div className="flex h-40 items-center justify-center p-6">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-28 w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
                    width={375}
                    height={240}
                    loading="lazy"
                  />
                </div>
                <div className="border-t px-4 py-4">
                  <p className="text-sm font-bold leading-tight text-navy">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.sector}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <Reveal className="mx-auto max-w-4xl px-6 py-28 text-center">
          <Quote className="mx-auto h-12 w-12 text-gold" />
          <p className="mt-8 text-2xl font-semibold leading-relaxed text-navy-foreground md:text-3xl">
            "We measure our success by the uptime, safety and confidence our equipment brings to our
            partners' operations."
          </p>
          <span className="gold-rule mx-auto mt-8" />
          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-gold">Shinetech Innovate Management</p>
        </Reveal>
      </section>

      <CtaBand title="Become Our Next Partner" text="Join the operators and contractors who rely on a supply partner that truly delivers." />
    </>
  );
}
