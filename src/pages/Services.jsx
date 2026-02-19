import { Link } from "react-router-dom";
import "./Services.css";
import { useLanguage } from "../LanguageContext";

const servicesByLang = {
  en: [
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
  ],
  zh: [
    {
      title: "采购与供应",
      desc: "从全球经过验证的制造商处稳定采购暖通空调工具与配件。",
    },
    {
      title: "定制化方案",
      desc: "根据项目需求提供产品选型建议与技术支持。",
    },
    {
      title: "物流与交付",
      desc: "高效的供应链管理，保障准时、安全地送达全球各地。",
    },
  ],
};

const Services = () => {
  const { language } = useLanguage();
  const services = servicesByLang[language] || servicesByLang.en;

  const title = language === "en" ? "Our Services" : "我们的服务";
  const ctaText = language === "en" ? "Find More Services" : "查看更多服务";

  return (
    <section className="services-section">
      <h2 className="services-title">{title}</h2>

      <div className="services-list">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <h4 className="service-card-title">{service.title}</h4>
            <p className="service-card-desc">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="services-cta">
        <Link to="/service" className="services-btn">
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Services;
