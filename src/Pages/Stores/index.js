import React from "react";
import PageStructure from "../../components/PageStructure";
import Background from "../Home/HomeBackground";
import { motion } from "framer-motion";
import { animationOne } from "../../animation";
import './style.css';

const Stores = () => {
    return(
        <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
            <Background background="stores">
                <PageStructure>
                    <div className="stores-body">
                        <h1>Venha nos Encontrar!</h1>
                        <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55228.737173596644!2d-51.23682379033766!3d-30.100026180782997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978a12fad69c9%3A0xb3fa0ec8b40b0f07!2sPaquet%C3%A1%20Esportes!5e0!3m2!1spt-BR!2sbr!4v1635941781538!5m2!1spt-BR!2sbr" height="450" loading="lazy"></iframe>
                    </div>
                </PageStructure>
            </Background>
        </motion.div>
    )
}

export default Stores;