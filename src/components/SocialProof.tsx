import { motion } from "motion/react";

export default function SocialProof() {
  const stats = [
    { value: "10 Módulos", label: "Desarrollo Integro" },
    { value: "100+ Estrategias", label: "Técnicas Secretas" },
    { value: "Acceso Inmediato", label: "Digital & Seguro" },
    { value: "Soporte VIP", label: "Enfoque Profesional" },
    { value: "Actualizaciones", label: "De por vida" },
  ];

  return (
    <div id="social-proof-bar" className="bg-zinc-50 border-y border-zinc-200/90 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center text-center p-2.5 md:p-1"
            >
              {/* Stat Value */}
              <span className="font-montserrat text-sm sm:text-base md:text-lg font-black tracking-wider text-zinc-950 uppercase mb-0.5">
                {stat.value}
              </span>
              
              {/* Stat Subtitle */}
              <span className="font-sans text-[10px] sm:text-xxs tracking-[0.15em] text-gold-dark uppercase font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
