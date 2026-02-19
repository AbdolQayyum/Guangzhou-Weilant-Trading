import "./ExploreServices.css";
import { useLanguage } from "../LanguageContext";

// import SourcingImg from "../assets/service-sourcing.jpg";
// import OEMImg from "../assets/service-oem.jpg";
// import SupportImg from "../assets/service-support.jpg";
// import LogisticsImg from "../assets/service-logistics.jpg";

const servicesByLang = {
  en: [
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
  ],
  zh: [
    {
      title: "全球暖通空调采购",
      desc: "从全球认证制造商处采购高品质暖通工具与配件，兼顾可靠性与成本优势。",
      // image: SourcingImg,
    },
    {
      title: "OEM 与品牌定制",
      desc: "提供 OEM 及品牌定制服务，助力您的品牌在暖通空调市场中脱颖而出。",
      // image: OEMImg,
    },
    {
      title: "技术支持",
      desc: "专业团队协助您选择合适产品，并提供安装与应用方面的技术指导。",
      // image: SupportImg,
    },
    {
      title: "物流与全球配送",
      desc: "提供端到端物流支持，安全包装并准时送达全球各地。",
      // image: LogisticsImg,
    },
  ],
};

const ServicesPage = () => {
  const { language } = useLanguage();
  const services = servicesByLang[language] || servicesByLang.en;

  const heroTitle =
    language === "en" ? "Explore Our Services" : "了解我们的服务";

  const heroText =
    language === "en"
      ? "End-to-end HVAC sourcing and supply solutions designed to support contractors, distributors, and global partners."
      : "面向工程承包商、经销商及全球合作伙伴，提供一站式暖通空调采购与供应解决方案。";

  return (
    <main className="services-page">
      {/* HEADER */}
      <section className="services-hero">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
      </section>

      {/* SERVICES */}
      <section className="services-container">
        {services.map((service, index) => (
          <div
            key={service.title}
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
