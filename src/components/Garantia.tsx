import { motion } from "motion/react";
import { ShieldCheck, CalendarRange } from "lucide-react";

export default function Garantia() {
  return (
    <section id="garantia" className="relative py-16 sm:py-20 bg-white overflow-hidden border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Luxury outer frame */}
        <div className="border border-zinc-200 bg-zinc-50/70 p-6 sm:p-10 relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 sm:gap-8 shadow-xs">
          
          {/* Subtle design corner mark */}
          <div className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            ACTIVE GUARANTEE VIP
          </div>

          {/* Icon Badge column */}
          <div className="flex-shrink-0">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gold-light border border-gold-premium/40 flex items-center justify-center p-3 shadow-xs">
              <ShieldCheck className="text-gold-dark" size={30} strokeWidth={1.5} />
            </div>
          </div>

          {/* Description Detail column */}
          <div className="flex-grow">
            <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold block mb-1 font-mono">
              POLÍTICA DE PROTECCIÓN VIP
            </span>
            <h3 className="font-montserrat text-lg sm:text-2xl font-black uppercase text-zinc-950 mb-3 tracking-wider">
              COMPRA SIN RIESGO
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-4">
              Prueba el contenido y si no cumple tus expectativas podrás solicitar devolución dentro del periodo establecido. Queremos que des este paso con absoluta tranquilidad: tu imagen es tu marca y esta biblioteca es tu mejor inversión.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 border-t border-zinc-200 pt-4 mt-2">
              <div className="flex items-center space-x-2 text-gold-dark">
                <CalendarRange size={14} />
                <span className="text-xxs tracking-wider uppercase font-mono font-bold">GARANTÍA DE DEVOLUCIÓN TOTAL</span>
              </div>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="text-xxs tracking-wider uppercase text-zinc-500 font-mono">APLICAN TÉRMINOS Y CONDICIONES GENERALES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
