import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import VenueHighlightsPage from "./pages/VenueHighlightsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import FunctionHallPage from "./pages/FunctionHallPage.tsx";
import WashroomsPage from "./pages/WashroomsPage.tsx";
import RoomFacilitiesPage from "./pages/RoomFacilitiesPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/venue-highlights" element={<VenueHighlightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/function-hall" element={<FunctionHallPage />} />
          <Route path="/washrooms" element={<WashroomsPage />} />
          <Route path="/room-facilities" element={<RoomFacilitiesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
