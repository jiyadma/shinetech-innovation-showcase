import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/shinetech-logo.png.asset.json";
import { company, navLinks } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src={logo.url} alt="Shinetech Innovate FZE LLC" className="h-14 w-auto" width={900} height={177} loading="lazy" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Shinetech Innovate supplies valves, instrumentation, automation and mechanical
            equipment to the oil &amp; gas, LNG, chemical and power industries — delivered
            with precision, reliability and integrity.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center border border-navy-foreground/20 hover:border-gold hover:text-gold">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center border border-navy-foreground/20 hover:border-gold hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow">Quick Links</h4>
          <ul className="mt-6 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Get in Touch</h4>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {company.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={company.phoneHref} className="hover:text-gold">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
