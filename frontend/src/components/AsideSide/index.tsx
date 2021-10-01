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
            </aside>
        </main>
    )
}

export default AsideSide