import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./style";
import Button from "../Button/Button";

const ContactForm = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <Container>
      <form action="">
        <label htmlFor="name">Nome:</label>
        <input
          name="name"
          type="text"
          placeholder="Insira o seu nome"
          onChange={ (e) => setName(e.target.value) }
          value={ name }
        />
        <label htmlFor="phone">Telefone:</label>
        <input
          name="phone"
          type="phone"
          placeholder="Insira o seu telefone"
          onChange={ (e) => setPhone(e.target.value) }
          value={ phone }
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Insira o seu e-mail"
          onChange={ (e) => setEmail(e.target.value) }
          value={ email }
        />
        <label htmlFor="message">Email:</label>
        <textarea
          name="message"
          type="email"
          placeholder="Insira a sua mensagem..."
          onChange={ (e) => setMessage(e.target.value) }
          value={ message }
        />
        <Button title="Enviar" />
      </form>
    </Container>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
