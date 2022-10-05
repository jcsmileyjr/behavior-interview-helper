import "./landingPage.css";
/**
 * Setup Landing Page architeture - done
 * Setup initial responsive designs - done
 * Setup HTML elements and styles names
 * Setup root global styles
 * Setup styles
 * @returns
 */
const LandingPage = () => {
  return (
    <div className="landingPage--container">
      <header></header>
      <main>
        <div className="landingPage__content--container">
          <div className="landingPage__contentImage--container"></div>
          <div className="landingPage__contentText--container"></div>
        </div>
        <div className="landingPage__contentCTA--container"></div>
      </main>
    </div>
  );
};

export default LandingPage;
