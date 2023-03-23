import React from "react";
import PropTypes from "prop-types";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Container, Icon, IconCard, TextContent } from "./style";
import iconPlus from "../../images/icon-plus.png";

const Card = ({
  icon = undefined,
  titleCard = "",
  contentCard = [],
  fontSize = "",
  contentTooltip ="",
}) => {
  
  return (
    <Container>
      <IconCard src={ icon } />
      <TextContent>
        <h2 fontSize={ fontSize }>{titleCard}</h2>
        <ul>
          {contentCard.map((e) => {
            
            return (
              <OverlayTrigger
                key={ Math.random() }
                placement="bottom"
                overlay={
                  <Tooltip  id={ e }>
                    Definição da especialidade: <strong>{contentTooltip}</strong>.
                  </Tooltip>
                }
              >  
                <li>
                  <Icon src={ iconPlus } /> {e}
                </li>
              </OverlayTrigger>
            );
          })}
          
        </ul>
      </TextContent>
    </Container>
  );
};



export default Card;

Card.propTypes = {
  icon: PropTypes.string,
  titleCard: PropTypes.string,
  contentCard: PropTypes.arrayOf(PropTypes.string),
  fontSize: PropTypes.string,
  contentTooltip: PropTypes.string
};
