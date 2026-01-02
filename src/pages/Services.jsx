import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Sourcing & Procurement",
    desc: "Reliable sourcing of HVAC tools and components from verified global manufacturers.",
  },
  {
    title: "Custom Solutions",
    desc: "Tailored product recommendations and technical assistance for specific project needs.",
  },
  {
    title: "Logistics & Delivery",
    desc: "Efficient supply chain management with on-time worldwide delivery.",
  },
];

const Services = () => (
  <section className="services-section">
    <h2 className="services-title">Our Services</h2>

    <div className="services-list">
      {services.map((service, idx) => (
        <div key={idx} className="service-card">
          <h4 className="service-card-title">{service.title}</h4>
          <p className="service-card-desc">{service.desc}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="services-cta">
      <Link to="/service" className="services-btn">
        Find More Services
      </Link>
    </div>
  </section>
);

export default Services;
