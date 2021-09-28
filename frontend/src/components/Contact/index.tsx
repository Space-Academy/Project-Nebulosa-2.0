import imgContato from "assets/IMG/contato.png";
import './style.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
        <h1 className="title-blue">Contato</h1>

        <div className="contact-container">
            
            <form action="">
                <label >
                    <span>Nome</span>
                    <input type="text" id="name" name="name" />
                </label>

                <label>
                    <span>Email</span>
                    <input type="email" id="email" name="email" />
                </label>

                <label>
                    <span>Mensagem</span>
                    <input className="mensage" type="text" id="text" name="text" />
                </label>

                <input className="btn-contact" type="submit" value=" Entrar em contato!" />
            </form>

            <div className="img-container">
                <img src={imgContato} alt="img-contact" />
            </div>
        </div>
    </section>

    );
};
export default Contact;