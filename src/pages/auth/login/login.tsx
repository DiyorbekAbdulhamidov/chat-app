import { GOOGLE_AUTH_URL } from "../../../config/auth";
import "../../../styles/auth.css";


const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Tizimga kirish</h2>
        <p>Faqat Google orqali tizimga kirishingiz mumkin.</p>
        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="/google-icon.svg" alt="Google" />
          Google bilan kirish
        </button>
      </div>
    </div>
  );
};

export default Login;
