import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle, Compass, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";
import stayResort from "@/assets/stay-resort.jpg";
import discoverScuba from "@/assets/discover-scuba.jpg";

type TripSection = {
  slug?: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  diveStyle: string;
  highlight: string;
  price: string;
};

const sharedPermitNote = [
  "PCC (Police Clearance Certificate) is mandatory for Lakshadweep entry permit application.",
  "It must be obtained online from your respective state police official website.",
  "Entry permit processing takes 7-10 working days, so please plan your trip accordingly.",
];

const tripSections: TripSection[] = [
  {
    slug: "perumal-par",
    title: "PERUMAL PAR - PREMIUM DIVE EXPEDITION",
    subtitle: "A remote full-day expedition for certified divers chasing rare, world-class underwater encounters.",
    image: stayResort,
    duration: "4 days / 3 expedition dives",
    diveStyle: "Remote offshore expedition",
    highlight: "Elite access to one of Lakshadweep's most pristine and least explored sites.",
    price: "INR 70,000 per person excluding taxes",
  },
  {
    slug: "lakshadweep-divetrip-experience",
    title: "DIVE TRIPS - LAKSHADWEEP DIVETRIP EXPERIENCE",
    subtitle: "A multi-day reef journey across Bangaram, Parali, and Thinnakara with signature sites and a night dive.",
    image: discoverScuba,
    duration: "6 days / multiple guided dives",
    diveStyle: "Island-hopping reef circuit",
    highlight: "A broad Lakshadweep itinerary with new reefs, new stories, and new marine encounters each day.",
    price: "INR 75,000 per person excluding taxes",
  },
];

const DiveTripsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("");

  return (
    <div className="min-h-screen ocean-section relative overflow-hidden">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8 overflow-hidden rounded-[2rem] border border-primary/15 bg-[radial-gradient(circle_at_top_left,hsl(187_80%_48%/.18),transparent_38%),radial-gradient(circle_at_bottom_right,hsl(170_70%_45%/.14),transparent_36%)] px-5 py-8 md:px-8 md:py-10"
        >
          <div className="absolute -right-16 top-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              <Sparkles size={14} />
              Lakshadweep Expedition Collection
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight md:text-6xl">
              Dive <span className="gradient-text">Trips</span>
            </h1>
            <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-foreground/65 md:text-lg">
              Premium Lakshadweep itineraries for certified divers, from raw offshore expedition diving to immersive multi-day reef circuits across the islands.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="glass-card rounded-2xl p-4">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">Trips</p>
                <p className="mt-2 font-heading text-2xl font-bold">2 Signature Experiences</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">Access</p>
                <p className="mt-2 font-heading text-2xl font-bold">Remote reefs + iconic islands</p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <p className="font-body text-xs uppercase tracking-[0.18em] text-foreground/45">For</p>
                <p className="mt-2 font-heading text-2xl font-bold">Certified divers</p>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mb-8 grid gap-4 lg:grid-cols-2">
          {tripSections.map((trip, index) => (
            <motion.article
              key={trip.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="glass-card overflow-hidden rounded-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
                  <Compass size={14} />
                  Featured Route
                </div>
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/55">{trip.diveStyle}</p>
                  <h2 className="mt-2 font-heading text-2xl font-bold leading-tight">{trip.title}</h2>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <p className="font-body text-sm text-foreground/65">{trip.subtitle}</p>
                  <div className="text-right">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">Price</p>
                    <p className="font-body text-sm font-semibold text-accent">{trip.price}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-primary/15 bg-background/25 p-3">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">Duration</p>
                    <p className="mt-2 font-body text-sm font-semibold text-foreground/80">{trip.duration}</p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-background/25 p-3">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">Dive Style</p>
                    <p className="mt-2 font-body text-sm font-semibold text-foreground/80">{trip.diveStyle}</p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-background/25 p-3">
                    <p className="font-body text-[11px] uppercase tracking-[0.16em] text-foreground/40">Highlight</p>
                    <p className="mt-2 font-body text-sm font-semibold text-foreground/80">{trip.highlight}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={trip.slug ? `/dive-trips/${trip.slug}` : "#permit-note"}
                    className="inline-flex items-center justify-center rounded-full border border-primary/35 px-5 py-3 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/10"
                  >
                    View Details
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTrip(
                        trip.slug === "perumal-par"
                          ? "dive-trip-perumal-par"
                          : "dive-trip-lakshadweep-experience",
                      );
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          id="permit-note"
          className="mb-8 rounded-2xl border border-accent/25 bg-accent/10 p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
              <AlertTriangle className="text-accent" size={18} />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">Mandatory Permit Note</h2>
              <p className="font-body text-sm md:text-base text-foreground/75 leading-relaxed">
                PCC (Police Clearance Certificate) is mandatory for Lakshadweep entry permit application. It must be taken online from your respective state police official website, and permit processing takes 7-10 working days.
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
        defaultCourse={selectedTrip}
      />
    </div>
  );
};

export default DiveTripsPage;
