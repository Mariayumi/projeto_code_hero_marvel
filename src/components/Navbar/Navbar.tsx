import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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
      </div>
    </div>
  );
}
