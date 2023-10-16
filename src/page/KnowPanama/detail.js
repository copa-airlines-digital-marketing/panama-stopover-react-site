import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {connect} from "react-redux";
import {compose} from "redux";
import Map from "./../../components/Map";
import PrimaryNav from "./../../components/PrimaryNav";
import dataKnowPanama from "../../data/KnowPanama";

import GoBackButton from "../../components/GoBackButton";
import {KnowPanamaListAnimation} from "./animations";
import {isMobile} from "react-device-detect";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {withRouter} from "react-router";
import classnames from "classnames/bind";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

function KnowPanamaDetail({idiomasReducer, location, history}) {
  const [showZoom, setZoom] = useState(true);
  const {currentLanguage} = idiomasReducer;
  const translations = dataKnowPanama[currentLanguage];
  const { pathname } = location;


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
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "146px",
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "36px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "26px"
        }
      }
    ]
  };

  let {identifier} = useParams(currentLanguage);

  const resultDetail = translations.detail.filter(
    type => type.slug === identifier
  );
  const resultBreadcrumb = translations.breadcrumb;
  const resultBreadcrumbDetail = translations.detail;

  useEffect(() => {
    setTimeout(() => {
      setZoom(false);
    }, 0);
  });

  function goToUrl() {
    const splittedUrl = pathname.split('/');
    const lastUrlItem = splittedUrl[splittedUrl.length - 1];

    window.open(`${splittedUrl.splice(0, splittedUrl.length - 1).join('/')}/#${lastUrlItem}`,"_self")
  }

  return (
    <KnowPanamaListAnimation
      pose={showZoom ? "zoom" : "init"}
      className={"box-list-by-type"}
    >
      {/*HEADER*/}
      <div className="header-box">
        <div className="primary-nav">
          <div className="container">
            <PrimaryNav/>
          </div>
        </div>

        <div className="hero-box-data">
          {resultDetail.map((item, i) => {
            return (
              <div
                className="hero-box-item"
                key={i}
                style={{
                  backgroundImage: `url(${item.hero})`
                }}
              >
                <img
                  className="visibility-hidden"
                  src={item.hero}
                  alt={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-full">
        <ul className="breadcrumbs">
          {resultBreadcrumb.map((crumb, k) => {
            return <li><a href={currentLanguage === "es" ? "/conoce-panama" : "/know-panama"}
                          key={k}>{`${crumb.title}`}</a><span> > </span></li>;
          })}
          {resultBreadcrumbDetail.map((opt, i) => {
            return opt.slug === identifier ? (
              <li key={i}>
                <a
                  href={`${currentLanguage === "es" ? "/conoce-panama" : "/know-panama"}/` + opt.type_name.toLowerCase().split(' ').join('-')}>{`${opt.type_name}`}</a><span> > </span>
                <strong>{opt.title}</strong>
              </li>
            ) : null;
          })}
        </ul>
      </div>

      {/*DETAIL*/}
      <div className="generic-details-box">
        <div className="container-fuller">
          {resultDetail.map((item, i) => {
            return (
              <div className="generic-details-box-container" key={i}>
                <div className="container-full">
                  <div className="row">
                    <div className={`${item.did_you_know_title ? "col-md-6" : "col-md-12"}`}>
                      <div className="generic-details-box-container__text">
                        <h1>{item.title}</h1>
                        <h2>{item.subtitle}</h2>

                        <p dangerouslySetInnerHTML={{__html: item.content}}></p>

                      </div>
                    </div>

                    {(item.did_you_know_title) ? (
                      <div className="col-md-6">
                        <div className="row did-you-know-box">

                          <div className="col-md-6 did-you-know-box__left">
                            <div
                              className="did-you-know-box__image"
                              style={{
                                backgroundImage: `url(${(!isMobile) ? (item.did_you_know_img) : (item.did_you_know_img_mobile)})`
                              }}
                            >
                              <img
                                className="visibility-hidden"
                                src={(!isMobile) ? (item.did_you_know_img) : (item.did_you_know_img_mobile)}
                                alt={item.did_you_know_title}
                              />
                            </div>
                          </div>

                          <div className="col-md-6 did-you-know-box__right">
                            <h1>{item.did_you_know_title}</h1>
                            <h2>{item.did_you_know_subtitle}</h2>
                            <p>{item.did_you_know_content}</p>
                          </div>

                        </div>
                      </div>
                    ) : (
                      null
                    )}
                  </div>

                  <div className="row">
                    {(item.map) ? (
                      <div className="col-md-6">
                        <Map
                          text={
                            currentLanguage === "es" ? "Cómo llegar" : "How to get"
                          }
                          coords={item.map}
                        />
                      </div>
                    ) : (
                      null
                    )}

                    {(item.distance_title) ? (
                      <div className="col-md-6 d-flex align-content-center align-items-center">
                        <div className="distance-box">
                          <p>
                            <strong>{item.distance_title}</strong>
                            {item.distance_content}
                          </p>
                        </div>
                      </div>
                    ) : (
                      null
                    )}

                  </div>
                </div>

                <div className="row-generic">
                  <div className="festivals_list">
                    {(item.festivals) ? (
                      <div className="full-large">
                        {item.festivals.map((fest, i) => {
                          return (
                            <div className="festival-item" key={i}>

                              <div className="container-full">
                                <div className="generic-details-box-container__text">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <h1>{fest.title}</h1>
                                  <h2>{fest.subtitle}</h2>

                                  <p dangerouslySetInnerHTML={{__html: fest.content}}></p>

                                </div>
                              </div>

                              {(fest.gallery) ? (
                                <div className="itinerario-tour-box-slider">
                                  <Slider {...settings} key={i}>
                                    {fest.gallery.map((gal, i) => {
                                      return (
                                        <div className={"itinerario-tour-box-slider-item"} key={i}>
                                          <div className="itinerario-tour-box-slider-item-image">
                                            <div
                                              className="child bg-one"
                                              style={{backgroundImage: `url(${(!isMobile) ? (gal.img) : (gal.img_mob)})`}}
                                              title={gal.title}
                                            />
                                            <img
                                              className="visibility-hidden"
                                              src={(!isMobile) ? (gal.img) : (gal.img_mob)}
                                              alt={gal.title}
                                            />
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </Slider>
                                </div>
                              ) : (null)}

                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      null
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/*GALLERY*/}
      {resultDetail.map((item, i) => {
        return (
          (item.gallery) ? (
            <div className="itinerario-tour-box-slider">
              <Slider {...settings} key={i}>
                {item.gallery.map((gal, i) => {
                  return (
                    <div className={"itinerario-tour-box-slider-item"} key={i}>
                      <div className="itinerario-tour-box-slider-item-image">
                        <div
                          className="child bg-one"
                          style={{backgroundImage: `url(${(!isMobile) ? (gal.img) : (gal.img_mob)})`}}
                          title={gal.title}
                        />
                        <img
                          className="visibility-hidden"
                          src={(!isMobile) ? (gal.img) : (gal.img_mob)}
                          alt={gal.title}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (null)
        );
      })}

      <div className="d-flex flex-center">
        <button
          type="button"
          onClick={goToUrl}
          className={classnames({
            "go-back-button btn-primary btn--border": true,
          })}
        >
          {currentLanguage === "es" ? "< VOLVER" : "< GO BACK"}
        </button>
      </div>
    </KnowPanamaListAnimation>
  );
}


export default compose(withRouter, connect(mapStateToProps, null))(KnowPanamaDetail);
