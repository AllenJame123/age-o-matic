import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Difference from "./pages/Difference";
import DateCalculator from "./pages/DateCalculator";
import BirthdayCountdown from "./pages/BirthdayCountdown";
import PregnancyCalculator from "./pages/PregnancyCalculator";
import LeapYearCalculator from "./pages/LeapYearCalculator";
import Retirement from "./pages/Retirement";
import GenerationFinder from "./pages/GenerationFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/difference" element={<Difference />} />
          <Route path="/date-calculator" element={<DateCalculator />} />
          <Route path="/birthday-countdown" element={<BirthdayCountdown />} />
          <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />
          <Route path="/leap-year-calculator" element={<LeapYearCalculator />} />
          <Route path="/retirement" element={<Retirement />} />
          <Route path="/what-generation-am-i" element={<GenerationFinder />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;