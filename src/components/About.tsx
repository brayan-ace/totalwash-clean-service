import aboutImg from "@/assets/about-office.jpg";
import { Check } from "lucide-react";

const POINTS = [
  "Trained, background-checked staff",
  "Modern, professional equipment",
  "Eco-friendly cleaning products",
  "Flexible scheduling — 7 days a week",
  "Transparent pricing, no hidden fees",
  "Detail-driven quality checks",
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container-tw grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={aboutImg}
              alt="Pristine modern office space cleaned by Total Wash"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            About Total Wash
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            A cleaning team built on trust and attention to detail.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We're a professional cleaning company serving homes, businesses,
            apartments, restaurants and Airbnb properties. Our mission is
            simple: deliver consistently spotless results with a team you can
            actually rely on.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
