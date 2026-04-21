import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Check, FileBadge, Shield, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";
import BookingModal from "@/components/BookingModal";
import discoverScuba from "@/assets/discover-scuba.jpg";
import funDiving from "@/assets/fun-diving.jpg";

const experiencePrograms = [
  {
    id: "experience-program-try-scuba",
    title: "Try Scuba Dive",
    subtitle: "A beginner scuba experience for non-certified divers.",
    image: funDiving,
    overview:
      "It includes a short safety briefing, basic skill practice, and a guided dive in shallow water under direct instructor supervision. Maximum depth is 5 meters, focusing on comfort, safety, and enjoying the underwater world.",
    duration: "15 mins boat dive",
    packageName: "Standard package",
    price: "INR 3,500",
    includes: ["Boat dive of 15 mins", "Photos and videos"],
  },
  {
    id: "experience-program-discover-scuba",
    title: "The PADI Discover Scuba Diving",
    subtitle:
      "A fun introductory program that lets you try scuba diving under the direct supervision of a PADI Professional.",
    image: discoverScuba,
    overview:
      "Perfect for anyone who wants to experience the thrill of diving without committing to a full certification course. While this is not a certification, it gives you a glimpse into the underwater world and helps you decide if you want to continue with more dive training.",
    prerequisites: [
      "Minimum age: 10 years old",
      "Basic comfort in the water required, with no formal swimming test",
      "PADI Medical Form required, with physician clearance if any answer is Yes",
      "Signed PADI Liability Release Form before the experience",
    ],
    structure: [
      "Briefing: Learn basic dive theory, safety guidelines, equipment usage, equalizing pressure, and underwater communication. This can also be completed online via PADI eLearning.",
      "Confined Water Dive: Practice breathing underwater, regulator clearing, mask clearing, and basic buoyancy control under close supervision.",
      "Optional Open Water Dive: After the confined water dive, you may join a supervised open water dive up to 12 meters (40 feet), depending on the sea conditions.",
    ],
    packageName: "Standard package",
    price: "INR 6,500",
    includes: [
      "30 mins of boat dive",
      "Underwater videos and photos included",
      "PADI experience program certification",
    ],
  },
];

const ExperienceProgramsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  return (
    <div className="min-h-screen ocean-section relative">
      <Bubbles />
      <Navbar />
      <main className="pt-24 pb-20 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-16"
          >
            <h1 className="font-heading text-3xl md:text-6xl font-bold mb-3">
              Experience <span className="gradient-text">Programs</span>
            </h1>
            <p className="font-body text-foreground/60 text-sm md:text-lg max-w-3xl mx-auto">
              Start with guided introductory dives and confidence-building
              programs designed for first-time underwater explorers.
            </p>
          </motion.div>

          <div className="grid gap-6 md:gap-8">
            {experiencePrograms.map((program, i) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card overflow-hidden rounded-2xl"
              >
                <div className="grid lg:grid-cols-[1.05fr_1.25fr]">
                  <div className="relative h-60 md:h-80 lg:h-full overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={960}
                      height={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                      <Waves size={14} />
                      Experience
                    </div>
                  </div>

                  <div className="p-5 md:p-8">
                    <div className="mb-5">
                      <h2 className="font-heading text-2xl md:text-4xl font-bold mb-2">
                        {program.title}
                      </h2>
                      <p className="font-body text-foreground/60 text-sm md:text-base">
                        {program.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-5 text-sm font-body text-foreground/60">
                      {program.price && (
                        <span className="inline-flex items-center gap-3 rounded-2xl border border-accent/35 bg-[linear-gradient(135deg,hsl(170_70%_45%/.2),hsl(187_80%_48%/.18))] px-4 py-3 text-accent shadow-[0_0_24px_hsl(170_70%_45%/.18)]">
                          <FileBadge size={18} />
                          <span className="flex flex-col leading-none">
                            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                              {program.packageName}
                            </span>
                            <span className="font-heading text-2xl font-bold text-accent md:text-3xl">
                              {program.price}
                            </span>
                          </span>
                        </span>
                      )}
                    </div>

                    <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
                      {program.overview}
                    </p>

                    {program.prerequisites && (
                      <div className="mb-6">
                        <h3 className="font-heading text-lg md:text-xl font-bold mb-3">
                          Prerequisites
                        </h3>
                        <ul className="grid gap-2">
                          {program.prerequisites.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 font-body text-foreground/70 text-sm"
                            >
                              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                                <Shield size={12} className="text-accent" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.structure && (
                      <div className="mb-6">
                        <h3 className="font-heading text-lg md:text-xl font-bold mb-3">
                          Program Structure
                        </h3>
                        <ul className="grid gap-3">
                          {program.structure.map((item, index) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-body text-foreground/70 text-sm"
                            >
                              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 font-heading text-xs font-bold text-primary">
                                {index + 1}
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold mb-3">
                        Includes
                      </h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {program.includes.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 rounded-xl border border-primary/15 bg-background/30 px-3 py-3 font-body text-sm text-foreground/75"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 flex-shrink-0 text-primary"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProgram(program.id);
                          setModalOpen(true);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.45)]"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

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
        defaultCourse={selectedProgram}
      />
    </div>
  );
};

export default ExperienceProgramsPage;
