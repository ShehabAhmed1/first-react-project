import React from "react";
import { Link } from "react-router-dom";
import { navlink } from "../dummydata.js";
import "./HeaderStyle.css";
import "aos/dist/aos.css"; // ملف الأنماط
import AOS from "aos";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <header>
      <div className="maincontainer">
        <div className="logo" data-aos="fade-right">
          <img src="/imgs/favicon.png" alt="logo" />
        </div>
        <nav>
          <ul>
            {navlink.map((e, index) => {
              return (
                <li key={index}>
                  {" "}
                  <Link to={e.url}>{e.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className="iconnav"
          onClick={() => {
            document.querySelector(".nav2").classList.toggle("active");
            document
              .querySelector(".iconnav .bar ")
              .classList.toggle("inactive");
            document
              .querySelector(".iconnav .xmark")
              .classList.toggle("inactive");
          }}
        >
          <i className="fa-solid fa-bars bar"></i>{" "}
          <i className="fa-solid fa-xmark xmark inactive"></i>
        </div>
        <div className="nav2">
          <ul>
            {navlink.map((element, ind) => {
              return (
                <li key={ind}>
                  <Link to={element.url}>{element.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
