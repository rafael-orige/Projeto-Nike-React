import React from "react";
import './style.css';
import '../Fonts/fonts.css'

const Container = props => {
    return(
        <div className='container'>
            {props.children}
        </div>
    )
}

export default Container;