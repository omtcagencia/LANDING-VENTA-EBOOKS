import { AlertCircle, Camera, Award, HelpCircle, Eye, ShieldAlert, Sparkles } from "lucide-react";
import ProblemCard from "./ProblemCard";

export default function Problema() {
  const problems = [
    {
      id: "prob-1",
      icon: <Camera className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "01",
      title: "No saben cómo posar.",
      description:
        "Falta de fluidez y rigidez corporal frente al lente. Dependen de imitar poses de internet que no favorecen su fisionomía ni transmiten emoción real.",
    },
    {
      id: "prob-2",
      icon: <Award className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "02",
      title: "No tienen portafolio.",
      description:
        "Presentan selfies de baja calidad o fotos informales en redes sociales que inmediatamente restan credibilidad a su perfil ante scouts y agencias serias.",
    },
    {
      id: "prob-3",
      icon: <HelpCircle className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "03",
      title: "No entienden la industria.",
      description:
        "Desconocen cómo funcionan los castings internacionales, las agencias madre, los contratos de representación y los estándares de tarifas reales.",
    },
    {
      id: "prob-4",
      icon: <ShieldAlert className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "04",
      title: "Miedo a la cámara.",
      description:
        "Inseguridad latente que se refleja en la mirada y expression facial. Sentirse paralizada o juzgada apaga por completo el carisma natural.",
    },
    {
      id: "prob-5",
      icon: <Eye className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "05",
      title: "Falta de presencia.",
      description:
        "No dominan la postura editorial, la pasarela básica ni la proyección necesarias para que un diseñador o marca los recuerde entre cientos.",
    },
    {
      id: "prob-6",
      icon: <Sparkles className="text-gold-premium" size={24} strokeWidth={1} />,
      num: "06",
      title: "No saben vender su imagen.",
      description:
        "Entienden el modelaje solo como 'salirse lindo'. No saben gestionar su Instagram como marca personal de alto perfil comercial para atraer patrocinios.",
    },
  ];

  return (
    <section id="problemas" className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-zinc-200">
      {/* Editorial backdrop typography mask */}
      <div className="absolute right-0 top-10 select-none pointer-events-none opacity-[0.03] text-zinc-950 font-montserrat font-black text-8xl md:text-9xl tracking-[0.2em] whitespace-nowrap">
        ELITE MODELING LIMITS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 animate-fade-in">
        {/* Section Headings */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20 flex flex-col text-left">
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xxs font-bold mb-3 flex items-center">
            <AlertCircle size={12} className="mr-1.5" /> LA CRUDA REALIDAD DEL MODELAJE
          </span>
          <h2 className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] uppercase text-zinc-950">
            ¿POR QUÉ MUCHAS ASPIRANTES <br />
            A MODELOS <span className="text-zinc-400">NUNCA LOGRAN DESTACAR?</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-premium mt-4"></div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((problem, i) => (
            <ProblemCard
              key={problem.id}
              id={problem.id}
              icon={problem.icon}
              num={problem.num}
              title={problem.title}
              description={problem.description}
              index={i}
            />
          ))}
        </div>

        {/* Section conclusion addressing Schwartz direct response marketing */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="font-sans text-zinc-600 text-xs sm:text-sm tracking-wide uppercase italic max-w-2xl mx-auto px-4 font-medium">
            "No se trata de nacer con 'suerte'. Se trata de dominar las directrices técnicas del modelado comercial e internacional."
          </p>
        </div>
      </div>
    </section>
  );
}
