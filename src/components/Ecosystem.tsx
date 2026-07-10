import { Award, BookOpen, Podcast, Users, ArrowRight, Sparkles } from "lucide-react";
import { CONFIG } from "../config";
import { ReactNode } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag?: string;
  desc: string;
  icon: ReactNode;
}

export default function Ecosystem() {
  const projects: Project[] = [
    {
      id: "challenge",
      title: "The 90 Days V3 Communications Challenge",
      subtitle: "Daily Social Challenge",
      tag: "Completed",
      desc: "A groundbreaking 90-day communication challenge focused on Verbal, Vocal, and Visual Communication, delivering daily lessons designed to help individuals communicate with greater confidence, clarity, presence, and impact. The challenge resonated with audiences across social media, garnering thousands of views and engagements on platforms including Instagram, TikTok, WhatsApp, and Facebook, while inspiring professionals, entrepreneurs, leaders, creators, and aspiring communicators to become more intentional about how they speak, sound, and show up.",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: "devotionals",
      title: "The V3 Devotional Series",
      subtitle: "90 Days of Communication Growth",
      tag: "Best Seller",
      desc: "A three-book collection comprising the Verbal, Vocal, and Visual Devotionals, designed to help readers develop stronger communication skills through daily insights, practical exercises, and real-life application.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: "podcast",
      title: "The V3 Communications Podcast",
      subtitle: "Conversations That Inspire Better Communication",
      desc: "A podcast exploring communication, leadership, influence, media, business, and personal development through insightful conversations with experts, leaders, and industry professionals.",
      icon: <Podcast className="w-5 h-5" />
    },
    {
      id: "workshop",
      title: "The V3 Communications Workshop",
      subtitle: "The V3 Method in Action",
      desc: "An interactive training experience that equips individuals, teams, and organizations with practical tools to improve communication, executive presence, public speaking, leadership influence, and professional impact.",
      icon: <Users className="w-5 h-5" />
    }
  ];

  const handleBookWinfrey = () => {
    const text = "Hi Winfrey! I would like to book you for a training session, speaking engagement, or workshop.";
    window.open(
      `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="ecosystem" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-nude-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-forest-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest bg-forest-900/10 text-forest-900 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Our Brand Footprint
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            The V3 Ecosystem & Flagship Projects
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            The V3 Ecosystem is a growing suite of transformational communication initiatives designed to help individuals, leaders, teams, and organizations communicate with power, purpose, and precision through the mastery of The V3 Method.
          </p>
        </div>

        {/* Flagship Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-nude-50/40 hover:bg-white rounded-3xl p-6 sm:p-8 border border-nude-200/60 hover:border-nude-350 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-forest-900/10 text-forest-900 rounded-2xl border border-forest-900/5 transition-colors group-hover:bg-forest-900 group-hover:text-nude-50">
                    {project.icon}
                  </div>
                  {project.tag && (
                    <span className="text-[9px] font-mono uppercase tracking-widest bg-forest-600/10 text-forest-750 px-2.5 py-0.5 rounded font-bold">
                      {project.tag}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-nude-500 font-bold">
                    {project.subtitle}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest-950 group-hover:text-forest-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-nude-700 text-xs sm:text-sm font-light leading-relaxed font-sans pt-1">
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="max-w-5xl mx-auto mt-16 bg-nude-50/50 p-6 sm:p-8 rounded-[2rem] border border-nude-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-serif font-bold text-forest-950 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-forest-600" />
              <span>Ready to Collaborate with Winfrey?</span>
            </h4>
            <p className="text-xs text-nude-600 font-sans font-light">
              Book corporate speaking engagements, customized team workshops, or consulting sessions.
            </p>
          </div>
          <button
            onClick={handleBookWinfrey}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            <span>Book Winfrey</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
