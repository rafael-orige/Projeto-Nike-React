import React from "react";
import Header from "../Header";
import Container from "../Container";

const PageStructure = props => {
    return(
        <div>
            <Container>
                <Header />
                    
                    {props.children}
                
            </Container>
        </div>
    );
}

export default PageStructure;