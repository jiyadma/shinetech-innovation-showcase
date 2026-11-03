import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import power from "@/assets/industry-power.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
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
  "peer w-full border-0 border-b border-navy/20 bg-transparent px-0 pb-3 pt-2 text-lg text-navy outline-none transition placeholder:text-transparent focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const details = [
    { k: "Office", v: company.address },
    { k: "Phone", v: company.phone, href: company.phoneHref },
    { k: "Email", v: company.email, href: `mailto:${company.email}` },
    { k: "Hours", v: company.hours },
  ];

  return (
    <>
      <PageHero
        index="05"
        label="Contact Us"
        title={<>Let's talk <span className="text-gold">specifications.</span></>}
        subtitle="Request a quotation or speak with our technical team — we reply within 24 hours."
        image={power}
      />

      <section className="mx-auto grid max-w-7xl gap-20 px-6 py-28 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <span className="label-mono text-muted-foreground">(01) <span className="text-gold">— Direct lines</span></span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-navy">Reach the team.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Share your enquiry, data sheet or material list and we'll come back with a competitive
            quotation and technical recommendations.
          </p>
          <dl className="mt-12">
            {details.map((d) => (
              <div key={d.k} className="border-t border-navy/15 py-5">
                <dt className="label-mono text-gold">{d.k}</dt>
                <dd className="mt-2 text-lg font-semibold text-navy">
                  {d.href ? <a href={d.href} className="link-underline">{d.v}</a> : d.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <form onSubmit={onSubmit} className="bg-cream p-8 md:p-14">
            <span className="label-mono text-muted-foreground">(02) <span className="text-gold">— Enquiry form</span></span>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <Field label="Full name *">
                <input required placeholder="Full name" className={inputCls} value={form.name} onChange={set("name")} maxLength={100} />
              </Field>
              <Field label="Email *">
                <input required type="email" placeholder="Email" className={inputCls} value={form.email} onChange={set("email")} maxLength={255} />
              </Field>
              <Field label="Phone">
                <input placeholder="Phone" className={inputCls} value={form.phone} onChange={set("phone")} maxLength={30} />
              </Field>
              <Field label="Subject">
                <input placeholder="Subject" className={inputCls} value={form.subject} onChange={set("subject")} maxLength={150} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Your requirement *">
                  <textarea required rows={5} placeholder="Message" className={`${inputCls} resize-none`} value={form.message} onChange={set("message")} maxLength={2000} />
                </Field>
              </div>
            </div>
            <button
              type="submit"
              className="group mt-12 inline-flex items-center gap-3 bg-navy py-4 pl-7 pr-5 text-sm font-bold uppercase tracking-wider text-navy-foreground transition hover:bg-gold hover:text-gold-foreground"
            >
              Send enquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
