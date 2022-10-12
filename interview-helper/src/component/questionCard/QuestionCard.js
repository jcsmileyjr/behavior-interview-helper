import Modal from "react-modal";
import React from "react";
import "./questionCard.css";
import PlusSign from "../../images/plus-sign.png";
import { useState } from "react";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const QuestionCard = ({ question, start }) => {
  const { topic, content, intent, id } = question;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = useState('Teamwork');

  React.useEffect(() => {
    if(question.topic === "Teamwork"){
      setBackgroundColor("teamworkBGColor");
    }else if(question.topic ==="Time Managment"){
      setBackgroundColor("timeManagmentBGColor")
    }else if(question.topic === "MotivationValues"){
      setBackgroundColor("motivationValuesBGColor")
    }else if(question.topic ==="Communication"){
      setBackgroundColor("communicationBGColor")
    }else{
      setBackgroundColor("otherBGColor");
    }
  }, [question.topic]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <article className="card" id="card">
      <div className={`card__title--container card__content--margin ${backgroundColor}`}>
        <p>Topic: {topic}</p>
      </div>
      <div className="card__content--margin card__question--container">
        <p>{content}</p>
      </div>
      <div
        id={id}
        onClick={() => openModal()}
        className="card__content--margin card__details--container"
      >
        <span>
          <img
            className="card__image--style"
            src={PlusSign}
            alt="clickable plus sign to provide more details on question"
          />
          More
        </span>
      </div>
      <div className="card__button--container">
        <button type="button" className="card__button--style" onClick={() => start(question.content)}>
          Practice
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className="modal__title--style">{content}</h2>
        <p className="modal__intent--style">
          <span className="modal__example--style">Example:</span>
          {intent}
        </p>
        <div>
          <p>Remember to use the S.T.A.R method</p>
          <ol>
            <li>Situation</li>
            <li>Task</li>
            <li>Action</li>
            <li>Results</li>
          </ol>
        </div>
        <div className="modal__button--container">
          <button className="card__button--style" onClick={closeModal}>
            close
          </button>
        </div>
      </Modal>
    </article>
  );
};

export default QuestionCard;
