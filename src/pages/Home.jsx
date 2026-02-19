import React from "react";
import CTAButton from "../components/CTAButton";
import "./Home.css";
import Services from "./Services";
import { useLanguage } from "../LanguageContext";

// HERO BACKGROUND IMAGES
import AirCurtainImg from "../assets/AirCurtain.jpeg";
import BracketsImg from "../assets/Brackets.jpeg";
import DrainPumpImg from "../assets/Drain pump.jpeg";
import SensorsImg from "../assets/Sensors.jpeg";
import SoldersImg from "../assets/Solders.jpeg";
import VacuumImg from "../assets/Vaccum pump.jpeg";
import AccesoriesImg from "../assets/Ac accessories.jpeg";
import CopperImg from "../assets/Copper.jpeg";

const images = [
  AirCurtainImg,
  BracketsImg,
  DrainPumpImg,
  SensorsImg,
  SoldersImg,
  VacuumImg,
  AccesoriesImg,
  CopperImg,
];

const majorToolsByLang = {
  en: [
    { name: "Copper Wire", image: CopperImg },
    { name: "HC Condensate Drain Pump", image: DrainPumpImg },
    { name: "Vacuum Pump", image: VacuumImg },
    { name: "AC Brackets", image: BracketsImg },
    { name: "Solders", image: SoldersImg },
    { name: "AC Accessories", image: AccesoriesImg },
    { name: "Sensors", image: SensorsImg },
    { name: "Air Curtain", image: AirCurtainImg },
  ],
  zh: [
    { name: "铜线", image: CopperImg },
    { name: "HC 冷凝水提升泵", image: DrainPumpImg },
    { name: "真空泵", image: VacuumImg },
    { name: "空调支架", image: BracketsImg },
    { name: "焊条 / 焊料", image: SoldersImg },
    { name: "空调配件", image: AccesoriesImg },
    { name: "传感器", image: SensorsImg },
    { name: "风幕机", image: AirCurtainImg },
  ],
};

const Home = () => {
  const { language } = useLanguage();
  const majorTools = majorToolsByLang[language] || majorToolsByLang.en;

  const heroTitle =
    language === "en"
      ? "Guangzhou Weilant Trading Co Ltd"
      : "广州维朗贸易有限公司";

  const heroSubtitle =
    language === "en"
      ? "Manufacturer & Trader of Air Conditioning & Refrigeration Spare Parts. Tools & accessories supplier delivering quality, reliability, and innovation worldwide."
      : "专注空调与制冷配件的生产与贸易，为全球客户提供高质量、可靠且创新的工具与配件解决方案。";

  const exploreMoreText = language === "en" ? "Explore More" : "了解更多";
  const purchaseNowText = language === "en" ? "Purchase Now" : "立即采购";

  const majorToolsTitle =
    language === "en" ? "Major Tools & Products" : "主要工具与产品";

  const productTitle =
    language === "en"
      ? "Our Product Capabilities"
      : "我们的产品能力";

  const productDesc =
    language === "en"
      ? "We supply a wide range of HVAC and refrigeration components sourced from trusted manufacturers. Below is a snapshot of our core product categories."
      : "我们供应种类齐全的暖通空调及制冷组件，均来自值得信赖的制造商。以下是我们的核心产品类别概览。";

  const productCards =
    language === "en"
      ? [
          "Compressors",
          "Heat Exchangers",
          "Vacuum Pumps",
          "Copper & Tubing",
          "Valves & Controls",
          "HVAC Electrical Parts",
        ]
      : [
          "压缩机",
          "换热器",
          "真空泵",
          "铜管及配管",
          "阀门与控制件",
          "暖通电气部件",
        ];

  const viewProductsText =
    language === "en" ? "View Full Product Range" : "查看全部产品范围";

  const processPreviewTitle =
    language === "en" ? "How We Work" : "我们的合作流程";

  const processCards =
    language === "en"
      ? [
          {
            step: "01",
            title: "Send Inquiry",
            text: "Share your product requirements with us.",
          },
          {
            step: "02",
            title: "We Source",
            text: "We identify the best manufacturers globally.",
          },
          {
            step: "03",
            title: "Get Quotation",
            text: "Receive pricing, lead time, and options.",
          },
          {
            step: "04",
            title: "Delivery",
            text: "Order confirmation and on-time delivery.",
          },
        ]
      : [
          {
            step: "01",
            title: "提交询盘",
            text: "告诉我们您的产品名称、规格及数量需求。",
          },
          {
            step: "02",
            title: "全球寻源",
            text: "我们在全球范围内匹配优质制造商。",
          },
          {
            step: "03",
            title: "报价与方案",
            text: "为您提供价格、交期以及多种选型方案。",
          },
          {
            step: "04",
            title: "发货与交付",
            text: "确认订单后安排生产、质检与准时发货。",
          },
        ];

  const viewProcessText =
    language === "en" ? "View Full Process" : "查看完整流程";

  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        {/* Background Scroller */}
        <div className="hero-bg-scroll">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="Product" />
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="display-3 hero-title">{heroTitle}</h1>
          <p className="lead hero-subtitle">{heroSubtitle}</p>
          <div className="d-flex gap-3 justify-content-center">
            <CTAButton text={exploreMoreText} color="warning" to="/service" />
            <CTAButton text={purchaseNowText} to="/contact" />
          </div>
        </div>
      </section>

      {/* ================= MAJOR TOOLS ================= */}
      <section className="major-tools-section">
        <h3 className="major-tools-title">{majorToolsTitle}</h3>

        <div className="major-tools-grid">
          {majorTools.map((tool) => (
            <div key={tool.name} className="major-tool-card">
              <div className="major-tool-image">
                <img src={tool.image} alt={tool.name} />
              </div>
              <div className="major-tool-name">{tool.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <Services />

      <section className="product-preview-section">
        <h3 className="product-preview-title">{productTitle}</h3>

        <p className="product-preview-desc">{productDesc}</p>

        <div className="product-preview-grid">
          {productCards.map((label) => (
            <div key={label} className="product-preview-card">
              {label}
            </div>
          ))}
        </div>

        <a href="/products" className="product-preview-btn">
          {viewProductsText}
        </a>
      </section>

      <section className="process-preview-section">
        <h3 className="process-preview-title">{processPreviewTitle}</h3>

        <div className="process-preview-grid">
          {processCards.map((card) => (
            <div key={card.step} className="process-preview-card">
              <span>{card.step}</span>
              <h5>{card.title}</h5>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <a href="/process" className="process-preview-btn">
          {viewProcessText}
        </a>
      </section>
    </main>
  );
};

export default Home;
