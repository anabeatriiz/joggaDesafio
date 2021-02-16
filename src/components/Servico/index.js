import React from 'react';
import "./style.css";
import serviceImg from "../../assets/service-img.png";



function Servico() {
    
    return (
        <section className="service">
            <h3>Nossos Serviços</h3>
            <p className="paragraph-service">Na Jogga, nós entendemos a importância de cada venda.
            Por isso, criamos uma solução completa para atração de clientes.
                  Para que você e sua equipe se preocupem apenas em fechar negócios.</p>
                  
            <div className="box-img-service">

                <img src={serviceImg} alt="Imagem de uma mulher com um notebook e um celular na mão" />

                <div className="box-paragraph-service">
                    <h4>Anúncios no Facebook, Instragram, Google e outros.</h4>
                    <p>Anúncios planejados para engajar usuários a entrarem no seu site, enviarem mensagem para seu
                        whatsapp ou ligarem para sua empresa.</p>
                </div>
            </div>

         
        </section>
    )
}

export default Servico;