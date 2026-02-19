import "./About.css";
import { useLanguage } from "../LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const heroTitle =
    language === "en"
      ? "About Guangzhou Weilant Trading Co Ltd"
      : "关于广州维朗贸易有限公司";

  const heroText =
    language === "en"
      ? "A trusted international sourcing partner for HVAC and refrigeration components, delivering quality-driven solutions worldwide."
      : "值得信赖的暖通空调与制冷配件国际采购合作伙伴，为全球客户提供高质量的解决方案。";

  const whoWeAreTitle = language === "en" ? "Who We Are" : "我们是谁";

  const whoWeAreParagraphs =
    language === "en"
      ? [
          "Guangzhou Weilant Trading Co Ltd is a specialized sourcing company with strong expertise in the cooling and refrigeration industry. We connect global buyers with reliable manufacturers through a carefully curated supplier network.",
          "Our strength lies in understanding technical requirements, evaluating manufacturers, and delivering solutions that balance quality, cost, and reliability. We serve distributors, contractors, and OEM partners across international markets.",
        ]
      : [
          "广州维朗贸易有限公司专注于制冷与空调领域的国际采购，拥有丰富的行业经验与技术背景。我们通过严格筛选的供应商网络，将全球买家与可靠的制造商连接起来。",
          "我们擅长理解技术需求、评估工厂能力，并提供在质量、成本与可靠性之间取得平衡的解决方案，服务对象包括经销商、工程承包商及 OEM 客户。",
        ];

  const valuesTitle = language === "en" ? "Our Core Values" : "我们的核心价值";

  const values = language === "en"
    ? [
        {
          title: "Quality First",
          text: "We prioritize product quality and compliance to ensure long-term performance and customer satisfaction.",
        },
        {
          title: "Transparency",
          text: "Clear communication, accurate documentation, and honest sourcing practices define our operations.",
        },
        {
          title: "Global Reach",
          text: "Our international supplier network enables efficient sourcing and delivery across multiple regions.",
        },
      ]
    : [
        {
          title: "质量为先",
          text: "始终把产品质量与合规性放在首位，确保长期稳定运行与客户满意。",
        },
        {
          title: "透明诚信",
          text: "清晰沟通、完善文档与诚信采购流程，是我们业务的基石。",
        },
        {
          title: "全球布局",
          text: "依托国际供应网络，实现多区域高效采购与交付。",
        },
      ];

  const whyTitle = language === "en" ? "Why Choose Us" : "为什么选择我们";

  const whyPoints =
    language === "en"
      ? [
          "Verified manufacturer database",
          "Industry-specific technical expertise",
          "Reliable logistics and delivery coordination",
          "Competitive and transparent pricing",
        ]
      : [
          "经过严格审核的制造商数据库",
          "暖通制冷领域的专业技术支持",
          "可靠的物流与交付协同能力",
          "具有竞争力且透明的价格体系",
        ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
      </section>

      {/* STORY */}
      <section className="about-content">
        <h2>{whoWeAreTitle}</h2>
        {whoWeAreParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>{valuesTitle}</h2>

        <div className="about-values-grid">
          {values.map((value) => (
            <div key={value.title} className="about-value-card">
              <h4>{value.title}</h4>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="about-why">
        <h2>{whyTitle}</h2>
        <ul>
          {whyPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;
