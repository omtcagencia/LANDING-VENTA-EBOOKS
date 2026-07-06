import { motion } from "motion/react";
import { MoveRight, XCircle, CheckCircle2, Award } from "lucide-react";

export default function Transformacion() {
  const antesList = [
    "Inseguridad absoluta frente a la cámara",
    "Pocas oportunidades en castings y agencias",
    "Falta de dirección y rumbo profesional",
    "Miedo a lucir inconsistente o rígida",
  ];

  const despuesList = [
    "Confianza inquebrantable en tu fisonomía",
    "Presencia profesional magnética de inmediato",
    "Portafolio sólido estructurado por ti misma",
    "Mejor imagen personal y proyección de marca",
  ];

  return (
    <section id="transformacion" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      {/* Background radial effects */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-premium/5 filter blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-zinc-900/40 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-gold-premium uppercase tracking-[0.3em] text-xxs font-bold mb-4 inline-flex items-center">
            <Award size={12} className="mr-1.5" /> LA METAMORFOSIS CREATIVA
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight">
            TU <span className="gold-gradient-text">EVOLUCIÓN</span> DE PRINCIPIO A FIN
          </h2>
          <p className="font-sans text-xs text-zinc-400 uppercase tracking-widest mt-4">
            DE LA ASPIRACIÓN CASERA AL RECONOCIMIENTO COMERCIAL
          </p>
          <div className="w-12 h-[2px] bg-gold-premium mx-auto mt-6"></div>
        </div>

        {/* Double Column Display resembling Vogue spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* ANTES CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 border border-white/5 p-8 lg:p-12 relative flex flex-col justify-between"
          >
            {/* Corner Badge */}
            <span className="absolute top-0 right-0 bg-zinc-900 text-zinc-500 font-montserrat text-[10px] font-black tracking-[0.25em] uppercase px-5 py-2.5">
              FASE INICIAL
            </span>

            <div>
              <span className="font-serif text-5xl md:text-7xl font-light text-zinc-700 block italic leading-none mb-4">
                Antes.
              </span>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-10 max-w-md">
                Esa desagradable frustración de sentir que tienes el potencial visual, pero no posees los conceptos técnicos clave para ser rentable ante los ojos de un fotógrafo.
              </p>

              <div className="space-y-4.5">
                {antesList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5">
                    <XCircle className="text-zinc-600 flex-shrink-0" size={18} strokeWidth={1.5} />
                    <span className="font-sad font-light text-xs text-zinc-400 uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 text-zinc-600 text-xxs tracking-widest uppercase font-mono">
              ESTADO DE DESCONEXIÓN • INCERTIDUMBRE
            </div>
          </motion.div>

          {/* DESPUÉS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gold-premium/30 bg-zinc-950 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between glow-premium"
          >
            {/* Aesthetic watermarked portrait from customized generator */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none group-hover:scale-105 transition-all duration-700">
              <img
                src="/src/assets/images/hero_editorial_model_1780242763132.png"
                alt="After transformation representation portrait visualizer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Corner Gold Badge */}
            <span className="absolute top-0 right-0 bg-gold-premium text-black font-montserrat text-[10px] font-black tracking-[0.25em] uppercase px-5 py-2.5 z-10">
              FASE ELITE
            </span>

            <div className="relative z-10">
              <span className="font-serif text-5xl md:text-7xl font-bold italic leading-none text-gold-premium block mb-4">
                Después.
              </span>
              <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed mb-10 max-w-md">
                Desbloquea la solidez técnica, domina el portafolio, posee las poses icónicas y proyecta esa mirada indomable de quien comprende el negocio entero.
              </p>

              <div className="space-y-4.5">
                {despuesList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3.5">
                    <CheckCircle2 className="text-[#D4AF37] flex-shrink-0" size={18} strokeWidth={1.5} />
                    <span className="font-sans font-semibold text-xs text-white uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 text-gold-premium text-xxs tracking-widest uppercase font-mono relative z-10 flex items-center">
              AUTORIDAD DE MARCA • ACCESIBLE AHORA <MoveRight size={12} className="ml-2 animate-bounce" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
