import React from "react";
import PropTypes from "prop-types";
import {Content} from "./style";

const CardEducation = ({icon = undefined, content = ""}) => {
  return (
    <Content>
      <img src={ icon } alt="" />
      <p>{content}</p>
    </Content>
  );
};

export default CardEducation;

CardEducation.propTypes = {
  icon: PropTypes.string,
  content: PropTypes.string,
};