import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqAccordionItemProps {
  key?: string | number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FaqAccordionItemProps) {
  return (
    <div className="border border-white/5 bg-[#0B0B0C] relative group hover:border-[#D4AF37]/20 transition-all duration-300">
      {/* Header button */}
      <button
        id={`faq-accordion-header-${index}`}
        onClick={onToggle}
        className="w-full text-left py-6 px-6 sm:px-8 flex items-center justify-between cursor-pointer select-none"
      >
        <span className="font-montserrat text-xs sm:text-sm font-extrabold uppercase text-white tracking-wider group-hover:text-gold-premium transition-colors">
          {question}
        </span>
        <span className="text-[#D4AF37] ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {/* Content body with Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 border-t border-white/5 pt-4">
              <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
