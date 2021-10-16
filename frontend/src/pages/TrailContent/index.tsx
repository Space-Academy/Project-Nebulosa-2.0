import ClasseTrail from "components/ClasseTrail";
import Footer from "components/Footer";
import NavBarPanel from "components/NavbarPanel";
import ImgDolar from "./IMG/dollar.png";
import "./style.css";

const TrailContent = () => {
  return (
    <>
      <NavBarPanel />
      <main>
        <aside id="asideTrailContent">
          <div className="text-content">
            <h1>Finanças</h1>
            <p>
              Dar importância às finanças é um processo fundamental. As finanças
              têm ocupado uma posição cada vez mais estratégica para o negócio
              da empresa. Isso significa que a responsabilidade da área será
              muito maior. Manter a conformidade da área é função chave, mas a
              necessidade de se adaptar as novas mudanças é grande.
            </p>
            <p>
              {" "}
              <strong>Créditos das aulas:</strong>{" "}
              <a
                href="https://www.youtube.com/playlist?list=PLw0wwQUldr2LMkM_CBkg5ftyDXmhrJSqK"
                target="_blanck"
              >
                {" "}
                Click Aqui e você será redirecionado!
              </a>{" "}
            </p>
            <button className="reportar">Reportar Trilha</button>
            <button>Editar Trilha</button>
          </div>
          <div className="img-content">
            <img src={ImgDolar} alt="imagem de astrounauta" />
          </div>
          {/* onclick="abrirModal()" */}
        </aside>
      </main>
      <section className="content-trail">
        <h1>Bolsa de Valores</h1>
        <p id="description">
          Aqui você vai ficar por dentro de como investir seu dinheiro da
          maneira correta e garantir seu futuro da melhor forma!
        </p>
        <ClasseTrail />
        <ClasseTrail />
        <ClasseTrail />
        <ClasseTrail />
        
      </section>

      <Footer />
    </>
  );
};
export default TrailContent;
