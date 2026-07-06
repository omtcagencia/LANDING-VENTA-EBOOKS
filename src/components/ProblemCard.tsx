import { ReactNode } from "react";
import { motion } from "motion/react";

interface ProblemCardProps {
  key?: string | number;
  id: string;
  icon: ReactNode;
  num: string;
  title: string;
  description: string;
  index: number;
}

export default function ProblemCard({
  icon,
  num,
  title,
  description,
  index,
}: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] p-8 relative flex flex-col justify-between group hover:bg-[rgba(255,255,255,0.06)] hover:border-gold-premium/40 transition-all duration-300"
    >
      {/* Card Header row with icon and high-contrast number */}
      <div className="flex items-center justify-between mb-8">
        <div className="p-3 bg-white/[0.03] border border-white/5 rounded-none group-hover:border-gold-premium/30 transition-colors">
          {icon}
        </div>
        <span className="font-montserrat text-2xl font-black text-white/10 group-hover:text-gold-premium/20 tracking-wider transition-colors">
          {num}
        </span>
      </div>

      {/* Body */}
      <div>
        <h3 className="font-montserrat text-lg font-black uppercase tracking-wider text-white mb-3 group-hover:text-gold-premium transition-colors">
          {title}
        </h3>
        <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Subtle Bar */}
      <div className="w-full h-[1px] bg-white/[0.05] group-hover:bg-gold-premium/20 absolute bottom-0 left-0 transition-colors"></div>
    </motion.div>
  );
}
