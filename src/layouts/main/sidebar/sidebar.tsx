import { Link } from "react-router-dom";
import "./sidebar.css"; // CSS fayl

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
