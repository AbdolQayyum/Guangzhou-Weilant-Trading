import "./ProductRange.css";
import { useLanguage } from "../LanguageContext";

const productsByLang = {
  en: [
    "Compressors (Reciprocating, Scroll, Rotary)",
    "Fan Coil Units & Air Handling Units",
    "Heat Exchangers (Condensers & Evaporators)",
    "Copper, Aluminum & Steel Tubes",
    "Valves, Fittings & Controls",
    "Vacuum Pumps & HVAC Tools",
    "Electrical & Control Components",
  ],
  zh: [
    "压缩机（活塞、涡旋、转子等类型）",
    "风机盘管与空气处理机组",
    "换热器（冷凝器与蒸发器）",
    "铜管、铝管及钢管",
    "阀件、管件与控制元件",
    "真空泵及暖通工具",
    "电气与控制部件",
  ],
};

const ProductsPage = () => {
  const { language } = useLanguage();
  const products = productsByLang[language] || productsByLang.en;

  const heroTitle =
    language === "en" ? "Our Product Range" : "我们的产品范围";

  const heroText =
    language === "en"
      ? "Comprehensive HVAC & refrigeration components sourced globally to meet international quality standards."
      : "从全球采购种类齐全的暖通空调及制冷部件，符合国际质量标准。";

  const introText =
    language === "en"
      ? "Guangzhou Weilant Trading Co Ltd supplies a broad portfolio of HVAC and refrigeration products for contractors, distributors, and OEM partners. Our sourcing network enables us to deliver reliable components at competitive prices."
      : "广州维朗贸易有限公司为工程承包商、经销商及 OEM 客户提供广泛的暖通与制冷产品，通过完善的采购网络，以具竞争力的价格供应可靠部件。";

  const ctaTitle =
    language === "en"
      ? "Looking for a specific product?"
      : "在寻找某类特定产品？";

  const ctaText =
    language === "en"
      ? "Share your requirement with us and our team will source the right solution for your project."
      : "欢迎将您的需求告知我们，我们的团队将为您的项目匹配最合适的产品方案。";

  const ctaButton = language === "en" ? "Request a Quote" : "获取报价";

  return (
    <main className="products-page">
      {/* HERO */}
      <section className="products-hero">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
      </section>

      {/* CONTENT */}
      <section className="products-content">
        <p className="products-intro">{introText}</p>

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
        <h3>{ctaTitle}</h3>
        <p>{ctaText}</p>
        <a href="/contact" className="products-cta-btn">
          {ctaButton}
        </a>
      </section>
    </main>
  );
};

export default ProductsPage;
