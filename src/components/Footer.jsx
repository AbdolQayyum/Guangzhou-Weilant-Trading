import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-custom mt-5">
    <div className="container py-5">
      <div className="row">
        {/* Brand / About */}
        <div className="col-lg-5 col-md-12 mb-4">
          <h5 className="footer-brand">
            Guangzhou Weilant Trading Co Ltd
          </h5>
          <p className="footer-text">
            Strategic sourcing for refrigeration & air conditioning components.
            We deliver quality, reliability, and competitive pricing worldwide.
          </p>
        </div>

        {/* Contact */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h6 className="footer-title">Contact</h6>
          <ul className="list-unstyled footer-text">
            <li>Email: gwtradingco@hotmail.com</li>
            <li>Phone: +86 151 5894 0007</li>
          </ul>
        </div>

        {/* Links */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h6 className="footer-title">Quick Links</h6>
          <ul className="list-unstyled footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom text-center">
      © {new Date().getFullYear()} Guangzhou Weilant Trading Co Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
