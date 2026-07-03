import { useState } from "react";
import { BOOKS } from "../data";
import { Book } from "../types";
import { CONFIG } from "../config";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, MessageSquare, Check, Sparkles, X, Info } from "lucide-react";

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Individual" | "Bundle">("All");
  const [selectedBookForPaystack, setSelectedBookForPaystack] = useState<Book | null>(null);

  const formatNaira = (amount: number) => {
    return "₦" + amount.toLocaleString("en-NG");
  };

  const handleWhatsAppOrder = (book: Book) => {
    window.open(
      `https://wa.me/${CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(book.whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const filteredBooks = BOOKS.filter((book) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Individual") return book.pillar !== "Bundle";
    if (activeFilter === "Bundle") return book.pillar === "Bundle";
    return true;
  });

  return (
    <section id="books" className="py-24 bg-nude-50/50 relative overflow-hidden">
      {/* Upper Border Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nude-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-[11px] font-mono tracking-widest bg-forest-900/10 text-forest-900 px-3 py-1 rounded-md font-bold uppercase inline-block">
            Pre-Order Exclusive Store
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 leading-tight">
            The V3 Devotional Trilogy & Bookstore
          </h2>
          <p className="text-sm sm:text-base text-nude-700 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Begin your speaking transformation. Secure your digital pre-order of Winfrey’s 31-day guides for Verbal, Vocal, and Visual communication mastery at special release pricing.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2 mb-12">
          {(["All", "Individual", "Bundle"] as const).map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer focus:outline-none ${
                  isSelected
                    ? "bg-forest-900 text-nude-50 shadow-md"
                    : "bg-nude-100 text-nude-700 hover:bg-nude-200 hover:text-forest-950"
                }`}
              >
                {filter === "Individual" ? "Individual Pillars" : filter === "Bundle" ? "Value Bundles" : "All Manuals"}
              </button>
            );
          })}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredBooks.map((book) => {
            const isBundle = book.pillar === "Bundle";

            // Determine cover colors based on the pillar
            let coverBgClass = "bg-forest-900 text-nude-50 border-forest-950";
            if (book.pillar === "Verbal") coverBgClass = "bg-emerald-900 text-nude-50 border-emerald-950";
            if (book.pillar === "Vocal") coverBgClass = "bg-orange-950 text-nude-50 border-orange-900";
            if (isBundle) coverBgClass = "bg-gradient-to-br from-forest-900 via-forest-950 to-forest-900 text-nude-50 border-gold-600";

            return (
              <motion.div
                key={book.id}
                layout
                className={`bg-white rounded-3xl border shadow-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 text-left ${
                  isBundle
                    ? "border-gold-400 ring-2 ring-gold-200 lg:col-span-2 max-w-3xl mx-auto w-full"
                    : "border-nude-200"
                }`}
              >
                {/* Best Value Stamp */}
                {isBundle && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-forest-950 text-[10px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-bl-2xl shadow-sm flex items-center space-x-1.5 z-10">
                    <Sparkles className="w-3 h-3 text-forest-950 animate-pulse" />
                    <span>Best Value Pack</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  {/* Book 3D Cover */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="relative w-36 sm:w-44 py-2">
                      <div
                        className={`relative w-full aspect-[2/3] rounded-r-2xl shadow-xl flex flex-col justify-between p-4 text-center border-l-8 overflow-hidden ${coverBgClass}`}
                      >
                        {/* Shimmer/Spine overlay */}
                        <div className="absolute top-0 left-0 w-2 h-full bg-black/15" />
                        <div className="absolute inset-2 border border-gold-400/30 rounded-lg pointer-events-none" />

                        {/* Top banner */}
                        <div className="space-y-1 relative z-10 mt-1">
                          <span className="block text-[8px] uppercase tracking-widest text-gold-300 font-semibold font-mono">
                            The V3 Devotional
                          </span>
                          <span className="block text-[9px] text-nude-300 italic font-serif">
                            {book.pillar !== "Bundle" ? `${book.pillar} Pillar` : "Complete System"}
                          </span>
                        </div>

                        {/* Middle Title */}
                        <div className="relative z-10 py-2 my-auto">
                          <span className="font-serif font-extrabold text-sm sm:text-base tracking-tight leading-tight block text-gold-300">
                            {book.pillar === "Bundle" ? "THE COMPLETE BUNDLE" : book.pillar.toUpperCase()}
                          </span>
                          <span className="block text-[8px] text-nude-200 mt-1 font-sans tracking-wider uppercase">
                            {book.pillar === "Bundle" ? "All 3 Pillars Unzipped" : "Mastery Manual"}
                          </span>
                        </div>

                        {/* Bottom Author */}
                        <div className="relative z-10">
                          <span className="block text-[8px] font-sans font-medium uppercase tracking-widest text-nude-300">
                            Winfrey Agbelese
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Text Details */}
                  <div className="sm:col-span-7 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-950 leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-xs font-semibold text-gold-600 tracking-wide uppercase font-sans">
                        {book.subtitle}
                      </p>
                    </div>

                    <p className="text-nude-700 text-xs sm:text-sm font-light leading-relaxed font-sans">
                      {book.description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="block text-[10px] uppercase font-bold tracking-widest text-nude-500 font-mono">
                        What's Included:
                      </span>
                      <div className="grid grid-cols-1 gap-1.5 pl-0.5">
                        {book.highlights.map((hl, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-gold-500 font-bold flex-shrink-0" />
                            <span className="text-xs text-nude-800 font-sans">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline space-x-3.5 pt-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-forest-900 font-serif">
                        {formatNaira(book.preorderPrice)}
                      </span>
                      <span className="text-sm text-nude-400 line-through font-light font-sans">
                        {formatNaira(book.normalPrice)}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-500/10 text-gold-700 px-2 py-0.5 rounded-full font-sans">
                        Pre-Order Special
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buy triggers */}
                <div className="pt-6 mt-6 border-t border-nude-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleWhatsAppOrder(book)}
                    className="flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer focus:outline-none"
                  >
                    <MessageSquare className="w-4 h-4 text-gold-300" />
                    <span>Order on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSelectedBookForPaystack(book)}
                    className="flex items-center justify-center space-x-2 bg-nude-100 hover:bg-nude-200 border border-nude-300 text-forest-950 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none"
                  >
                    <CreditCard className="w-4 h-4 text-forest-700" />
                    <span>Buy with Paystack</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Paystack Checkout Warning Modal Overlay */}
      <AnimatePresence>
        {selectedBookForPaystack && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBookForPaystack(null)}
              className="absolute inset-0 bg-forest-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-6 sm:p-8 border border-nude-200 overflow-hidden"
            >
              {/* Close Trigger */}
              <button
                onClick={() => setSelectedBookForPaystack(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-nude-500 hover:text-forest-950 hover:bg-nude-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close checkout modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 pt-2">
                <div className="space-y-2 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-600">
                    Selected Product
                  </span>
                  <h4 className="font-serif text-xl font-bold text-forest-950 leading-tight">
                    {selectedBookForPaystack.title}
                  </h4>
                  <p className="text-xs text-nude-500 font-sans italic">
                    {selectedBookForPaystack.subtitle}
                  </p>
                </div>

                <div className="p-4 bg-nude-100 rounded-2xl space-y-3 border border-nude-200/50 text-left">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-nude-700 font-sans">Pre-order Discount Rate:</span>
                    <span className="font-extrabold text-forest-900 font-serif text-lg">
                      {formatNaira(selectedBookForPaystack.preorderPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-nude-400">
                    <span className="font-light">Standard Release Value:</span>
                    <span className="line-through">{formatNaira(selectedBookForPaystack.normalPrice)}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-yellow-50 rounded-2xl border border-yellow-100 text-yellow-800 text-xs text-left">
                  <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1 font-sans">
                    <span className="font-bold">Author Paystack Link Integration</span>
                    <p className="text-yellow-700 leading-relaxed font-light">
                      Winfrey is currently finalizing her merchant dashboard setup on Paystack. This button will direct clients directly to her real Paystack page as soon as her merchant dashboard goes live!
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3">
                  <a
                    href={selectedBookForPaystack.paystackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-nude-50 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                  >
                    <CreditCard className="w-4 h-4 text-gold-300" />
                    <span>Continue to Paystack Checkout</span>
                  </a>

                  <button
                    onClick={() => handleWhatsAppOrder(selectedBookForPaystack)}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-forest-900 hover:bg-forest-800 text-nude-50 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
                  >
                    <MessageSquare className="w-4 h-4 text-gold-300" />
                    <span>Reserve on WhatsApp Instead</span>
                  </button>
                </div>

                <p className="text-center text-[10px] text-nude-400 font-sans">
                  To modify this transaction routing, edit her Paystack link within <code className="bg-nude-100 px-1 py-0.5 rounded">src/config.ts</code>.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
