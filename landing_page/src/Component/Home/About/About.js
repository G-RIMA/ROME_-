import React from "react";
import './About.css';

const About =() => {
    return(
        <section className="about">
            <div className="container">
                <div className="row">
                    <h3>Rome, The Virtual Pet</h3>
                    <p>This is a simple portfolio project. It is a simple chatbot for now but the idea was for the user to be able to engage with them and have fun doing it.
                        I created Rome with <strong>chatterbot</strong>.ChatterBot is a Python library that makes it easy to generate automated responses to a user's input. 
                        This made it easy to create and train Rome. 

                    </p>
                    <h3>Inspiration</h3>
                    <p>My Inspiration behind Rome was the fact that a lot of people I know were looking for someone to talk and the person to just listen no judgement and no advice on how they would have done it.
                        So i decided to create Rome who would be a emotional support chatbot that would listen and provide comfort.
                        When I was given the chance to create a portfolio project for Holberton School, I created this MVP, which is just a small markup of Rome.
                        Ill be making some improvements and updating the site for now this is just Rome 1.0.
                    </p>
                    <h3>The Team</h3>
                    <p>The person behind this project is:</p>
                    <h4>Assunta Maria</h4>
                    <p>An web developer with experience in React, Python, HTML and CSS.
                    </p>
                    
                    <p><a href="#github"> This is the link to the github repository</a></p>

                </div>
            </div>
            
        </section>
    )
}

export default About;