import "./Process.css";

const steps = [
  {
    step: "01",
    title: "Send Your Inquiry",
    desc: "Share product name, specifications, quantity, and any technical requirements with our team.",
  },
  {
    step: "02",
    title: "Global Sourcing",
    desc: "We analyze your requirement and source from our verified international manufacturer network.",
  },
  {
    step: "03",
    title: "Quotation & Options",
    desc: "You receive multiple options including pricing, lead time, and technical comparisons.",
  },
  {
    step: "04",
    title: "Order Confirmation",
    desc: "Once approved, we handle order placement, quality checks, and documentation.",
  },
  {
    step: "05",
    title: "Logistics & Delivery",
    desc: "We ensure secure packaging and timely global delivery to your destination.",
  },
];

const Process = () => {
  return (
    <main className="process-page">

      {/* HERO */}
      <section className="process-hero">
        <h1>Our Sourcing Process</h1>
        <p>
          A transparent and efficient sourcing workflow designed to deliver
          reliable HVAC solutions with confidence.
        </p>
      </section>

      {/* PROCESS STEPS */}
      <section className="process-steps">
        {steps.map((step) => (
          <div key={step.step} className="process-card">
            <div className="process-number">{step.step}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="process-cta">
        <h3>Ready to start your sourcing journey?</h3>
        <p>
          Contact our team today and let us handle the sourcing while you focus
          on your business growth.
        </p>
        <a href="/contact" className="process-cta-btn">
          Get Started
        </a>
      </section>

    </main>
  );
};

export default Process;
