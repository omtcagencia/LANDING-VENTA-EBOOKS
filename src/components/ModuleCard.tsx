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
      className="group relative bg-white border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-gold-premium/60 hover:shadow-lg shadow-xs transition-all duration-300"
    >
      {/* Image and Number Banner */}
      <div className="relative aspect-[2.39/1] overflow-hidden bg-zinc-100 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent z-10" />
        <img
          src={image}
          alt={`${name} Course visual representation`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />

        {/* Floating labels with beautiful typography */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
          <span className="font-montserrat text-2xl sm:text-3xl font-black text-white drop-shadow-md tracking-widest">
            MÓDULO {num}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-montserrat text-base sm:text-lg font-black tracking-wider uppercase text-zinc-950 group-hover:text-gold-dark transition-colors duration-300 mb-2">
            {name}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5">
            {description}
          </p>
        </div>

        {/* Accordion Expand Details */}
        <div>
          <button
            id={`expansion-trigger-${num}`}
            onClick={onToggle}
            className="font-montserrat text-[10px] tracking-widest uppercase font-black text-zinc-700 hover:text-gold-dark flex items-center justify-between w-full cursor-pointer border-t border-zinc-200 pt-4 group/btn"
          >
            <span className="flex items-center">
              {isOpen ? "OCULTAR DETALLES" : "DESPLEGAR CONTENIDO INTERNO"}
              <ArrowRight size={10} className="ml-1.5 opacity-60 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <span>
              {isOpen ? <Minus size={14} className="text-gold-dark" /> : <Plus size={14} className="text-zinc-500" />}
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
                <ul className="mt-4 space-y-2.5 border-l-2 border-gold-premium/60 pl-4 py-2 bg-zinc-50">
                  {details.map((sub, idx) => (
                    <li key={idx} className="flex items-start text-xs text-zinc-700 font-normal leading-relaxed">
                      <span className="text-gold-dark font-bold font-mono mr-2">
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
