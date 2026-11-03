import { createFileRoute } from "@tanstack/react-router";
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
        index="04"
        label="Our Clients"
        title={<>Trusted by <span className="text-gold">energy leaders.</span></>}
        subtitle="Energy majors, LNG operators and EPC contractors rely on us for equipment that performs."
        image={lng}
      />

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <SectionHeader
          index="01"
          label="Partnerships"
          title="Built on reliability, measured in long-term partnerships."
          intro="From oil and gas majors to engineering contractors, every partnership is shaped by tailored solutions, efficiency and integrity."
        />

        <div className="mt-20 grid grid-cols-2 border-l border-t border-navy/10 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 80} className="border-b border-r border-navy/10">
              <div className="group relative flex aspect-square flex-col bg-card p-5 transition-colors duration-500 hover:bg-cream">
                <span className="label-mono text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-1 items-center justify-center px-2">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-24 w-auto max-w-full object-contain transition duration-500 group-hover:scale-105"
                    width={375}
                    height={240}
                    loading="lazy"
                  />
                </div>
                <div className="border-t border-navy/10 pt-3">
                  <p className="text-sm font-semibold leading-tight text-navy">{c.name}</p>
                  <p className="label-mono mt-1 text-[10px] text-gold">{c.sector}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-28 md:grid-cols-12 md:py-36">
          <Reveal className="md:col-span-3">
            <span className="label-mono text-muted-foreground">(02) <span className="text-gold">— Our promise</span></span>
          </Reveal>
          <Reveal delay={120} className="md:col-span-9">
            <p className="text-3xl font-bold leading-snug text-navy md:text-5xl md:leading-[1.15]" style={{ fontFamily: "var(--font-display)" }}>
              “We measure our success by the uptime, safety and confidence our equipment brings to our
              partners' operations.”
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="label-mono text-navy">Shinetech Innovate Management</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Become our next partner." text="Join the operators and contractors who rely on a supply partner that truly delivers." />
    </>
  );
}
