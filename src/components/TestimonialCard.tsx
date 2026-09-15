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
      className="bg-white border border-zinc-200 p-6 sm:p-8 relative flex flex-col justify-between group hover:border-gold-premium/50 hover:shadow-md transition-all duration-300"
    >
      <div>
        {/* 5-star rating */}
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(stars)].map((_, idx) => (
            <Star key={idx} size={14} className="fill-gold-premium text-gold-premium" />
          ))}
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-sans text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed mb-8 italic">
          "{quote}"
        </blockquote>
      </div>

      {/* Profile Details Row */}
      <div className="flex items-center space-x-3.5 border-t border-zinc-200 pt-5 mt-2">
        {/* Avatar with image */}
        <img
          src={profile}
          alt={`${name} Editorial headshot`}
          referrerPolicy="no-referrer"
          className="w-12 h-12 rounded-full object-cover border border-zinc-200 shadow-xs"
        />

        <div className="text-left">
          <cite className="not-italic font-montserrat text-xs sm:text-sm font-black text-zinc-950 uppercase tracking-wider block">
            {name}
          </cite>
          <span className="text-[10px] text-gold-dark font-mono uppercase tracking-wider font-bold block mt-0.5">
            {achievement}
          </span>
        </div>
      </div>

      <div className="absolute top-6 right-6 text-zinc-200 font-serif text-6xl font-black select-none pointer-events-none">
        ”
      </div>
    </motion.div>
  );
}
