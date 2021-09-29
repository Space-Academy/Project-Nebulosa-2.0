import imgSPACEACADEMY from "assets/IMG/SPACEACADEMY.png";
import { Link } from "react-router-dom";
import './style.css';

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
      <Link to="/Register">
      <a href="#">Registrar</a>
      </Link>
    </ul>
  </nav>
  );
};

export default NavBar;
