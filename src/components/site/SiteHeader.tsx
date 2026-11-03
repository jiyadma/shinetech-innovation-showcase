import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/shinetech-logo.png.asset.json";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-navy-foreground transition-all duration-500 ${
        solid ? "bg-navy-deep/95 shadow-elevated backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-500 ${solid ? "py-3" : "py-6"}`}>
        <Link to="/" className="shrink-0" aria-label="Shinetech Innovate home">
          <img src={logo.url} alt="Shinetech Innovate FZE LLC" className="h-9 w-auto md:h-10" width={900} height={177} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="group flex items-baseline gap-1.5 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-navy-foreground data-[status=active]:text-gold"
            >
              <span className="font-mono text-[10px] text-navy-foreground/40 group-data-[status=active]:text-gold">0{i + 1}</span>
              <span className="link-underline">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a href={company.phoneHref} className="label-mono text-navy-foreground/70 hover:text-gold">
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-gold-foreground"
          >
            Get a quote <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-64px)] overflow-y-auto border-t border-navy-foreground/10 bg-navy-deep lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-8">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="flex items-baseline gap-4 border-b border-navy-foreground/10 py-5 text-3xl font-extrabold text-navy-foreground data-[status=active]:text-gold"
                style={{ fontFamily: "var(--font-display)", fontStretch: "112%" }}
              >
                <span className="font-mono text-xs font-normal text-gold">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <div className="mt-10 space-y-3 text-sm text-navy-foreground/70">
              <a href={company.phoneHref} className="block">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="block">{company.email}</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
