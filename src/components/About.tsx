import aboutImg from "@/assets/about-office.jpg";
import { Check } from "lucide-react";
import { useT } from "@/lib/i18n";

export function About() {
  const { t } = useT();
  const points = ["about.p1","about.p2","about.p3","about.p4","about.p5","about.p6"];
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container-tw grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={aboutImg}
              alt={t("about.imgalt")}
              width={1200}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t("about.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {t("about.desc")}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{t(p)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
