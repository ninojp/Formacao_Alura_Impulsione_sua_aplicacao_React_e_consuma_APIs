import React from "react";
import './TituloPrincipal.css';

interface ITituloPrincipalProps{
    texto: string
}

const TituloPrincipal = ({texto}: ITituloPrincipalProps) => {
    return(
        <h1 className="tituloPrincipal">{texto}</h1>
    );
};
export default TituloPrincipal;
