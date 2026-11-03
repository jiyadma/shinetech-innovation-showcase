import { clients } from "@/lib/clients";

/** Endless logo strip used on the home page. */
export function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <div className="marquee-mask relative overflow-hidden border-y border-navy/10">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row.map((c, i) => (
          <div
            key={i}
            className="group flex h-36 w-60 shrink-0 items-center justify-center border-r border-navy/10 px-8 md:h-40 md:w-72"
            aria-hidden={i >= clients.length}
          >
            <img
              src={c.logo}
              alt={i < clients.length ? `${c.name} logo` : ""}
              className="max-h-24 w-auto max-w-full object-contain opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              width={375}
              height={240}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
