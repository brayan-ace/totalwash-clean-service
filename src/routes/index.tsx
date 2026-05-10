import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Total Wash Cleaning Service — Professional Cleaning You Can Trust" },
      {
        name: "description",
        content:
          "Total Wash Cleaning Service offers professional home, office, Airbnb and commercial cleaning. Trained team, modern equipment, fast WhatsApp booking.",
      },
      { property: "og:title", content: "Total Wash Cleaning Service" },
      {
        property: "og:description",
        content:
          "Trusted professional cleaning for homes, offices, Airbnbs and businesses. Book in seconds on WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
