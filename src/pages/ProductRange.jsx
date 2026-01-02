import "./ProductRange.css";

const products = [
  "Compressors (Reciprocating, Scroll, Rotary)",
  "Fan Coil Units & Air Handling Units",
  "Heat Exchangers (Condensers & Evaporators)",
  "Copper, Aluminum & Steel Tubes",
  "Valves, Fittings & Controls",
  "Vacuum Pumps & HVAC Tools",
  "Electrical & Control Components",
];

const ProductsPage = () => (
  <main className="products-page">

    {/* HERO */}
    <section className="products-hero">
      <h1>Our Product Range</h1>
      <p>
        Comprehensive HVAC & refrigeration components sourced globally to meet
        international quality standards.
      </p>
    </section>

    {/* CONTENT */}
    <section className="products-content">
      <p className="products-intro">
        Guangzhou Weilant Trading Co Ltd supplies a broad portfolio of HVAC and
        refrigeration products for contractors, distributors, and OEM partners.
        Our sourcing network enables us to deliver reliable components at
        competitive prices.
      </p>

      <div className="products-grid">
        {products.map((item) => (
          <div key={item} className="products-card">
            {item}
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="products-cta">
      <h3>Looking for a specific product?</h3>
      <p>
        Share your requirement with us and our team will source the right
        solution for your project.
      </p>
      <a href="/contact" className="products-cta-btn">
        Request a Quote
      </a>
    </section>

  </main>
);

export default ProductsPage;
