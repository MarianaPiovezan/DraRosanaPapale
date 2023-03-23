import React from "react";
import PropTypes from "prop-types";
import {Container, Subtitle, Title, ContainerMap, Icon } from "./style";
import iconMap from "../../images/icon-local.png";

const Map = ({title = "", subtitle = "" , lat = 0 , lng = 0}) => {
  function initMap() {
 
    const location = { lat: {lat}, lng: {lng}};
    const map = new 
    google.maps.Map(document.getElementById("map"), {
      zoom: 100,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  return (
    <Container>
      <Icon src={ iconMap } alt="" />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ContainerMap id="map">
        {
          window.initMap = initMap
        }
      </ContainerMap>
    </Container>
  );
};

export default Map;

Map.propTypes = {
  title : PropTypes.string,
  subtitle: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};