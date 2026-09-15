import { motion } from "motion/react";
import { Check } from "lucide-react";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const bulletPoints = [
    "Acceso inmediato",
    "Descarga digital",
    "Compatible con celular",
    "Actualizaciones futuras",
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:py-36 flex items-center overflow-hidden bg-white"
    >
      {/* Background visual ambience elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-radial from-gold-light/60 via-transparent to-transparent pointer-events-none filter blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-100/70 pointer-events-none filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Editorial Information */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 text-gold-dark text-xs tracking-[0.22em] font-bold uppercase mb-4 sm:mb-6"
          >
            <span className="w-6 h-[2px] bg-gold-premium"></span>
            <span>NUEVO PACK DIGITAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-montserrat text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.0] text-zinc-950 uppercase mb-5 sm:mb-6"
          >
            CONVIÉRTETE EN UN/A{" "}
            <span className="gold-gradient-text block mt-1">
              MODELO PROFESIONAL
            </span>{" "}
            DESDE CERO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl"
          >
            Aprende a construir una imagen poderosa, desarrollar tu presencia,
            dominar el posado y destacar en la industria moderna del modelaje.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-10"
          >
            {/* Primary Golden CTA Button */}
            <button
              id="hero-cta-main"
              onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
              className="bg-gold-premium text-white font-montserrat text-xs font-black tracking-[0.18em] px-8 sm:px-10 py-4 sm:py-5 uppercase text-center relative overflow-hidden group hover:bg-gold-dark hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-gold-premium/25 transition-all duration-200"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              QUIERO ACCEDER
            </button>

            {/* Secondary CTA Button */}
            <button
              id="hero-cta-secondary"
              onClick={() => onScrollTo("contenido")}
              className="bg-zinc-50 text-zinc-900 border border-zinc-300 hover:border-gold-premium hover:text-gold-dark hover:bg-white font-montserrat text-xs font-black tracking-[0.18em] px-8 sm:px-10 py-4 sm:py-5 uppercase text-center cursor-pointer transition-all duration-200 shadow-sm"
            >
              VER CONTENIDO
            </button>
          </motion.div>

          {/* Core high-conversion feature checkboxes under CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-y-3 gap-x-4 max-w-lg border-t border-zinc-200 pt-6 sm:pt-8"
          >
            {bulletPoints.map((bullet) => (
              <div key={bullet} className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold-light flex items-center justify-center border border-gold-premium/40 shadow-xs">
                  <Check className="text-gold-dark" size={10} strokeWidth={3} />
                </div>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-zinc-700">
                  {bullet}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right 3D Visual Mockup Layer */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-none overflow-visible flex items-center justify-center p-2 sm:p-4 group"
          >
            {/* Ambient luxury halo glows surrounding the mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-premium/15 via-transparent to-zinc-200/50 pointer-events-none filter blur-[60px] rounded-full scale-90 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute w-[104%] h-[104%] border border-zinc-200/80 pointer-events-none rounded-none transform rotate-3" />
            <div className="absolute w-[100%] h-[100%] border border-gold-premium/20 pointer-events-none rounded-none transform -rotate-2" />

            {/* floating masterclass card container */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full flex justify-center drop-shadow-xl"
            >
              <div className="relative overflow-hidden border border-zinc-200/90 glow-premium bg-white p-2.5 shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/d/1D3C8lOGQSvv6x2zdc-vYVc4l0jlX7C74"
                  alt="Elite Model Pack digital compilation mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-all duration-500"
                />

                {/* Overlapped gold indicator tags to increase perceived value */}
                <span className="absolute top-5 left-5 bg-white/95 text-zinc-950 text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 border border-gold-premium/40 shadow-sm z-20">
                  BIBLIOTECA DIGITAL VIP
                </span>

                <span className="absolute bottom-5 right-5 bg-gold-premium text-white text-[9px] tracking-[0.15em] uppercase font-black px-3 py-1.5 shadow-sm z-20">
                  100% DESCARGABLE
                </span>
              </div>
            </motion.div>

            {/* Float Badge 1 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-2 sm:-right-4 top-1/4 z-20 bg-white/95 border border-zinc-200 px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl backdrop-blur-sm"
            >
              <span className="text-xxs uppercase tracking-widest text-gold-dark block font-bold">
                Nivel Elite
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-950 font-black block">
                Vogue Standards
              </span>
            </motion.div>

            {/* Float Badge 2 */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-2 sm:-left-6 bottom-8 sm:bottom-12 z-20 bg-white/95 border border-zinc-200 px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl backdrop-blur-sm"
            >
              <span className="text-[10px] text-amber-500 uppercase tracking-widest font-mono font-bold">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </span>
              <span className="text-xxs text-zinc-500 block uppercase tracking-widest mt-0.5 font-medium">
                5/5 Masterclass Rating
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
