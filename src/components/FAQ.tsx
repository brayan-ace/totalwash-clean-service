import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/lib/i18n";

export function FAQ() {
  const { t } = useT();
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t("faq.kicker")}</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            {t("faq.title")}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-accent/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">
                  {t(`faq.q${i}`)}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {t(`faq.a${i}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
