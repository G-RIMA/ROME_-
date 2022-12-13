import React from "react";
import Data from "../../../Data";
import Featitem from "./Featitem";
import './Features.css';

const Features = () => {
    const item = Data.feat.map((itembox)=>{
        return(
            <div className="col-md-4">
                <Featitem title={itembox.title} text={itembox.text} icons={itembox.icons}/>
            </div>
        )
    })
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Features</h2>
                        <p>Rome has the following features:</p>

                    </div>
                </div>
                <div className="row">
                    {item}
                </div>
           </div>
        </section>
    )
}

export default Features;