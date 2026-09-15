import { motion } from "motion/react";
import { Sparkles, Eye } from "lucide-react";

export default function Solucion() {
  return (
    <section id="solucion" className="relative py-20 md:py-28 bg-zinc-50/60 overflow-hidden border-b border-zinc-200">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-gold-light/40 via-transparent to-transparent pointer-events-none filter blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 flex items-center">
              <Sparkles size={12} className="mr-1.5 text-gold-premium" /> LA RESPUESTA DE ÉLITE
            </span>
            <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase text-zinc-950 mb-5">
              LA BIBLIOTECA <br />
              <span className="gold-gradient-text">DEFINITIVA</span> PARA MODELOS
            </h2>
            <div className="w-16 h-[2px] bg-gold-premium mb-6"></div>
            
            <p className="font-sans text-base sm:text-lg text-zinc-700 font-medium leading-relaxed mb-4">
              Un sistema diseñado para ayudarte a desarrollar las habilidades que fotógrafos, agencias y marcas buscan actualmente.
            </p>
            
            <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-8">
              No es un curso aburrido de videos eternos. Este es un compendio práctico, directo y ultra-estilizado en formato digital que recopila los secretos de poses corporales, técnicas de portafolio, vocabulario técnico de pasarela y estrategias comerciales avanzadas para vender tu imagen hoy. Es un manual de industria listo para descargar e implementar de inmediato.
            </p>

            {/* Quick trust lists */}
            <div className="space-y-4 w-full">
              <div className="flex items-start space-x-3.5 bg-white p-3.5 border border-zinc-200 shadow-xs">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-light border border-gold-premium/40 flex items-center justify-center">
                  <span className="font-montserrat text-xs font-bold text-gold-dark">A</span>
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-black uppercase text-zinc-950 tracking-wider mb-0.5">Estética Editorial Premium</h4>
                  <p className="font-sans text-xs text-zinc-500">Diseñado bajo lineamientos de Vogue, IMG e YSL para adiestrar tus ojos al verdadero arte del lujo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 bg-white p-3.5 border border-zinc-200 shadow-xs">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-light border border-gold-premium/40 flex items-center justify-center">
                  <span className="font-montserrat text-xs font-bold text-gold-dark">B</span>
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-black uppercase text-zinc-950 tracking-wider mb-0.5">Acceso Instantáneo Multi-Plataforma</h4>
                  <p className="font-sans text-xs text-zinc-500">Consulta las guías de poses directo en tu teléfono durante tus sesiones de fotos de forma cómoda y veloz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Colossal Mockup Column */}
          <div className="lg:col-span-6 flex justify-center items-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[480px] aspect-[4/3] overflow-visible group"
            >
              {/* Gold frame behind */}
              <div className="absolute inset-0 border border-gold-premium/30 transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 pointer-events-none" />
              
              {/* Core Image container */}
              <div className="relative z-10 w-full h-full bg-white border border-zinc-200 overflow-hidden shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/d/1FAwb5Djvh0b_aTt9hvdgal1oi469tC_w"
                  alt="Professional Runway Spotlight Pose showing solution visual standard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Visual Overlay for MasterClass layout style */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <div className="backdrop-blur-md bg-white/95 border border-zinc-200 p-4 relative shadow-lg">
                    <span className="absolute top-2.5 right-3 text-xxs font-mono text-gold-dark font-bold uppercase tracking-widest flex items-center">
                      <Eye size={10} className="mr-1 text-gold-premium" /> ENFOQUE COUTURE
                    </span>
                    <span className="font-montserrat text-[10px] text-gold-dark block font-black tracking-widest uppercase mb-1">
                      RESULTADO PROFESIONAL
                    </span>
                    <p className="font-sans text-xs text-zinc-700 font-medium leading-relaxed">
                      "Aprende a proyectar esa presencia magnética que convence a directores de casting en los primeros 3 segundos."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
