import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      axios
        .post("http://localhost:8000/auth/google/callback", { code })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          navigate("/"); // Chat sahifasiga yo‘naltirish
        })
        .catch((err) => {
          console.error("Google login xatosi:", err);
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <p>Google orqali autentifikatsiya qilinmoqda...</p>;
};

export default GoogleCallback;
