import Footer from "components/Footer";
import NavBar from "components/NavBar";
import imgPlanet from "assets/IMG/planet.png";
import {
    FiUser,
    FiLock,
    FiLinkedin,
    FiChrome,
    FiFacebook,
    FiMail,
  } from "react-icons/fi";
  import 'assets/CSS/style-register.css';

const Register = () => {
    return (
        <>
        <NavBar />
        <main>
      <div className="form-container">
        <h2>Registro</h2>
        <form action="">

           {/*<!-- Name -->*/}
            <div className="input-field">
                <input type="text" name="text" id="text" placeholder="Digite seu Nome" />
                <FiUser />
                <div className="underline"></div>
            </div>

            {/*<!-- Email -->*/}
            <div className="input-field">
                <input type="text" name="text" id="text" placeholder="Digite seu Email" />
                <FiMail />
                <div className="underline"></div>
            </div>

            {/*<!-- Password -->*/}
            <div className="input-field">
              <input type="password" name="password" id="password" placeholder="Digite sua Senha" />
              <FiLock />
              <div className="underline"></div>
          </div>

          {/*<!-- Password -->*/}
          <div className="input-field">
              <input type="password" name="password" id="password" placeholder="Confirme sua Senha" />
              <FiLock />
              <div className="underline"></div>
          </div>

            {/*<!-- Checkbox -->*/}
            <div className="input-field">
                <input type="checkbox" name="checkbox" id="checkbox" /> <span>Eu aceito os termos de responsabilidade</span> 
            </div>
            
            {/*<!-- Buttom -->*/}
            <input type="submit" value="Continuar" />
        </form>

        {/*<!-- Icons Social Media -->*/}
        <div className="social-media">
          <h3>ou</h3>
            <div className="icons-svg">
              <a href="#"> <FiFacebook size="36px" /></a>
              <a href="#"> <FiChrome size="36px" /></a>
              <a href="#"> <FiLinkedin size="36px" /></a>
            </div>
        </div>
      </div>
      
      {/*<!-- Img Planet -->*/}
      <div className="img-container">
        <img src={imgPlanet} alt="img-planet"/>
      </div>
      
    </main>        
        <Footer />
        </>
    );
};
export default Register;