import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import FloatingButtons from "@/components/FloatingButtons";

const BookingPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-20">
      <BookingForm />
    </div>
    <Footer />
    <FloatingButtons />
  </div>
);

export default BookingPage;
