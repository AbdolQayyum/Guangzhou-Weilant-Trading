import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CTAButton = ({
  text = "Contact Us",
  color = "warning",
  to = "/",
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className={`btn btn-${color} rounded-pill px-4 fw-bold`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
