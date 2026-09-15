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
      className="bg-zinc-50 border border-zinc-200 p-6 sm:p-8 relative flex flex-col justify-between group hover:bg-white hover:border-gold-premium/50 hover:shadow-md transition-all duration-300"
    >
      {/* Card Header row with icon and high-contrast number */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-white border border-zinc-200 group-hover:border-gold-premium/40 transition-colors shadow-xs">
          {icon}
        </div>
        <span className="font-montserrat text-2xl font-black text-zinc-300 group-hover:text-gold-dark tracking-wider transition-colors">
          {num}
        </span>
      </div>

      {/* Body */}
      <div>
        <h3 className="font-montserrat text-base sm:text-lg font-black uppercase tracking-wider text-zinc-950 mb-2.5 group-hover:text-gold-dark transition-colors">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Subtle Bar */}
      <div className="w-full h-[2px] bg-zinc-200 group-hover:bg-gold-premium absolute bottom-0 left-0 transition-colors"></div>
    </motion.div>
  );
}
