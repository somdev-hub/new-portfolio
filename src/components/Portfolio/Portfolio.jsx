import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/Metaverse.png";
import Ecommerce from "../../img/virus.png";
import HOC from "../../img/html_image.png";
import MusicApp from "../../img/java1.png";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://programmerfoundation.blogspot.com/2022/02/metaverse_10.html"
            target="_blank"
          >
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://programmerfoundation.blogspot.com/2021/04/everything-that-you-need-to-know-about.html"
            target="_blank"
          >
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://programmerfoundation.blogspot.com/2020/10/introduction-to-html-hypertext-markup.html"
            target="_blank"
          >
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://programmerfoundation.blogspot.com/2020/10/history-and-development-of-java-input.html"
            target="_blank"
          >
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
