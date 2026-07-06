import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", target: "inicio" },
    { name: "Contenido", target: "contenido" },
    { name: "Bonos", target: "bonos" },
    { name: "Testimonios", target: "testimonios" },
    { name: "Oferta", target: "oferta" },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    onScrollTo(target);
  };

  return (
    <>
      <header
        id="navbar-premium"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => onScrollTo("inicio")}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <span className="font-montserrat text-lg md:text-xl font-black tracking-[0.25em] text-white uppercase transition-all duration-300 group-hover:text-gold-premium">
              O M T C
            </span>
            <span className="text-xs px-1.5 py-0.5 bg-gold-premium/15 text-gold-premium border border-gold-premium/30 tracking-widest uppercase rounded-sm font-semibold">
              PRO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-menu" className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="font-sans text-xs tracking-[0.15em] font-medium uppercase text-zinc-400 hover:text-white cursor-pointer transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Golden CTA Button */}
          <div className="hidden lg:block">
            <button
              id="header-cta-desktop"
              onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
              className="bg-gold-premium text-black font-montserrat text-xs font-black tracking-[0.15em] px-8 py-3 rounded-none uppercase transition-all duration-150 relative overflow-hidden group hover:bg-gold-hover hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
              ACCEDER AHORA
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              id="header-cta-mobile-mini"
              onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
              className="bg-gold-premium text-black font-montserrat text-[10px] font-extrabold tracking-[0.1em] px-3.5 py-2 rounded-none uppercase hover:bg-gold-hover cursor-pointer"
            >
              ACCEDER
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gold-premium transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 pt-28 px-6 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-6 text-center">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.target)}
                  className="font-montserrat text-lg font-bold tracking-widest uppercase text-zinc-300 hover:text-gold-premium py-2 border-b border-white/5"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                id="header-cta-mobile-drawer"
                onClick={() => window.open("https://pay.hotmart.com/R105897023Y", "_blank", "noopener,noreferrer")}
                className="w-full bg-gold-premium text-black font-montserrat text-sm font-bold tracking-[0.15em] py-4 rounded-none uppercase text-center cursor-pointer transition-colors hover:bg-gold-hover"
              >
                ACCEDER AL PACK AHORA
              </button>
              <p className="text-zinc-600 text-xxs tracking-widest uppercase font-mono">
                LIMITED EDITION • ELITE PORTAL
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
