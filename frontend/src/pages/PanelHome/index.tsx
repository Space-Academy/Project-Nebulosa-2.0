import NavBarPanel from "components/NavbarPanel";
import AsideSide from "components/AsideSide";
import AccessCardsMenu from "components/AccessCardsMenu";

const PanelHome = () => {
  return (
    <>
      <NavBarPanel />
      <main>
        <AsideSide />
        <section id="content">
          <AccessCardsMenu />
        </section>
      </main>
    </>
  );
};

export default PanelHome;
