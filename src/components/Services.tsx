import { useState } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { CONFIG } from "../config";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckSquare, MessageSquare, Mic, Users, Presentation, X } from "lucide-react";

// Helper function to map string icon names to Lucide icon components
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Mic":
      return <Mic className="w-6 h-6" />;
    case "Users":
      return <Users className="w-6 h-6" />;
    case "Presentation":
      return <Presentation className="w-6 h-6" />;
    default:
      return <Mic className="w-6 h-6" />;
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleWhatsAppBooking = (service: Service) => {
    const text = `Hi Winfrey, I am interested in your "${service.title}" service. Can you please provide more details?`;
    window.open(
      `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-mono tracking-widest bg-gold-400/20 text-gold-800 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Our Mastery Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            Coaching Curriculums & Consultations
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            From direct 1-on-1 private coaching for executive presence to organization-wide dynamic speaking audits, Winfrey tailors the V3 Method to align with your personal and corporate ambitions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-nude-200 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:border-nude-400 transition-all duration-300 text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-forest-900/10 text-forest-900 rounded-2xl border border-forest-900/5 transition-colors group-hover:bg-forest-900 group-hover:text-nude-50">
                    {getIconComponent(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-nude-400 font-medium uppercase tracking-widest">
                    Service 0{idx + 1}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-forest-950 leading-snug group-hover:text-forest-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold-600 font-sans tracking-wide uppercase">
                    {service.pricing}
                  </p>
                  <p className="text-nude-700 text-sm font-light leading-relaxed font-sans line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-nude-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-forest-900 group-hover:text-gold-600 flex items-center space-x-1 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>Learn Curriculum details</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stateful Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-forest-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 border border-nude-200 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-nude-500 hover:text-forest-950 hover:bg-nude-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close details modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 pt-2">
                {/* Header Icon / Description */}
                <div className="flex items-center space-x-4 text-left">
                  <div className="p-3.5 bg-forest-900 text-nude-50 rounded-2xl flex-shrink-0">
                    {getIconComponent(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 leading-tight">
                      {selectedService.title}
                    </h3>
                    <span className="text-xs font-bold text-gold-600 tracking-wider uppercase font-mono">
                      {selectedService.pricing}
                    </span>
                  </div>
                </div>

                {/* Detailed Curriculum Content */}
                <div className="space-y-4 text-left">
                  <p className="text-nude-800 text-sm sm:text-base leading-relaxed font-sans font-light">
                    {selectedService.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-nude-100">
                    <h4 className="font-bold text-xs text-forest-950 uppercase tracking-widest font-mono">
                      Key Benefits & Core Areas Covered:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5">
                          <CheckSquare className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0 fill-current" />
                          <span className="text-xs text-nude-700 leading-normal font-sans">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-nude-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h5 className="text-xs font-bold text-forest-900">
                      Ready to align your goals?
                    </h5>
                    <p className="text-[11px] text-nude-500">
                      Book Winfrey for your team or personal curriculum.
                    </p>
                  </div>
                    <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                      <a
                        href="https://calendly.com/thev3fixer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-nude-50 text-forest-950 border border-nude-300 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                      >
                        <span>Schedule Call</span>
                      </a>
                      <button
                        onClick={() => handleWhatsAppBooking(selectedService)}
                        className="inline-flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 text-gold-300" />
                        <span>Book via WhatsApp</span>
                      </button>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
