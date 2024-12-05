import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import { project } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./ProjectsStyle.css";

export default function Projects() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <section className="Projects">
      <div className="maincontainer">
        <div className="Projects-content">
          {project.map((item, index) => {
            return (
              <div className="box" key={index} data-aos="zoom-in">
                <div className="picon">{item.icon}</div>
                <div className="pnum">{item.num}</div>
                <div className="ptitel">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
