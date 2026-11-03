import heroImg from "@/assets/hero-refinery.jpg";

export function PageHero({ title, subtitle, image = heroImg }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1088} />
      <div className="absolute inset-0 -z-10 bg-banner-overlay" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <span className="eyebrow">Shinetech Innovate</span>
        <h1 className="mt-4 text-4xl font-extrabold uppercase text-navy-foreground md:text-6xl">{title}</h1>
        <span className="gold-rule mt-6" />
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, center = true, light = false }: { eyebrow?: string; title: string; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl font-extrabold md:text-4xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
      <span className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
