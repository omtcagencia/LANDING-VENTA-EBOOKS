import { motion } from "motion/react";
import { ShieldCheck, CalendarRange } from "lucide-react";

export default function Garantia() {
  return (
    <section id="garantia" className="relative py-20 bg-black overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Luxury outer frame */}
        <div className="border border-white/8 bg-zinc-950 p-8 sm:p-12 relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 glow-premium animate-fade-in">
          
          {/* Subtle design corner mark */}
          <div className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-zinc-600 uppercase">
            ACTIVE GUARANTEE VIP
          </div>

          {/* Icon Badge column */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gold-premium/10 border border-gold-premium/30 flex items-center justify-center p-3">
              <ShieldCheck className="text-gold-premium" size={32} strokeWidth={1} />
            </div>
          </div>

          {/* Description Detail column */}
          <div className="flex-grow">
            <span className="text-gold-premium uppercase tracking-[0.25em] text-xxs font-bold block mb-2 font-mono">
              POLÍTICA DE PROTECCIÓN VIP
            </span>
            <h3 className="font-montserrat text-xl sm:text-2xl font-black uppercase text-white mb-4 tracking-wider">
              COMPRA SIN RIESGO
            </h3>
            
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
              Prueba el contenido y si no cumple tus expectativas podrás solicitar devolución dentro del periodo establecido. Queremos que des este paso con absoluta tranquilidad: tu imagen es tu marca y esta biblioteca es tu mejor inversión.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-white/5 pt-5 mt-4">
              <div className="flex items-center space-x-2 text-[#D4AF37]">
                <CalendarRange size={14} />
                <span className="text-xxs tracking-widest uppercase font-mono font-bold">GARANTÍA DE DEVOLUCIÓN TOTAL</span>
              </div>
              <span className="hidden sm:inline text-zinc-650">•</span>
              <span className="text-xxs tracking-widest uppercase text-zinc-500 font-mono">APLICAN TÉRMINOS Y CONDICIONES GENERALES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
