import React from "react";
import { home } from "../dummydata";
import "./HomeStyle.css";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css"; // ملف الأنماط
import AOS from "aos";
import { useEffect } from "react";
import About from "../pages/About";
import Services from "../pages/Services";
import Projectes from "../pages/Projectes";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export default function Home() {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 400,
    });
  });
  return (
    <>
      <section className="home">
        <div className="maincontainer">
          <div className="homecontent">
            {home.map((val, i) => {
              return (
                <div key={i}>
                  <h3 data-aos="fade-right">{val.text}</h3>
                  <h1 data-aos="fade-right">
                    <Typewriter
                      options={{
                        strings: [`${val.name}`, `${val.post}`],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p data-aos="fade-up">{val.desc}</p>
                  <div className="cv" data-aos="fade-up" data-aos-delay="200">
                    download CV
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Projectes />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
