import "./recordingPage.css";
import React, { useState } from "react";
import Noise from "../../images/noise-icon.png";
import PlayIcon from "../../images/play-icon.png";
import PauseIcon from "../../images/pause-icon.png";
import StopIcon from "../../images/stop-icon.png";
import NewQuestionIcon from "../../images/newQuestion-icon.png";

const RecordingPage = ({ reviewQuestion, next }) => {
  const [activateNoiseIcon, setActivateNoiseIcon] = useState(false);

  const recordAnswer = () => {
    setActivateNoiseIcon(true);
  };

  const pauseAnswer = () => {
    setActivateNoiseIcon(false);
  };

  const stopAnswer = () => {
    setActivateNoiseIcon(false);
    next("EditPage");
  };

  return (
    <div className="recordingPage--container">
      <header>
        <p className="header__title--style question-styling">
          {reviewQuestion}
        </p>
      </header>
      <main>
        <section className="recordingPage__image--container">
          <h1>Playing</h1>
          <div className="animation-container">
            {activateNoiseIcon &&
              <div className="sound-container">
                <div class="rect-1"></div>
                <div class="rect-2"></div>
                <div class="rect-3"></div>
                <div class="rect-4"></div>
                <div class="rect-5"></div>
                <div class="rect-6"></div>
                <div class="rect-5"></div>
                <div class="rect-4"></div>
                <div class="rect-3"></div>
                <div class="rect-2"></div>
                <div class="rect-1"></div>
              </div>
            }
            {!activateNoiseIcon && 
              <img
                src={Noise}
                alt="icon of sound"
                className="recordingPage__image--style"
              />
            }
          </div>
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
          <div className="control">
            <button type="button" onClick={() => recordAnswer()}>
              <img src={PlayIcon} alt="play button" />
            </button>
            <p>Play</p>
          </div>
          <div className="control">
            <button type="button" onClick={() => pauseAnswer()}>
              <img src={PauseIcon} alt="pause button" />
            </button>
            <p>Pause</p>
          </div>
          <div className="control">
            <button type="button" onClick={() => stopAnswer()}>
              <img src={StopIcon} alt="stop button" />
            </button>
            <p>Stop</p>
          </div>
          <div className="control">
            <button type="button" onClick={() => next("AdminPage")}>
              <img src={NewQuestionIcon} alt="new questioin button" />
            </button>
            <p>New Question</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecordingPage;
