import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VenueHighlights from "@/components/VenueHighlights";
import FloatingButtons from "@/components/FloatingButtons";

const VenueHighlightsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <VenueHighlights />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default VenueHighlightsPage;
