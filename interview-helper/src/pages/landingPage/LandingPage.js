import "./landingPage.css";
import smallSpeaker from "../../images/speaking-1-80p.png";
import largeSpeaker from "../../images/speaking-2-90p.png";
import smallerSpeaker from "../../images/speaking-4-80p.png";

const LandingPage = ({next}) => {
  return (
    <div className="landingPage--container">
      <header>
        <p className="header__title--style">Behavior Interview Helper</p>
      </header>
      <main>
        <div className="landingPage__content--container">
          <div className="landingPage__contentImage--container">
            <div className="contentImage__text--container">
              <p className="contentImage__title--style">"Tell me about yourself"</p>
              
              <p className="contentImage__content--style">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            </div>
            
            <picture className="contentImage__container--placement">
              <source media="(min-width:500px)" srcSet={largeSpeaker} />
              <source media="(min-width:366px)" srcSet={smallSpeaker} />
              <source media="(max-width:365px)" srcSet={smallerSpeaker} />
              <img className="landingPage__img--style" src={smallSpeaker} alt="" />
            </picture>
          </div>
          <div className="landingPage__contentText--container">
            <div>
              <h1 className="page__title--style showDesktopView">Practice for the Interview</h1>
              <p><span>Think </span>of your answer</p>
              <p><span>Say </span>your answer</p>
              <p><span>Read </span>your answer</p>
              <p><span>Edit </span>your answer</p>
            </div>
          </div>
        </div>
        <div className="landingPage__contentCTA--container">
          <button onClick={() => next()} type="button" className="contentCTA__button--style">Practice</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
