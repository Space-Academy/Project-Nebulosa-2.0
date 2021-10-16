import BolsaDeValores from 'components/CoursesFindTrail/BolsaDeValores';
import FundosImobiliario from 'components/CoursesFindTrail/FundosImobiliario';
import TesouroDireto from 'components/CoursesFindTrail/TesouroDireto';
import './style.css';
const Finances = () => {
    return(
        <>
        <div className="financas">
            <h1>Finanças</h1>
            <div className="trilhas-cards">
                <BolsaDeValores />
                <TesouroDireto />
                <FundosImobiliario />

            </div>
        </div>
        </>
    );
};
export default Finances;