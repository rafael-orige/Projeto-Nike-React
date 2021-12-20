import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
import Btn from "../Btn";
import './style.css';

const ProductShowCase = (props) => {

    const [ modal, setModal ] = useState('none');
    const [ modalOpacity, setModalOpacity ] = useState('0');
    const [ background, setBackground ] = useState('none')
    const [ backgroundOpacity, setBackgroundOpacity ] = useState('0.0');

    function callModal() {
        setBackground('block');
        setTimeout(() => { setBackgroundOpacity('0.4') }, 100);
        setTimeout(() => { setModal('flex') }, 200);
        setTimeout(() => { setModalOpacity('1') }, 700);
        if(window.innerWidth < 1300) {
            document.body.style.overflow = ('hidden');
        }
    }

    function closeModal() {
        setBackgroundOpacity('0.0');
        setModalOpacity('0');
        setTimeout(() => {
            setModal('none');
            setBackground('none');
        }, 500)
        if(window.innerWidth < 1300) {
            document.body.style.overflow = ('unset');
        }
    }

    return (
        <div className="products-showcase">
            
            <div className="product"  onClick={ callModal }>
                <div className="product-background">
                    <img src={props.image} alt={""}></img>                    
                </div>
            </div>
            
            <div className="background-dark" style={{ display: `${ background }`, backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`}}>
                <div className="product-info" style={{ display: `${ modal }`, opacity: `${ modalOpacity }`}}>
                    <div className="close-btn" onClick={ closeModal }>
                        <div className="close-btn--bars">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="product-info--img">
                        <Tilt>
                        <img src={props.image} alt={""}></img>
                        </Tilt>
                    </div>
                    <h1>Nike SB</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id eros ac lacus ullamcorper tempor at quis tellus. Suspendisse blandit, risus a ultricies molestie, felis orci accumsan lacus, vel vulputate.</p>
                    <Btn content="Comprar Agora" />
                </div>
            </div>

        </div>
    );
};

export default ProductShowCase;