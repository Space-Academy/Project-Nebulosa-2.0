import ImgSearch from "assets/IMG/foguete-panel-home.png";
import ImgContinue from "assets/IMG/astronaut-panel-homepng.png";
import ImgCreate from "assets/IMG/planet-panel-home.png";
import ImgReport from "assets/IMG/bell-panel-home.png";
import ImgProfile from "assets/IMG/img-perfil.png";
import ImgFogueteBottom from "assets/IMG/foguete-bottom-panel-home.png";
import ImgGraphics from "assets/IMG/grafics-panel-home.png";

import "./style.css";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const AccessCardsMenu = () => {
  return (
    <>
      <h1>Acelere seu aprendizado com a gente!</h1>
      <div className="cards">
        <Link to="/FindTrail">
          <div className="card-one">
            <img src={ImgSearch} alt="Imagem de foguete" />
            <p>ENCONTRAR SUA TRILHA</p>
          </div>
        </Link>

        <Link to="/">
          <div className="card-two">
            <img src={ImgContinue} alt="Imagem do astronaut" />
            <p>CONTINUAR MINHA TRILHA</p>
          </div>
        </Link>

        <Link to="/">
          <div className="card-three">
            <img src={ImgCreate} alt="Imagem de planeta" />
            <p>CRIAR UMA TRILHA</p>
          </div>
        </Link>

        <Link to="/">
          <div className="card-four">
            <img src={ImgReport} alt="Imagem de bell" />
            <p>REPORTAR UMA TRILHA</p>
          </div>
        </Link>
      </div>

      {/*Cards Bottom*/}
      <div className="cards-bottom">
        <div className="card-visited">
          <h4>TRILHAS MAIS VISITADAS</h4>

          <div className="content-visited">
            <div className="visited-container">
              <div className="top-three">
                <div className="top-three-profile">
                  <p>1°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>BOLSA DE VALORES</h3>
                  <p>
                    <span>ACESSOS: </span>1000 views
                  </p>
                </div>
              </div>

              <div className="top-three">
                <div className="top-three-profile">
                  <p>2°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>B.D COM MYSQL</h3>
                  <p>
                    <span>ACESSOS: </span>800 views
                  </p>
                </div>
              </div>

              <div className="top-three">
                <div className="top-three-profile">
                  <p>3°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>SALESFORCE</h3>
                  <p>
                    <span>ACESSOS: </span>7000 views
                  </p>
                </div>
              </div>
            </div>

            <div className="img-visited">
              <img src={ImgFogueteBottom} alt="Imagem de foguete-bottom" />
            </div>
          </div>
        </div>

        <div className="card-stars">
          <h4>TRILHAS COM MAIS ESTRELAS</h4>
          <div className="content-stars">
            <div className="stars-container">
              <div className="top-three">
                <div className="top-three-profile">
                  <p>1°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>ALGORITMO E L.P</h3>
                  <div className="star-cards">
                    <span>
                      <FiStar />
                      <FiStar />
                      <FiStar />
                      <FiStar />
                    </span>
                    <FiStar />
                  </div>
                </div>
              </div>

              <div className="top-three">
                <div className="top-three-profile">
                  <p>2°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>GESTÃO DE PROJETOS</h3>
                  <div className="star-cards">
                    <span>
                      <FiStar />
                      <FiStar />
                      <FiStar />
                    </span>
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>

              <div className="top-three">
                <div className="top-three-profile">
                  <p>3°</p>
                  <img src={ImgProfile} alt="Imagem de Perfil" />
                </div>
                <div className="top-three-text">
                  <h3>TESOURO DIRETO</h3>
                  <div className="star-cards">
                    <span>
                      <FiStar />
                      <FiStar />
                    </span>
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                </div>
              </div>
            </div>

            <div className="img-visited">
              <img src={ImgGraphics} alt="Imagem do grafico" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessCardsMenu;
