import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import "./main-layout.css"; // CSS fayl

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Outlet /> {/* Sahifalar shu joyga yuklanadi */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
