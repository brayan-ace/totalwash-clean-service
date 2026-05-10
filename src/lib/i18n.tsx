import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Languages } from "lucide-react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const FR: Dict = {
  // Nav
  "nav.services": "Services",
  "nav.about": "À propos",
  "nav.why": "Pourquoi nous",
  "nav.gallery": "Galerie",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.book": "Réserver sur WhatsApp",

  // Hero
  "hero.badge": "Experts locaux du nettoyage de confiance",
  "hero.title1": "Services de nettoyage professionnels",
  "hero.title2": "auxquels vous pouvez vous fier.",
  "hero.desc": "Des maisons et bureaux aux Airbnb et espaces commerciaux, notre équipe formée offre un nettoyage impeccable et fiable — à chaque fois.",
  "hero.cta1": "Réserver sur WhatsApp",
  "hero.cta2": "Voir les services",
  "hero.insured": "Assuré",
  "hero.insured.sub": "Personnel formé et vérifié",
  "hero.5star": "5 Étoiles",
  "hero.5star.sub": "Plus de 200 clients satisfaits",
  "hero.eco": "Éco-responsable",
  "hero.eco.sub": "Équipement moderne",
  "hero.satisfaction": "100% Satisfaction",
  "hero.satisfaction.sub": "Ou nous nettoyons à nouveau gratuitement",
  "hero.imgalt": "Professionnel du nettoyage dans un salon moderne lumineux",

  // About
  "about.kicker": "À propos de Total Wash",
  "about.title": "Une équipe de nettoyage fondée sur la confiance et le souci du détail.",
  "about.desc": "Nous sommes une entreprise professionnelle de nettoyage au service des maisons, entreprises, appartements, restaurants et propriétés Airbnb. Notre mission est simple : offrir des résultats impeccables avec une équipe sur laquelle vous pouvez vraiment compter.",
  "about.p1": "Personnel formé et vérifié",
  "about.p2": "Équipement moderne et professionnel",
  "about.p3": "Produits de nettoyage écologiques",
  "about.p4": "Horaires flexibles — 7 jours sur 7",
  "about.p5": "Tarifs transparents, sans frais cachés",
  "about.p6": "Contrôles qualité rigoureux",
  "about.imgalt": "Bureau moderne impeccable nettoyé par Total Wash",

  // Services
  "services.kicker": "Nos Services",
  "services.title": "Des solutions de nettoyage pour chaque espace.",
  "services.desc": "Une équipe de confiance. Douze services spécialisés. Tous livrés avec le même standard sans compromis.",
  "services.book": "Réserver",
  "services.s1.t": "Nettoyage Maison",
  "services.s1.d": "Nettoyage résidentiel régulier ou ponctuel adapté à votre maison.",
  "services.s2.t": "Nettoyage Bureau",
  "services.s2.d": "Entretien quotidien ou planifié qui garde les équipes productives.",
  "services.s3.t": "Nettoyage en Profondeur",
  "services.s3.d": "Nettoyage intensif de fond en comble pour un vrai renouveau.",
  "services.s4.t": "Nettoyage Appartement",
  "services.s4.d": "Service récurrent fiable pour appartements de toute taille.",
  "services.s5.t": "Nettoyage Commercial",
  "services.s5.d": "Nettoyage professionnel pour boutiques, cliniques et entreprises.",
  "services.s6.t": "Post-Construction",
  "services.s6.d": "Élimination de poussière, débris et résidus après travaux.",
  "services.s7.t": "Entrée / Sortie",
  "services.s7.d": "Nettoyage impeccable pour propriétaires, locataires et acheteurs.",
  "services.s8.t": "Canapés & Tapis",
  "services.s8.d": "Nettoyage en profondeur pour tissus d'ameublement, tapis et moquettes.",
  "services.s9.t": "Nettoyage Vitres",
  "services.s9.d": "Vitres intérieures et extérieures sans traces.",
  "services.s10.t": "Nettoyage Restaurant",
  "services.s10.d": "Nettoyage hygiénique pour salles et arrière-cuisine.",
  "services.s11.t": "Rotation Airbnb",
  "services.s11.d": "Rotations rapides et fiables entre les voyageurs.",
  "services.s12.t": "Services de Conciergerie",
  "services.s12.d": "Contrats d'entretien continus pour bâtiments et institutions.",
  "services.bookmsg": "Bonjour Total Wash, je souhaite réserver le service",

  // Why us
  "why.kicker": "Pourquoi Nous Choisir",
  "why.title": "Le choix fiable pour un nettoyage sérieux.",
  "why.r1.t": "Équipe Fiable",
  "why.r1.d": "Professionnels formés, vérifiés et en uniforme à qui confier votre espace.",
  "why.r2.t": "Équipement Professionnel",
  "why.r2.d": "Outils modernes et produits sûrs pour un nettoyage plus profond.",
  "why.r3.t": "Tarifs Abordables",
  "why.r3.d": "Devis honnêtes et transparents, sans frais cachés.",
  "why.r4.t": "Réponse Rapide",
  "why.r4.d": "Réponses rapides sur WhatsApp et disponibilité dans la semaine.",
  "why.r5.t": "Souci du Détail",
  "why.r5.d": "Nous nettoyons les recoins que les autres oublient — à chaque fois.",
  "why.r6.t": "Satisfaction Client",
  "why.r6.d": "Pas satisfait ? Nous revenons et nettoyons à nouveau gratuitement.",
  "why.r7.t": "Horaires Flexibles",
  "why.r7.d": "Matins, soirs, week-ends — nous nous adaptons à vous.",
  "why.r8.t": "Qualité Garantie",
  "why.r8.d": "Standards élevés et constants à chaque chantier.",

  // Gallery
  "gal.kicker": "Résultats Réels",
  "gal.title": "Voyez la différence par vous-même.",
  "gal.desc": "Faites glisser le curseur pour révéler la transformation.",
  "gal.label1": "Salon — Nettoyage Profond",
  "gal.label2": "Cuisine — Nettoyage de Restauration",
  "gal.before": "Avant",
  "gal.after": "Après",

  // Testimonials
  "tst.kicker": "Témoignages",
  "tst.title": "Approuvé par des clients dans toute la ville.",
  "tst.t1": "Ponctuels, minutieux et respectueux. Mon appartement n'a jamais été aussi propre. Total Wash est désormais mon équipe de référence.",
  "tst.r1": "Propriétaire d'appartement",
  "tst.t2": "Nous avons confié notre nettoyage hebdomadaire à Total Wash il y a six mois. La constance et l'attention au détail sont exactement ce qu'il nous fallait.",
  "tst.r2": "Responsable de bureau",
  "tst.t3": "Rotations fiables entre les voyageurs. Toujours à l'heure et tout est impeccable — mes avis le confirment.",
  "tst.r3": "Hôte Airbnb",
  "tst.t4": "Équipe professionnelle qui prend l'hygiène au sérieux. Ils gèrent les nettoyages profonds sans perturber le service.",
  "tst.r4": "Propriétaire de restaurant",

  // Contact
  "ct.kicker": "Réservez Votre Nettoyage",
  "ct.title": "Prêt pour un espace impeccable ?",
  "ct.desc": "Nous gérons les réservations directement sur WhatsApp — réponses rapides, planning simple.",
  "ct.getintouch": "Contactez-nous",
  "ct.getintouch.sub": "Dites-nous ce dont vous avez besoin et nous envoyons un devis immédiatement.",
  "ct.phone.sub": "WhatsApp & appels",
  "ct.hours": "Lun — Dim",
  "ct.hours.sub": "7h00 — 20h00",
  "ct.area": "Zone de service",
  "ct.area.sub": "Local et quartiers environnants",
  "ct.msgwa": "Écrivez-nous sur WhatsApp",
  "ct.location": "Notre emplacement",
  "ct.location.sub": "Ouvrir dans Google Maps pour l'itinéraire",
  "ct.directions": "Itinéraire",

  // FAQ
  "faq.kicker": "FAQ",
  "faq.title": "Vos questions, nos réponses.",
  "faq.q1": "Quelles zones desservez-vous ?",
  "faq.a1": "Nous servons les maisons et entreprises de la région et des quartiers environnants. Envoyez-nous votre adresse sur WhatsApp et nous confirmons la couverture immédiatement.",
  "faq.q2": "Comment se déroulent les réservations ?",
  "faq.a2": "Toutes les réservations se font sur WhatsApp. Vous nous écrivez, nous envoyons un devis rapide, fixons une heure et notre équipe arrive prête.",
  "faq.q3": "Fournissez-vous le matériel de nettoyage ?",
  "faq.a3": "Oui. Notre équipe arrive avec tout l'équipement professionnel et les produits écologiques nécessaires.",
  "faq.q4": "Votre personnel est-il formé ?",
  "faq.a4": "Chaque membre est formé, vérifié et suit nos standards qualité internes — pour des résultats constants.",
  "faq.q5": "Quels services proposez-vous ?",
  "faq.a5": "Maison, bureau, profondeur, appartement, commercial, post-construction, entrée/sortie, canapé & tapis, vitres, restaurant, Airbnb et conciergerie.",
  "faq.q6": "Sous quel délai puis-je réserver ?",
  "faq.a6": "La plupart des prestations se planifient sous 24 à 48 heures. Pour les urgences, écrivez-nous sur WhatsApp et nous ferons le maximum pour le jour même.",

  // Footer
  "ft.desc": "Services de nettoyage professionnels pour maisons, bureaux et entreprises sur lesquels vous pouvez compter.",
  "ft.quick": "Liens rapides",
  "ft.services": "Services",
  "ft.contact": "Contact",
  "ft.copy": "Tous droits réservés.",
  "ft.tag": "Réalisé avec soin pour des espaces propres.",

  // Misc
  "lang.toggle": "EN",
  "wa.aria": "Réserver sur WhatsApp",
  "wa.default": "Bonjour Total Wash Cleaning Service, je souhaite réserver un service de nettoyage.",
};

