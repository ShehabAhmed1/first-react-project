import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { about } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./AboutStyle.css";

export default function About() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <section className="about">
      <div className="maincontainer">
        <div className="about-content">
          {about.map((e, index) => {
            return (
              <>
                <div className="about-img" data-aos="fade-down-right">
                  <img src={e.cover} alt="my img" />
                </div>
                <div className="about-info">
                  <h2
                    className="main-titel"
                    data-aos="fade-down-left"
                    data-aos-delay="100"
                  >
                    About me
                  </h2>
                  <p data-aos="fade-down-left">
                    {e.desc}
                    <br /> <br />
                    {e.desc1}
                  </p>
                  <div className="cv" data-aos="fade-down-left">
                    download CV
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
