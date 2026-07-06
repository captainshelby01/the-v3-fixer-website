import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONFIG } from "../config";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Winfrey", id: "about" },
    { label: "The V3 Method", id: "v3method" },
    { label: "Services", id: "services" },
    { label: "Bookstore", id: "books" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (isOpen) {
      setIsOpen(false);
      // Wait for the drawer collapse animation to get underway so it doesn't interrupt the smooth scroll on mobile devices
      setTimeout(performScroll, 200);
    } else {
      performScroll();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nude-50/95 backdrop-blur-md shadow-sm border-b border-nude-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("home")}
            className="flex flex-col text-left focus:outline-none group cursor-pointer"
          >
            <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight text-forest-950 group-hover:text-forest-800 transition-colors">
              WINFREY AGBELESE
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-gold-600 font-bold uppercase">
              THE V3 FIXER
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3 py-2 text-sm transition-all duration-200 rounded-md cursor-pointer focus:outline-none ${
                    isActive
                      ? "font-semibold text-forest-900 relative"
                      : "font-medium text-nude-700 hover:text-forest-900 hover:bg-nude-100/50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleScrollTo("v3quiz")}
              className="inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-forest-950 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <span>Audit Your Voice</span>
              <ArrowRight className="w-3.5 h-3.5 text-forest-950" />
            </button>
          </div>

          {/* Mobile Menu trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-forest-950 hover:bg-nude-100/50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-nude-200 bg-nude-50 overflow-hidden shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-forest-900 text-nude-50 font-bold"
                        : "text-nude-800 hover:bg-nude-100/50 hover:text-forest-900"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 px-4 border-t border-nude-200/50">
                <a
                  href={`https://wa.me/${CONFIG.whatsappCleanNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-gold-300" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
