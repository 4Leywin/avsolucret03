import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CuidadosMarmol from "./pages/blog/CuidadosMarmol";
import CuidadosPorcelanato from "./pages/blog/CuidadosPorcelanato";
import CuidadosLajas from "./pages/blog/CuidadosLajas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/cuidados-marmol" element={<CuidadosMarmol />} />
          <Route
            path="/blog/cuidados-porcelanato"
            element={<CuidadosPorcelanato />}
          />
          <Route path="/blog/cuidados-lajas" element={<CuidadosLajas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