const EN: Dict = {
  "nav.services": "Services",
  "nav.about": "About",
  "nav.why": "Why Us",
  "nav.gallery": "Gallery",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.book": "Book on WhatsApp",

  "hero.badge": "Trusted local cleaning experts",
  "hero.title1": "Professional cleaning services",
  "hero.title2": "you can trust.",
  "hero.desc": "From homes and offices to Airbnbs and commercial spaces, our trained team delivers a spotless, reliable clean — every single time.",
  "hero.cta1": "Book on WhatsApp",
  "hero.cta2": "Explore services",
  "hero.insured": "Insured",
  "hero.insured.sub": "Trained & vetted staff",
  "hero.5star": "5-Star",
  "hero.5star.sub": "Trusted by 200+ clients",
  "hero.eco": "Eco-safe",
  "hero.eco.sub": "Modern equipment",
  "hero.satisfaction": "100% Satisfaction",
  "hero.satisfaction.sub": "Or we re-clean for free",
  "hero.imgalt": "Professional cleaner working in a bright modern living room",

  "about.kicker": "About Total Wash",
  "about.title": "A cleaning team built on trust and attention to detail.",
  "about.desc": "We're a professional cleaning company serving homes, businesses, apartments, restaurants and Airbnb properties. Our mission is simple: deliver consistently spotless results with a team you can actually rely on.",
  "about.p1": "Trained, background-checked staff",
  "about.p2": "Modern, professional equipment",
  "about.p3": "Eco-friendly cleaning products",
  "about.p4": "Flexible scheduling — 7 days a week",
  "about.p5": "Transparent pricing, no hidden fees",
  "about.p6": "Detail-driven quality checks",
  "about.imgalt": "Pristine modern office space cleaned by Total Wash",

  "services.kicker": "Our Services",
  "services.title": "Cleaning solutions for every space.",
  "services.desc": "One trusted team. Twelve specialised services. All delivered with the same uncompromising standard.",
  "services.book": "Book service",
  "services.s1.t": "Home Cleaning",
  "services.s1.d": "Regular and one-time residential cleaning tailored to your home.",
  "services.s2.t": "Office Cleaning",
  "services.s2.d": "Daily or scheduled office upkeep that keeps teams productive.",
  "services.s3.t": "Deep Cleaning",
  "services.s3.d": "Top-to-bottom intensive cleaning for spaces that need a reset.",
  "services.s4.t": "Apartment Cleaning",
  "services.s4.d": "Reliable, recurring service for apartments of any size.",
  "services.s5.t": "Commercial Cleaning",
  "services.s5.d": "Professional cleaning for shops, clinics and businesses.",
  "services.s6.t": "Post-Construction",
  "services.s6.d": "Dust, debris and residue removal after building or renovation.",
  "services.s7.t": "Move-In / Move-Out",
  "services.s7.d": "Spotless handover cleans for landlords, tenants and buyers.",
  "services.s8.t": "Sofa & Carpet",
  "services.s8.d": "Deep extraction cleaning for upholstery, rugs and carpets.",
  "services.s9.t": "Window Cleaning",
  "services.s9.d": "Streak-free interior and exterior window cleaning.",
  "services.s10.t": "Restaurant Cleaning",
  "services.s10.d": "Hygiene-grade cleaning for dining areas and back-of-house.",
  "services.s11.t": "Airbnb Turnover",
  "services.s11.d": "Fast, reliable turnovers between guests, every time.",
  "services.s12.t": "Janitorial Services",
  "services.s12.d": "Ongoing janitorial contracts for facilities and institutions.",
  "services.bookmsg": "Hello Total Wash, I'd like to book",

  "why.kicker": "Why Choose Us",
  "why.title": "The dependable choice for serious cleaning.",
  "why.r1.t": "Reliable Team",
  "why.r1.d": "Trained, vetted and uniformed professionals you can trust in your space.",
  "why.r2.t": "Professional Equipment",
  "why.r2.d": "Modern tools and safe products for a deeper, safer clean.",
  "why.r3.t": "Affordable Pricing",
  "why.r3.d": "Honest, transparent quotes with no hidden fees.",
  "why.r4.t": "Fast Response",
  "why.r4.d": "Quick replies on WhatsApp and same-week availability.",
  "why.r5.t": "Attention to Detail",
  "why.r5.d": "We clean the spots others miss — every single time.",
  "why.r6.t": "Customer Satisfaction",
  "why.r6.d": "Not happy? We come back and re-clean for free.",
  "why.r7.t": "Flexible Scheduling",
  "why.r7.d": "Mornings, evenings, weekends — we work around you.",
  "why.r8.t": "Quality Guaranteed",
  "why.r8.d": "Consistent, high standards on every job, big or small.",

  "gal.kicker": "Real Results",
  "gal.title": "See the difference for yourself.",
  "gal.desc": "Drag the slider to reveal the transformation.",
  "gal.label1": "Living Room — Deep Clean",
  "gal.label2": "Kitchen — Restoration Clean",
  "gal.before": "Before",
  "gal.after": "After",

  "tst.kicker": "Testimonials",
  "tst.title": "Trusted by clients across the city.",
  "tst.t1": "Punctual, thorough and respectful. My apartment has never looked better. Total Wash is now my go-to team.",
  "tst.r1": "Apartment owner",
  "tst.t2": "We switched our weekly office cleaning to Total Wash six months ago. The consistency and attention to detail are exactly what we needed.",
  "tst.r2": "Office manager",
  "tst.t3": "Reliable turnovers between guests. They always show up on time and leave the place spotless — my reviews say it all.",
  "tst.r3": "Airbnb host",
  "tst.t4": "Professional team that takes hygiene seriously. They handle our deep cleans without disrupting service.",
  "tst.r4": "Restaurant owner",

  "ct.kicker": "Book Your Cleaning",
  "ct.title": "Ready for a spotless space?",
  "ct.desc": "We handle bookings directly on WhatsApp — fast replies, simple scheduling.",
  "ct.getintouch": "Get in touch",
  "ct.getintouch.sub": "Tell us what you need and we'll send a quote right away.",
  "ct.phone.sub": "WhatsApp & calls",
  "ct.hours": "Mon — Sun",
  "ct.hours.sub": "7:00 AM — 8:00 PM",
  "ct.area": "Service Area",
  "ct.area.sub": "Local & surrounding neighborhoods",
  "ct.msgwa": "Message us on WhatsApp",
  "ct.location": "Our location",
  "ct.location.sub": "Open in Google Maps for directions",
  "ct.directions": "Get directions",

  "faq.kicker": "FAQ",
  "faq.title": "Questions, answered.",
  "faq.q1": "What areas do you serve?",
  "faq.a1": "We serve homes and businesses throughout the local area and surrounding neighborhoods. Send us your address on WhatsApp and we'll confirm coverage instantly.",
  "faq.q2": "How do bookings work?",
  "faq.a2": "All bookings happen on WhatsApp. You message us, we send a quick quote, confirm a time, and our team arrives ready to work.",
  "faq.q3": "Do you provide cleaning supplies?",
  "faq.a3": "Yes. Our team arrives with all professional equipment and eco-friendly cleaning products needed for the job.",
  "faq.q4": "Are your staff trained?",
  "faq.a4": "Every team member is trained, background-checked, and follows our internal quality standards — so you get consistent results.",
  "faq.q5": "What cleaning services do you offer?",
  "faq.a5": "We cover home, office, deep, apartment, commercial, post-construction, move-in/out, sofa & carpet, window, restaurant, Airbnb, and janitorial services.",
  "faq.q6": "How quickly can I book?",
  "faq.a6": "Most jobs can be scheduled within 24–48 hours. For urgent cleans, message us on WhatsApp and we'll do our best to fit you in same-day.",

  "ft.desc": "Professional cleaning services for homes, offices and businesses you can rely on.",
  "ft.quick": "Quick links",
  "ft.services": "Services",
  "ft.contact": "Contact",
  "ft.copy": "All rights reserved.",
  "ft.tag": "Crafted with care for clean spaces.",

  "lang.toggle": "FR",
  "wa.aria": "Book on WhatsApp",
  "wa.default": "Hello Total Wash Cleaning Service, I would like to book a cleaning service.",
};

const DICTS: Record<Lang, Dict> = { fr: FR, en: EN };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const toggle = () => setLang(lang === "fr" ? "en" : "fr");
  const t = (key: string) => DICTS[lang][key] ?? key;

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>;
}

export function useT() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useT();
  const next = lang === "fr" ? "EN" : "FR";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${next}`}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-secondary ${className}`}
    >
      <Languages className="h-3.5 w-3.5" />
      {next}
    </button>
  );
}
