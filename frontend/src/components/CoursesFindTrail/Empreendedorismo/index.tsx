import ImgEmpreendedorismo from "./IMG/empreendimento.png";
import './style.css';

const Empreendedorismo = () => {
    return(
        <>
         <div className="empreendedorismo-cards">
              <img src={ImgEmpreendedorismo} alt="imagem empreendedorimo" />
              <div className="text-content">
                <h3>EMPREENDEDORIMO</h3>
                <p>Aprenda o processo de iniciativa de implementar novos negócios ou mudanças em empresas já existentes.</p>
                <button>Começar</button>
              </div>
            </div>
        </>
    );
};
export default Empreendedorismo;
