import AsideSide from "components/AsideSide";
import NavBarPanel from "components/NavbarPanel";
import ImgProfile from "assets/IMG/ft-perfil.png";
import { FiCamera } from "react-icons/fi";

import "./style.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <>
      <NavBarPanel />
      <main>
        <AsideSide />
        <section id="content">
          <div className="perfil-foto">
            <img src={ImgProfile} alt="Imagem de Perfil" />
            <div className="select-image">
              <p>Foto</p>
              <input type="file" id="file" accept="image/*" />
              <label>
                <FiCamera />
                Escolher foto
              </label>
            </div>
          </div>

          <div className="form-container">
            <form action="">
              <div className="edit-name">
                <p>Nome</p>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Editar seu nome"
                />
              </div>

              <div className="edit-mail">
                <p>Email</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Editar seu email"
                />
              </div>

              <div className="edit-password">
                <div className="password">
                  <p>Senha</p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Editar sua senha"
                  />
                </div>
                <div>
                  <p>Confirmar senha</p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>

              <div className="btn-edition">
                <Link to="/Profile">
                    <input type="submit" value="Cancelar" />
                    <input type="submit" value="Salvar" />
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default EditProfile;
