import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {

    const [ menuActive, setMenuActive ] = useState(false);

    function activateMenu() {
        if(menuActive === true) {
            setMenuActive(false);
        } else {
            setMenuActive(true);
        }
    }

        
    return(
        <header>
            <Link to="/"><img src="assets/images/logo.png" alt="Logo" className='logo'></img></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="link">Nossos produtos</Link>
                    </li>
                    <li>
                    <Link to="/stores" className="link">Saiba mais</Link>
                    </li>
                </ul>
            </nav>

            <div className="menu-responsive">
                <div className="menu-wrapper" onClick={ activateMenu } style={ { marginRight: menuActive ? "230px" : "0px" } }>
                    <div></div><div></div><div></div>
                </div>
                <nav style={{ width: "230px" , right: !menuActive ? "-230px" : "0px"  }}>
                    <ul>
                        <li>
                            <Link to="/" className="link">Home</Link>
                        </li>
                        <li>
                            <Link to="/products" className="link">Nossos produtos</Link>
                        </li>
                        <li>
                        <Link to="/stores" className="link">Saiba mais</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;