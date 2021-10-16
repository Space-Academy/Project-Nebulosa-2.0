import Empreendedorismo from "components/CoursesFindTrail/Empreendedorismo";
import GestaoDeProjetos from "components/CoursesFindTrail/GestaoDeProjetos";
import Vendas from "components/CoursesFindTrail/Vendas";
import "./style.css";
const Administration = () => {
  return (
    <>
      <div className="administracao">
        <h1>Administração</h1>
        <div className="trilhas-cards">
          <Empreendedorismo />
          <GestaoDeProjetos />
          <Vendas />
        </div>
      </div>
    </>
  );
};

export default Administration;
