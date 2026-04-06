import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Sparkles, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/venue-highlights", label: "Venue Highlights", icon: Sparkles },
  { href: "/contact", label: "Plan With Us", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    navigate(href);
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
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Veera Chandramma Function Hall" className="h-12 w-auto rounded" />
          <div className="hidden sm:block">
            <h1 className="font-heading text-lg font-bold gold-text leading-tight">Veera Chandramma</h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/60 font-medium">Function Hall</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`flex items-center gap-2 transition-colors duration-300 text-sm font-medium tracking-wide ${
                location.pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/booking")}
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
              className={`flex items-center gap-3 w-full py-3 transition-colors text-left ${
                location.pathname === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("/booking")}
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
