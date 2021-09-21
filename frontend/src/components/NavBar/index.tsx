import imgSPACEACADEMY from "assets/IMG/SPACEACADEMY.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={imgSPACEACADEMY} alt="logo" />
      </Link>
      <ul>
        <a href="#">Início</a>

        <a href="#aboutMe">Sobre</a>

        <a href="#trailmix">Trilhas</a>

        <a href="#contact">Contato</a>

        <Link to="/Login">
          <a href="#">Login</a>
        </Link>
        <a href="#">Registrar</a>
      </ul>
    </nav>
  );
};

export default NavBar;
