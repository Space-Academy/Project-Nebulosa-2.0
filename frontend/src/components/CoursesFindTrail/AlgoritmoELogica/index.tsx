import ImgAlgoritmoELogica from "./IMG/algoritmo.png";
import './style.css';

const AlgoritmoELogica = () => {
    return(
        <>
            <div className="algoritmo-cards">
              <img src={ImgAlgoritmoELogica} alt="imagem algoritmo e logica" />
              <div className="text-content">
                <h3>ALGORITMO E LÓGICA DE PROGRAMAÇÃO</h3>
                <p>Aprenda Algoritmos e Lógica de Programação de forma simples com vídeos aulas bem descontraídas</p>
                <a href="/page-trilha-conteudo/index.html">
                  <button>Começar</button>
                </a>  
              </div>
            </div>
        </>
    );
};
export default AlgoritmoELogica;