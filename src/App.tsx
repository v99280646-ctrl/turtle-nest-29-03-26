import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import CourseDetails from "./pages/CourseDetails.tsx";
import DiveTripsPage from "./pages/DiveTripsPage.tsx";
import ExperienceProgramsPage from "./pages/ExperienceProgramsPage.tsx";
import FunDivesPage from "./pages/FunDivesPage.tsx";
import LakshadweepDiveTripPage from "./pages/LakshadweepDiveTripPage.tsx";
import PerumalParPage from "./pages/PerumalParPage.tsx";
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
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/fun-dives" element={<FunDivesPage />} />
          <Route path="/dive-trips" element={<DiveTripsPage />} />
          <Route path="/dive-trips/lakshadweep-divetrip-experience" element={<LakshadweepDiveTripPage />} />
          <Route path="/dive-trips/perumal-par" element={<PerumalParPage />} />
          <Route path="/experience-programs" element={<ExperienceProgramsPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
