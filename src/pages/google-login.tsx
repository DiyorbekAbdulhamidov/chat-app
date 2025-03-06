import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GOOGLE_AUTH_URL =
  "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=746136862875-o4p2slkiquaram92kk4qkq832dclcg85.apps.googleusercontent.com&redirect_uri=http://localhost:8000/auth/google&scope=openid%20profile%20email&access_type=offline";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="auth-form">
      <h2>Google bilan kirish</h2>
      <button onClick={handleLogin} className="google-btn">
        Google orqali kirish
      </button>
    </div>
  );
};

export default GoogleLogin;
