import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface ModuleCardProps {
  key?: string | number;
  num: string;
  name: string;
  description: string;
  image: string;
  details: string[];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function ModuleCard({
  num,
  name,
  description,
  image,
  details,
  isOpen,
  onToggle,
  index,
}: ModuleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
      className="group relative bg-[#0B0B0C] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-gold-premium/30 transition-all duration-300"
    >
      {/* Image and Number Banner */}
      <div className="relative aspect-[2.39/1] overflow-hidden bg-black flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <img
          src={image}
          alt={`${name} Course visual representation`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:brightness-75 group-hover:grayscale-0 transition-all duration-700"
        />

        {/* Floating labels with beautiful typography */}
        <div className="absolute top-5 left-5 z-20">
          <span className="font-montserrat text-3xl font-black text-white/20 group-hover:text-gold-premium/45 tracking-widest transition-colors duration-300">
            MÓDULO {num}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-montserrat text-lg font-black tracking-wider uppercase text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-2">
            {name}
          </h3>
          <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light mb-6">
            {description}
          </p>
        </div>

        {/* Accordion Expand Details */}
        <div>
          <button
            id={`expansion-trigger-${num}`}
            onClick={onToggle}
            className="font-montserrat text-[10px] tracking-widest uppercase font-black text-zinc-300 hover:text-gold-premium flex items-center justify-between w-full cursor-pointer border-t border-white/5 pt-4 group/btn"
          >
            <span className="flex items-center">
              {isOpen ? "OCULTAR DETALLES" : "DESPLEGAR CONTENIDO INTERNO"}
              <ArrowRight size={10} className="ml-1.5 opacity-60 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <span>
              {isOpen ? <Minus size={14} className="text-gold-premium" /> : <Plus size={14} className="text-zinc-500" />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-6 space-y-3.5 border-l border-gold-premium/30 pl-4">
                  {details.map((sub, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zinc-300 font-light leading-relaxed">
                      <span className="text-gold-premium font-bold font-mono mr-2.5">
                        ✓
                      </span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
