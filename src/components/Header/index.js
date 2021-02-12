import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";


const Header = () => {
    return (
        <header className="page-header">
            <img className="logo-image" src={logo} alt="Logo Jogga" />
        </header>
    );
}

export default Header;