import "./landingPage.css";
import smallSpeaker from "../../images/speaking-1-80p.png";
import largeSpeaker from "../../images/speaking-2.png";

/**
 * Setup Landing Page architeture - done
 * Setup initial responsive designs - done
 * Setup HTML elements and styles names - done
 * Setup root global styles - done
 * Setup styles
 * @returns
 */
const LandingPage = () => {
  return (
    <div className="landingPage--container">
      <header>
        <p className="header__title--style">Behavior Interview Helper</p>
      </header>
      <main>
        <div className="landingPage__content--container">
          <div className="landingPage__contentImage--container">
            <div>
              <p>"Tell me about yourself"</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
            
            <picture>
              <source media="(max-width:500px)" srcset={smallSpeaker} />
              <source media="(min-width:501px)" srcset={largeSpeaker} />
              <img src={largeSpeaker} alt="" />
            </picture>
          </div>
          <div className="landingPage__contentText--container">
            <h1 className="page__title--style showDesktopView">Practice for the Interview</h1>
            <p><span>Think </span>of your answer</p>
            <p><span>Say </span>your answer</p>
            <p><span>Read </span>your answer</p>
            <p><span>Edit </span>your answer</p>
          </div>
        </div>
        <div className="landingPage__contentCTA--container">
          <button type="button" className="contentCTA__button--style">Practice</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
