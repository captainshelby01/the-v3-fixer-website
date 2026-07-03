import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";
import { CONFIG } from "./config";

// Component imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import V3Method from "./components/V3Method";
import Services from "./components/Services";
import Shop from "./components/Shop";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    // Lightweight scroll listener for floating button only (passive to avoid scroll lag)
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Modern IntersectionObserver ScrollSpy
    const sections = ["home", "about", "v3method", "services", "books", "faq", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus on the middle-upper part of the viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppChat = () => {
    window.open(
      `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent("Hi Winfrey! I would like to schedule a speech assessment session.")}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-nude-50 text-nude-950 selection:bg-gold-500/30 selection:text-forest-950 antialiased font-sans flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Content sections */}
        <main>
          {/* Hero segment */}
          <Hero />

          {/* Winfrey Profile */}
          <About />

          {/* V3 Method explanation tabs */}
          <V3Method />

          {/* Services offered */}
          <Services />

          {/* Pre-order Trilogy bookstore */}
          <Shop />

          {/* Portfolio & Action shots */}
          <Gallery />

          {/* Client Reviews */}
          <Testimonials />

          {/* Questions resolved */}
          <FAQs />

          {/* Contact Cards */}
          <Contact />
        </main>
      </div>

      {/* Footer copyright & map */}
      <Footer />

      {/* Floating Interactive WhatsApp trigger */}
      {showFloatingButton && (
        <button
          onClick={handleWhatsAppChat}
          className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-nude-50 p-3.5 sm:px-5 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer focus:outline-none animate-bounce"
          aria-label="Direct Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-gold-300 fill-current" />
          <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
            Chat with the Fixer
          </span>
        </button>
      )}
    </div>
  );
}
