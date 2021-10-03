import NavBar from "components/NavBar";
import imgAstronaut from "assets/IMG/astronauta.png";
import Footer from "components/Footer";

import './style.css';

import {
  FiUser,
  FiLock,
  FiLinkedin,
  FiChrome,
  FiFacebook,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PanelHome from "pages/PanelHome";


const Login = () => {
  return (
    <>
      <NavBar />
      <main className="main-login">
        <div className="form-container">
          <h2>Login</h2>
          <form action="">
            {/* Name */}
            <div className="input-field">
              <input
                type="username"
                name="username"
                id="text"
                placeholder="Entrar com seu Login"
              />
              <FiUser />
              <div className="underline"></div>
            </div>

            {/*Password*/}
            <div className="input-field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Entrar com sua Senha"
              />
              <FiLock />
              <div className="underline"></div>
            </div>

            {/* Checkbox */}
            <div className="input-field-checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />{" "}
              <span>Eu aceito os termos de responsabilidade</span>
            </div>

            {/* Button */}
            <Link to="/PanelHome">
              <input type="submit" value="Continuar"/>
            </Link>
          </form>

          {/*Icons Social Media */}
          <div className="social-media">
            {/* <h3>ou</h3> */}
            <div className="icons-svg">
              <a href="#">
                <i>
                  <FiFacebook size="36px"/>
                </i>
              </a>
              <a href="#">
                <i>
                  <FiChrome size="36px" />
                </i>
              </a>
              <a href="#">
                <i>
                  <FiLinkedin size="36px" />
                </i>
              </a>
            </div>
          </div>
        </div>

        {/*Img Astronauta */}
        <div className="img-container">
          <img src={imgAstronaut} alt="img-astronaut" />
        </div>

        {/* Register */}
        <div className="register">
          <div className="text">
            <h3>Caso não tenha conta, registre aqui!</h3>
            <Link to="/Register">
              <input type="submit" value="Registrar" />
            </Link>
          </div>
          <p>
            Esqueceu a senha?{" "}
            <span>
              <Link to="/ForgotPassword">
              <a> Clique aqui!</a>
              </Link>
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login
