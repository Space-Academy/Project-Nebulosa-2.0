import imgFoguete from "assets/IMG/foguete.png";
import { Link } from "react-router-dom";
import './style.css';

const Starter = () => {
    return (
        <header>
        <div className="container">
          <h1 className="title-write">
            Aqui você <span>Decola</span>
          </h1>
          <p>
            Tem coisas que não se aprendem na escola. Por isso, decidimos
            reunir, "didatizar" e disponibilizar os conhecimentos da vida. Aqui,
            nossos alunos e professores aprendem e compartilham experiências e
            habilidades que a escola não ensina.
          </p>
          <Link to="/Login">
            <button>Começar!</button>
          </Link>
        </div>
        <div className="image-foguete">
          <img src={imgFoguete} alt="foguete" />
        </div>
      </header>
    ); 
};
export default Starter;