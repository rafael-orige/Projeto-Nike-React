import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import Products from "../Pages/Products";
import Stores from "../Pages/Stores";
import { AnimatePresence } from "framer-motion";

const Routes = () => {;
    return(
        <BrowserRouter>
            <AnimatePresence>
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route path="/products" component={ Products } />
                    <Route path="/stores" component={ Stores } />
                </Switch>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default Routes;

