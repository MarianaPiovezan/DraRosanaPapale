import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import {Container, Content, ContainerImage, Date, Title, Text, ModalContainerImage, ModalText, ModalBtn, Bar} from "./style";


const CardPost = ({ image ="", date = "", title= "", content = "", id= 0 }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <Container onClick={ toggleModal } id={ id }>
        <ContainerImage>
          <img src={ image } alt="" />
        </ContainerImage>
        <Content>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </Content>
      </Container>
      <Modal show={ modalIsOpen } onHide={ toggleModal } centered size="lg">
        <ModalContainerImage>
          <img src={ image } alt="" />
          <ModalBtn onClick={ toggleModal }>
            <Bar />
            <Bar />
          </ModalBtn>
        </ModalContainerImage>
        <Content>
          <Date>{date}</Date>
          <Title>{title}</Title>
          <ModalText>{content}</ModalText>
        </Content> 
      </Modal>
    </>
  );
};

export default CardPost;

CardPost.propTypes = {
  id: PropTypes.number,
  image : PropTypes.string,
  date : PropTypes.string,
  title : PropTypes.string,
  content: PropTypes.string,
};