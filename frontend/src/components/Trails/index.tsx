import imgFinances from "assets/IMG/finances.png";
import imgTecnologia from "assets/IMG/tecnologia.png";
import imgEmpreendimento from "assets/IMG/empreendimento.png";
import './style.css';

const Trails = () => {
    return (
        <section id="trailmix" className="trilhas">
        <h1 className="title-blue">Trilhas</h1>
        <p>Não acreditamos em educação sem diversão. Por isso, nossos cursos são desenhados como verdadeiras experiências de entretenimento e conduzidos por professores que são mestres em viver o que estão ensinando. De maneira rápida e prática, habilidades para a vida.</p>

        <div className="trilha-container">
            {/*Educação Financeira*/}
            <div className="trilha-card">
                <img src={imgFinances} alt="Ícone de Finanças" />
                <h2>Educação Financeira</h2>
                <p>Aprimore seus conhecimentos para você saber lhe dar com sua vida Financeira.</p>
            </div>

            {/*Tecnologia*/}
            <div className="trilha-card">
                <img src={imgTecnologia} alt="Ícone de Tecnologia" />
                <h2>Tecnologia</h2>
                <p> Aprenda Algoritmos e Lógica de Programação e muito mais sobre tecnologia de forma simples com vídeos aulas bem descontraídas.</p>
            </div>

            {/*Empreendimento*/}
            <div className="trilha-card">
                <img src={imgEmpreendimento} alt="Ícone de Empreendimento" />
                <h2>Empreendimento</h2>
                <p> Aprenda o processo de iniciativa de implementar novos negócios
                    ou mudanças em empresas já existentes. </p>
            </div>
        </div>
      </section>

    );
};

export default Trails;