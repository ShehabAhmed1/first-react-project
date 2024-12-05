import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import { portfolio } from "../dummydata";
import "aos/dist/aos.css"; // ملف الأنماط
import "./PortfolioStyle.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="maincontainer">
        <div className="portfolio-content">
          <h2 className="main-titel" data-aos="fade-down" data-aos-delay="200">
            portfolio
          </h2>
          <div className="options">
            <div
              className="option"
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => {
                myfilter("All");
              }}
            >
              All
            </div>
            <div
              className="option"
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => {
                myfilter("marketing");
              }}
            >
              marketing
            </div>
            <div
              className="option"
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => {
                myfilter("design");
              }}
            >
              design
            </div>
            <div
              className="option"
              data-aos="fade-down"
              data-aos-delay="200"
              onClick={() => {
                myfilter("development");
              }}
            >
              development
            </div>
          </div>
          <div className="content">
            {portfolio.map((ele, i) => {
              return (
                <div
                  className={`box ${ele.category}`}
                  key={i}
                  data-aos="zoom-in"
                >
                  <img src={`${ele.cover}`} alt={`${ele.category}`} />
                  <div className="details">
                    <h3>{ele.title}</h3>
                    <p>{ele.name}</p>
                    <span>
                      <i className="fa-solid fa-eye"></i>
                    </span>
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

function myfilter(name) {
  //selecte
  let bigbox = document.querySelector(".content");
  let Allboxs = document.querySelectorAll(".content .box");
  Allboxs.forEach((e) => {
    e.classList.add("inactive");
  });
  Allboxs.forEach((e) => {
    if (name === "All") {
      e.classList.remove("inactive");
    } else if (e.classList.contains(name)) {
      e.classList.remove("inactive");
    }
  });

  //copyAllboxs = Allboxs;
  console.log(Allboxs);
}
