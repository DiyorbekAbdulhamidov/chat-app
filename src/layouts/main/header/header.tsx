import { useAuth } from "../../../hooks";
import "./header.css";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="header">
      <h1>ChatApp</h1>
      <button onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
