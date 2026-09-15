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
    <div className="border border-zinc-200 bg-white relative group hover:border-gold-premium/50 shadow-xs transition-all duration-300">
      {/* Header button */}
      <button
        id={`faq-accordion-header-${index}`}
        onClick={onToggle}
        className="w-full text-left py-5 sm:py-6 px-5 sm:px-8 flex items-center justify-between cursor-pointer select-none"
      >
        <span className="font-montserrat text-xs sm:text-sm font-extrabold uppercase text-zinc-950 tracking-wider group-hover:text-gold-dark transition-colors">
          {question}
        </span>
        <span className="text-gold-dark ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
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
            <div className="px-5 sm:px-8 pb-5 sm:pb-6 border-t border-zinc-200 pt-4">
              <p className="font-sans text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
