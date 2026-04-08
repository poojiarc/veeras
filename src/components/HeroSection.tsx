import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import venueAerial3 from "@/assets/venue-aerial.jpg";
import stageDecor from "@/assets/room-ac.jpeg";
import entranceDecor from "@/assets/entrance-decor.jpg";
import venueAerial from "@/assets/Hotel.jpeg";
import hallInterior from "@/assets/hall-interior.jpg";




const slides = [
  { image: venueAerial3, alt: "Panoramic venue view" },
  { image: hallInterior, alt: "Grand hall interior with seating" },
  { image: entranceDecor, alt: "Elegant entrance decoration" },
  { image: venueAerial, alt: "Aerial view of Veera Chandramma Function Hall and Rooms" },
  { image: stageDecor, alt: "Beautiful stage decoration" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"enter" | "exit">("enter");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("exit");
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length);
        setDirection("enter");
      }, 600);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

      <div className="relative z-10 container mx-auto h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-4 pt-20 lg:pt-0">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left max-w-xl lg:max-w-lg xl:max-w-xl">
          <p className="font-accent text-primary tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-fade-in">
            Welcome to
          </p>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gold-text">Veera Chandramma</span>
            <br />
            <span className="text-foreground">Function Hall</span>
            <br />
            <span className="text-foreground text-2xl md:text-4xl lg:text-5xl">&amp; Rooms</span>
          </h1>
          <p className="font-accent text-muted-foreground text-base md:text-lg max-w-md mb-8 italic mx-auto lg:mx-0">
            Where Grand Celebrations Meet Timeless Tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/booking")}
              className="gold-gradient px-8 py-3.5 rounded-full text-primary-foreground font-semibold text-base tracking-wide hover:opacity-90 transition-all gold-glow hover:scale-105 duration-300"
            >
              Reserve Your Date
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-primary/50 text-primary px-8 py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-primary/10 transition-all duration-300"
            >
              Plan With Us
            </button>
          </div>
        </div>

        {/* Right side - Image with reveal effects */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden gold-border-glow shadow-2xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === current
                    ? direction === "enter"
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-105 -translate-x-4"
                    : "opacity-0 scale-95 translate-x-8"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
            {/* Overlay shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-primary/5 pointer-events-none" />
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === current ? "bg-primary w-6" : "bg-foreground/30 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
