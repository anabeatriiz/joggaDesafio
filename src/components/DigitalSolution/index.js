
import React from 'react';
import "./style.css";

import arrow1 from "../../assets/arrow1.png";
import wppIcon from "../../assets/wpp-icon.png";

function DigitalSolution() {
    return (
        <div>
            <div id="section-solution">

                <div className="box-digitalSolution">
                    <h4>Conquiste mais clientes com digital</h4>
                    <p>Solução digital de vendas para você ter mais leads e vender mais.</p>

                    <div className="benefits-jogga">
                        Com a Jogga você terá:
        <img src={arrow1} alt="icone de uma seta para cima" />
                    </div>
                </div>

            </div>
            <div className="box-fale-conosco">
                <h4>Fale com nosso time de especialistas.</h4>
                <p>Nós apresentaremos as melhores soluções digitais para o seu negócio</p>
                <div>

                    <div className="box-btn-contato contato-wpp">
                        <img className="img-iconeWpp" src={wppIcon} alt="icone do Whatsapp" />
                        <a href="https://www.jogga.com.br" target="_blank" rel="noreferrer" >Fale conosco whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalSolution;
