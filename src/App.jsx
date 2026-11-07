
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PriavacyPolicy";
import Terms from "./pages/Terms";
import DMCAPolicy from "./pages/DMCAPolicy";
import SEO from "./components/SEO";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#080f24] dark:text-slate-100">
      <SEO />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/dmca/" element={<DMCAPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
