import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <Title />
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <ContactInfo />
          <ContactForm />
        </div>
        <MapEmbed />
      </div>
    </section>
  );
};

const Title = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <p className="font-accent text-primary tracking-[0.3em] uppercase text-sm mb-3">Get In Touch</p>
      <h2 className="font-heading text-3xl md:text-5xl font-bold gold-text mb-4">Plan With Us</h2>
      <div className="w-24 h-0.5 gold-gradient mx-auto" />
    </div>
  );
};

const ContactInfo = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`space-y-8 transition-all duration-700 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
      <div className="glass-card rounded-2xl p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Phone</h4>
            <a href="tel:9908946726" className="block text-foreground/75 hover:text-primary transition-colors">9908946726</a>
            <a href="tel:9000651551" className="block text-foreground/75 hover:text-primary transition-colors">9000651551</a>
            <a href="tel:9652522691" className="block text-foreground/75 hover:text-primary transition-colors">9652522691</a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h4>
            <a href="mailto:veerachandramma25@gmail.com" className="text-foreground/75 hover:text-primary transition-colors">
              veerachandramma25@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Location</h4>
            <p className="text-foreground/75">Near Sri Mahanandeswara Swamy Temple</p>
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.instagram.com/vcfunctionhall"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:bg-primary/10 transition-colors"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/vcfunctionhall"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-xl hover:bg-primary/10 transition-colors"
          >
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919908946726?text=${text}`, "_blank");
  };

  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
      <div className="glass-card rounded-2xl p-8">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            maxLength={15}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <textarea
            placeholder="Your Message"
            required
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-input border border-border rounded-xl px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          />
          <button type="submit" className="w-full gold-gradient px-8 py-3 rounded-xl text-primary-foreground font-semibold hover:opacity-90 transition-all gold-glow">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

const MapEmbed = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mt-16 transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-2xl gold-border-glow">
        <iframe
          src="https://www.google.com/maps?q=Veera+Chandramma+Function+Hall&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Veera Chandramma Function Hall Location"
        />
      </div>
    </div>
  );
};

export default ContactSection;
