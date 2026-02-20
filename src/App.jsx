import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductRange from "./pages/ProductRange";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ExploreServices from "./pages/ExploreServices";
import { LanguageProvider, useLanguage } from "./LanguageContext";

// Component to update document title based on language
function TitleUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    const title = language === "zh" 
      ? "广州维朗贸易有限公司" 
      : "Guangzhou Weilant Trading Co Ltd";
    document.title = title;
  }, [language]);

  return null;
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <TitleUpdater />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductRange />} />
          <Route path="/process" element={<Process />} />
          <Route path="/service" element={<ExploreServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
