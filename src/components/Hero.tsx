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
      className="relative min-h-screen pt-28 pb-16 md:py-36 flex items-center overflow-hidden bg-black"
    >
      {/* Background visual ambience elements */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-radial from-gold-premium/5 via-transparent to-transparent pointer-events-none filter blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-900/10 pointer-events-none filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Information */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 text-gold-premium text-xs tracking-[0.25em] font-semibold uppercase mb-6"
          >
            <span className="w-6 h-[1px] bg-gold-premium"></span>
            <span>NUEVO PACK DIGITAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-white uppercase mb-6"
          >
            CONVIÉRTETE EN UNA{" "}
            <span className="gold-gradient-text block mt-1">
              MODELO PROFESIONAL
            </span>{" "}
            DESDE CERO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-xl"
          >
            Aprende a construir una imagen poderosa, desarrollar tu presencia,
            dominar el posado y destacar en la industria moderna del modelaje.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-10"
          >
            {/* Primary Golden CTA Button */}
            <button
              id="hero-cta-main"
              onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
              className="bg-gold-premium text-black font-montserrat text-xs font-black tracking-[0.2em] px-10 py-5 uppercase text-center relative overflow-hidden group hover:bg-gold-hover hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-gold-premium/15 transition-all duration-200"
            >
              <div className="absolute inset-0 w-full h-full bg-white/25 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              QUIERO ACCEDER
            </button>

            {/* Secondary CTA Button */}
            <button
              id="hero-cta-secondary"
              onClick={() => onScrollTo("contenido")}
              className="bg-transparent text-white border border-white/20 hover:border-gold-premium hover:text-gold-premium font-montserrat text-xs font-black tracking-[0.2em] px-10 py-5 uppercase text-center cursor-pointer transition-all duration-200"
            >
              VER CONTENIDO
            </button>
          </motion.div>

          {/* Core high-conversion feature checkboxes under CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-y-3.5 gap-x-6 max-w-lg border-t border-white/8 pt-8"
          >
            {bulletPoints.map((bullet) => (
              <div key={bullet} className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold-premium/10 flex items-center justify-center border border-gold-premium/25 shadow-sm">
                  <Check className="text-gold-premium" size={10} strokeWidth={3} />
                </div>
                <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-zinc-300">
                  {bullet}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right 3D Visual Mockup Layer */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[420px] aspect-square rounded-none overflow-visible flex items-center justify-center p-4 group"
          >
            {/* Ambient luxury halo glows surrounding the mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-premium/10 via-transparent to-white/5 pointer-events-none filter blur-[80px] rounded-full scale-90 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute w-[105%] h-[105%] border border-white/3 pointer-events-none rounded-none transform rotate-3" />
            <div className="absolute w-[100%] h-[100%] border border-gold-premium/5 pointer-events-none rounded-none transform -rotate-2" />

            {/* floating masterclass card container */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full flex justify-center drop-shadow-2xl"
            >
              <div className="relative overflow-hidden border border-white/10 glow-premium bg-zinc-950 p-2.5">
                <img
                  src="https://lh3.googleusercontent.com/d/1D3C8lOGQSvv6x2zdc-vYVc4l0jlX7C74"
                  alt="Elite Model Pack digital compilation mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover grayscale-15 group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Overlapped gold indicator tags to increase perceived value */}
                <span className="absolute top-6 left-6 bg-black/90 text-gold-premium text-[9px] tracking-[0.2em] uppercase font-bold px-3.5 py-1.5 border border-gold-premium/30 z-20">
                  BIBLIOTECA DIGITAL VIP
                </span>

                <span className="absolute bottom-6 right-6 bg-gold-premium text-black text-[9px] tracking-[0.15em] uppercase font-black px-3 py-1 z-20">
                  100% DESCARGABLE
                </span>
              </div>
            </motion.div>

            {/* Float Badge 1 */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-4 top-1/4 z-20 bg-zinc-950/95 border border-white/10 px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <span className="text-xxs uppercase tracking-widest text-[#D4AF37] block font-semibold">
                Nivel Elite
              </span>
              <span className="text-xs uppercase tracking-wider text-white font-bold block">
                Vogue Standards
              </span>
            </motion.div>

            {/* Float Badge 2 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-6 bottom-12 z-20 bg-zinc-950/95 border border-white/10 px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <span className="text-[10px] text-zinc-300 uppercase tracking-widest font-mono">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </span>
              <span className="text-xxs text-zinc-400 block uppercase tracking-widest mt-0.5">
                5/5 Masterclass Rating
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
