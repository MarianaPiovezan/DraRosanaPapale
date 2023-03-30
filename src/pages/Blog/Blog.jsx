import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardPost from "../../components/CardPost/CardPost";
import { Container, Title, Section } from "./style";
import mockData from "../../../src/__mocks__/data/index";
import { titleSection } from "./constants";
import Search from "../../components/Search/Search";

const Blog = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, [word]);

  const settings = {
    initialSlide: 0,
    swipeToSlide: true,
    dots: true,
    infinite : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className: "center",
          centerMode: true,
          centerPadding: "40px",
        }
      }
    ]
  };
  return (
    <Section id="blog">
      <Container>
        <Title>{titleSection}</Title>
        <Search
          iconWidth="24px"
          word={ word }
          onChange={ (e) => setWord(e.target.value.toLowerCase()) }
        />
        <Slider { ...settings }>
          {data.map((el) => {
            return (
              <CardPost { ...el } key={ el.id } />
            );
          })}
        </Slider>
      </Container>
    </Section>
  );
};

export default Blog;
