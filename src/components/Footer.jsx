import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { useLanguage } from "../LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const brandName =
    language === "en"
      ? "Guangzhou Weilant Trading Co Ltd"
      : "广州维朗贸易有限公司";

  const aboutText =
    language === "en"
      ? "Strategic sourcing for refrigeration & air conditioning components. We deliver quality, reliability, and competitive pricing worldwide."
      : "专注于制冷与空调部件的战略采购，为全球客户提供高质量、可靠且具竞争力价格的产品。";

  const contactTitle = language === "en" ? "Contact" : "联系信息";

  const quickLinksTitle = language === "en" ? "Quick Links" : "快捷链接";

  const links = [
    {
      href: "/",
      label: language === "en" ? "Home" : "首页",
    },
    {
      href: "/service",
      label: language === "en" ? "Service" : "服务",
    },
    {
      href: "/contact",
      label: language === "en" ? "Contact" : "联系我们",
    },
  ];

  const bottomText =
    language === "en"
      ? "All rights reserved."
      : "版权所有，保留所有权利。";

  return (
    <footer className="footer-custom mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Brand / About */}
          <div className="col-lg-5 col-md-12 mb-4">
            <h5 className="footer-brand">{brandName}</h5>
            <p className="footer-text">{aboutText}</p>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="footer-title">{contactTitle}</h6>
            <ul className="list-unstyled footer-text">
              <li>Email: gwtradingco@hotmail.com</li>
              <li>Phone: +86 151 5894 0007</li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="footer-title">{quickLinksTitle}</h6>
            <ul className="list-unstyled footer-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center">
        © {new Date().getFullYear()} {brandName}. {bottomText}
      </div>
    </footer>
  );
};

export default Footer;
