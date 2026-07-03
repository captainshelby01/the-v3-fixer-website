import { TESTIMONIALS } from "../data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-nude-50 relative overflow-hidden">
      {/* Background Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest bg-forest-900/10 text-forest-900 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Proven Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            Loved & Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            From medical executives to VP of products, see how Winfrey's proprietary V3 communication audit has unlocked unshakeable speaking confidence.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-nude-200/60 shadow-sm relative flex flex-col justify-between items-start text-left hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-nude-100 flex-shrink-0" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-nude-700 text-sm leading-relaxed font-sans font-light italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-nude-100 flex flex-col w-full">
                <span className="font-serif text-base font-bold text-forest-950">
                  {t.name}
                </span>
                <span className="text-xs font-mono tracking-wider text-gold-600 font-bold uppercase">
                  {t.role}
                </span>
                {t.company && (
                  <span className="text-[10px] text-nude-400 font-medium font-sans">
                    {t.company}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
