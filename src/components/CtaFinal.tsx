import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface CtaFinalProps {
  onScrollTo: (id: string) => void;
}

export default function CtaFinal({ onScrollTo }: CtaFinalProps) {
  return (
    <section
      id="cta-final"
      className="relative min-h-[70vh] flex items-center justify-center py-20 md:py-28 overflow-hidden bg-white text-center border-t border-zinc-200"
    >
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/src/assets/images/final_cta_ambient_bg_1780242813818.png"
          alt="Model silhouette editorial ambient background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
      </div>

      {/* Decorative center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-light/60 filter blur-[120px] rounded-full pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Elite Signage */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gold-dark font-montserrat text-xs tracking-[0.25em] font-bold uppercase mb-4 sm:mb-6"
        >
          ÚLTIMO PASO HACIA TU TRANSFORMACIÓN
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-zinc-950 leading-none mb-4 sm:mb-6"
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
          className="font-sans text-sm sm:text-base md:text-lg text-zinc-600 font-medium max-w-xl leading-relaxed mb-8 sm:mb-10 px-2"
        >
          Aprende a proyectar seguridad, presencia y profesionalismo con el Pack definitivo para Modelos.
        </motion.p>

        {/* Master CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full sm:w-auto"
        >
          <button
            id="cta-final-button-trigger"
            onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
            className="w-full sm:w-auto bg-gold-dark hover:bg-gold-premium text-white font-montserrat text-xs font-black tracking-[0.2em] px-8 sm:px-12 py-4.5 sm:py-5 uppercase relative overflow-hidden group hover:scale-105 active:scale-98 transition-all cursor-pointer shadow-xl shadow-gold-premium/20"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
            <span className="flex items-center justify-center">
              COMENZAR AHORA <ArrowUpRight size={16} className="ml-1.5" />
            </span>
          </button>
        </motion.div>

        {/* Clean Footer Signoff */}
        <div className="mt-16 sm:mt-20 text-zinc-400 text-xxs tracking-[0.25em] uppercase font-mono font-medium">
          © {new Date().getFullYear()} ELITE STUDIO • TODOS LOS DERECHOS RESERVADOS
        </div>

      </div>
    </section>
  );
}
