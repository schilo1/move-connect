import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Offres from "./pages/Offres";
import Partener from "./pages/Partener";
import Contact from "./pages/Contact";
import GboChallenge from "./pages/gbo-challenge";
import GboFitness from "./pages/gbo-fitness";
import PartenariatSalle from "./pages/partenariat-salle";
import CoachingEnSalle from "./pages/coaching-en-salle";
import CoachingEnLigne from "./pages/coaching-en-ligne";
import CoachingADomicile from "./pages/coaching-a-domicile";
import CoachPartenaire from "./pages/coach-partenaire";
import GboNutrition from "./pages/gbo-nutrition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Offres" element={<Offres />} />
          <Route path="/Partner" element={<Partener />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/gbo-challenge" element={<GboChallenge />} />
          <Route path="/gbo-fitness" element={<GboFitness />} />
          <Route path="/partenariat-salle" element={<PartenariatSalle />} />
          <Route path="/coaching-en-salle" element={<CoachingEnSalle />} />
          <Route path="/coaching-en-ligne" element={<CoachingEnLigne />} />
          <Route path="/coaching-a-domicile" element={<CoachingADomicile />} />
          <Route path="/coach-partenaire" element={<CoachPartenaire />} />
          <Route path="/gbo-nutrition" element={<GboNutrition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
