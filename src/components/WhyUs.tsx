import {
  Users,
  Wrench,
  CircleDollarSign,
  Zap,
  Search,
  HeartHandshake,
  CalendarClock,
  Award,
} from "lucide-react";

const REASONS = [
  { icon: Users, title: "Reliable Team", desc: "Trained, vetted and uniformed professionals you can trust in your space." },
  { icon: Wrench, title: "Professional Equipment", desc: "Modern tools and safe products for a deeper, safer clean." },
  { icon: CircleDollarSign, title: "Affordable Pricing", desc: "Honest, transparent quotes with no hidden fees." },
  { icon: Zap, title: "Fast Response", desc: "Quick replies on WhatsApp and same-week availability." },
  { icon: Search, title: "Attention to Detail", desc: "We clean the spots others miss — every single time." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Not happy? We come back and re-clean for free." },
  { icon: CalendarClock, title: "Flexible Scheduling", desc: "Mornings, evenings, weekends — we work around you." },
  { icon: Award, title: "Quality Guaranteed", desc: "Consistent, high standards on every job, big or small." },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            The dependable choice for serious cleaning.
          </h2>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center sm:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:mx-0">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
