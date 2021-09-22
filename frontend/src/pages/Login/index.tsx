import NavBar from "components/NavBar";
import imgPlanet from "assets/IMG/planet.png";
import {
  FiUser,
  FiLock,
  FiLinkedin,
  FiChrome,
  FiFacebook,
} from "react-icons/fi";
import Footer from "components/Footer";
import { Redirect } from "react-router";
import 'assets/CSS/style-login.css';


const Login = () => {
  return (
    <>
      <NavBar />
      <main>
        <div className="form-container">
          <h2>Login</h2>
          <form action="">
            {/* Name */}
            <div className="input-field">
              <input
                type="text"
                name="text"
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
            <div className="input-field">
              <input type="checkbox" name="checkbox" id="checkbox" />{" "}
              <span>Eu aceito os termos de responsabilidade</span>
            </div>

            {/* Button */}
            <input type="submit" value="Continuar" />
          </form>

          {/*Icons Social Media */}
          <div className="social-media">
            <h3>ou</h3>
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

        {/*Img PLanet */}
        <div className="img-container">
          <img src={imgPlanet} alt="img-planet" />
        </div>

        {/* Register */}
        <div className="register">
          <div className="text">
            <h3>Caso não tenha conta, registre aqui!</h3>
            <input type="submit" value="Registrar" />
          </div>
          <p>
            Esqueceu a senha?{" "}
            <span>
              <a href="#"> Clique aqui!</a>
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Login;
