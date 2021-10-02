import Footer from "components/Footer";
import NavBar from "components/NavBar";
import imgAstronaut from "assets/IMG/astronauta.png";
import './styles.css';

import {
    FiUser,
    FiLock,
    FiLinkedin,
    FiChrome,
    FiFacebook,
    FiMail,
  } from "react-icons/fi";

const Register = () => {
    return (
        <>
        <NavBar />
        <main className="register">
          <div className="form-container-register">
            <h2>Registro</h2>
            <form action="">
              {/*<!-- Name -->*/}
              <div className="input-field-register">
                  <input type="text" name="text" id="text" placeholder="Digite seu Nome" />
                  <FiUser />
                  <div className="underline-register"></div>
              </div>

              {/*<!-- Email -->*/}
              <div className="input-field-register">
                  <input type="text" name="text" id="text" placeholder="Digite seu Email" />
                  <FiMail />
                  <div className="underline-register"></div>
              </div>

              {/*<!-- Password -->*/}
              <div className="input-field-register">
                <input type="password" name="password" id="password" placeholder="Digite sua Senha" />
                <FiLock />
                <div className="underline-register"></div>
              </div>

              {/*<!-- Password -->*/}
              <div className="input-field-register">
                  <input type="password" name="password" id="password" placeholder="Confirme sua Senha" />
                  <FiLock />
                  <div className="underline-register"></div>
              </div>

              {/*<!-- Checkbox -->*/}
              <div className="input-field-register-checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" /> <span>Eu aceito os termos de responsabilidade</span> 
              </div>
              
              {/*<!-- Buttom -->*/}
              <input type="submit" value="Continuar" />
            </form>

              {/*<!-- Icons Social Media -->*/}
              <div className="social-media-register">
                {/* <h3>ou</h3> */}
                  <div className="icons-svg-register">
                    <a href="#"> <FiFacebook size="36px" /></a>
                    <a href="#"> <FiChrome size="36px" /></a>
                    <a href="#"> <FiLinkedin size="36px" /></a>
                  </div>
              </div>
          </div>
      
          {/*<!-- Img Planet -->*/}
          <div className="img-container-register">
            <img src={imgAstronaut} alt="img-Astronaut"/>
          </div>
      
        </main>        

        <Footer />
        </>
    );
};

export default Register;