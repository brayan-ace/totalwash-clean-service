import {
  Home, Building2, Sparkles, Building, Briefcase, HardHat,
  Truck, Sofa, PanelsTopLeft, UtensilsCrossed, BedDouble, Brush, ArrowRight,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";

const ICONS = [Home, Building2, Sparkles, Building, Briefcase, HardHat, Truck, Sofa, PanelsTopLeft, UtensilsCrossed, BedDouble, Brush];

export function Services() {
  const { t } = useT();
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t("services.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("services.desc")}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ICONS.map((Icon, i) => {
            const title = t(`services.s${i + 1}.t`);
            const desc = t(`services.s${i + 1}.d`);
            return (
              <div
                key={i}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a
                  href={whatsappLink(`${t("services.bookmsg")} ${title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
                >
                  {t("services.book")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
