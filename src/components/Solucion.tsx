import { motion } from "motion/react";
import { Sparkles, Eye } from "lucide-react";

export default function Solucion() {
  return (
    <section id="solucion" className="relative py-24 md:py-32 bg-black overflow-hidden border-b border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-gold-premium/4 via-transparent to-transparent pointer-events-none filter blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Detail Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-gold-premium uppercase tracking-[0.3em] text-xxs font-bold mb-4 flex items-center">
              <Sparkles size={12} className="mr-1.5" /> LA RESPUESTA DE ÉLITE
            </span>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.05] uppercase text-white mb-6">
              LA BIBLIOTECA <br />
              <span className="gold-gradient-text">DEFINITIVA</span> PARA MODELOS
            </h2>
            <div className="w-16 h-[2px] bg-gold-premium mb-8"></div>
            
            <p className="font-sans text-lg text-zinc-300 font-light leading-relaxed mb-6">
              Un sistema diseñado para ayudarte a desarrollar las habilidades que fotógrafos, agencias y marcas buscan actualmente.
            </p>
            
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-8">
              No es un curso aburrido de videos eternos. Este es un compendio práctico, directo y ultra-estilizado en formato digital que recopila los secretos de poses corporales, técnicas de portafolio, vocabulario técnico de pasarela y estrategias comerciales avanzadas para vender tu imagen hoy. Es un manual de industria listo para descargar e implementar de inmediato.
            </p>

            {/* Quick trust lists */}
            <div className="space-y-4 w-full">
              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 w-8 h-8 bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <span className="font-montserrat text-xs font-bold text-gold-premium">A</span>
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-black uppercase text-white tracking-wider mb-0.5">Estética Editorial Premium</h4>
                  <p className="font-sans text-xs text-zinc-500">Diseñado bajo lineamientos de Vogue, IMG e YSL para adiestrar tus ojos al verdadero arte del lujo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="flex-shrink-0 w-8 h-8 bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <span className="font-montserrat text-xs font-bold text-gold-premium">B</span>
                </div>
                <div>
                  <h4 className="font-montserrat text-xs font-black uppercase text-white tracking-wider mb-0.5">Acceso Instantáneo Multi-Plataforma</h4>
                  <p className="font-sans text-xs text-zinc-500">Consulta las guías de poses directo en tu teléfono durante tus sesiones de fotos de forma cómoda y veloz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Colossal Mockup Column */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[480px] aspect-[4/3] overflow-visible group"
            >
              {/* Gold frame behind */}
              <div className="absolute inset-0 border border-gold-premium/20 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500 pointer-events-none" />
              
              {/* Core Image container */}
              <div className="relative z-10 w-full h-full bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/d/1FAwb5Djvh0b_aTt9hvdgal1oi469tC_w"
                  alt="Professional Runway Spotlight Pose showing solution visual standard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Visual Glassmorphic Overlay for MasterClass layout style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="backdrop-blur-md bg-black/65 border border-white/10 p-5 relative">
                    <span className="absolute top-2 right-4 text-xxs font-mono text-gold-premium font-bold uppercase tracking-widest flex items-center">
                      <Eye size={10} className="mr-1" /> ENFOQUE COUTURE
                    </span>
                    <span className="font-montserrat text-[10px] text-gold-premium block font-extrabold tracking-widest uppercase mb-1">
                      RESULTADO PROFESIONAL
                    </span>
                    <p className="font-sans text-xs text-zinc-300 font-light leading-relaxed">
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
