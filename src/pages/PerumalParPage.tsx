import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Anchor,
  Check,
  CircleX,
  Compass,
  MapPinned,
  Shield,
  Sparkles,
  Waves,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";
import stayResort from "@/assets/stay-resort.jpg";

const itinerary = [
  {
    day: "Day 01 - Arrival & Preparation",
    tone: "bg-primary/12 border-primary/20",
    items: [
      "Airport pick-up and transfer to beachside resort",
      "Welcome drink and check-in",
      "Lunch",
      "Equipment sizing and configuration at 4 PM",
      "Dive briefing and expedition orientation",
      "Local sightseeing from 5 PM to 7 PM",
      "Barbecue dinner night",
    ],
  },
  {
    day: "Day 02 - Perumal Par Expedition (Main Highlight)",
    tone: "bg-accent/12 border-accent/20",
    items: [
      "05:30 AM reporting at dive center",
      "06:00 AM departure with approx. 3-hour boat journey",
      "08:00 AM breakfast onboard",
      "Dive 1: 10:00 AM to 11:00 AM",
      "Surface interval with refreshments",
      "Dive 2: 12:00 PM to 01:00 PM",
      "Lunch onboard and rest",
      "Dive 3: 02:30 PM to 03:30 PM",
      "04:00 PM return journey",
      "07:30 PM arrival at resort",
      "Dinner and rest",
    ],
  },
  {
    day: "Day 03 - Leisure & Recovery",
    tone: "bg-coral/10 border-coral/20",
    items: [
      "Relaxed morning",
      "Local sightseeing",
      "Sunset kayaking",
      "Barbecue dinner",
      "Chill and unwind",
    ],
  },
  {
    day: "Day 04 - Departure",
    tone: "bg-secondary/70 border-border/40",
    items: ["Breakfast", "Check-out", "Airport drop"],
  },
];

const includes = [
  "Lakshadweep entry permit",
  "Airport pick-up and drop",
  "Beachside resort accommodation",
  "Daily breakfast, lunch and refreshments",
  "Boat transfers and expedition logistics",
  "Complete scuba diving equipment",
  "Local sightseeing experiences",
  "Unlimited kayaking and paddleboarding (lagoon)",
];

const excludes = [
  "Air tickets",
  "Dinner",
  "Personal expenses",
  "Any services not mentioned above",
];

const highlights = [
  "Rare, untouched dive location",
  "Limited-access premium expedition",
  "High visibility and rich marine biodiversity",
  "3 deep dives in a single expedition day",
  "Perfect for experienced and certified divers",
];

const experienceHighlights = [
  "Offshore expedition, not a regular reef dive",
  "Pelagic marine life encounters",
  "Luxury beachside stay",
  "Adventure plus relaxation combo",
  "Small-group premium experience",
];

const PerumalParPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen ocean-section relative overflow-hidden">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[2rem] border border-primary/15 bg-[radial-gradient(circle_at_top_left,hsl(187_80%_48%/.16),transparent_38%),radial-gradient(circle_at_bottom_right,hsl(170_70%_45%/.12),transparent_36%)]"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] overflow-hidden">
                <img
                  src={stayResort}
                  alt="Perumal Par dive expedition"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
                  <Sparkles size={14} />
                  Premium Expedition
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <p className="font-body text-xs uppercase tracking-[0.22em] text-foreground/45">
                  Perumal Par - Premium Dive Expedition
                </p>
                <h1 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-5xl">
                  Dive the <span className="gradient-text">Unexplored</span> -
                  Perumal Par Expedition
                </h1>
                <p className="mt-4 font-body text-sm leading-relaxed text-foreground/68 md:text-lg">
                  Experience one of Lakshadweep's most exclusive and untouched
                  dive sites. A rare offshore expedition crafted for certified
                  divers seeking elite, world-class underwater adventures.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="glass-card rounded-2xl p-4">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                      Trip Length
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold">
                      4 Days
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-4">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                      Dive Day
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold">
                      3 Expedition Dives
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-4">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                      Price
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold text-accent">
                      INR 70,000
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
                  >
                    Book Expedition
                  </button>
                  <a
                    href="#itinerary"
                    className="inline-flex items-center justify-center rounded-full border border-primary/35 px-6 py-3 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/10"
                  >
                    View Itinerary
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <Compass size={18} className="text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  About the Experience
                </h2>
              </div>

              <p className="font-body text-sm md:text-base leading-relaxed text-foreground/72">
                Perumal Par is among the most premium and least explored dive
                locations in Lakshadweep. Situated far offshore, this pristine
                reef system offers crystal-clear visibility, thriving coral
                ecosystems, pelagic species encounters, and minimal human
                interference.
              </p>
              <p className="mt-4 font-body text-sm md:text-base leading-relaxed text-foreground/72">
                This is not a routine dive. It is a full-day offshore expedition
                designed for divers who want something extraordinary, rare, and
                world-class.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Crystal-clear visibility",
                  "Thriving coral ecosystems",
                  "Encounters with pelagic species",
                  "Minimal human interference",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-primary/15 bg-background/25 p-4 font-body text-sm text-foreground/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="rounded-[2rem] border border-accent/25 bg-accent/10 p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-accent" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  Important Note
                </h2>
              </div>
              <p className="font-body text-sm md:text-base leading-relaxed text-foreground/75">
                PCC (Police Clearance Certificate) is mandatory for Lakshadweep
                entry permit application. It must be obtained online from your
                respective state police official website.
              </p>
              <div className="mt-5 rounded-2xl border border-accent/20 bg-background/30 px-4 py-4">
                <p className="font-body text-sm font-semibold text-accent">
                  Permit processing time: 7-10 working days
                </p>
                <p className="mt-2 font-body text-sm text-foreground/72">
                  Plan your trip accordingly.
                </p>
              </div>
            </motion.section>
          </div>

          <motion.section
            id="itinerary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 glass-card rounded-[2rem] p-6 md:p-8"
          >
            <div className="mb-5 flex items-center gap-2">
              <MapPinned size={18} className="text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Detailed Itinerary
              </h2>
            </div>

            <div className="grid gap-4">
              {itinerary.map((day, index) => (
                <div
                  key={day.day}
                  className={`rounded-2xl border p-5 ${day.tone}`}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/50 font-heading text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="font-heading text-xl font-bold">
                      {day.day}
                    </h3>
                  </div>
                  <ul className="grid gap-2">
                    {day.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-sm text-foreground/75"
                      >
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <Anchor size={18} className="text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  Pricing
                </h2>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="font-body text-sm uppercase tracking-[0.16em] text-foreground/45">
                  Expedition Package
                </p>
                <p className="mt-2 font-heading text-3xl font-bold">
                  INR 70,000
                </p>
                <p className="mt-1 font-body text-sm text-foreground/65">
                  per person, excluding taxes
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  Why Choose Perumal Par?
                </h2>
              </div>
              <ul className="grid gap-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-foreground/75"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <Check size={18} className="text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  What's Included
                </h2>
              </div>
              <ul className="grid gap-3">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-foreground/75"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-card rounded-[2rem] p-6 md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <CircleX size={18} className="text-accent" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  What's Not Included
                </h2>
              </div>
              <ul className="grid gap-3">
                {excludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-sm text-foreground/75"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <CircleX size={14} className="text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,hsl(187_80%_48%/.12),hsl(170_70%_45%/.08))] p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <Shield size={18} className="text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Experience Highlights
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {experienceHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-primary/15 bg-background/30 p-4 font-body text-sm text-foreground/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            id="permit-note"
            className="my-8 rounded-2xl border border-accent/25 bg-accent/10 p-5 md:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <AlertTriangle className="text-accent" size={18} />
              </div>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">
                  Mandatory Permit Note
                </h2>
                <p className="font-body text-sm md:text-base text-foreground/75 leading-relaxed">
                  PCC (Police Clearance Certificate) is mandatory for
                  Lakshadweep entry permit application. It must be taken online
                  from your respective state police official website, and permit
                  processing takes 7-10 working days.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
      <BookingModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse="dive-trip-perumal-par"
      />
    </div>
  );
};

export default PerumalParPage;
