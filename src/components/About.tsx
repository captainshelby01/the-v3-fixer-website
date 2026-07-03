import { motion } from "motion/react";
import { Award, CheckCircle, ShieldCheck, Star } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-500" />,
      title: "Upholding Privacy & Discretion",
      desc: "Working with top-tier executives, politicians, and leaders requires complete confidentiality. Your practice is fully safeguarded.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold-500" />,
      title: "Scientifically Backed Architecture",
      desc: "Communication isn't just talent; it's acoustic control, neural speech structures, and visual alignment that yields predictable outcomes.",
    },
    {
      icon: <Star className="w-5 h-5 text-gold-500" />,
      title: "Results-Driven Audits",
      desc: "We don't do boring presentations. We run real stress simulations, recording analysis, and speech restructuring drills.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Interactive Metric Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-nude-50 p-8 rounded-3xl border border-nude-200/50 space-y-2">
              <span className="block text-4xl sm:text-5xl font-serif font-extrabold text-forest-900">8+</span>
              <p className="font-mono text-[10px] tracking-wider text-nude-500 font-bold uppercase">
                Years of Master Facilitation
              </p>
            </div>

            <div className="bg-forest-900 p-8 rounded-3xl space-y-2 text-nude-50 shadow-lg">
              <span className="block text-4xl sm:text-5xl font-serif font-extrabold text-gold-300">500+</span>
              <p className="font-mono text-[10px] tracking-wider text-nude-300 font-semibold uppercase">
                Executives Trained
              </p>
            </div>

            <div className="bg-forest-950 p-8 rounded-3xl col-span-2 space-y-4 text-nude-50">
              <div className="flex items-center space-x-3 text-gold-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <blockquote className="text-sm font-light italic text-nude-200">
                "Winfrey's assessment was surgical. Within three sessions, she was able to rebuild my posture and clarify my speech pacing for our annual international shareholder audit."
              </blockquote>
              <cite className="block text-xs font-semibold uppercase tracking-wider text-gold-300 font-mono not-italic">
                — Managing Partner, African Private Equity Fund
              </cite>
            </div>
          </div>

          {/* Right: Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest bg-gold-400/20 text-gold-800 px-3 py-1 rounded-md font-bold uppercase inline-block">
                Meet the Communications Architect
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
                Hi, I am Winfrey Agbelese <br />
                <span className="text-gold-600 font-normal italic">The V3 Fixer</span>
              </h2>
            </div>

            <div className="space-y-4 text-nude-700 text-sm sm:text-base leading-relaxed font-sans font-light">
              <p>
                Winfrey Agbelese is a communications strategist, broadcast media professional, speaker, trainer, and leadership communication expert with over a decade of experience in the media industry.
              </p>
              <p>
                While studying Law at the University of Benin, she won Miss University Nigeria (UNIBEN) 2012, marking the beginning of her journey in pageantry and public advocacy. Although she built a strong legal foundation, she ultimately found her true calling in the media and communications industry, discovering a profound passion for public speaking, executive mentorship, and transformation.
              </p>
              <p>
                As the creator of the <strong className="font-semibold text-forest-950">V3 Communications Method</strong>, she breaks down the barriers of ineffective public delivery by installing a practical system built on three essential pillars: Verbal, Vocal, and Visual communication. Her training modules deliver real-world strategies that participants can immediately apply to command respect and lead with authority.
              </p>
            </div>

            {/* List of values */}
            <div className="space-y-4 pt-4 border-t border-nude-100">
              {values.map((v, idx) => (
                <div key={idx} className="flex items-start space-x-3.5">
                  <div className="p-2 bg-nude-100 rounded-xl flex-shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-forest-950">
                      {v.title}
                    </h4>
                    <p className="text-xs text-nude-600 leading-normal font-sans font-light">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
