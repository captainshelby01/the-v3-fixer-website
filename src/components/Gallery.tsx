import { Users, Radio, Award, Tv, ExternalLink } from "lucide-react";

export default function Gallery() {
  const sessions = [
    {
      title: "Corporate Communication Masterclass",
      category: "Workshops",
      icon: <Users className="w-4 h-4 text-gold-300" />,
      tag: "V3 Audit",
      description: "Restructuring presentation architectures for tech leaders.",
      color: "from-emerald-950 to-forest-900"
    },
    {
      title: "Executive Leadership Summit Panel",
      category: "Speaking",
      icon: <Radio className="w-4 h-4 text-gold-300" />,
      tag: "Live Panel",
      description: "Facilitating high-stakes discourse with international delegates.",
      color: "from-forest-950 to-emerald-950"
    },
    {
      title: "PR & Brand Media Broadcast",
      category: "Media",
      icon: <Tv className="w-4 h-4 text-gold-300" />,
      tag: "Television",
      description: "Providing public speaking strategies on regional news platforms.",
      color: "from-gold-950 to-forest-950"
    },
    {
      title: "Private CEO Retreat Facilitation",
      category: "Retreats",
      icon: <Award className="w-4 h-4 text-gold-300" />,
      tag: "Bespoke Consulting",
      description: "Surgically refining speech pitch and physical poise.",
      color: "from-forest-900 to-gold-950"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest bg-gold-400/20 text-gold-800 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Our Speaking Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            Winfrey in Action
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            A snapshot of elite communication training, public panels, television broadcasts, and high-stakes speaking workshops led by Winfrey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((sess, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${sess.color} rounded-3xl p-6 h-80 flex flex-col justify-between border border-white/5 shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 text-left`}
            >
              {/* Shimmer Ambient Glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-300 bg-white/10 px-2 py-0.5 rounded-full font-bold">
                    {sess.category}
                  </span>
                  <span className="text-nude-300/60 font-mono text-[10px] font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-gold-200 transition-colors">
                    {sess.title}
                  </h3>
                  <p className="text-xs text-nude-200/80 font-sans font-light mt-1">
                    {sess.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10 mt-auto">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-white/10 rounded-lg">
                    {sess.icon}
                  </div>
                  <span className="text-xs font-semibold text-gold-300 font-sans">
                    {sess.tag}
                  </span>
                </div>
                <button className="p-2 rounded-xl bg-white/10 text-white hover:text-gold-300 hover:bg-white/15 transition-all focus:outline-none cursor-pointer">
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
