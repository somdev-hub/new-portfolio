import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Exceptional work as expected. It was my good that I hired you as freelancer to develop my website",
    },
    {
      img: profilePic2,
      review:
        "The quality of work was very excellent. My UI/UX design was ready in time with afforbable rates",
    },
    {
      img: profilePic3,
      review:
        "The quality of work was very excellent. My UI/UX design was ready in time with afforbable rates",
    },
    {
      img: profilePic4,
      review:
        "Exceptional work as expected. It was my good that I hired you as freelancer to develop my website",
    },
  ];
  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
