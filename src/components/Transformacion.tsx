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
    <section id="transformacion" className="relative py-20 md:py-28 bg-zinc-50/70 overflow-hidden border-y border-zinc-200">
      {/* Background radial effects */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-light/40 filter blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-zinc-200/50 filter blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 inline-flex items-center">
            <Award size={12} className="mr-1.5 text-gold-premium" /> LA METAMORFOSIS CREATIVA
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-zinc-950 leading-tight">
            TU <span className="gold-gradient-text">EVOLUCIÓN</span> DE PRINCIPIO A FIN
          </h2>
          <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-2 font-medium">
            DE LA ASPIRACIÓN CASERA AL RECONOCIMIENTO COMERCIAL
          </p>
          <div className="w-12 h-[2px] bg-gold-premium mx-auto mt-4"></div>
        </div>

        {/* Double Column Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* ANTES CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-zinc-200 p-6 sm:p-8 lg:p-12 relative flex flex-col justify-between shadow-xs"
          >
            {/* Corner Badge */}
            <span className="absolute top-0 right-0 bg-zinc-100 text-zinc-600 font-montserrat text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 border-b border-l border-zinc-200">
              FASE INICIAL
            </span>

            <div>
              <span className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-zinc-400 block italic leading-none mb-4">
                Antes.
              </span>
              <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-8 max-w-md">
                Esa desagradable frustración de sentir que tienes el potencial visual, pero no posees los conceptos técnicos clave para ser rentable ante los ojos de un fotógrafo.
              </p>

              <div className="space-y-3.5">
                {antesList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <XCircle className="text-zinc-400 flex-shrink-0" size={18} strokeWidth={1.5} />
                    <span className="font-sans font-normal text-xs sm:text-sm text-zinc-600 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 text-zinc-400 text-xxs tracking-widest uppercase font-mono">
              ESTADO DE DESCONEXIÓN • INCERTIDUMBRE
            </div>
          </motion.div>

          {/* DESPUÉS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-gold-premium bg-white p-6 sm:p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            {/* Corner Gold Badge */}
            <span className="absolute top-0 right-0 bg-gold-premium text-white font-montserrat text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2 z-10 shadow-xs">
              FASE ELITE
            </span>

            <div className="relative z-10">
              <span className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold italic leading-none text-gold-dark block mb-4">
                Después.
              </span>
              <p className="font-sans text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed mb-8 max-w-md">
                Desbloquea la solidez técnica, domina el portafolio, posee las poses icónicas y proyecta esa mirada indomable de quien comprende el negocio entero.
              </p>

              <div className="space-y-3.5">
                {despuesList.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-gold-dark flex-shrink-0" size={18} strokeWidth={2} />
                    <span className="font-sans font-bold text-xs sm:text-sm text-zinc-950 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200 text-gold-dark text-xxs tracking-widest uppercase font-mono relative z-10 flex items-center font-bold">
              AUTORIDAD DE MARCA • ACCESIBLE AHORA <MoveRight size={12} className="ml-2 animate-bounce" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
