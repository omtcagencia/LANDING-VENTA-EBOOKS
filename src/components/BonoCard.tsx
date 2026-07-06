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
      className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-8 relative flex flex-col justify-between group hover:bg-[#0B0B0C] hover:border-gold-premium/30 transition-all duration-300"
    >
      {/* Top Row: number and value */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="p-4 bg-white/[0.02] border border-white/10 group-hover:border-gold-premium/20 transition-colors">
          {icon}
        </div>

        {/* Gold Price Tag Stamp of Perceived value */}
        <div className="text-right">
          <span className="text-xxs uppercase tracking-widest font-mono text-zinc-500 block"> VALOR ADICIONAL </span>
          <span className="font-montserrat text-xs font-black text-gold-premium line-through opacity-70">
            {value}
          </span>
          <span className="font-montserrat text-[10px] font-black text-white bg-gold-premium/25 px-2 py-0.5 ml-1 inline-block uppercase tracking-widest rounded-sm border border-gold-premium/30">
            GRATIS
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <div>
        <span className="text-xxs text-gold-premium font-mono tracking-widest block uppercase mb-1">
          REGALO BONO {num}
        </span>
        <h3 className="font-montserrat text-lg font-black uppercase text-white mb-3 group-hover:text-gold-premium transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mb-6">
          {description}
        </p>

        {/* Bullets lists */}
        <ul className="space-y-2.5 border-t border-white/5 pt-6 mb-8">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start text-xs text-zinc-300 font-light">
              <span className="text-gold-premium font-mono mr-2">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom tag line */}
      <div className="text-xxs uppercase tracking-widest text-zinc-600 font-mono mt-2">
        DESCARGABLE AL INSTANTE
      </div>

      {/* Subtle visual strip */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold-premium/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
