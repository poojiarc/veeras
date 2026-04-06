import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import venueAerial from "@/assets/venue-aerial.jpg";
import stageDecor from "@/assets/stage-decor.jpg";
import entranceDecor from "@/assets/entrance-decor.jpg";

const paragraphs = [
  {
    text: "Welcome to Veera Chandramma Function Hall, a perfect destination for hosting memorable events and celebrations. Conveniently located just 1.5 kilometers from the sacred Sri Mahanandeswara Swamy Temple, our venue offers both accessibility and a serene atmosphere, making it ideal for traditional and modern gatherings alike.",
    image: venueAerial,
    alt: "Aerial view of venue",
    reverse: false,
  },
  {
    text: "At Veera Chandramma Function Hall, we provide a spacious and well-maintained facility designed to accommodate weddings, receptions, engagements, cultural events, and corporate functions. Our hall is equipped with essential amenities to ensure comfort, convenience, and a seamless event experience for you and your guests.",
    image: stageDecor,
    alt: "Stage decoration",
    reverse: true,
  },
  {
    text: "We take pride in offering a welcoming environment, excellent service, and flexible arrangements tailored to your needs. Whether you are planning an intimate function or a grand celebration, our team is dedicated to making your event truly special and unforgettable.",
    image: entranceDecor,
    alt: "Entrance decoration",
    reverse: false,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionTitle />
        <div className="space-y-20 mt-16">
          {paragraphs.map((p, i) => (
            <AboutBlock key={i} {...p} />
          ))}
        </div>
        <ClosingText />
      </div>
    </section>
  );
};

const SectionTitle = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <p className="font-accent text-primary tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold gold-text mb-4">About Us</h2>
      <div className="w-24 h-0.5 gold-gradient mx-auto" />
    </div>
  );
};

const AboutBlock = ({ text, image, alt, reverse }: { text: string; image: string; alt: string; reverse: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16 transition-all duration-700 ${
        isVisible ? (reverse ? "animate-slide-in-right" : "animate-slide-in-left") : "opacity-0"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-2xl gold-border-glow">
          <img src={image} alt={alt} className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <p className="font-accent text-lg md:text-xl leading-relaxed text-foreground/85">{text}</p>
      </div>
    </div>
  );
};

const ClosingText = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mt-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <p className="font-heading text-2xl md:text-3xl italic gold-text">
        "Celebrate your precious moments with us, where tradition meets convenience."
      </p>
    </div>
  );
};

export default AboutSection;
