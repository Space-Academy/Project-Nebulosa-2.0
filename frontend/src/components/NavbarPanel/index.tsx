import imgSPACEACADEMY from "assets/IMG/SPACEACADEMY.png";
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.css";

const NavBarPanel = () => {
  return (
    <nav>
      <Link to="/">
        <img src={imgSPACEACADEMY} alt="logo" />
      </Link>
      <ul>
        <Link to="/Profile">
          <a>Perfil</a>
        </Link>
        <FiUser size="25px" color="#fff" />
        
        <Link to="/">
          <span>Sair</span>
        </Link>
        <FiLogOut size="25px" color="#fff" />
      </ul>
    </nav>
    
  );
};

export default NavBarPanel;
