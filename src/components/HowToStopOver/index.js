import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";

import ModalBox from "./../../components/ModalBox";

import { connect } from "react-redux";
import { compose } from "redux";

import AnchorLink from "react-anchor-link-smooth-scroll";

import pageDataGlobal from "./../../data/Global";

const mapStateToProps = (state) => {
  return {
    idiomasReducer: state.idiomasReducer,
  };
};

const HowToStopOver = ({ ...props }) => {
  const { currentLanguage } = props.idiomasReducer;
  const translations = props.fullHomeData[currentLanguage];
  const translations_pageDataGlobal = pageDataGlobal[currentLanguage];

  return (
    <div id="anchor_stopover" className="como-hacer-stopover-box">
      <div className="container">
        <div className="como-hacer-stopover-list-box">
          {translations.how_to_stopover.map((item, i) => {
            return (
              <div className="como-hacer-stopover-area" key={i}>
                <h1 className="col-md-12">{item.title_page}</h1>

                <div className="row como-hacer-stopover-items">
                  {item.steps.map(function (step, i) {
                    return (
                      <div
                        id={`key-${i}`}
                        className={"col-md-12 como-hacer-stopover-item"}
                        key={i}
                      >
                        <div
                          className={
                            "col-md-6 direction-" + (i % 2 ? "r" : "l")
                          }
                        >
                          <h2>{step.identifier}</h2>

                          <h3>{step.title}</h3>

                          {step.type === "url" ? (
                            <div>
                              <p
                                dangerouslySetInnerHTML={{ __html: step.text }}
                              ></p>

                              <a
                                target="_blank"
                                href={`${step.url}`}
                                className="como-hacer-stopover-item-a"
                              >
                                {step.link}
                              </a>
                            </div>
                          ) : null}

                          {step.type === "tel" ? (
                            <div>
                              <p
                                dangerouslySetInnerHTML={{ __html: step.text }}
                              ></p>

                              <a
                                href={`${step.url}`}
                                className="como-hacer-stopover-item-a"
                              >
                                {step.link}
                              </a>
                            </div>
                          ) : null}

                          {step.type === "anchor" ? (
                            <div>
                              <p>
                                {step.text}
                                <AnchorLink
                                  href={`${step.url}`}
                                  className="como-hacer-stopover-item-anchor"
                                >
                                  {step.link}
                                </AnchorLink>
                              </p>
                            </div>
                          ) : null}

                          <div className="the-btn-call-container">
                            {i === 0 ? (
                              <div className="the-btn-call">
                                {translations.how_to_stopover.map((item, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="sticky-mobile yellow-box-stopover"
                                    >
                                      <a
                                        href={`tel:${item.sticky_call}`}
                                        className="btn-call"
                                      >
                                        {item.sticky_call}
                                      </a>
                                    </div>
                                  );
                                })}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <ModalBox
                  terms_data={translations_pageDataGlobal.terms}
                  terms_link={translations_pageDataGlobal.title}
                  terms_copy_1={item.copryright_1}
                  terms_copy_2={item.copryright_2}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="blue-box-stopover">
        {translations.how_to_stopover.map((item, i) => {
          return (
            <div className="blue-box-stopover-about" key={i}>
              {item.about_stop.map(function (about, i) {
                return (
                  <div className="container" key={i}>
                    <div className="lo-que-debes-saber-stopover-list-box">
                      <h1>{about.subtitle_page}</h1>
                      <h2>{about.sub_text_page}</h2>

                      <div className="row lo-que-debes-saber-stopover-list-box-items">
                        {about.icons.map(function (icon, i) {
                          return (
                            <div
                              className="col-6 col-sm-6  col-md-3 p-0 m-0 lo-que-debes-saber-stopover-list-box-item"
                              id={`key-${i}`}
                              key={i}
                            >
                              <div className="img-saber-box">
                                <img src={icon.img} alt={icon.title} />
                              </div>

                              <h1>{icon.title}</h1>

                              <p>{icon.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="sticky-itinerary-parent">
        {translations.how_to_stopover.map((item, i) => {
          return (
            <div className="sticky-itinerary yellow-box-stopover" key={i}>
              <AnchorLink className={`btn-build`} href={`${item.sticky_link}`}>
                <span>{item.sticky_title}</span>
              </AnchorLink>
              {/* <a href={item.sticky_url} className="btn-call">
                  {item.sticky_call}
                </a> */}
              <a href={item.sticky_url} className="btn-booking-border">
                {item.sticky_btn}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default compose(
  withLocalize,
  connect(mapStateToProps, null)
)(HowToStopOver);
