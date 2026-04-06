import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ArrowLeft, BedDouble } from "lucide-react";
import roomAc from "@/assets/room-ac.jpg";
import roomAc2 from "@/assets/room-ac2.jpg";

const RoomFacilitiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/venue-highlights")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Venue Highlights
          </button>

          <div className="text-center mb-12">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
              <BedDouble className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold gold-text mb-4">Room Facilities</h1>
            <div className="w-24 h-0.5 gold-gradient mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="overflow-hidden rounded-2xl gold-border-glow">
              <img src={roomAc} alt="AC room" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden rounded-2xl gold-border-glow">
              <img src={roomAc2} alt="AC room double bedroom" className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Facilities & Features</h2>
            <ul className="space-y-4 text-foreground/85 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                Total 11 rooms (AC & Non-AC)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                AC single bedroom (attached bathroom)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                AC double bedroom
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                24/7 water facility
              </li>
            </ul>
            <button
              onClick={() => navigate("/booking")}
              className="mt-8 gold-gradient px-10 py-3 rounded-full text-primary-foreground font-semibold hover:opacity-90 transition-all gold-glow hover:scale-105 duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default RoomFacilitiesPage;
