import React from "react";
import { Container, Title, Section , ContainerMaps} from "./style";
import Map from "../../components/Map/Map";
import { data, titleSection, subtitleSection } from "./constants";

const Location = () => {
  return (
    <Section id="location">
      <Container>
        <div>
          <Title>{ titleSection }</Title>
          <p>{ subtitleSection }</p>
        </div>
        <ContainerMaps>
          { data.map( (e) => { return (
            <Map key={ e.lat } { ...e } />
          ); })}
        </ContainerMaps>
        
      </Container> 
    </Section>
  );
};

export default Location;
