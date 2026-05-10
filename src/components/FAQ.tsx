import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "What areas do you serve?",
    a: "We serve homes and businesses throughout the local area and surrounding neighborhoods. Send us your address on WhatsApp and we'll confirm coverage instantly.",
  },
  {
    q: "How do bookings work?",
    a: "All bookings happen on WhatsApp. You message us, we send a quick quote, confirm a time, and our team arrives ready to work.",
  },
  {
    q: "Do you provide cleaning supplies?",
    a: "Yes. Our team arrives with all professional equipment and eco-friendly cleaning products needed for the job.",
  },
  {
    q: "Are your staff trained?",
    a: "Every team member is trained, background-checked, and follows our internal quality standards — so you get consistent results.",
  },
  {
    q: "What cleaning services do you offer?",
    a: "We cover home, office, deep, apartment, commercial, post-construction, move-in/out, sofa & carpet, window, restaurant, Airbnb, and janitorial services.",
  },
  {
    q: "How quickly can I book?",
    a: "Most jobs can be scheduled within 24–48 hours. For urgent cleans, message us on WhatsApp and we'll do our best to fit you in same-day.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Questions, answered.
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft data-[state=open]:border-accent/40"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
