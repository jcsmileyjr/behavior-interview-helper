import React, { useState} from "react";
import fakeData from "../../development-data/questions.json";
import "./adminPage.css";
import QuestionCard from "../../component/questionCard/QuestionCard";

const AdmingPage = ({start, next}) => {
  const [questions, setQuestions] = useState(fakeData);

  return (
    <div className="adminPage--container">
      <header className="header__title--style" onClick={()=> next("LandingPage")}>
        Behavior Interview Helper
      </header>
      <main className="adminPage__content--container">
        <p className="adminPage__pageTitle--style">Choose One</p>
        <div className="adminPage__card--container" id="test">
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} start={start} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdmingPage;
