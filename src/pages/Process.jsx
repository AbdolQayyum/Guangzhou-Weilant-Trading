import "./Process.css";
import { useLanguage } from "../LanguageContext";

const stepsByLang = {
  en: [
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
  ],
  zh: [
    {
      step: "01",
      title: "提交询盘",
      desc: "将产品名称、规格、数量及技术要求告知我们的团队。",
    },
    {
      step: "02",
      title: "全球寻源",
      desc: "我们根据您的需求，从经过验证的国际制造商中进行筛选与比对。",
    },
    {
      step: "03",
      title: "报价与方案",
      desc: "为您提供多种方案，包括价格、交期及技术对比。",
    },
    {
      step: "04",
      title: "订单确认",
      desc: "确认方案后，我们负责下单、质量检验及相关单证处理。",
    },
    {
      step: "05",
      title: "物流与交付",
      desc: "通过安全包装与高效物流，将货物准时送达指定地点。",
    },
  ],
};

const Process = () => {
  const { language } = useLanguage();
  const steps = stepsByLang[language] || stepsByLang.en;

  const heroTitle =
    language === "en" ? "Our Sourcing Process" : "我们的采购流程";

  const heroText =
    language === "en"
      ? "A transparent and efficient sourcing workflow designed to deliver reliable HVAC solutions with confidence."
      : "透明高效的采购流程，帮助您放心获得可靠的暖通空调解决方案。";

  const ctaTitle =
    language === "en"
      ? "Ready to start your sourcing journey?"
      : "准备开始您的采购合作了吗？";

  const ctaText =
    language === "en"
      ? "Contact our team today and let us handle the sourcing while you focus on your business growth."
      : "欢迎随时与我们的团队联系，我们负责采购与交付，您专注于业务发展。";

  const ctaButton = language === "en" ? "Get Started" : "立即联系";

  return (
    <main className="process-page">
      {/* HERO */}
      <section className="process-hero">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
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
        <h3>{ctaTitle}</h3>
        <p>{ctaText}</p>
        <a href="/contact" className="process-cta-btn">
          {ctaButton}
        </a>
      </section>
    </main>
  );
};

export default Process;
