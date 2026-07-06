import { motion } from "motion/react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  key?: string | number;
  id: string;
  name: string;
  profile: string;
  achievement: string;
  quote: string;
  stars: number;
  index: number;
}

export default function TestimonialCard({
  name,
  profile,
  achievement,
  quote,
  stars,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black border border-white/5 p-8 relative flex flex-col justify-between group hover:border-[#D4AF37]/35 transition-all duration-300"
    >
      <div>
        {/* 5-star rating */}
        <div className="flex items-center space-x-1 mb-6">
          {[...Array(stars)].map((_, idx) => (
            <Star key={idx} size={12} className="fill-gold-premium text-gold-premium" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-sans text-xs text-zinc-300 font-light leading-relaxed mb-8 italic">
          "{quote}"
        </blockquote>
      </div>

      {/* Profile Details Row */}
      <div className="flex items-center space-x-4 border-t border-white/5 pt-6 mt-4">
        {/* Avatar with grayscale filter */}
        <img
          src={profile}
          alt={`${name} Editorial headshot`}
          referrerPolicy="no-referrer"
          className="w-12 h-12 rounded-full object-cover filter grayscale border border-white/10 group-hover:grayscale-0 transition-all duration-500"
        />

        <div className="text-left">
          <cite className="not-italic font-montserrat text-xs font-black text-white uppercase tracking-wider block">
            {name}
          </cite>
          <span className="text-[10px] text-gold-premium font-mono uppercase tracking-widest font-semibold block mt-px">
            {achievement}
          </span>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-white/5 font-montserrat text-6xl font-black select-none pointer-events-none">
        ”
      </div>
    </motion.div>
  );
}
