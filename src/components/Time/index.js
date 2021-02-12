import React from 'react';
import "./style.css";

import bateriasMoura from "../../assets/baterias-moura.png";
import mardisa from "../../assets/mardisa.png";
import audiCenter from "../../assets/audi-center-recife.png";
import iconePhone from "../../assets/phone-call.png";
import fioriFiat from "../../assets/fiori-fiat.png";
import fioriJeep from "../../assets/fiori-jeep.png";
import muma from "../../assets/muma.png";
import toyolex from "../../assets/toyolex.png";
import queiroz from "../../assets/queiroz.png";
import jcpm from "../../assets/jcpm.png";
import landRover from "../../assets/land-rover.png";


function Time() {
    return (
        <section className="section-time">
            <div className="box-time">
                <h3>Fale com nosso time de especialistas.</h3>
                <p className="paragraph-time">Nós apresentamos as melhores soluções digitais para seu negócio</p>

                <div className="box-btn-contato">
                    <div>
                        <img className="img-iconePhone" src={iconePhone} alt="icone de um telefone" />
                    </div>
                    <a href="https://www.jogga.com.br" target="_blank" rel="noreferrer">Ligue agora (81) 0000-0000</a>
                </div>
            </div>

            <div className="parceiros">
                <h4>Quem confia na gente</h4>
            </div>
            <div className="box-parceiros">
                <img className="logo-parceiros" src={bateriasMoura} alt="Logo Baterias Moura" />
                <img className="logo-parceiros" src={mardisa} alt="Logo Mardisa" />
                <img className="logo-parceiros" src={audiCenter} alt="Logo Audi Center Recife" />
                <img className="logo-parceiros" src={fioriFiat} alt="Logo da Fiat Fiori" />
                <img className="logo-parceiros" src={fioriJeep} alt="Logo da Fiori Jeep" />
                <img className="logo-parceiros" src={muma} alt="Logo da Muma" />
                <img className="logo-parceiros" src={toyolex} alt="Logo da Toyolex" />
                <img className="logo-parceiros" src={queiroz} alt="Logo da Queiroz" />
                <img className="logo-parceiros" src={jcpm} alt="Logo do Grupo João Carlos Paes Mendonça" />
                <img className="logo-parceiros" src={landRover} alt="Logo da Land Rover Way" />
            </div>

        </section>
    );
}

export default Time;
