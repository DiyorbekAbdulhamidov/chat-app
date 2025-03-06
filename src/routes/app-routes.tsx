import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages";
import { CallBack } from "../pages";
// import Chat from "../pages/Chat";
// import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";
// import MainLayout from "../layouts/MainLayout";
import { AuthLayout } from "../layouts";
import { useAuth } from "../hooks";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/auth/google" element={<CallBack />} />

        {isAuthenticated ? (
          <Route element={<MainLayout />}>
            {/* <Route path="/chat" element={<Chat />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Route>
        ) : (
          // Agar foydalanuvchi autentifikatsiya qilmagan bo‘lsa, login sahifasiga yo‘naltiramiz
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}

        {/* 404 Not Found sahifasi */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
