import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection";
import DiscoverScuba from "@/components/DiscoverScuba";
import FunDiving from "@/components/FunDiving";
import StaySection from "@/components/StaySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Bubbles from "@/components/Bubbles";
import MobileBottomNav from "@/components/MobileBottomNav";

const Index = () => (
  <div className="min-h-screen ocean-section relative">
    <Bubbles />
    <Navbar />
    <main className="pb-14 md:pb-0">
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <CoursesSection />
      <DiscoverScuba />
      <FunDiving />
      <StaySection />
      <ContactSection />
    </main>
    <Footer />
    <MobileBottomNav />
  </div>
);

export default Index;
