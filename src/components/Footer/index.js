import React from 'react';
import "./style.css";
import logoyellow from "../../assets/logo-yellow.png";

function Footer() {
    return (
        <div className="page-footer">
            <p className="description-footer">Política de privacidade</p>
            <img className="logo-footer" src={logoyellow} alt="Logo Jogga" />
        </div>
    )
}

export default Footer;
