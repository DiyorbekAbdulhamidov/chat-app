import { Outlet } from "react-router-dom";
import "./AuthLayout.css"; // CSS faylni ulash

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
