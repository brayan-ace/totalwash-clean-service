import { Star } from "lucide-react";
import { useT } from "@/lib/i18n";

const NAMES = ["Marie K.", "David A.", "Sandrine M.", "Patrick N."];

export function Testimonials() {
  const { t } = useT();
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t("tst.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("tst.title")}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {NAMES.map((name, i) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                "{t(`tst.t${i + 1}`)}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-sm font-semibold text-primary">{name}</div>
                <div className="text-xs text-muted-foreground">{t(`tst.r${i + 1}`)}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
