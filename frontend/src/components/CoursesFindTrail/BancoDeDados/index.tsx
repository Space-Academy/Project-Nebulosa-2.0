import ImgBancoDeDados from "./IMG/mysql.png";
import './style.css';

const BancoDeDados = () => {
    return(
        <>
            <div className="banco-de-dados-cards">
              <img src={ImgBancoDeDados} alt="imagem banco de dados" />
              <div className="text-content">
                <h3>BANCO DE DADOS COM MYSQL</h3>
                <p>Aprenda a criar um Banco de Dados com uma maneira simples e interativa de aprendizado.</p>
                <a href="/page-trilha-conteudo/index.html">
                  <button>Começar</button>
                </a>  
              </div>
            </div>
        </>
    );
};
export default BancoDeDados;