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
    <div id="social-proof-bar" className="bg-black border-y border-white/8 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/8 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center text-center p-3 md:p-1"
            >
              {/* Stat Value */}
              <span className="font-montserrat text-lg md:text-xl font-black tracking-widest text-[#D4AF37] uppercase mb-1">
                {stat.value}
              </span>
              
              {/* Stat Subtitle */}
              <span className="font-sans text-[10px] md:text-xxs tracking-[0.2em] text-zinc-400 uppercase font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
