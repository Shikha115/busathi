import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

function Testimonial({ data }) {


  return (
    <section className="testimonial mb-65">
      <div className="container">
        <div className="title mb-5 text-center">
          <h1>Testimonials</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          autoplay
          speed={1500}
          loop={true}
        >
          {data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="home-testimonial">
                  <h6>{item.name}</h6>
                  <city>
                    <small>{item.designaton}</small>
                  </city>
                  <p>{item.content}</p>
                  <date>{item.date}</date>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
