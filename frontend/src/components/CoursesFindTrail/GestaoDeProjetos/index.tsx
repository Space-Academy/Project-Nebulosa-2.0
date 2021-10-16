import ImgGestaoDeProjetos from "./IMG/GESTAO-PROJETOS.png";
import './style.css';

const GestaoDeProjetos = () => {
    return(
        <>
            <div className="gestao-cards">
              <img src={ImgGestaoDeProjetos} alt="imagem gestao de projetos" />
              <div className="text-content">
                <h3>GESTÃO DE PROJETOS</h3>
                <p>Aprenda sobre a área da administração que aplica os conhecimentos, as habilidades e as técnicas para elaboração de atividades. </p>
                <a href="/page-trilha-conteudo/index.html">
                  <button>Começar</button>
                </a>  
              </div>
            </div>
        </>
    );
};
export default GestaoDeProjetos;