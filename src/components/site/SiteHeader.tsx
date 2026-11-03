import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Facebook, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/shinetech-logo.png.asset.json";
import { company, navLinks } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-navy-foreground/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" /> {company.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" /> {company.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-gold">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold">
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-navy-foreground/10 bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <Link to="/" className="shrink-0" aria-label="Shinetech Innovate home">
            <img src={logo.url} alt="Shinetech Innovate FZE LLC" className="h-9 w-auto md:h-11" width={900} height={177} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="relative py-2 text-sm font-semibold text-navy-foreground/85 transition-colors hover:text-gold data-[status=active]:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 bg-gold px-5 py-3 text-sm font-bold text-gold-foreground transition hover:bg-gold-soft lg:inline-flex"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            className="p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-navy-foreground/10 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-semibold text-navy-foreground/85 data-[status=active]:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
