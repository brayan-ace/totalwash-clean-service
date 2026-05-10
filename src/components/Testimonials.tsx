import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marie K.",
    role: "Apartment owner",
    text: "Punctual, thorough and respectful. My apartment has never looked better. Total Wash is now my go-to team.",
  },
  {
    name: "David A.",
    role: "Office manager",
    text: "We switched our weekly office cleaning to Total Wash six months ago. The consistency and attention to detail are exactly what we needed.",
  },
  {
    name: "Sandrine M.",
    role: "Airbnb host",
    text: "Reliable turnovers between guests. They always show up on time and leave the place spotless — my reviews say it all.",
  },
  {
    name: "Patrick N.",
    role: "Restaurant owner",
    text: "Professional team that takes hygiene seriously. They handle our deep cleans without disrupting service.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Trusted by clients across the city.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
