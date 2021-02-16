import React from "react";
import Button from "./Button";
import Input from "./Input";



import "./style.css";

const Form = () => {
  return (
    <section className="section-form">
      <form className="form-login">
        <p>Soluções personalizadas para a sua empresa. <span>Fale conosco.</span></p>

        <div className="box-inputs">
          <label htmlFor="nome">Nome</label>
          <Input />

          <label htmlFor="mail">E-mail</label>
          <Input />
      
          <label htmlFor="number">Telefone</label>
          <Input />
        </div>
        <div className="box-btn">
          <Button classe="btn-submit" nome="Enviar" />
        </div>
      </form>
    </section>
  );
}

export default Form;

