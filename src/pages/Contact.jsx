import { useState } from "react";
import WeChatQR from "../assets/WeChat.png";
import WeComQR from "../assets/Wecom.png";
import WhatsAppQR from "../assets/Whatsapp.png";
import "./Contact.css";
import { useLanguage } from "../LanguageContext";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const { language } = useLanguage();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      language === "en"
        ? "Thank you! Our sourcing team will contact you within 24 hours."
        : "感谢您的留言！我们的采购团队将在 24 小时内与您取得联系。"
    );
  };

  const heroTitle =
    language === "en"
      ? "Let’s Source the Right HVAC Products for You"
      : "为您寻找最合适的暖通空调产品";

  const heroText =
    language === "en"
      ? "Share your requirements with Guangzhou Weilant Trading Co Ltd. Our experts will connect you with verified manufacturers worldwide."
      : "将您的需求告知广州维朗贸易有限公司，我们的团队将为您对接全球经过验证的优质制造商。";

  const trustItems =
    language === "en"
      ? ["✔ Verified Manufacturers", "✔ Global Logistics Support"]
      : ["✔ 认证制造商资源", "✔ 全球物流支持"];

  const directContactTitle =
    language === "en" ? "Direct Contact Information" : "直接联系信息";

  const phoneLabel = language === "en" ? "Phone" : "电话";
  const emailLabel = language === "en" ? "Email" : "邮箱";
  const addressLabel = language === "en" ? "Office Address" : "办公室地址";

  const addressLineEn =
    "301 D92, 3rd Floor, No. 123 Dongji South Road, Liwan District, Guangzhou City";

  const addressLineZh = "广州市荔湾区东激南路123号三层301 D92房";

  const howItWorksTitle =
    language === "en" ? "How It Works" : "合作流程简介";

  const howItWorksSteps =
    language === "en"
      ? [
          "Send your product inquiry",
          "We analyze & source suppliers",
          "You receive price & lead time",
          "Order confirmation & delivery",
        ]
      : [
          "发送您的产品询盘",
          "我们分析需求并筛选供应商",
          "为您提供报价与交期",
          "确认订单并安排发货交付",
        ];

  const formTitle =
    language === "en" ? "Send Product Inquiry" : "发送产品询盘";

  const placeholders =
    language === "en"
      ? {
          name: "Full Name",
          company: "Company Name",
          email: "Business Email",
          phone: "Phone / WhatsApp",
          inquiry: "Product name, model, specifications & quantity",
        }
      : {
          name: "姓名",
          company: "公司名称",
          email: "商务邮箱",
          phone: "电话 / 微信 / WhatsApp",
          inquiry: "产品名称、型号、技术参数及数量",
        };

  const submitText = language === "en" ? "Submit Inquiry" : "提交询盘";

  const formNote =
    language === "en"
      ? "🔒 Your information is kept confidential."
      : "🔒 您的信息将被严格保密，仅用于沟通与报价。";

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>{heroTitle}</h1>
        <p>{heroText}</p>
      </section>

      {/* TRUST BAR */}
      <section className="contact-trust">
        {trustItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
        {/* <div>✔ 10+ Years Industry Experience</div> */}
      </section>

      {/* MAIN CONTENT */}
      <section className="contact-container">
        {/* LEFT */}
        <div className="contact-details">
          <h3>{directContactTitle}</h3>

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
                <h5>{phoneLabel}</h5>
                <p>
                  +86 198 5449 4740
                  <br />
                  +86 151 5894 0007
                </p>
              </div>

              <div className="info-block">
                <h5>{emailLabel}</h5>
                <p>gwtradingco@hotmail.com</p>
              </div>

              <div className="info-block address">
                <h5>{addressLabel}</h5>
                <p>
                  {addressLineEn}
                  <br />
                  {addressLineZh}
                </p>
              </div>
            </div>
          </div>

          <div className="contact-process">
            <h4>{howItWorksTitle}</h4>
            <ul>
              {howItWorksSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
