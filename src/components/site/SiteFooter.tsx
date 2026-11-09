import { Link } from "@tanstack/react-router";
import { ArrowUp, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/shinetech-logo.png.asset.json";
import { company, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground/70">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-2">
        <div className="grid gap-14 border-b border-navy-foreground/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logo.url} alt="Shinetech Innovate FZE LLC" className="h-12 w-auto" width={900} height={177} loading="lazy" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed">
              Valves, instrumentation, automation and mechanical equipment for oil &amp; gas, LNG,
              chemicals, power and green hydrogen — supplied with precision and integrity.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-bold text-navy-foreground">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-baseline gap-3 hover:text-navy-foreground">
                    <span className="link-underline">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-bold text-navy-foreground">Get in Touch</h4>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Office", company.address],
                ["Phone", company.phone, company.phoneHref],
                ["Email", company.email, `mailto:${company.email}`],
                ["Hours", company.hours],
              ].map(([k, v, href]) => (
                <div key={k} className="grid grid-cols-[72px_1fr] gap-4">
                  <dt className="pt-0.5 text-xs font-bold uppercase tracking-wider text-gold">{k}</dt>
                  <dd>{href ? <a href={href} className="link-underline hover:text-navy-foreground">{v}</a> : v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center border border-navy-foreground/15 transition hover:border-gold hover:text-gold">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-navy-foreground/15 transition hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-sm text-navy-foreground/50">
            © {new Date().getFullYear()} {company.name}
            <span className="mx-2 text-navy-foreground/25">·</span>
            <a
              href="https://metametics.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-navy-foreground/60 transition hover:text-gold"
            >
              Designed by Metametics
            </a>
          </p>
          <a href="#top" className="inline-flex items-center gap-2 text-sm text-navy-foreground/60 hover:text-gold">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
