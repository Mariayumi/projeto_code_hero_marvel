import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  return (
    <div className="navegador">
      <Link to="/">
        <div className="logo_navegador"></div>
      </Link>
      <div className="container_info_usuario">
        <div className="info_usuario">
          <h2>Mariana Ayumi Tamay</h2>
          <p>Teste de Front-End</p>
        </div>
        <div className="sigla_usuario">MT</div>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="theme-switch"
            checked={isDark}
            onChange={toggleTheme}
            className="toggle-checkbox"
          />
          <label htmlFor="theme-switch" className="toggle-label">
            <span className="toggle-inner" />
            <span className="toggle-switch" />
          </label>
        </div>
      </div>
    </div>
  );
}
