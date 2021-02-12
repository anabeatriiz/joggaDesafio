import React from "react";
import woman from "../../assets/woman.png";
import facebook from "../../assets/facebook-img.png";
import google from "../../assets/google-img.png";


import './style.css';


const Carousel = () => {
    return (
        <section className="section-carousel">

        <div className="container">
            <div className="carousel-image">
                <img src={woman} alt="Mulher negra, sorridente, segurando um celular."/>
            </div>
            
            <div className="box">
                <p className="paragraph-carousel">Conquiste mais clientes a um clique de distância</p>
                
                <div className="box-techs">
                    <img src={facebook} alt="Facebook Marketing Partnes"/>
                    <img src={google} alt="Google Partner"/>
                </div>
            </div>
        </div>
            <div className="box-anuncios">
                <p>Use anúncios no FACEBOOK, INSTAGRAM e GOOGLE e apareça para os clientes certos, nos locais certos.</p>
            </div>
        </section>
    );
}

export default Carousel;