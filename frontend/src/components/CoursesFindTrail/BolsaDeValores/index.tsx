import { Link } from "react-router-dom";
import ImgBolsaDeValores from "./IMG/bolsa-de-valores.png";
import "./style.css";

const BolsaDeValores = () => {
  return (
    <>
      <div className="bolsa-de-valores-cards">
        <img src={ImgBolsaDeValores} alt="imagem bolsa de valores" />
        <div className="text-content">
          <h3>BOLSA DE VALORES</h3>
          <p>
            Aqui você vai ficar por dentro de como investir seu dinheiro da
            maneira certa e garantir seu futuro da melhor forma.
          </p>
          <Link to="/trilha-bolsa-de-valores">
            <a href="/page-trilha-conteudo/index.html">
              <button>Começar</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default BolsaDeValores;
