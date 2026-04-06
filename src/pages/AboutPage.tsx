import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FloatingButtons from "@/components/FloatingButtons";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <AboutSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default AboutPage;
