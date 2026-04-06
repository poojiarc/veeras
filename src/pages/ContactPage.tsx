import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <ContactSection />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default ContactPage;
