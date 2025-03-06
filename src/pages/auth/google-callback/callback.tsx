import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        try {
          const response = await axios.post("http://localhost:8000/auth/google", { code });
          localStorage.setItem("token", response.data.token);
          navigate("/chat"); // Login muvaffaqiyatli bo‘lsa, chat sahifasiga yo‘naltiramiz
        } catch (error) {
          console.error("Google autentifikatsiya xatosi:", error);
          navigate("/login");
        }
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Google orqali autentifikatsiya qilinmoqda...</div>;
};

export default GoogleCallback;
