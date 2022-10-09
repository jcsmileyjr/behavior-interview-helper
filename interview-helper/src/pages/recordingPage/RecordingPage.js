import "./recordingPage.css";
import Noise from "../../images/noise-icon.png";

const RecordingPage = () => {
  return (
    <div className="recordingPage--container">
      <header>
        <p className="header__title--style">Behavior Interview Helper</p>
      </header>
      <main>
        <section className="recordingPage__image--container">
          <h1>Playing</h1>
          <img src={Noise} alt="icon of sound" className="recordingPage__image--style" />
        </section>
        <div className="recordingPage__content--container">
          <section className="content__recording--container">
            <h3>Recording</h3>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>
          <section className="content__previousAnswer--container">
            <h3>Previous Answer</h3>
            <p>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>
        </div>
        <div className="recordingPage__controls--container">
          <button type="button">Play</button>
          <button type="button">Pause</button>
          <button type="button">Stop</button>
          <button type="button">New Question</button>
        </div>
      </main>
    </div>
  );
};

export default RecordingPage;
