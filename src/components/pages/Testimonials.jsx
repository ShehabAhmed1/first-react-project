import React, { useEffect } from "react";
import AOS from "aos";
import { testimonials } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
  // إعدادات السلايدر
  const settings = {
    dots: true, // لعرض النقاط أسفل السلايدر
    infinite: true, // تكرار السلايدرز
    speed: 500, // سرعة التنقل بين السلايدرز
    slidesToShow: 1, // عدد السلايدرز الظاهرة في الشاشة
    slidesToScroll: 1, // عدد السلايدرز التي يتم التنقل بها في كل مرة
  };

  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <section className="testimonials" data-aos="zoom-out">
      <div className="maincontainer">
        <Slider {...settings}>
          {testimonials.map((e, i) => (
            <div className="person" key={i}>
              <img src={e.image} alt="team" />
              <h2>{e.name}</h2>
              <p>{e.post}</p>
              <p className="text">{e.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
