import React from "react";
import Maquina from "../assets/maquina3.jpg";
import "../styles/Contact.css";

function Contact() {
  return <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Maquina})` }}
      ></div>
      <div className="rightSide">
        <h1>Contato</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome</label>
          <input name="name" placeholder="Digite seu nome..." type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Digite seu e-mail..." type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Digite a mensagem..."
            name="message"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
}

export default Contact;