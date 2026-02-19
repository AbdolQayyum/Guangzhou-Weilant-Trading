import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductRange from "./pages/ProductRange";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ExploreServices from "./pages/ExploreServices";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <Router>
      <LanguageProvider>
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
