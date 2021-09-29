import "./style.css";

import { FiLock } from "react-icons/fi";

import imgAstronaut from "assets/IMG/astronauta.png";
import { Link } from "react-router-dom";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const ForgotPassword = () => {
  return (
    <>
      <NavBar />
      <main className="main-ForgotPassword">
        <div className="form-container-ForgotPassword">
          <h2>Nova Senha</h2>
          <form action="">
            {/* Name */}
            <div className="input-field">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Nova Senha"
              />
              <FiLock />
              <div className="underline"></div>
            </div>

            {/*Password*/}
            <div className="input-field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirmar Senha"
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
            <Link to="/Login">
                <input type="submit" value="Continuar" />
            </Link>
          </form>
        </div>

        {/*Img Astronauta */}
        <div className="img-container">
          <img src={imgAstronaut} alt="img-astronaut" />
        </div>

      </main>
      <Footer />
    </>
  );
};

export default ForgotPassword;
