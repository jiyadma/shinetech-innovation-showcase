// Company contact details shown across the site.
export const company = {
  name: "Shinetech Innovate FZE LLC",
  short: "Shinetech",
  phone: "+971 54 137 2737",
  phoneHref: "tel:+971541372737",
  email: "sales@shinetechinnovate.com",
  address: "CWS-1 V - 226268, 26th Floor, Amber Gem Tower, Ajman",
  hours: "Sunday – Thursday, 9:00 – 18:00",
};

export const navLinks = [
  { to: "/", label: "Homepage" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Our Products" },
  { to: "/clients", label: "Our Clients" },
  { to: "/contact", label: "Contact Us" },
] as const;
