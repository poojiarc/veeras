import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const services = [
  "Wedding",
  "Rooms",
  "Birthday Party",
  "Engagement",
  "Anniversary",
  "Naming Ceremony",
  "Corporate Meeting",
  "Cultural Program",
  "Other",
];

const BookingForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    service: "",
  });
  const [date, setDate] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "dd/MM/yyyy") : "Not selected";
    const text = `*Booking Request*%0AName: ${form.name}%0APhone: ${form.phone}%0AAddress: ${form.address}%0AEmail: ${form.email}%0ADate: ${dateStr}%0AService: ${form.service}`;
    window.open(`https://wa.me/919000651551?text=${text}`, "_blank");
    window.open(`https://wa.me/919908946726?text=${text}`, "_blank");
  };

  return (
    <section id="book" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-12">
            <p className="font-accent text-primary tracking-[0.3em] uppercase text-sm mb-3">Make It Official</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold gold-text mb-4">Book Your Big Day</h2>
            <div className="w-24 h-0.5 gold-gradient mx-auto" />
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text" placeholder="Full Name" required maxLength={100}
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="tel" placeholder="Phone Number" required maxLength={15}
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="text" placeholder="Address" required maxLength={200}
                value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                type="email" placeholder="Email ID" required maxLength={255}
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full bg-input border border-border rounded-xl px-5 py-3 text-left text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  {date ? format(date, "dd MMMM yyyy") : "Select Booking Date"}
                </button>
                {showCalendar && (
                  <div className="absolute z-50 mt-2 glass-card rounded-xl p-4 shadow-2xl">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(d) => setDate(d)}
                      disabled={(d) => d < new Date()}
                      className="text-foreground"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCalendar(false)}
                      className="w-full mt-2 gold-gradient px-4 py-2 rounded-lg text-primary-foreground font-semibold text-sm"
                    >
                      OK
                    </button>
                  </div>
                )}
              </div>

              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              >
                <option value="">Select Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <button type="submit" className="w-full gold-gradient px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all gold-glow">
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
