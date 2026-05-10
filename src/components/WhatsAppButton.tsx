import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import { useT } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useT();
  return (
    <a
      href={whatsappLink(t("wa.default"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("wa.aria")}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/40" />
    </a>
  );
}
