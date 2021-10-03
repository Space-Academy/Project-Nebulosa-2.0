import imgPERFIL from "assets/IMG/img-perfil.png";
import './style.css';

const AsideSide = () => {
    return (
            <main id="content">
            {/* Menu Lateral */}
            <aside id="bio-container">
                <div className="perfil">
                <img src={imgPERFIL} alt="Imagem de Perfil" />
                    <div className="content">
                        <h3>Michael Jackson</h3>
                        <p><span>Seu nível: </span>Marte</p>
                        <h5>Experiência 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>

                <div className="linha-perfil"></div>

                <div className="top-five">
                    <h2>TOP 5 DAS GALAXY</h2>

                    {/* First Place */}
                    <div className="top-placements">
                        <div className="img-top">
                        <p>1°</p>
                        <img src={imgPERFIL} alt="Imagem de Perfil" />
                        </div>
                        <div className="content-perfil">
                        <h3>Erik Nathan</h3>
                        <h5>XP 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        </div>
                    </div>

                    {/* Secund Place */}
                    <div className="top-placements">
                        <div className="img-top">
                        <p>2°</p>
                        <img src={imgPERFIL} alt="Imagem de Perfil" />
                        </div>
                        <div className="content-perfil">
                        <h3>Erik Nathan</h3>
                        <h5>XP 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        </div>
                    </div>

                    {/* Third Place */}
                    <div className="top-placements">
                        <div className="img-top">
                        <p>3°</p>
                        <img src={imgPERFIL} alt="Imagem de Perfil" />
                        </div>
                        <div className="content-perfil">
                        <h3>Erik Nathan</h3>
                        <h5>XP 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        </div>
                    </div>

                    {/* Fourt Place */}
                    <div className="top-placements">
                        <div className="img-top">
                        <p>4°</p>
                        <img src={imgPERFIL} alt="Imagem de Perfil" />
                        </div>
                        <div className="content-perfil">
                        <h3>Erik Nathan</h3>
                        <h5>XP 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        </div>
                    </div>

                    {/* Fifht Place */}
                    <div className="top-placements">
                        <div className="img-top">
                        <p>5°</p>
                        <img src={imgPERFIL} alt="Imagem de Perfil" />
                        </div>
                        <div className="content-perfil">
                        <h3>Erik Nathan</h3>
                        <h5>XP 0000/0000</h5>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    )
}

export default AsideSide