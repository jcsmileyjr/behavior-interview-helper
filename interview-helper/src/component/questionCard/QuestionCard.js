import './questionCard.css';
import PlusSign from "../../images/plus-sign.png";

const QuestionCard = ({question}) => {
    const {topic, content} = question;
    return(
        <article className="card">                        
            <div className="card__title--container card__content--margin">
                <p>Topic: {topic}</p>
            </div>
            <div className="card__content--margin card__question--container">
                <p>{content}</p>
            </div>
            <div className="card__content--margin card__details--container">
                <img className="card__image--style" src={PlusSign} alt="clickable plus sign to provide more details on question" /> More
            </div>
            <div className="card__button--container">
                <button type="button" className="card__button--style">Practice</button> 
            </div>
        </article>
    );

}

export default QuestionCard;