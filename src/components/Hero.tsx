import { motion } from "motion/react";
import { ArrowRight, BookOpen, Sparkles, Trophy } from "lucide-react";
import winfreyHeadshot from "../assets/images/winfrey_headshot_1782758025220.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-radial from-nude-50 via-nude-100/40 to-nude-100/20 overflow-hidden"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-forest-900/10 border border-forest-900/15 text-forest-900 px-3 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                The V3 Communication Devotional Bundle is Live
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest-950 leading-[1.1] tracking-tight"
            >
              Align Your Voice <br />
              <span className="text-gold-600 relative inline-block">
                With Your Ambition
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-gold-300/40 -z-10 rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-nude-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans font-light"
            >
              Effective leaders don't just speak; they command. Master the proprietary{" "}
              <strong className="font-semibold text-forest-900">V3 Method</strong> of{" "}
              <span className="underline decoration-gold-400 decoration-2 font-medium">Verbal</span> architecture,{" "}
              <span className="underline decoration-gold-400 decoration-2 font-medium">Vocal</span> acoustics, and{" "}
              <span className="underline decoration-gold-400 decoration-2 font-medium">Visual</span> posture to become an unshakeable executive presence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection("books")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-forest-900 hover:bg-forest-800 text-nude-50 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-gold-300" />
                <span>Pre-Order V3 Devotional</span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-white hover:bg-nude-50 text-forest-950 border border-nude-300 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-forest-800" />
              </button>
            </motion.div>

            {/* Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-nude-200/50 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif font-extrabold text-forest-900">100%</span>
                <span className="text-[10px] font-mono tracking-wider text-nude-500 uppercase font-semibold">
                  Bespoke Practice
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif font-extrabold text-forest-900">500+</span>
                <span className="text-[10px] font-mono tracking-wider text-nude-500 uppercase font-semibold">
                  Leaders Transformed
                </span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-serif font-extrabold text-forest-900">30 Days</span>
                <span className="text-[10px] font-mono tracking-wider text-nude-500 uppercase font-semibold">
                  Per Pillar Manual
                </span>
              </div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60"
            >
              {/* Image Frame */}
              <img
                src={winfreyHeadshot}
                alt="Winfrey Agbelese - The V3 Fixer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Decorative Brand Accent Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-forest-900/90 backdrop-blur-md p-4 rounded-2xl border border-forest-800/50 shadow-lg text-nude-50 flex items-center space-x-3.5 text-left">
                <div className="p-2.5 bg-forest-800 text-gold-300 rounded-xl">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-300 font-bold">
                    The V3 Fixer
                  </span>
                  <h4 className="font-serif text-sm font-bold">Winfrey Agbelese</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
