import { ReactNode } from "react";
import { motion } from "motion/react";

interface BonoCardProps {
  key?: string | number;
  num: string;
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
  bullets: string[];
  index: number;
}

export default function BonoCard({
  num,
  icon,
  title,
  value,
  description,
  bullets,
  index,
}: BonoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 relative flex flex-col justify-between group hover:bg-white hover:border-gold-premium/50 hover:shadow-md transition-all duration-300"
    >
      {/* Top Row: number and value */}
      <div className="flex justify-between items-center mb-6 relative">
        <div className="p-3.5 bg-white border border-zinc-200 group-hover:border-gold-premium/40 transition-colors shadow-xs">
          {icon}
        </div>

        {/* Gold Price Tag Stamp of Perceived value */}
        <div className="text-right">
          <span className="text-xxs uppercase tracking-widest font-mono text-zinc-500 block font-semibold"> VALOR REAL </span>
          <span className="font-montserrat text-xs font-bold text-zinc-400 line-through">
            {value}
          </span>
          <span className="font-montserrat text-[10px] font-black text-gold-dark bg-gold-light px-2 py-0.5 ml-1 inline-block uppercase tracking-wider border border-gold-premium/40">
            GRATIS
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div>
        <span className="text-xxs text-gold-dark font-mono tracking-widest block uppercase font-bold mb-1">
          REGALO BONO {num}
        </span>
        <h3 className="font-montserrat text-base sm:text-lg font-black uppercase text-zinc-950 mb-2.5 group-hover:text-gold-dark transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6">
          {description}
        </p>

        {/* Bullets lists */}
        <ul className="space-y-2 border-t border-zinc-200 pt-5 mb-6">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-xs text-zinc-700 font-medium">
              <span className="text-gold-dark font-mono font-bold mr-2">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom tag line */}
      <div className="text-xxs uppercase tracking-widest text-zinc-500 font-mono mt-1 font-semibold">
        DESCARGABLE AL INSTANTE
      </div>

      {/* Subtle visual strip */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gold-premium opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
