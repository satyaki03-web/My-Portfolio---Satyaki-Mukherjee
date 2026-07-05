import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed z-50 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl rounded-full border border-stone-200/60 shadow-md transition-all duration-500 ease-in-out ${
          scrolled
            ? "top-3 bg-white/90 backdrop-blur-3xl py-2 px-6"
            : "top-5 bg-white/60 backdrop-blur-2xl py-3.5 px-8"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-lg md:text-xl font-extrabold text-stone-800 tracking-tight font-sans hover:text-pastel-red-dark transition-colors"
          >
            Satyaki Mukherjee
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex gap-1 items-center bg-stone-100/50 p-1 rounded-full border border-stone-200/40">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xs uppercase tracking-widest font-semibold font-sans px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-pastel-red text-pastel-red-dark font-bold shadow-sm"
                    : "text-stone-600 hover:text-stone-950 hover:bg-white/40"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-5 py-2.5 rounded-full bg-pastel-red border border-pastel-red-border text-pastel-red-dark text-xs font-bold uppercase tracking-wider hover:scale-105 hover:bg-pastel-red/80 transition-all duration-300 flex items-center gap-1.5"
            >
              Say Hello <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/60 border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed z-40 inset-x-0 top-0 pt-24 pb-8 px-6 bg-white/95 backdrop-blur-3xl border-b border-stone-200 transition-all duration-500 ease-in-out md:hidden shadow-lg ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm uppercase tracking-widest font-bold py-3 px-4 rounded-xl transition-all ${
                activeSection === item.id
                  ? "bg-pastel-red/50 text-pastel-red-dark border-l-4 border-pastel-red-border"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="mt-4 w-full py-3.5 rounded-xl bg-pastel-red text-pastel-red-dark border border-pastel-red-border text-center font-bold uppercase tracking-wider block hover:bg-pastel-red/80 transition-all"
          >
            Say Hello
          </a>
        </div>
      </div>
    </>
  );
}
