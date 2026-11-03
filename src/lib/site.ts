// Company contact details shown across the site.
// NOTE: phone, email and address are placeholders until the client confirms them.
export const company = {
  name: "Shinetech Innovate FZE LLC",
  short: "Shinetech",
  phone: "+971 50 000 0000",
  phoneHref: "tel:+971500000000",
  email: "info@shinetechinnovate.com",
  address: "Free Zone, United Arab Emirates",
  hours: "Sunday – Thursday, 9:00 – 18:00",
};

export const navLinks = [
  { to: "/", label: "Homepage" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/clients", label: "Our Clients" },
  { to: "/contact", label: "Contact Us" },
] as const;

// Client types shown until real client logos are supplied.
export const clientTypes = [
  { name: "National Oil Companies", abbr: "NOC" },
  { name: "Refinery Operators", abbr: "REF" },
  { name: "LNG Terminal Operators", abbr: "LNG" },
  { name: "Petrochemical Complexes", abbr: "PCX" },
  { name: "Fertilizer Producers", abbr: "FRT" },
  { name: "Independent Power Producers", abbr: "IPP" },
  { name: "EPC Contractors", abbr: "EPC" },
  { name: "Pipeline Operators", abbr: "PLN" },
  { name: "Offshore Platform Operators", abbr: "OFS" },
  { name: "Green Hydrogen Developers", abbr: "GH2" },
] as const;
