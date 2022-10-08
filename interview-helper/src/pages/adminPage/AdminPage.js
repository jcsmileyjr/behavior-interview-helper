import './adminPage.css';

/**
 * Setup HTML & Content architecture - DONE
 * Setup section design responsiveness
 *  - Mobile
 *  - Desktop
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
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>  
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>
                    <article>
                        <div class="card">
                            <div>
                                <p>Topic: Teamwork</p>
                            </div>
                            <div>
                                <p>Tell me about a time when you had to work closely with someone whose personality was very different from yours?</p>
                            </div>
                            <div>
                                <span>plus</span> More
                            </div>
                            <div>
                                <button type="button">Practice</button> 
                            </div>
                        </div>
                    </article>                                                   

                </div>
            </main>
        </div>
    )
}

export default AdmingPage;