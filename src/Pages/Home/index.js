import React from "react";
import PageStructure from "../../components/PageStructure";
import Background from "./HomeBackground";
import Btn from "../../components/Btn";
import { motion } from 'framer-motion';
import { animationOne } from "../../animation";

import './style.css';

const HomePage = () => {
    return(
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={animationOne}>
            <Background background="home">
                <PageStructure>
                    <div className="body">
                        <div className="inner-body">
                            <div>
                                <h1>Nike SB</h1>
                                <p>Capriche no estilo com a<br/>nova linha Nike SB!</p>
                                <Btn content="Saiba Mais"/>
                            </div>
                            <img src="assets/images/tenis-sb.png" alt="tênis-index"></img>
                            <Btn content="Saiba Mais"/>
                        </div>
                    </div>
                </PageStructure>
            </Background>
        </motion.div>
    );
}

export default HomePage;