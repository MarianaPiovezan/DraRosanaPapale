import React from "react";
import PropTypes from "prop-types"; 
import { Container, Input, Icon } from "./style";
import icon from "../../images/icon-search.png";

const Search = ({iconWidth="0", word= "", onChange = () => null } ) =>{
  return (
    <Container>
      <Input placeholder="O que deseja saber?" type="text" value={ word } onChange={ onChange } />
      <Icon src={ icon } width={ iconWidth } alt="Pesquisa" />
    </Container>
  );
};

export default Search;

Search.propTypes = {
  iconWidth: PropTypes.string,
  word: PropTypes.string,
  onChange: PropTypes.func,
 
};
