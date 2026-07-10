import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Hourglass } from "lucide-react";
import { CONFIG } from "../config";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formattedMessage = `Hi Winfrey, I found your website and would like to make an inquiry.

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(formattedMessage)}`;

    // Simulate backend submission delay before redirecting to WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Auto clear success card after 6 seconds to allow new submissions
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-nude-50/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-widest bg-forest-900/10 text-forest-900 px-3 py-1 rounded-md font-bold uppercase inline-block">
                Start the Aligning Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
                Get in Touch & <br />
                Book an Assessment
              </h2>
              <p className="text-sm sm:text-base text-nude-700 font-sans font-light leading-relaxed">
                Have a public speaking engagement approaching? Want to audit your corporate team? Fill out our brief inquiry card, and Winfrey will align with you directly.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-6 pt-4 border-t border-nude-200/50">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white border border-nude-200 rounded-xl text-gold-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-nude-400 font-mono">
                    Speak Directly
                  </span>
                  <a
                    href={`tel:${CONFIG.whatsappCleanNumber}`}
                    className="font-semibold text-forest-950 hover:text-forest-800 transition-colors"
                  >
                    {CONFIG.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white border border-nude-200 rounded-xl text-gold-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-nude-400 font-mono">
                    Send Email Inquiries
                  </span>
                  <a
                    href={`mailto:${CONFIG.email}`}
                    className="font-semibold text-forest-950 hover:text-forest-800 transition-colors"
                  >
                    {CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white border border-nude-200 rounded-xl text-gold-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-nude-400 font-mono">
                    Operational Base
                  </span>
                  <span className="font-semibold text-forest-950">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-nude-200 shadow-xl relative min-h-[420px] flex flex-col justify-center">
              {success ? (
                // Success State Card
                <div className="space-y-4 text-center py-6">
                  <div className="w-16 h-16 bg-forest-50 text-forest-600 border border-forest-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 leading-tight">
                    Inquiry Safely Delivered!
                  </h3>
                  <p className="text-sm text-nude-600 leading-relaxed font-sans font-light max-w-sm mx-auto">
                    Winfrey has received your details. She or her operations lead will align with you via email or phone within the next 24 business hours.
                  </p>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-sans font-medium animate-shake">
                      {error}
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-bold uppercase tracking-widest text-forest-900"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Dr. Alao Adebayo"
                      className="w-full px-4 py-3 border border-nude-200 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-forest-900/25 focus:border-forest-900 placeholder:text-nude-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-bold uppercase tracking-widest text-forest-900"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., alao.adebayo@hospital.com"
                      className="w-full px-4 py-3 border border-nude-200 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-forest-900/25 focus:border-forest-900 placeholder:text-nude-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-bold uppercase tracking-widest text-forest-900"
                    >
                      How can Winfrey fix your communication? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your goal or upcoming speaking engagement..."
                      className="w-full px-4 py-3 border border-nude-200 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-forest-900/25 focus:border-forest-900 placeholder:text-nude-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md focus:outline-none disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Hourglass className="w-4 h-4 text-gold-300 animate-spin" />
                        <span>Delivering Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-300" />
                        <span>Deliver Speech Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
