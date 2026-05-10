import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const MAP_URL = "https://maps.app.goo.gl/Xnkt5ckVPjoa5cPbA";
// Generic embed centered on a default region — clicking the overlay opens the real Google Maps link
const EMBED_SRC = "https://www.google.com/maps?q=Douala%20Cameroon&output=embed";

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="container-tw">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Book Your Cleaning
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Ready for a spotless space?
          </h2>
          <p className="mt-4 text-muted-foreground">
            We handle bookings directly on WhatsApp — fast replies, simple scheduling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 rounded-3xl bg-primary p-8 text-primary-foreground shadow-elevated">
            <h3 className="text-xl font-bold">Get in touch</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Tell us what you need and we'll send a quote right away.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <div>
                  <div className="font-semibold">+{WHATSAPP_NUMBER.slice(0,3)} {WHATSAPP_NUMBER.slice(3)}</div>
                  <div className="text-primary-foreground/60 text-xs">WhatsApp & calls</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <div>
                  <div className="font-semibold">Mon — Sun</div>
                  <div className="text-primary-foreground/60 text-xs">7:00 AM — 8:00 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-primary-foreground/60 text-xs">Local & surrounding neighborhoods</div>
                </div>
              </div>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-all hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              Message us on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="relative aspect-[16/11] w-full bg-muted">
              <iframe
                title="Total Wash location"
                src={EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <div className="flex items-center justify-between gap-3 p-5">
              <div>
                <div className="text-sm font-semibold text-primary">Our location</div>
                <div className="text-xs text-muted-foreground">Open in Google Maps for directions</div>
              </div>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <MapPin className="h-3.5 w-3.5" /> Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
