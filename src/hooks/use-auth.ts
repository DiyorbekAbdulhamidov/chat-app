import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return { isAuthenticated, logout };
};

export default useAuth; 
