import "./About.css";

const About = () => (
  <main className="about-page">

    {/* HERO */}
    <section className="about-hero">
      <h1>About Guangzhou Weilant Trading Co Ltd</h1>
      <p>
        A trusted international sourcing partner for HVAC and refrigeration
        components, delivering quality-driven solutions worldwide.
      </p>
    </section>

    {/* STORY */}
    <section className="about-content">
      <h2>Who We Are</h2>
      <p>
        Guangzhou Weilant Trading Co Ltd is a specialized sourcing company with
        strong expertise in the cooling and refrigeration industry. We connect
        global buyers with reliable manufacturers through a carefully curated
        supplier network.
      </p>

      <p>
        Our strength lies in understanding technical requirements, evaluating
        manufacturers, and delivering solutions that balance quality, cost, and
        reliability. We serve distributors, contractors, and OEM partners across
        international markets.
      </p>
    </section>

    {/* VALUES */}
    <section className="about-values">
      <h2>Our Core Values</h2>

      <div className="about-values-grid">
        <div className="about-value-card">
          <h4>Quality First</h4>
          <p>
            We prioritize product quality and compliance to ensure long-term
            performance and customer satisfaction.
          </p>
        </div>

        <div className="about-value-card">
          <h4>Transparency</h4>
          <p>
            Clear communication, accurate documentation, and honest sourcing
            practices define our operations.
          </p>
        </div>

        <div className="about-value-card">
          <h4>Global Reach</h4>
          <p>
            Our international supplier network enables efficient sourcing and
            delivery across multiple regions.
          </p>
        </div>
      </div>
    </section>

    {/* WHY US */}
    <section className="about-why">
      <h2>Why Choose Us</h2>
      <ul>
        <li>Verified manufacturer database</li>
        <li>Industry-specific technical expertise</li>
        <li>Reliable logistics and delivery coordination</li>
        <li>Competitive and transparent pricing</li>
      </ul>
    </section>

  </main>
);

export default About;
