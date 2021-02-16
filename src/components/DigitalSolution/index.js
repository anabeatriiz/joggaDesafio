
import React from 'react';
import "./style.css";

import arrow1 from "../../assets/arrow1.png";
import wppIcon from "../../assets/wpp-icon.png";
import iconMan from "../../assets/icon-man.png";
import check from "../../assets/check.png";

function DigitalSolution() {
    return (
        <div>
            <div id="section-solution">

                <div className="box-digitalSolution">
                    <h4>Conquiste mais clientes com digital</h4>
                    <p>Solução digital de vendas para você ter mais leads e vender mais.</p>
                    <div className="box-icon-man">

                        <img src={iconMan} alt="Icone de um homem sentado na mensa com um notebook" />
                    </div>


                </div>
                <div className="benefits-jogga">
                    Com a Jogga você terá:
                        <img className="benefits-jogga-img" src={arrow1} alt="icone de uma seta para cima" />

                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Site otimizado para geração de leads</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Anúncios nas principais mídias sociais com o objetivo de converter seu público em leads</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Equipe especializada em mídia digital responsável pelo planejamento, execução, análise e otimização de suas campanhas.</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Banco de dados com todas as chamadas recebidas</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Painel de controle para visualizar dados de suas chamadas, como, leads gerados, canais, total investido, retorno sob investimento e mais!</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Integração com as principais plataformas de CRM</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Equipe de criação para produção de peças destinadas exclusivamente à anúncios</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Relátorios individuais</p>
                    <p className="style-teste"><img className="check-icon" src={check} alt="icone de check" />Atendimento especializado de uma empresa Google Premier Partner e Facebook Marketing Partner</p>
                </div>

            </div>
            <div className="box-fale-conosco">
                <h4>Fale com nosso time de especialistas.</h4>
                <p>Nós apresentaremos as melhores soluções digitais para o seu negócio</p>
                <div>

                    <div className="contato-wpp">
                        <img className="img-iconeWpp" src={wppIcon} alt="icone do Whatsapp" />
                        <a href="https://www.jogga.com.br" target="_blank" rel="noreferrer" >Fale conosco whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalSolution;
