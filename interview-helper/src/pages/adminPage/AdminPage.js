import './adminPage.css';
import QuestionCard from '../../component/questionCard/QuestionCard';

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
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </main>
        </div>
    )
}

export default AdmingPage;