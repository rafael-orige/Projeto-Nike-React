import React from "react";
import './style.css';

const Background = props => {
    return(
        <div className={`background ${props.background}`}>
                {props.children}
        </div>
    )
}

export default Background;