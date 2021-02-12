import React from 'react'
import Icon from '../Icon';
import "./style.css";

import icon1 from "../../assets/01.png";
import icon2 from "../../assets/02.png";
import icon3 from "../../assets/03.png";
import icon4 from "../../assets/04.png";
import icon5 from "../../assets/05.png";
import icon6 from "../../assets/06.png";
import icon7 from "../../assets/07.png";
import icon8 from "../../assets/08.png";
import icon9 from "../../assets/09.png";
import icon10 from "../../assets/10.png";

function Info() {
    return (
        <section className="section-info">
            <div className="box-informacoes">
                <div className="text-box">
                    <h3>Como podemos ajudar</h3>
                </div>
                <p className="paragraph-info">O Brasil tem mais de 150 milhões de usuários online, em redes sociais e consultando
                informações antes de compra. Nossa solução traz seu negócio para o ambiente digital,
                melhorando a eficiência de seus resultados e dando acesso às informações necessárias para cada venda.
                 </p>
            </div>

            <div className="icon-session">
                <Icon img={icon1} descricao="Anúncios no facebook, instagram, google e outros" />
                <Icon img={icon2} descricao="Site otmizado para vendas" />
                <Icon img={icon3} descricao="integração com crm" />
                <Icon img={icon4} descricao="Painel de resultados em tempo real" />
                <Icon img={icon5} descricao="banco de chamadas recebidas" />
                <Icon img={icon6} descricao="planejamento de anúncios" />
                <Icon img={icon7} descricao="criação de artes de anúncios" />
                <Icon img={icon8} descricao="relatórios individuais" />
                <Icon img={icon9} descricao="otmizações dos anúncios" />
                <Icon img={icon10} descricao="suporte especializado" />
            </div>
        </section>
    );
}
export default Info;