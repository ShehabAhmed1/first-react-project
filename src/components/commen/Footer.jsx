import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { social } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./Footer.css";

export default function Footer() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <footer>
      <div className="footer-content">
        <div className="social" data-aos="zoom-in">
          {social.map((e, i) => {
            return <div className="icon">{e.icon}</div>;
          })}
        </div>
        <h3 data-aos="zoom-in" data-aos-delay="200">
          small react project by Shehab Ahmed
        </h3>
      </div>
    </footer>
  );
}
