import ImgSalesForce from "./IMG/salesforce.png";
import './style.css';

const SalesForce = () => {
    return(
        <>
            <div className="salesforce-cards">
              <img src={ImgSalesForce} alt="imagem banco de dados" />
              <div className="text-content">
                <h3>SALESFORCE</h3>
                <p>Aprenda uma plataforma de CRM integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.</p>
                <a href="/page-trilha-conteudo/index.html">
                  <button>Começar</button>
                </a>  
              </div>
            </div>
        </>
    );
};
export default SalesForce;