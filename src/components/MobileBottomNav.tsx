import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Compass, GraduationCap, Home, Phone, Waves } from "lucide-react";

const courseMenuItems = [
  {
    to: "/courses",
    label: "Courses",
    description: "Certification tracks from beginner to professional.",
    icon: GraduationCap,
  },
  {
    to: "/experience-programs",
    label: "Experience Program",
    description: "Intro programs for first-time underwater explorers.",
    icon: Waves,
  },
];

const navItems = [
  { to: "/", icon: Home, label: "Home", type: "link" as const },
  { label: "PADI Courses", icon: GraduationCap, type: "menu" as const },
  { to: "/fun-dives", icon: Waves, label: "Fun Dives", type: "link" as const },
  { to: "/dive-trips", icon: Compass, label: "Dive Trips", type: "link" as const },
  { to: "/#contact", icon: Phone, label: "Contact", type: "link" as const },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleClick = (to: string) => {
    closeMenu();
    if (to === "/#contact" && location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/#contact") return false;
    return location.pathname.startsWith(to);
  };

  const isCoursesActive = courseMenuItems.some((item) => location.pathname.startsWith(item.to));

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close PADI courses menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-background/65 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-3 bottom-[4.25rem] z-50 md:hidden"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,hsl(210_50%_12%/.96),hsl(205_55%_8%/.92))] shadow-[0_24px_60px_hsl(210_60%_4%/.55)] backdrop-blur-xl">
                <div className="border-b border-border/40 px-5 pb-4 pt-4">
                  <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-foreground/15" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-[11px] uppercase tracking-[0.22em] text-foreground/45">PADI Navigation</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold">Choose Your Path</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-foreground/65">
                        Jump into full certification tracks or start with guided experience-based programs.
                      </p>
                    </div>
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Compass size={18} />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 p-4">
                  {courseMenuItems.map((item, index) => {
                    const active = isActive(item.to);
                    return (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <Link
                          to={item.to}
                          onClick={closeMenu}
                          className={`flex items-center gap-4 rounded-2xl border px-4 py-4 transition-all duration-300 ${
                            active
                              ? "border-primary/35 bg-primary/12 shadow-[0_0_18px_hsl(var(--primary)/0.16)]"
                              : "border-border/40 bg-background/25 hover:border-primary/25 hover:bg-primary/8"
                          }`}
                        >
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-background/60 text-primary">
                            <item.icon size={22} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-heading text-lg font-bold">{item.label}</p>
                            <p className="mt-1 font-body text-sm leading-relaxed text-foreground/62">{item.description}</p>
                          </div>
                          <ChevronUp size={16} className="-rotate-90 text-foreground/40" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 glass-card pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            if (item.type === "menu") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setMenuOpen((open) => !open)}
                  className={`flex h-full flex-1 flex-col items-center justify-center gap-0.5 transition-colors ${
                    isCoursesActive || menuOpen ? "text-primary" : "text-foreground/50"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <item.icon size={20} strokeWidth={isCoursesActive || menuOpen ? 2.5 : 1.5} />
                    <ChevronUp size={12} className={`transition-transform ${menuOpen ? "" : "rotate-180"}`} />
                  </div>
                  <span className="px-1 text-center font-body text-[9px] font-medium leading-tight">{item.label}</span>
                </button>
              );
            }

            const active = isActive(item.to);
            const linkTo = item.to.startsWith("/#") ? "/" : item.to;
            return (
              <Link
                key={item.label}
                to={linkTo}
                onClick={() => handleClick(item.to)}
                className={`flex h-full flex-1 flex-col items-center justify-center gap-0.5 transition-colors ${
                  active ? "text-primary" : "text-foreground/50"
                }`}
              >
                <item.icon size={20} strokeWidth={active ? 2.5 : 1.5} />
                <span className="px-1 text-center font-body text-[9px] font-medium leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
