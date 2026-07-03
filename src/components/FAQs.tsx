import { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState<"All" | "V3 Method" | "Pre-order" | "Coaching" | "General">("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ["All", "V3 Method", "Pre-order", "Coaching", "General"] as const;

  const filteredFAQs = FAQS.filter(
    (faq) => activeCategory === "All" || faq.category === activeCategory
  );

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[11px] font-mono tracking-widest bg-gold-400/20 text-gold-800 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Resolve Your Queries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Find quick answers to common questions about the pre-order books, private coaching modules, or corporate audits.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedIndex(null); // Reset accordion expand status on category change
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                  isSelected
                    ? "bg-forest-900 text-nude-50 shadow-sm"
                    : "bg-white text-nude-700 border border-nude-200 hover:bg-nude-50 hover:text-forest-950"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Collapsible Accordions */}
        <div className="space-y-4 text-left">
          {filteredFAQs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-nude-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-nude-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between space-x-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-3.5">
                    <HelpCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base text-forest-950 font-sans leading-snug tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-nude-400 mt-1 flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-forest-900" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-nude-100/50">
                        <p className="text-nude-700 text-xs sm:text-sm font-light leading-relaxed font-sans pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
