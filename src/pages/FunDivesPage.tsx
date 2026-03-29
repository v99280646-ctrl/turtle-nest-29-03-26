import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CircleX, Clock, ShipWheel, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";
import funDiving from "@/assets/fun-diving.jpg";

const divePackages = [
  { title: "1 day / 2 dives", price: "INR 8,000 per person" },
  { title: "2 days / 4 dives", price: "INR 16,000 per person" },
  { title: "3 days / 6 dives", price: "INR 24,000 per person" },
  { title: "4 days / 8 dives", price: "INR 32,000 per person" },
  { title: "5 days / 10 dives", price: "INR 40,000 per person" },
  { title: "6 days / 12 dives", price: "INR 48,000 per person" },
];

const includes = ["Equipment rental", "Boat rental"];

const excludes = [
  "Lakshadweep permit",
  "Airport pick and drop",
  "Air tickets",
  "Bike rental",
  "Accommodation",
  "Personal expense",
];

const FunDivesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen ocean-section relative">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-16">
            <h1 className="font-heading text-3xl md:text-6xl font-bold mb-3">
              FUN <span className="gradient-text">DIVES</span>
            </h1>
            <p className="font-body text-foreground/60 text-sm md:text-lg max-w-3xl mx-auto">
              Discover the vibrant reefs of Lakshadweep with guided fun dives for certified divers, planned around your comfort and experience level.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <div className="relative h-72 md:h-96">
                <img src={funDiving} alt="Fun dives in Lakshadweep" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  <Waves size={14} />
                  Certified Divers
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="font-heading text-2xl md:text-4xl font-bold mb-2">Reefs, turtles, coral gardens, and exclusive dive sites</h2>
                  <p className="font-body text-sm md:text-base text-foreground/75 max-w-xl">
                    Explore Lakshadweep with experienced local professionals on safe, smooth, and unforgettable underwater adventures.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-2xl p-5 md:p-8">
              <div className="flex flex-wrap gap-3 mb-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-body text-foreground/70">
                  <ShipWheel size={15} className="text-primary" />
                  Guided boat dives
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-sm font-body text-foreground/70">
                  <Clock size={15} className="text-accent" />
                  Flexible multi-day packages
                </div>
              </div>

              <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
                Every dive is planned around your comfort and experience level, ensuring a safe, smooth, and unforgettable underwater adventure with our local team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {divePackages.map((pkg) => (
                  <div key={pkg.title} className="rounded-xl border border-primary/15 bg-background/30 p-4">
                    <p className="font-heading text-lg font-bold">{pkg.title}</p>
                    <p className="font-body text-primary font-semibold text-sm mt-1">{pkg.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/10 p-4">
                <p className="font-body text-sm text-foreground/75">Extra dives are chargeable at <span className="font-semibold text-accent">INR 3,500</span>.</p>
                <p className="font-body text-sm text-foreground/75 mt-2">Night dive price: <span className="font-semibold text-accent">INR 3,500</span>.</p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
              >
                Book Now
              </button>
            </motion.div>
          </div>

          <div className="grid gap-4 mt-8 md:mt-10 md:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="glass-card rounded-2xl p-5 md:p-8"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">Includes</h3>
              <ul className="grid gap-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/75">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="glass-card rounded-2xl p-5 md:p-8"
            >
              <h3 className="font-heading text-2xl font-bold mb-4">Excludes</h3>
              <ul className="grid gap-3">
                {excludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground/75">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <CircleX size={14} className="text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} defaultCourse="fun-dives" />
    </div>
  );
};

export default FunDivesPage;
