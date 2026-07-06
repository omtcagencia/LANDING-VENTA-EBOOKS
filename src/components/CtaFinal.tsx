import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CtaFinalProps {
  onScrollTo: (id: string) => void;
}

export default function CtaFinal({ onScrollTo }: CtaFinalProps) {
  return (
    <section
      id="cta-final"
      className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden bg-black text-center"
    >
      {/* Background visual asset from our customized image generator */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/final_cta_ambient_bg_1780242813818.png"
          alt="Model silhouette against warm light halo high-contrast graphic background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-45"
        />
        {/* Overlay negro 80% */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        {/* Elite Signage */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gold-premium font-montserrat text-xs tracking-[0.3em] font-bold uppercase mb-6"
        >
          ÚLTIMO PASO HACIA TU TRANSFORMACIÓN
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none mb-6"
        >
          TU IMAGEN <br /> 
          <span className="gold-gradient-text">ES TU MARCA</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed mb-10"
        >
          Aprende a proyectar seguridad, presencia y profesionalismo con el Pack definitivo para Modelos.
        </motion.p>

        {/* Master CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <button
            id="cta-final-button-trigger"
            onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
            className="bg-gold-premium text-black font-montserrat text-xs font-black tracking-[0.25em] px-12 py-5 uppercase relative overflow-hidden group hover:bg-[#F4D35E] hover:scale-105 active:scale-98 transition-all cursor-pointer shadow-lg shadow-gold-premium/10"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
            <span className="flex items-center justify-center">
              COMENZAR AHORA <ArrowUpRight size={14} className="ml-1.5" />
            </span>
          </button>
        </motion.div>

        {/* Clean Footer Signoff for premium brand credibility */}
        <div className="mt-20 text-zinc-600 text-xxs tracking-[0.3em] uppercase font-mono">
          © {new Date().getFullYear()} ELITE STUDIO • TODOS LOS DERECHOS RESERVADOS
        </div>

      </div>
    </section>
  );
}
