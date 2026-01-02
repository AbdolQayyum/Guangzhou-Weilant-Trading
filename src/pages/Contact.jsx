import { useState } from "react";
import WeChatQR from "../assets/WeChat.png";
import WeComQR from "../assets/Wecom.png";
import WhatsAppQR from "../assets/Whatsapp.png";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our sourcing team will contact you within 24 hours.");
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>Let’s Source the Right HVAC Products for You</h1>
        <p>
          Share your requirements with Guangzhou Weilant Trading Co Ltd Our
          experts will connect you with verified manufacturers worldwide.
        </p>
      </section>

      {/* TRUST BAR */}
      <section className="contact-trust">
        <div>✔ Verified Manufacturers</div>
        <div>✔ Global Logistics Support</div>
        {/* <div>✔ 10+ Years Industry Experience</div> */}
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-container">
        {/* LEFT */}
        <div className="contact-details">
          <h3>Direct Contact Information</h3>

          <div className="contact-box">
            <div className="qr-grid">
              <div className="qr-item">
                <img src={WeChatQR} alt="WeChat QR" />
                <span>WeChat</span>
              </div>

              <div className="qr-item">
                <img src={WeComQR} alt="WeCom QR" />
                <span>WeCom</span>
              </div>

              <div className="qr-item">
                <img src={WhatsAppQR} alt="WhatsApp QR" />
                <span>WhatsApp</span>
              </div>
            </div>

            <div className="contact-info">
              <div className="info-block">
                <h5>Phone</h5>
                <p>
                  +86 198 5449 4740
                  <br />
                  +86 151 5894 0007
                </p>
              </div>

              <div className="info-block">
                <h5>Email</h5>
                <p>gwtradingco@hotmail.com</p>
              </div>

              <div className="info-block address">
                <h5>Office Address</h5>
                <p>
                  301 D92, 3rd Floor, No. 123 Dongji South Road, Liwan District,
                  Guangzhou City
                  <br />
                  广州市荔湾区东激南路123号三层301 D92房
                </p>
              </div>
            </div>
          </div>

          <div className="contact-process">
            <h4>How It Works</h4>
            <ul>
              <li>Send your product inquiry</li>
              <li>We analyze & source suppliers</li>
              <li>You receive price & lead time</li>
              <li>Order confirmation & delivery</li>
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        {/* <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Product Inquiry</h3>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Business Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone / WhatsApp"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="inquiry"
            placeholder="Product name, model, specifications & quantity"
            value={form.inquiry}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Inquiry</button>

          <p className="form-note">🔒 Your information is kept confidential.</p>
        </form> */}
      </section>
    </main>
  );
};

export default Contact;
