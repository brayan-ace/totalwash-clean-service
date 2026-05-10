import { MessageCircle, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { useT } from "@/lib/i18n";

const QUICK_KEYS = [
  { href: "#about", k: "nav.about" },
  { href: "#services", k: "nav.services" },
  { href: "#why", k: "nav.why" },
  { href: "#gallery", k: "nav.gallery" },
  { href: "#faq", k: "nav.faq" },
];

const SERVICE_KEYS = ["services.s1.t","services.s2.t","services.s3.t","services.s11.t","services.s6.t","services.s10.t"];

export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tw py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {t("ft.desc")}
            </p>
            <a
              href={whatsappLink(t("wa.default"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              {t("nav.book")}
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">{t("ft.quick")}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_KEYS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-primary-foreground/70 transition-colors hover:text-accent">{t(l.k)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">{t("ft.services")}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_KEYS.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-primary-foreground/70 transition-colors hover:text-accent">{t(s)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">{t("ft.contact")}</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span>+{WHATSAPP_NUMBER.slice(0,3)} {WHATSAPP_NUMBER.slice(3)}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <a href="https://maps.app.goo.gl/Xnkt5ckVPjoa5cPbA" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Google Maps</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Total Wash Cleaning Service. {t("ft.copy")}</p>
          <p>{t("ft.tag")}</p>
        </div>
      </div>
    </footer>
  );
}
