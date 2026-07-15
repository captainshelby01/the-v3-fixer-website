import { CONFIG } from "../config";
import { ArrowUp, Instagram, Linkedin, Youtube } from "lucide-react";

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollToSection = (id: string) => {
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
    <footer className="bg-nude-100 text-forest-950 pt-20 pb-10 border-t border-nude-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-nude-200/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl font-extrabold tracking-tight text-forest-950 leading-none">
                WINFREY AGBELESE
              </h3>
              <span className="block text-[10px] font-mono tracking-widest text-forest-600 font-bold uppercase">
                THE V3 FIXER
              </span>
            </div>
            <p className="text-nude-700 text-sm font-sans font-light leading-relaxed max-w-sm">
              Helping elite leaders, public figures, and corporate teams align their Verbal, Vocal, and Visual communication architectures for absolute room dominance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                href={CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white hover:bg-nude-200 rounded-xl text-forest-600 hover:text-forest-950 border border-nude-200/60 transition-all focus:outline-none"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white hover:bg-nude-200 rounded-xl text-forest-600 hover:text-forest-950 border border-nude-200/60 transition-all focus:outline-none"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white hover:bg-nude-200 rounded-xl text-forest-600 hover:text-forest-950 border border-nude-200/60 transition-all focus:outline-none"
                aria-label="TikTok Link"
              >
                <TiktokIcon className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white hover:bg-nude-200 rounded-xl text-forest-600 hover:text-forest-950 border border-nude-200/60 transition-all focus:outline-none"
                aria-label="YouTube Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Column 1 */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-forest-600">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-nude-600 font-sans font-light">
              <li>
                <button
                  onClick={() => handleScrollToSection("home")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  Home Core
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  About Winfrey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("v3method")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  The V3 Method
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("services")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  Coaching Curriculums
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Column 2 */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-forest-600">
              Exclusive Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-nude-600 font-sans font-light">
              <li>
                <button
                  onClick={() => handleScrollToSection("books")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  V3 Devotional Bookstore
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("faq")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  Frequently Resolved FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="hover:text-forest-900 transition-colors focus:outline-none cursor-pointer"
                >
                  Speech Assessment Inquiries
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and top arrow */}
        <div className="pt-10 border-t border-nude-200/80 flex flex-col items-center justify-center relative">
          {/* Scroll to top button - positioned absolute on the right for desktop */}
          <div className="absolute right-0 top-10 hidden sm:block">
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-white hover:bg-nude-200 text-forest-800 rounded-xl border border-nude-200 shadow-md transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Centered Credits Container */}
          <div className="text-center space-y-4 max-w-md mx-auto">
            <p className="text-xs sm:text-sm text-nude-600 font-sans font-light tracking-wide">
              © {new Date().getFullYear()} Winfrey Agbelese (The V3 Fixer). All rights reserved.
            </p>

            {/* CRAFTED WITH PRECISION separator */}
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-nude-200 w-12 sm:w-20" />
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-nude-500 uppercase font-bold">
                Crafted with Precision
              </span>
              <div className="h-px bg-nude-200 w-12 sm:w-20" />
            </div>

            {/* Website by ImpactDev */}
            <p className="text-xs sm:text-sm text-nude-600 font-sans font-light">
              Website by <span className="font-sans font-medium text-forest-800">Impact</span><span className="font-serif italic font-extrabold text-forest-950 tracking-wide">Dev</span>
            </p>
          </div>

          {/* Scroll to top button for mobile */}
          <div className="mt-6 sm:hidden">
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-white hover:bg-nude-200 text-forest-800 rounded-xl border border-nude-200 shadow-md transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
