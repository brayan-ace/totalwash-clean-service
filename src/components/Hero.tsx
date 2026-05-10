import { MessageCircle, ShieldCheck, Star, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cleaning.jpg";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="container-tw grid items-center gap-12 py-16 md:grid-cols-2 md:gap-10 md:py-24 lg:py-28">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Trusted local cleaning experts
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            Professional cleaning services{" "}
            <span className="text-accent">you can trust.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From homes and offices to Airbnbs and commercial spaces, our trained
            team delivers a spotless, reliable clean — every single time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              Book on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Explore services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="font-semibold">Insured</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Trained & vetted staff</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <Star className="h-4 w-4 text-accent" />
                <span className="font-semibold">5-Star</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Trusted by 200+ clients</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-primary">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="font-semibold">Eco-safe</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Modern equipment</p>
            </div>
          </div>
        </div>

        <div className="relative reveal reveal-delay-2">
          <div className="relative overflow-hidden rounded-3xl shadow-elevated">
            <img
              src={heroImg}
              alt="Professional cleaner working in a bright modern living room"
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
                <p className="text-sm font-semibold text-primary">100% Satisfaction</p>
                <p className="text-xs text-muted-foreground">Or we re-clean for free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
