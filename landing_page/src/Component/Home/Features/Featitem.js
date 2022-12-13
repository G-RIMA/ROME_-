import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Featitem = (props) => {
    return (
        <div className="box">
            <FontAwesomeIcon icon={props.icons} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Featitem;