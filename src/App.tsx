import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Roundtables from "./pages/Roundtables";
import Summit from "./pages/Summit";
import Summit2024 from "./pages/Summit2024";
import Summit2025 from "./pages/Summit2025";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Summit />} />
          <Route path="/about" element={<About />} />
          <Route path="/roundtables" element={<Roundtables />} />
          <Route path="/summit" element={<Summit />} />
          <Route path="/summit/2024" element={<Summit2024 />} />
          <Route path="/summit/2025" element={<Summit2025 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
