import React, { useState} from "react";
import './questionCard.css';
import PlusSign from "../../images/plus-sign.png";
import MinusSign from "../../images/minus-sign.png";

const QuestionCard = ({question}) => {
    const {topic, content, intent} = question;

    const [showIntent, setIntent] = useState(false);

    return(
        <article className="card">                        
            <div className="card__title--container card__content--margin">
                <p>Topic: {topic}</p>
            </div>
            <div className="card__content--margin card__question--container">
                <p>{content}</p>
            </div>
            <div onClick={()=> setIntent(!showIntent)} className="card__content--margin card__details--container">
                {!showIntent &&
                    <span><img className="card__image--style" src={PlusSign} alt="clickable plus sign to provide more details on question" /> More</span>
                }
                {showIntent &&
                    <p><img className="card__image--style" src={MinusSign} alt="clickable minus sign to hide extra details on question" /> {intent}</p>
                }
            </div>
            <div className="card__button--container">
                <button type="button" className="card__button--style">Practice</button> 
            </div>
        </article>
    );

}

export default QuestionCard;