import Administration from "components/ComponentsFindTrail/Administration";
import Finances from "components/ComponentsFindTrail/Finances";
import Tecnology from "components/ComponentsFindTrail/Tecnology";
import Footer from "components/Footer";
import NavBarPanel from "components/NavbarPanel";
import ImgAstronaut from "./IMG/astronaut.png";
import "./style.css";

const FindTrail = () => {
  return (
    <>
      <NavBarPanel />
        <aside id="asideFindTrail">
          <div className="text-content">
            <h1>Encontre sua Trilha</h1>
            <p>
              Não acreditamos em educação sem diversão. Por isso, nossos cursos
              são desenhados como verdadeiras experiências de entretenimento e
              conduzidos por professores que são mestres em viver o que estão
              ensinando. De maneira rápida e prática, habilidades para a vida.
            </p>
          </div>
          <div className="img-content">
            <img src={ImgAstronaut} alt="imagem de astrounauta" />
          </div>
        </aside>

        <section className="trilhas-container">
          <Finances />
          <Tecnology />
          <Administration />
        </section>

        <Footer />
    </>
  );
};
export default FindTrail;
