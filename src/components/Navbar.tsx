import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Sparkles, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: Info },
  { href: "#highlights", label: "Venue Highlights", icon: Sparkles },
  { href: "#contact", label: "Plan With Us", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-3">
          <img src={logo} alt="Veera Chandramma Function Hall" className="h-12 w-auto rounded" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#book")}
            className="gold-gradient px-6 py-2.5 rounded-full text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity gold-glow"
          >
            Book Your Big Day
          </button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-card mt-2 mx-4 rounded-xl p-6 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-3 w-full py-3 text-foreground/80 hover:text-primary transition-colors text-left"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#book")}
            className="gold-gradient w-full mt-4 px-6 py-3 rounded-full text-primary-foreground font-semibold text-sm tracking-wide"
          >
            Book Your Big Day
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
