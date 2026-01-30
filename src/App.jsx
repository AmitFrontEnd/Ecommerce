import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 ease-in-out">
      <Toaster position="top-right" richColors expand={true} closeButton />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
      {!menuOpen && <ScrollToTop />}
      <Footer />
    </div>
  );
}

export default App;
