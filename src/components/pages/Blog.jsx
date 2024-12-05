import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { blog } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./Blog.css";

export default function Blog() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <section className="Blog">
      <div className="maincontainer">
        <div className="Blog-content">
          <div className="main-titel" data-aos="fade-down">
            Blog
          </div>
          <div className="content">
            {blog.map((e, i) => {
              return (
                <div className="box" key={i} data-aos="zoom-in">
                  <div className="Blog-img">
                    <img src={e.cover} alt="project cover" />
                  </div>
                  <div className="data">
                    <h2>{e.title}</h2>
                    <p className="main-titel">
                      {e.author}
                      {e.date}
                    </p>
                    <p>{e.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
