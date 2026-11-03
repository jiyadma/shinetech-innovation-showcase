import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import power from "@/assets/industry-power.jpg";
import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shinetech Innovate FZE LLC" },
      { name: "description", content: "Contact Shinetech Innovate FZE LLC for quotations on valves, instrumentation, automation and mechanical equipment." },
      { property: "og:title", content: "Contact Shinetech Innovate" },
      { property: "og:description", content: "Request a quotation or speak with our technical team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const inputCls =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-ring/30";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const cards = [
    { icon: MapPin, title: "Visit Us", value: company.address },
    { icon: Phone, title: "Call Us", value: company.phone, href: company.phoneHref },
    { icon: Mail, title: "Email Us", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, title: "Working Hours", value: company.hours },
  ];

  return (
    <>
      <PageHero title="Contact Us" subtitle="Request a quotation or speak with our technical team — we respond quickly." image={power} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-card p-8">
              <c.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-navy">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-2 block text-sm text-muted-foreground hover:text-gold">{c.value}</a>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="bg-navy p-10">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-4 text-3xl font-extrabold text-navy-foreground">Let's discuss your requirements</h2>
            <p className="mt-6 leading-relaxed text-navy-foreground/75">
              Share your enquiry, data sheet or material list and our team will come back with a
              competitive quotation and technical recommendations.
            </p>
            <span className="gold-rule mt-8" />
            <p className="mt-8 font-wide text-sm font-semibold text-navy-foreground">{company.name}</p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
            <input required placeholder="Full name" className={inputCls} value={form.name} onChange={set("name")} maxLength={100} />
            <input required type="email" placeholder="Email address" className={inputCls} value={form.email} onChange={set("email")} maxLength={255} />
            <input placeholder="Phone number" className={inputCls} value={form.phone} onChange={set("phone")} maxLength={30} />
            <input placeholder="Subject" className={inputCls} value={form.subject} onChange={set("subject")} maxLength={150} />
            <textarea required rows={7} placeholder="Your message" className={`${inputCls} sm:col-span-2`} value={form.message} onChange={set("message")} maxLength={2000} />
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-gold transition hover:bg-gold-soft sm:col-span-2 sm:justify-self-start">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
