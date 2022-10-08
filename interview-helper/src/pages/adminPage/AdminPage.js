import './adminPage.css';
import PlusSign from "../../images/plus-sign.png";

/**
 * Setup HTML & Content architecture - DONE
 * Setup section design responsiveness - DONE
 *  - Mobile - DONE
 *  - Desktop - DONE
 * Setup styling for page elements
 *  - Get one card looking correct
 *  - Break off into a component
 * Setup design responsiveness for cards
 *  - dummy data for 9 cards
 *  
 * @returns 
 */
const AdmingPage = () => {
    return(
        <div className="adminPage--container">
            <header className="header__title--style"> Behavior Interview Helper</header>
            <main className="adminPage__content--container">
                <p className="adminPage__pageTitle--style">Choose One</p>
                <div className="adminPage__card--container">
                    <article className="card">                        
                        <div className="card__title--container card__content--margin">
                            <p>Topic: Teamwork</p>
                        </div>
                        <div className="card__content--margin card__question--container">
                            <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                        </div>
                        <div className="card__content--margin card__details--container">
                            <img className="card__image--style" src={PlusSign} alt="clickable plus sign to provide more details on question" /> More
                        </div>
                        <div className="card__button--container">
                            <button type="button" className="card__button--style">Practice</button> 
                        </div>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default AdmingPage;