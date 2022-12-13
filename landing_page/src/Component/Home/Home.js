import React, { Fragment } from "react";
import Features from "./Features/Features";
import Header from "./Header/Header";
import './Home.css';

const Home = () => {
    return(
        <div>
            <Fragment>
                <Header/>
                <Features />
            </Fragment>
        </div>
    )
}

export default Home;