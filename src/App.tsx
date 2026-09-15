import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Problema from "./components/Problema";
import Solucion from "./components/Solucion";
import Modulos from "./components/Modulos";
import Transformacion from "./components/Transformacion";
import Bonos from "./components/Bonos";
import Testimonios from "./components/Testimonios";
import Oferta from "./components/Oferta";
import Garantia from "./components/Garantia";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";

export default function App() {
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  
  // Set elegant tab title on initial load
  useEffect(() => {
    document.title = "PACK PROFESIONAL PARA MODELOS | Elite Digital Library";
  }, []);

  // Track scroll position to show/hide fixed CTA on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Offset scroll slightly to account for the sticky header height
      const headerHeight = 72; 
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="landing-master-root" className="min-h-screen overflow-x-hidden bg-white text-zinc-900 selection:bg-gold-premium/30 selection:text-zinc-950 pb-20 lg:pb-0">
      {/* Editorial Luxury Header Navigation */}
      <Header onScrollTo={handleScrollTo} />

      <main id="landing-main-sections">
        {/* Section 1: Hero */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Section 2: Social Proof Metric Strip */}
        <SocialProof />

        {/* Section 3: Problema (Pain Points grid) */}
        <Problema />

        {/* Section 4: Solucion (Value Proposition & Mockup Frame) */}
        <Solucion />

        {/* Section 5: Modulos (Interactive Curricula Accordions) */}
        <Modulos />

        {/* Section 6: Transformacion (Double Column Before/After) */}
        <Transformacion />

        {/* Section 7: Bonos (Bonus Pile Value Stack) */}
        <Bonos />

        {/* Section 8: Testimonios (Grayscale model reviews) */}
        <Testimonios />

        {/* Section 9: Oferta (Scarcity pricing checkout stack) */}
        <Oferta />

        {/* Section 10: Garantia (De-risking purchase protection) */}
        <Garantia />

        {/* Section 11: FAQ (Objection destruction accordions) */}
        <Faq />

        {/* Section 12: CtaFinal (Action closer overlay) */}
        <CtaFinal onScrollTo={handleScrollTo} />
      </main>

      {/* Sticky Floating Mobile CTA Bar */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-zinc-200/90 px-4 py-3 sm:px-6 sm:py-3.5 lg:hidden flex items-center justify-between gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold text-gold-dark tracking-widest uppercase truncate">
                OFERTA DE ESTRENO
              </span>
              <div className="flex items-baseline space-x-1.5 min-w-0">
                <span className="font-montserrat text-xl font-black text-zinc-950">$20</span>
                <span className="text-xxs font-extrabold text-zinc-500 uppercase tracking-wider">USD</span>
                <span className="text-xxs line-through text-zinc-400 truncate">$147 USD</span>
              </div>
            </div>
            <button
              onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
              className="flex-1 max-w-[200px] bg-gold-premium text-white font-montserrat text-xs font-black tracking-[0.12em] py-3.5 px-4 uppercase text-center hover:bg-gold-dark active:scale-95 transition-all duration-150 flex items-center justify-center space-x-1.5 shadow-md shadow-gold-premium/20 rounded-none cursor-pointer"
              id="sticky-mobile-cta"
            >
              <span>ACCEDER AHORA</span>
              <ArrowRight size={13} className="stroke-[3] flex-shrink-0" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
