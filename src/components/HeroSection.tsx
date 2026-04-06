import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import venueAerial from "@/assets/venue-aerial2.jpg";
import hallInterior from "@/assets/hall-interior.jpg";
import stageDecor from "@/assets/stage-decor2.jpg";

const slides = [
  { image: venueAerial, alt: "Aerial view of Veera Chandramma Function Hall" },
  { image: hallInterior, alt: "Grand hall interior with seating" },
  { image: stageDecor, alt: "Beautiful stage decoration" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-accent text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in">
          Veera Chandramma Function Hall
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          <span className="gold-text">Where Grand Celebrations</span>
          <br />
          <span className="text-foreground">Meet Timeless Tradition</span>
        </h1>
        <p className="font-accent text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 italic">
          A perfect destination for hosting memorable events and celebrations
        </p>
        <button
          onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
          className="gold-gradient px-10 py-4 rounded-full text-primary-foreground font-semibold text-lg tracking-wide hover:opacity-90 transition-all gold-glow hover:scale-105 duration-300"
        >
          Reserve Your Date
        </button>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full hover:bg-primary/20 transition-colors">
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 glass-card p-3 rounded-full hover:bg-primary/20 transition-colors">
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
