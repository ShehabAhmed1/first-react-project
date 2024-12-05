import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { services } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./ServicesStyle.css";
export default function Services() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 500,
    });
  });
  return (
    <section className="services">
      <div className="maincontainer">
        <h2 className="main-titel" data-aos="fade-down">
          Services
        </h2>
        <div className="services-content">
          {services.map((e, i) => {
            return (
              <div className="card" id={`_${i}`} data-aos="flip-left" key={i}>
                <div className="icon">{e.icon}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
