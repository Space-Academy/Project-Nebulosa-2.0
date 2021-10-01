import imgSPACEACADEMY from "assets/IMG/SPACEACADEMY.png";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";

const NavBarPanel = () => {
  return (
    <nav id="panel">
      <Link to="/">
        <img src={imgSPACEACADEMY} alt="logo" />
      </Link>
      <ul>
        <div className="menu-icons">

          <Link to="/Profile">
            <a>Perfil</a>
          </Link>
          <FiUser />

          <span></span>

          <Link to="/">
            <a>Sair</a>
          </Link>
          <FiLogOut />
          
        </div>
      </ul>
    </nav>

  );
};

export default NavBarPanel;
