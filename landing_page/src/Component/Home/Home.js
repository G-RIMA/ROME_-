import React, { Fragment } from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import './Home.css';

const Home = () => {
    return(
        <div>
            <Fragment>
                <Header/>
                <Features />
                <About />
                <Contact />
                <Footer />
            </Fragment>
        </div>
    )
}

export default Home;