import React from "react";
import PropTypes from "prop-types"; 
import { ButtonContainer } from "./style";

const Button = ({ link = "", title = "" , icon = undefined, iconAlt= "", iconWidth= "0"}) => {
  return (
    <ButtonContainer>
      <a href={ link }><img src={ icon } alt={ iconAlt } width={ iconWidth } /> {title}</a>   
    </ButtonContainer>
  );
};

export default Button;

Button.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  onSubmit: PropTypes.func,
  iconWidth: PropTypes.string,
};

