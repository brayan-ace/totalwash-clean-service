import { MessageCircle, ShieldCheck, Star, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import { whatsappLink } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";

export function Hero() {
  const { t } = useT();
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="container-tw grid items-center gap-12 py-16 md:grid-cols-2 md:gap-10 md:py-24 lg:py-28">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {t("hero.badge")}
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            {t("hero.title1")}{" "}
            <span className="text-accent">{t("hero.title2")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.desc")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              {t("hero.cta1")}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {t("hero.cta2")}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="font-semibold">{t("hero.insured")}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t("hero.insured.sub")}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <Star className="h-4 w-4 text-accent" />
                <span className="font-semibold">{t("hero.5star")}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t("hero.5star.sub")}</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="font-semibold">{t("hero.eco")}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t("hero.eco.sub")}</p>
            </div>
          </div>
        </div>

        <div className="relative reveal reveal-delay-2">
          <div className="relative overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={heroImg}
              alt={t("hero.imgalt")}
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-card sm:block md:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{t("hero.satisfaction")}</p>
                <p className="text-xs text-muted-foreground">{t("hero.satisfaction.sub")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
