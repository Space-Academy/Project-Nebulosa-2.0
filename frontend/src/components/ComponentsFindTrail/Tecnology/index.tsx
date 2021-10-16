import AlgoritmoELogica from "components/CoursesFindTrail/AlgoritmoELogica";
import BancoDeDados from "components/CoursesFindTrail/BancoDeDados";
import SalesForce from "components/CoursesFindTrail/SalesForce";
import "./style.css";
const Tecnology = () => {
  return (
    <>
      <div className="tecnologia">
        <h1>Tecnologia</h1>
        <div className="trilhas-cards">
          <AlgoritmoELogica />
          <BancoDeDados />
          <SalesForce />
        </div>
      </div>
    </>
  );
};

export default Tecnology;
