import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth";
import { Register } from "../pages/auth";
import { GoogleCallback } from "../pages/auth";
import { useAuth } from "../hooks";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth/google/callback" element={<GoogleCallback />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <Route path="*" element={<div>Chat sahifasi yoki boshqa kontent</div>} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
