import ImgTesouroDireto from "./IMG/bau-de-tesouro.png";
import './style.css';

const TesouroDireto = () => {
    return (
        <>
        <div className="tesouro-cards">
              <img src={ImgTesouroDireto} alt="Imagem tesouro direto"/>
              <div className="text-content">
                <h3>TESOURO DIRETO</h3>
                <p>Já pensou em democratizar a compra e venda de títulos públicos federais por pessoas físicas através da internet?</p>
                <button>Começar</button>
              </div>
            </div>
        </>
    );
};
export default TesouroDireto;