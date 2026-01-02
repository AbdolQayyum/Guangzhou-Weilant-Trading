import "./ExploreServices.css";

// import SourcingImg from "../assets/service-sourcing.jpg";
// import OEMImg from "../assets/service-oem.jpg";
// import SupportImg from "../assets/service-support.jpg";
// import LogisticsImg from "../assets/service-logistics.jpg";

const services = [
  {
    title: "Global HVAC Sourcing",
    desc: "We source high-quality HVAC tools and components from certified manufacturers worldwide, ensuring reliability and cost efficiency.",
    // image: SourcingImg,
  },
  {
    title: "OEM & Private Label",
    desc: "Customized OEM and private labeling solutions to help your brand stand out in the HVAC market.",
    // image: OEMImg,
  },
  {
    title: "Technical Support",
    desc: "Our experts assist you in selecting the right products and provide technical guidance for smooth installations.",
    // image: SupportImg,
  },
  {
    title: "Logistics & Worldwide Delivery",
    desc: "End-to-end logistics support with safe packaging and on-time global delivery.",
    // image: LogisticsImg,
  },
];

const ServicesPage = () => {
  return (
    <main className="services-page">
      {/* HEADER */}
      <section className="services-hero">
        <h1>Explore Our Services</h1>
        <p>
          End-to-end HVAC sourcing and supply solutions designed to support
          contractors, distributors, and global partners.
        </p>
      </section>

      {/* SERVICES */}
      <section className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div> */}

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ServicesPage;
