import AboutMe from "components/AboutMe";
import Contact from "components/Contact";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Starter from "components/Starter";
import Trails from "components/Trails";

import "./style.css"

const Home = () => {
    return (
        <>
        <NavBar />
        
        {/*Header*/}
        <Starter />

        {/*Sobre*/}
        <AboutMe />

        {/*Trilhas*/}
        <Trails />

        {/*Contato*/}
        <Contact />

        <Footer />

        </>
    );
};
export default Home;