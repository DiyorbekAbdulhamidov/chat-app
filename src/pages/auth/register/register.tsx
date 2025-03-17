import { GOOGLE_AUTH_URL } from "../../../config/auth";
import "../../../styles/auth.css";

const Register = () => {
  const handleGoogleRegister = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Ro‘yxatdan o‘tish</h2>
        <p>Faqat Google orqali ro‘yxatdan o‘tishingiz mumkin.</p>
        <button className="google-btn" onClick={handleGoogleRegister}>
          <img src="/google-icon.svg" alt="Google" />
          Google bilan ro‘yxatdan o‘tish
        </button>
      </div>
    </div>
  );
};

export default Register;
// 