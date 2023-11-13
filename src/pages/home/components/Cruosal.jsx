import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import curs01 from "../assets/img/curs-01.jpg";
import curs02 from "../assets/img/curs-02.jpg";
import curs03 from "../assets/img/curs-03.jpg";



export const GetStarted = () => {
  return (
    <Link
      to="/generate"
      className="no-underline btn-get-started animate__animated animate__fadeInUp scrollto"
    >    Get Started</Link>
  )
}



export default function Cruosal() {
  useEffect(() => {

    document
      .querySelectorAll('[data-bs-toggle="popover"]', true)
      .forEach((popover) => {
        new bootstrap.Popover(popover);
      });

    let heroCarouselIndicators = document.querySelector(
      "#hero-carousel-indicators"
    );
    let heroCarouselItems = document.querySelectorAll(
      "#heroCarousel .carousel-item",
      true
    );

    heroCarouselItems.forEach((item, index) => {
      index === 0
        ? (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "' class='active'></li>")
        : (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "'></li>");
    });

    return () => {
      heroCarouselIndicators.innerHTML = "";
    }

  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-4xl text-teal-600">
        <section id="hero">
          <div className="hero-container">
            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="5000"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              ></ol>

              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: `url(${curs01})` }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        Welcome to <span>POS</span>
                      </h2>
                      <p className="animate__animated animate__fadeInUp text-lg sm:text-lg lg:text-3xl xl:text-4xl md:text-3xl">
                        The Progress of Student is the, One such advancement in the
                        creation of students' progress reports in online, PDF format.
                        This innovative approach saves time, resources and provides a convenient
                        and secure method.
                      </p>

                      <GetStarted />



                    </div>
                  </div>
                </div>

                <div
                  className="carousel-item"
                  style={{ backgroundImage: `url(${curs02})` }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        The Utilization of POS
                      </h2>
                      <p className="animate__animated animate__fadeInUp text-lg sm:text-lg lg:text-3xl xl:text-4xl md:text-3xl">
                        The process of creating and distributing students' progress reports.
                        This digital transformation offers numerous benefits, such as real-time
                        access to student performance data, reduced administrative workload,
                        and enhanced data security.

                      </p>

                      <GetStarted />
                    </div>
                  </div>
                </div>

                <div
                  className="carousel-item"
                  style={{ backgroundImage: `url(${curs03})` }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        Process for crafting POS
                      </h2>
                      <p className="animate__animated animate__fadeInUp text-lg sm:text-lg lg:text-3xl xl:text-4xl md:text-3xl">
                        We will guide the step-by-step process of creating students'
                        progress reports online in PDF format. We will cover the tools
                        and techniques required to ensure a smooth transition to a
                        digital progress reporting system.
                      </p>

                      <GetStarted />
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#heroCarousel"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bi bi-chevron-double-left"
                  aria-hidden="true"
                ></span>
              </a>

              <a
                className="carousel-control-next"
                href="#heroCarousel"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon bi bi-chevron-double-right"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
