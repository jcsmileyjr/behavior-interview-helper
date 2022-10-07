import './adminPage.css';

const AdmingPage = () => {
    return(
        <div>
            <header> Behavior Interview Helper</header>
            <div className="adminPage--container">
                <p className="adminPage__pageTitle--style">Choose One</p>
                <main>
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
                </main>
            </div>
        </div>
    )
}

export default AdmingPage;