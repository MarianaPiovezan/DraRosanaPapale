import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Row } from "./style";

const RightNav = ({ open = false }) => {
  const links = [
    { href: "home", name: "Início" },
    { href: "specialties", name: "Especialidades" },
    { href: "about", name: "Sobre" },
    { href: "blog", name: "Blog" },
    { href: "location", name: "Localização" },
    { href: "contact", name: "Contato" },
  ];
  const [active, setActive] = useState("home");

  return (
    <Row open={ open }>
      {links.map((link) => {
        return (
          <li key={ link.href }>
            <a
              href={ `#${link.href}` }
              className={ active == link.href ? "m-active" : "nav-link" } 
              onClick={ () => setActive(link.href) }
            >
              {link.name}
            </a> 
          </li>
        );
      })}
    </Row>
  );
};

export default RightNav;

RightNav.propTypes = {
  open: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
  ]),
};
