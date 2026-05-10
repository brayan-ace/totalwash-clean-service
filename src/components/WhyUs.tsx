import {
  Users, Wrench, CircleDollarSign, Zap, Search, HeartHandshake, CalendarClock, Award,
} from "lucide-react";
import { useT } from "@/lib/i18n";

const ICONS = [Users, Wrench, CircleDollarSign, Zap, Search, HeartHandshake, CalendarClock, Award];

export function WhyUs() {
  const { t } = useT();
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t("why.kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("why.title")}
          </h2>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ICONS.map((Icon, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:mx-0">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{t(`why.r${i + 1}.t`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`why.r${i + 1}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
