import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Heart, Cake, PartyPopper, Baby, Briefcase, Music, Users,
  UtensilsCrossed, ShowerHead, BedDouble, ChevronRight
} from "lucide-react";
import hallSeating from "@/assets/hall-seating.jpg";
import roomAc from "@/assets/room-ac.jpg";
import hallInterior from "@/assets/hall-interior.jpg";
import stageDecor from "@/assets/stage-decor.jpg";
import stageDecor2 from "@/assets/stage-decor2.jpg";
import entranceDecor from "@/assets/entrance-decor.jpg";
import venueAerial from "@/assets/venue-aerial.jpg";
import venueAerial2 from "@/assets/venue-aerial2.jpg";

const events = [
  { icon: Heart, label: "Weddings & Receptions" },
  { icon: Heart, label: "Engagements" },
  { icon: Cake, label: "Birthday Parties" },
  { icon: PartyPopper, label: "Anniversaries" },
  { icon: Baby, label: "Naming Ceremonies" },
  { icon: Briefcase, label: "Corporate Meetings" },
  { icon: Music, label: "Cultural Programs" },
];

const clickableFacilities = [
  {
    title: "Function Hall",
    icon: Users,
    items: ["1000 members capacity (150×70)", "12 luxury sofa sets", "100 VIP chairs", "800 normal chairs"],
    path: "/function-hall",
  },
  {
    title: "Washrooms",
    icon: ShowerHead,
    items: ["8 common washrooms", "24/7 water supply"],
    path: "/washrooms",
  },
  {
    title: "Room Facilities",
    icon: BedDouble,
    items: ["Total 11 rooms (AC & Non-AC)", "AC single bedroom (attached bathroom)", "AC double bedroom", "24/7 water facility"],
    path: "/room-facilities",
    highlight: true,
  },
];

const diningFacility = {
  title: "Dining Hall",
  icon: UtensilsCrossed,
  items: ["1000+ capacity", "Separate cooking area", "2500+ utensils"],
};

const scrollImages = [
  { src: hallInterior, alt: "Hall interior" },
  { src: stageDecor, alt: "Stage decoration" },
  { src: hallSeating, alt: "Hall seating" },
  { src: roomAc, alt: "AC rooms" },
  { src: stageDecor2, alt: "Stage decor" },
  { src: entranceDecor, alt: "Entrance decor" },
  { src: venueAerial, alt: "Aerial view" },
  { src: venueAerial2, alt: "Venue aerial" },
];

const VenueHighlights = () => {
  return (
    <section id="highlights" className="section-padding">
      <div className="container mx-auto">
        <Title />
        <ImageScroller />
        <EventsGrid />
        <FacilitiesGrid />
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

const ImageScroller = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll-x">
          {[...scrollImages, ...scrollImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 overflow-hidden rounded-xl gold-border-glow">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
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
  const navigate = useNavigate();

  return (
    <div ref={ref} className={`mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <h3 className="font-heading text-2xl md:text-3xl text-center mb-10 text-foreground">
        🏢 Our Facilities
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Clickable facility cards */}
        {clickableFacilities.map((f, i) => (
          <div
            key={i}
            onClick={() => navigate(f.path)}
            className={`glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:-translate-y-1 group ${
              f.highlight ? "gold-border-glow" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  {f.title}
                  {f.highlight && <span className="ml-2">⭐</span>}
                </h4>
              </div>
              <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <ul className="space-y-2">
              {f.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-foreground/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-primary text-xs mt-4 font-medium group-hover:underline">View details →</p>
          </div>
        ))}

        {/* Non-clickable dining card */}
        <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-xl bg-primary/10">
              <diningFacility.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-heading text-xl font-semibold text-foreground">{diningFacility.title}</h4>
          </div>
          <ul className="space-y-2">
            {diningFacility.items.map((item, j) => (
              <li key={j} className="flex items-center gap-2 text-foreground/75">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CTABlock = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <button
        onClick={() => navigate("/booking")}
        className="gold-gradient px-12 py-4 rounded-full text-primary-foreground font-semibold text-lg tracking-wide hover:opacity-90 transition-all gold-glow hover:scale-105 duration-300 mr-4"
      >
        🔥 Book Your Big Day
      </button>
      <button
        onClick={() => navigate("/contact")}
        className="border border-primary text-primary px-10 py-4 rounded-full font-semibold text-lg tracking-wide hover:bg-primary/10 transition-all duration-300 mt-4 md:mt-0"
      >
        📞 Plan With Us
      </button>
    </div>
  );
};

export default VenueHighlights;
