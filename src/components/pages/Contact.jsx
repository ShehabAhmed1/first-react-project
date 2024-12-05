import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { contact } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./ContactStyle.css";

export default function Contact() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <section className="Contact">
      <div className="maincontainer">
        <h2 className="main-titel">keep in touch</h2>
        <div className="contact-content">
          <form action="#">
            <input
              type="text"
              placeholder="name"
              data-aos="flip-up"
              data-aos-delay="200"
            />
            <input
              type="email"
              placeholder="email"
              data-aos="flip-up"
              data-aos-delay="200"
            />
            <input
              type="text"
              placeholder="subject"
              data-aos="flip-up"
              data-aos-delay="200"
            />
            <textarea data-aos="flip-up" data-aos-delay="200">
              your imagination
            </textarea>
            <input
              type="submit"
              value={"submit"}
              className="option"
              data-aos="flip-up"
            />
          </form>
          <div className="data">
            {contact.map((e, i) => {
              return (
                <div className="data-box" key={i}>
                  <h2>{e.icon}</h2>
                  <p>{e.text1}</p>
                  <p>{e.text2}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
