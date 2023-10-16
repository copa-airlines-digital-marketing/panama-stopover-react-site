import React, { Component } from "react";

import { withLocalize } from "react-localize-redux";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fullToursHomeData from "../../data/ToursHome";

import "./index.scss";

import { isMobile } from "react-device-detect";

const mapStateToProps = (state) => {
  return {
    idiomasReducer: state.idiomasReducer,
  };
};

class ToursHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentLanguage } = this.props.idiomasReducer;
    const translations = fullToursHomeData[currentLanguage];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      centerPadding: "346px",
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerPadding: "246px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            centerPadding: "146px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "36px",
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "26px",
          },
        },
      ],
    };

    return (
      <div id="anchor_tours" className="anchor-tours-box">
        <div className="crea-tu-itinerario-list-box">
          <div className="itinerario-tour-box">
            <div className="row">
              <div className="col-md-12">
                <h1 className="itinerario-tour-box-title">
                  {translations.tour_title}
                </h1>

                <div className="container">
                  <div className="row">
                    <div className="itinerario-tour-box-text text-center">
                      {translations.tour_subtitle_left}
                    </div>

                    <div className="itinerario-tour-box-text text-center">
                      {translations.tour_subtitle_right}
                    </div>

                    <div className="itinerario-tour-box-text text-center">
                      <p
                        className="itinerario-tour-box-text bio-disclaimer text-center"
                        dangerouslySetInnerHTML={{
                          __html: translations.bioDisclaimer,
                        }}
                      ></p>
                    </div>

                    <div className="itinerario-tour-box-text text-center">
                      <p className="smaller-text-grey">
                        <br />
                        {translations.disclaimer}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="itinerario-tour-box-slider">
            <Slider {...settings}>
              {translations.tours_list.map(function (tour, i) {
                return (
                  <div
                    id={`key-${i}`}
                    className={"itinerario-tour-box-slider-item"}
                    key={i}
                  >
                    <div className="itinerario-tour-box-slider-item-image">
                      <div
                        className="child bg-one"
                        style={{
                          backgroundImage: `url(${!isMobile ? tour.img : tour.img_mob
                            })`,
                        }}
                        title={tour.title}
                      ></div>

                      <img
                        className="visibility-hidden"
                        src={!isMobile ? tour.img : tour.img_mob}
                        alt={tour.title}
                      />

                      <a
                        href={tour.slug}
                        title={tour.title}
                        className="itinerario-tour-box-slider-item-data"
                      >
                        <span className="row">
                          <span className="col-6 col-md-9">
                            <h3>{tour.text}</h3>

                            <h1>{tour.title}</h1>
                          </span>

                          <span className="col-6 col-md-3">
                            <span className="btn-primary btn--uppercase btn--yellow text-uppercase">
                              {currentLanguage === "es"
                                ? "Ver más"
                                : "See more"}
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(ToursHome);
