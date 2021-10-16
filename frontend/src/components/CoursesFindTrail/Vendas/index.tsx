import ImgVendas from "./IMG/vendas.png";
import './style.css';

const Vendas = () => {
    return(
        <>
            <div className="vendas-cards">
              <img src={ImgVendas} alt="imagem vendas" />
              <div className="text-content">
                <h3>VENDAS</h3>
                <p>Quais são as principais técnicas de vendas que você pode aplicar na sua empresa para que tenha ganhos maiores? Saiba isso e muito mais aqui nessa trilha! </p>
                <a href="/page-trilha-conteudo/index.html">
                  <button>Começar</button>
                </a>  
              </div>
            </div>
        </>
    );
};
export default Vendas;