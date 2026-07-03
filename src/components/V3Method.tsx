import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Type, Mic, Eye, CheckCircle, ArrowRight } from "lucide-react";

const PILLARS_DATA = [
  {
    title: "Verbal Communication",
    subtitle: "The Substance: What You Say",
    shortDesc: "The cognitive architecture of speech. Master the formulas to structure your ideas, eliminate verbal clutter, and captivate with logical precision.",
    icon: <Type className="w-5 h-5" />,
    highlights: [
      { title: "Structural Logic", desc: "Learn frameworks to package complex arguments in simple, memorable, executive-friendly points." },
      { title: "Filler Elimination", desc: "Identify and purge verbal noise like 'um', 'like', and 'basically' from your active vocabulary." },
      { title: "Storytelling Mechanics", desc: "Anchor key statistics and business points in powerful, persuasive human narratives." },
      { title: "Presence Word Choice", desc: "Uplevel your vocabulary to project intelligence, executive authority, and calm control." }
    ]
  },
  {
    title: "Vocal Communication",
    subtitle: "The Instrument: How You Say It",
    shortDesc: "The physical acoustics of speech. Build vocal endurance, control your breathing, project your voice, and use tonality to project unshakeable authority.",
    icon: <Mic className="w-5 h-5" />,
    highlights: [
      { title: "Breathing Mechanics", desc: "Master diaphragmatic breathing to deliver powerful sentences without losing volume or running out of air." },
      { title: "Tone Styling & Resonance", desc: "Find your optimal speaking pitch and enrich your vocal resonance for a warmer, deeper, authoritative timbre." },
      { title: "Pacing & Strategic Silence", desc: "Control speech speed. Harness the immense power of intentional silence and pauses to emphasize critical points." },
      { title: "Volume Modulation", desc: "Learn to command massive acoustic environments and project your voice cleanly without vocal strain." }
    ]
  },
  {
    title: "Visual Communication",
    subtitle: "The Presence: How You Show Up",
    shortDesc: "The silent signals of speech. Harness non-verbal intelligence, establish credibility with body posture, and style your executive personal image.",
    icon: <Eye className="w-5 h-5" />,
    highlights: [
      { title: "Non-Verbal Congruence", desc: "Align your micro-expressions, facial gestures, and hand motions perfectly with your spoken message." },
      { title: "Camera-Ready Presence", desc: "Translate your physical authority into virtual environments (Zoom, television, podcasts, media events)." },
      { title: "Strategic Gesture Mapping", desc: "Master the art of 'marking space'—using physical gestures to visually anchor key arguments." },
      { title: "Executive Styling & Image", desc: "Tailor your wardrobe, posture, grooming, and poise to project credibility before you even speak." }
    ]
  }
];

export default function V3Method() {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToBooks = () => {
    const element = document.getElementById("books");
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

  const activePillar = PILLARS_DATA[activeTab];

  return (
    <section id="v3method" className="py-24 bg-nude-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest bg-forest-900/10 text-forest-900 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Our Proprietary Curriculum
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            The V3 Method of Communication
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            True communications mastery is an integrated ecosystem. We decode human expression into three fundamental pillars to construct your ultimate executive persona.
          </p>
        </div>

        {/* Tab System Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Tab Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-4 justify-center">
            {PILLARS_DATA.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden focus:outline-none cursor-pointer ${
                    isSelected
                      ? "bg-forest-900 text-nude-50 border-forest-900 shadow-xl translate-x-1"
                      : "bg-white text-nude-900 border-nude-200 hover:bg-nude-100"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isSelected
                          ? "bg-forest-800 text-gold-300 border-forest-700"
                          : `bg-forest-900/10 text-forest-900 border-forest-900/20`
                      }`}
                    >
                      {pillar.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-serif text-lg font-bold leading-tight ${
                          isSelected ? "text-nude-50" : "text-forest-950"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider mt-0.5 ${
                          isSelected ? "text-nude-300" : "text-nude-600"
                        }`}
                      >
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-nude-200 shadow-lg space-y-6 flex flex-col justify-between h-full"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest bg-gold-400/20 text-gold-700 px-2.5 py-0.5 rounded font-bold uppercase">
                      Curriculum Highlights
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950">
                      {activePillar.title}
                    </h3>
                    <p className="text-sm italic font-medium text-nude-600">
                      {activePillar.subtitle}
                    </p>
                  </div>

                  <p className="text-nude-700 text-sm sm:text-base leading-relaxed font-sans font-light">
                    {activePillar.shortDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-nude-200/60">
                    {activePillar.highlights.map((hl, idx) => (
                      <div key={idx} className="space-y-1.5 text-left">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                          <h4 className="font-semibold text-sm text-forest-950 font-sans tracking-tight">
                            {hl.title}
                          </h4>
                        </div>
                        <p className="text-xs text-nude-600 leading-relaxed font-sans pl-6 font-light">
                          {hl.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-nude-100/50 p-4 rounded-2xl border border-nude-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div className="text-center sm:text-left">
                    <h5 className="text-xs font-bold text-forest-900">
                      Master this pillar on a daily basis
                    </h5>
                    <p className="text-[11px] text-nude-600">
                      Pre-order the dedicated V3 Devotional book for this pillar.
                    </p>
                  </div>
                  <button
                    onClick={scrollToBooks}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 bg-forest-900 hover:bg-forest-800 text-nude-50 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <span>View Book Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
