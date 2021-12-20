import React from "react";
import PageStructure from "../../components/PageStructure";
import Background from "../Home/HomeBackground"
import ProductShowCase from "../../components/ProductShowCase";
import { motion } from "framer-motion";
import { animationOne } from "../../animation";
import "./style.css";

const Products = () => {

    return (
        <motion.div initial="out" animate="in" exit="out" variants={ animationOne } className="products-block" >
            <Background background="products">
                <PageStructure>
                    <h1 className="section-title">Nossos Principais Produtos</h1>
                    <div className="products-row">
                        <ProductShowCase image="assets/images/tenis-sb1.png" />
                        <ProductShowCase image="assets/images/tenis-sb2.png" />
                        <ProductShowCase image="assets/images/tenis-sb3.png" />
                    </div>
                </PageStructure>
            </Background>
        </motion.div>
    );
};

export default Products;