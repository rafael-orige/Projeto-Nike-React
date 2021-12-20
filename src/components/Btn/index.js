import React from "react";
import './style.css';

const Btn = (props) => {
    return(
        <button className="cta">{props.content}</button>
    )
};

export default Btn;