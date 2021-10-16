import "./style.css";
const ClasseTrail = () => {
  return (
    <>
      <div className="classes">
        <h2>
          <span>Aula 01 | </span>INTRODUÇÃO AO CURSO
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          dolorem ex sint placeat dolores perspiciatis sunt, fugiat ducimus
          adipisci asperiores mollitia architecto, maiores provident
          reprehenderit animi consequatur velit saepe rem!
        </p>
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/otPgkqfmA40"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default ClasseTrail;
