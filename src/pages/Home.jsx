import React from "react";
import CTAButton from "../components/CTAButton";
import "./Home.css";
import Services from "./Services";

// HERO BACKGROUND IMAGES
import AirCurtainImg from "../assets/AirCurtain.jpeg";
import BracketsImg from "../assets/Brackets.jpeg";
import CapillaryImg from "../assets/Capillary Tubes.png";
import DrainPumpImg from "../assets/Drain pump.jpeg";
import SensorsImg from "../assets/Sensors.jpeg";
import SoldersImg from "../assets/Solders.jpeg";
import VacuumImg from "../assets/Vaccum pump.jpeg";
import AccesoriesImg from "../assets/Ac accessories.jpeg";

const images = [
  AirCurtainImg,
  BracketsImg,
  CapillaryImg,
  DrainPumpImg,
  SensorsImg,
  SoldersImg,
  VacuumImg,
  AccesoriesImg,
];

const majorTools = [
  { name: "Capillary Tubes", image: CapillaryImg },
  { name: "HC Condensate Drain Pump", image: DrainPumpImg },
  { name: "Vacuum Pump", image: VacuumImg },
  { name: "AC Brackets", image: BracketsImg },
  { name: "Solders", image: SoldersImg },
  { name: "AC Accessories", image: AccesoriesImg },
  { name: "Sensors", image: SensorsImg },
  { name: "Air Curtain", image: AirCurtainImg },
];

const Home = () => {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        {/* Background Scroller */}
        <div className="hero-bg-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="Product" />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="display-3 hero-title">
            Guangzhou Weilant Trading Co Ltd
          </h1>
          <p className="lead hero-subtitle">
            Manufacturer & Trader of Air Conditioning & Refrigeration Spare Parts. Tools & accessories supplier delivering quality,
            reliability, and innovation worldwide.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <CTAButton text="Explore More" color="warning" to="/service" />
            <CTAButton text="Purchase Now" to="/contact" />
          </div>
        </div>
      </section>

      {/* ================= MAJOR TOOLS ================= */}
      <section className="major-tools-section">
        <h3 className="major-tools-title">Major Tools & Products</h3>

        <div className="major-tools-grid">
          {majorTools.map((tool) => (
            <div key={tool.name} className="major-tool-card">
              <div className="major-tool-image">
                <img src={tool.image} alt={tool.name} />
              </div>
              <div className="major-tool-name">{tool.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Services />

      <section className="product-preview-section">
        <h3 className="product-preview-title">Our Product Capabilities</h3>

        <p className="product-preview-desc">
          We supply a wide range of HVAC and refrigeration components sourced
          from trusted manufacturers. Below is a snapshot of our core product
          categories.
        </p>

        <div className="product-preview-grid">
          <div className="product-preview-card">Compressors</div>
          <div className="product-preview-card">Heat Exchangers</div>
          <div className="product-preview-card">Vacuum Pumps</div>
          <div className="product-preview-card">Copper & Tubing</div>
          <div className="product-preview-card">Valves & Controls</div>
          <div className="product-preview-card">HVAC Electrical Parts</div>
        </div>

        <a href="/products" className="product-preview-btn">
          View Full Product Range
        </a>
      </section>

      <section className="process-preview-section">
        <h3 className="process-preview-title">How We Work</h3>

        <div className="process-preview-grid">
          <div className="process-preview-card">
            <span>01</span>
            <h5>Send Inquiry</h5>
            <p>Share your product requirements with us.</p>
          </div>

          <div className="process-preview-card">
            <span>02</span>
            <h5>We Source</h5>
            <p>We identify the best manufacturers globally.</p>
          </div>

          <div className="process-preview-card">
            <span>03</span>
            <h5>Get Quotation</h5>
            <p>Receive pricing, lead time, and options.</p>
          </div>

          <div className="process-preview-card">
            <span>04</span>
            <h5>Delivery</h5>
            <p>Order confirmation and on-time delivery.</p>
          </div>
        </div>

        <a href="/process" className="process-preview-btn">
          View Full Process
        </a>
      </section>
    </main>
  );
};

export default Home;
