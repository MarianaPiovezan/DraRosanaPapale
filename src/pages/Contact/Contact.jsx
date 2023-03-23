import React from "react";
import { Container, ContainerInfos, Title, Subtitle, Section, Info } from "./style";
import Button from "../../components/Button/Button";
import iconEmail from "../../../src/images/icon-email.png";
import iconPhone from "../../../src/images/icon-phone.png";
import iconWhats from "../../../src/images/icon-whatsapp.png";
import ContactForm from "../../components/ContactForm/ContactForm";
import {subtitleSection, titleSection, phone, email} from "./constants";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <ContainerInfos>
          <Title>{titleSection}</Title>
          <Subtitle>{ subtitleSection }</Subtitle>
          <ul>
            <Info>
              <a href={ `mailto:${email}` }>
                <img src={ iconEmail } />
                {email}
              </a>
            </Info>
            <Info>
              <a href={ `tel:+5511${phone}` }>
                <img src={ iconPhone } />
                {phone}
              </a>
            </Info>
          </ul>
          <Button title="Entre em contato" icon={ iconWhats }  iconWidth="24px" />
        </ContainerInfos>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;
