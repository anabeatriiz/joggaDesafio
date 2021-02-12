import React from 'react';
import "./style.css";


function Icon({ img, descricao }) {
    return (
        <div className="icon-box">
            <div className="icon-box-img">
                <img src={img} alt="" />
            </div>
            <p className="description-icon">{descricao}</p>
        </div>
    )
}

export default Icon;
