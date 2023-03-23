import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

  return (
    <Section id="blog">
      <Container>
        <Title>{titleSection}</Title>
        <Search
          iconWidth="24px"
          word={ word }
          onChange={ (e) => setWord(e.target.value.toLowerCase()) }
        />
        <Swiper
          slidesPerView={ 1 }
          breakpoints={ {
            [768]: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            [1020]: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          } }

          loop={ true }
          navigation={ true }
          pagination={ true }
          mousewheel={ true }
          keyboard={ true }
          modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
        >
          {data.filter(e => e.title.toLowerCase().includes(word) || e.content.toLowerCase().includes(word))
            .map((el) => {
              return (
                <SwiperSlide key={ el.id }>
                  <CardPost { ...el } />
                </SwiperSlide>
              );
            })}
          ;
        </Swiper>
      </Container>
    </Section>
  );
};

export default Blog;
