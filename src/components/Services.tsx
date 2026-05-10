import {
  Home,
  Building2,
  Sparkles,
  Building,
  Briefcase,
  HardHat,
  Truck,
  Sofa,
  PanelsTopLeft,
  UtensilsCrossed,
  BedDouble,
  Brush,
  ArrowRight,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const SERVICES = [
  { icon: Home, title: "Home Cleaning", desc: "Regular and one-time residential cleaning tailored to your home." },
  { icon: Building2, title: "Office Cleaning", desc: "Daily or scheduled office upkeep that keeps teams productive." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Top-to-bottom intensive cleaning for spaces that need a reset." },
  { icon: Building, title: "Apartment Cleaning", desc: "Reliable, recurring service for apartments of any size." },
  { icon: Briefcase, title: "Commercial Cleaning", desc: "Professional cleaning for shops, clinics and businesses." },
  { icon: HardHat, title: "Post-Construction", desc: "Dust, debris and residue removal after building or renovation." },
  { icon: Truck, title: "Move-In / Move-Out", desc: "Spotless handover cleans for landlords, tenants and buyers." },
  { icon: Sofa, title: "Sofa & Carpet", desc: "Deep extraction cleaning for upholstery, rugs and carpets." },
  { icon: PanelsTopLeft, title: "Window Cleaning", desc: "Streak-free interior and exterior window cleaning." },
  { icon: UtensilsCrossed, title: "Restaurant Cleaning", desc: "Hygiene-grade cleaning for dining areas and back-of-house." },
  { icon: BedDouble, title: "Airbnb Turnover", desc: "Fast, reliable turnovers between guests, every time." },
  { icon: Brush, title: "Janitorial Services", desc: "Ongoing janitorial contracts for facilities and institutions." },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Cleaning solutions for every space.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One trusted team. Twelve specialised services. All delivered with
            the same uncompromising standard.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a
                href={whatsappLink(`Hello Total Wash, I'd like to book ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
              >
                Book service <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
