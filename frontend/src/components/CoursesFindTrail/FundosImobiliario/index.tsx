import ImgFundosImobiliario from "./IMG/cifrao.png";
import './style.css';

const FundosImobiliario = () => {
    return(
        <>
         <div className="fundos-cards">
              <img src={ImgFundosImobiliario} alt="imagem fundos imobiliario" />
              <div className="text-content">
                <h3>FUNDO IMOBILIARIO</h3>
                <p>Aprenda a investir seu dinheiro através do fundo imobiliário, aplique
                  da maneira correta em empreendimentos imobiliários.</p>
                <button>Começar</button>
              </div>
            </div>
        </>
    );
};
export default FundosImobiliario;
