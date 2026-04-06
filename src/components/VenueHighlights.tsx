import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Heart, Cake, PartyPopper, Baby, Briefcase, Music, Users,
  Sofa, UtensilsCrossed, ShowerHead, BedDouble, Wifi
} from "lucide-react";
import hallSeating from "@/assets/hall-seating.jpg";
import roomAc from "@/assets/room-ac.jpg";

const events = [
  { icon: Heart, label: "Weddings & Receptions" },
  { icon: Heart, label: "Engagements" },
  { icon: Cake, label: "Birthday Parties" },
  { icon: PartyPopper, label: "Anniversaries" },
  { icon: Baby, label: "Naming Ceremonies" },
  { icon: Briefcase, label: "Corporate Meetings" },
  { icon: Music, label: "Cultural Programs" },
];

const facilities = [
  {
    title: "Function Hall",
    icon: Users,
    items: ["1000 members capacity (150×70)", "12 luxury sofa sets", "100 VIP chairs", "800 normal chairs"],
  },
  {
    title: "Dining Hall",
    icon: UtensilsCrossed,
    items: ["1000+ capacity", "Separate cooking area", "2500+ utensils"],
  },
  {
    title: "Washrooms",
    icon: ShowerHead,
    items: ["8 common washrooms", "24/7 water supply"],
  },
  {
    title: "Room Facilities",
    icon: BedDouble,
    items: ["Total 11 rooms (AC & Non-AC)", "AC single bedroom (attached bathroom)", "AC double bedroom", "24/7 water facility"],
    highlight: true,
  },
];

const VenueHighlights = () => {
  return (
    <section id="highlights" className="section-padding">
      <div className="container mx-auto">
        <Title />
        <EventsGrid />
        <FacilitiesGrid />
        <RoomHighlight />
        <CTABlock />
      </div>
    </section>
  );
};

const Title = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <p className="font-accent text-primary tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold gold-text mb-4">Venue Highlights</h2>
      <div className="w-24 h-0.5 gold-gradient mx-auto" />
    </div>
  );
};

const EventsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <h3 className="font-heading text-2xl md:text-3xl text-center mb-10 text-foreground">
        ✨ Events We Host
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            <event.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-foreground/90 text-sm font-medium">{event.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FacilitiesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <h3 className="font-heading text-2xl md:text-3xl text-center mb-10 text-foreground">
        🏢 Our Facilities
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {facilities.map((f, i) => (
          <div
            key={i}
            className={`glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 ${
              f.highlight ? "gold-border-glow" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-primary/10">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground">
                {f.title}
                {f.highlight && <span className="ml-2">⭐</span>}
              </h4>
            </div>
            <ul className="space-y-2">
              {f.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-foreground/75">
                  <Wifi className="w-3 h-3 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoomHighlight = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center gap-10 mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl gold-border-glow">
        <img src={roomAc} alt="AC room" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl gold-border-glow">
        <img src={hallSeating} alt="Hall with sofas and seating" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
    </div>
  );
};

const CTABlock = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <button
        onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
        className="gold-gradient px-12 py-4 rounded-full text-primary-foreground font-semibold text-lg tracking-wide hover:opacity-90 transition-all gold-glow hover:scale-105 duration-300 mr-4"
      >
        🔥 Book Your Big Day
      </button>
      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="border border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg tracking-wide hover:bg-primary/10 transition-all duration-300 mt-4 md:mt-0"
      >
        📞 Plan With Us
      </button>
    </div>
  );
};

export default VenueHighlights;
