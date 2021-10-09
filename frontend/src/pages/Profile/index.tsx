import NavBarPanel from "components/NavbarPanel";
import AsideSide from "components/AsideSide";

import ImgFtPerfil from "assets/IMG/ft-perfil.png";
import ImgAlgoritmo from "assets/IMG/algoritmo.png";
import ImgBolsaValores from "assets/IMG/app-bolsa-de-valores.png";
import ImgImobiliaria from "assets/IMG/casa-com-cifrao-para-negocios-imobiliarios.png";
import ImgMySql from "assets/IMG/mysql.png";
import ImgSalesforce from "assets/IMG/salesforce-logo.png";
import imgEmpreendimento from "assets/IMG/empreendimento.png";

import "./style.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <NavBarPanel />
      <main>
        <AsideSide />

        <section id="content">
          <div className="perfil-container">
            <img src={ImgFtPerfil} alt="Imagem de Perfil" />
            <div className="perfil-text">
              <h1>Your Name</h1>
              <p>Adicionar uma biografia</p>
              <h3>XP 0000/0000</h3>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="right-content">
              <Link to="/EditProfile">
                <a>Editar</a>
              </Link>
              <Link to="/PanelHome">
                <button>Dashboard</button>
              </Link>
            </div>
          </div>

          {/* Conquistas */}
          <section id="achievements">
            <div className="title">
              <h1>Conquistas</h1>
              <p>7</p>
              <div className="line"></div>
            </div>

            <div className="icons-achievements">
              <img className="icons-img" src={ImgAlgoritmo} alt="Algoritmo" />
              <img
                className="icons-img"
                src={ImgBolsaValores}
                alt="Bolsa de valores"
              />
              <img
                className="icons-img"
                src={ImgImobiliaria}
                alt="Imobiliário"
              />
              <img className="icons-img" src={ImgMySql} alt="MySQL" />
              <img className="icons-img" src={ImgSalesforce} alt="Salesforce" />
              <img
                className="icons-img"
                src={imgEmpreendimento}
                alt="empreendimento"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Profile;
