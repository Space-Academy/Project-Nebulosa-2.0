import imgFogueteSobre from "assets/IMG/foguete-sobre.png";
import './style.css';

const AboutMe = () => {
    return (
      <>
        <section id="aboutMe" className="about-me">
        <div className="container">
          <h1 className="title-blue">Sobre</h1>
            <p>
                Tem coisas que não se aprendem na escola. Por isso, decidimos reunir, "didatizar" e disponibilizar os conhecimentos da vida. Aqui, nossos alunos e professores aprendem e compartilham experiências e habilidades que a escola não ensina. <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestiae ab aperiam iusto cum magni libero repudiandae mollitia in modi veritatis vel, omnis nam animi corporis? Maiores eum excepturi deserunt.
            </p>          
        </div>
        <div className="img-container">
          <img src={imgFogueteSobre} alt="img-foguete" />
        </div>
      </section>
      </>
    ); 
};
export default AboutMe;