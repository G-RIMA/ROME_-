import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header >
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2> A chatbot for you when you need a friend!</h2>
                            <p>Rome is a simple chatbot that you can chat with or play with.It is a simple virtual pet that
                                you can interact with when you are sad, happy or just need some company.
                            </p>
                            <form>
                                <button type="button">Chat with Rome Now</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </header>
    )
}

export default Header;