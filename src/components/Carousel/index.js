import React from 'react';

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import { withLocalize } from "react-localize-redux";
import { isMobile } from "react-device-detect";

import PlayerVideo from "./_video";

import 'rc-banner-anim/assets/index.css';
import './index.scss';

import homeData from '../../data/Home';

import { connect } from "react-redux";
import { compose } from "redux";

import ModalBox from "../ModalBox";
import pageDataGlobal from "../../data/Global";

import safetyLogoEs from "../../assets/img/nav/safety_logo_es.svg";
import safetyLogoEn from "../../assets/img/nav/safety_logo_en.svg";


const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const BgElement = Element.BgElement;

const Carousel = ({ idiomasReducer }) => {
  const { currentLanguage } = idiomasReducer;
  const translations = homeData[currentLanguage];
  const translations_pageDataGlobal = pageDataGlobal[currentLanguage];

  const setMuted = (muted) => {
    this.player.muted = muted;
  }

  const play = () => {
    this.player.play();
  }

  const pause = () => {
    this.player.pause();
  }

  const load = () => {
    this.player.load();
  }

  const safetyLogo = (lang) => {
    if (lang === "es") {
      return safetyLogoEs;
    } else {
      return safetyLogoEn;
    }
  }

  return (
    <div className="carouselBox">
      <BannerAnim
        prefixCls="banner-user"
        type={'across'}
        autoPlay={false}
        arrow={true}
        autoPlaySpeed={12000}
        autoPlayEffect={false}
        dragPlay={(isMobile) ? (false) : (true)}
      >
        {
          translations.carousel.map((slider, i) => {
            return (
              <Element
                prefixCls="banner-user-elem"
                key={i}
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{ backgroundImage: `url(${(!isMobile) ? (slider.img) : (slider.img_mob)})` }}
                />

                {(slider.type === 'simple') ? (
                  <div className="slider-item type-simple" key={i}>
                    <div className="slider-zonas 1">

                      <div className="left-zone">
                        <h1>
                          <img className="logo-slider" src={slider.logo}
                            alt={slider.title} />
                          {slider.title} <span>{slider.subtitle}</span>
                        </h1>
                      </div>

                      <div className="right-zone">
                        <TweenOne className="slider-item-title"
                          animation={{ y: 30, opacity: 0, type: 'from' }}>
                          <span
                            dangerouslySetInnerHTML={{ __html: slider.text }}></span>
                        </TweenOne>
                        <TweenOne className="slider-item-text"
                          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                          {(slider.terms) ? (
                            <ModalBox terms_data={translations_pageDataGlobal.terms}
                              terms_link={translations_pageDataGlobal.title} terms_copy_1={slider.subtext}
                              terms_copy_2={slider.subtext2} />
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{ __html: slider.subtext }}></span>
                          )}
                        </TweenOne>
                      </div>

                    </div>

                    {/*(slider.btn_name) ? (<div className="col-md-12 btn-carousel">
                      <a href={slider.btn_url} className="btn-primary btn--yellow">
                        {slider.btn_name}
                      </a>
                    </div>) : (null)*/}

                    <img className="visibility-hidden" src={(!isMobile) ? (slider.img) : (slider.img_mob)}
                      alt={slider.title} />

                  </div>
                ) : (
                  null
                )}
                {(slider.type === 'complex') ? (
                  <div className="slider-item type-complex" key={i}>
                    <div className="slider-zonas 2">

                      <div className="left-zone">
                        <img className="logo-slider" src={slider.logo} alt={slider.title} />
                        <h1>{slider.title} <span>{slider.subtitle}</span></h1>
                      </div>

                      <div className="right-zone">
                        <TweenOne className="slider-item-title"
                          animation={{ y: 30, opacity: 0, type: 'from' }}>
                          <span
                            dangerouslySetInnerHTML={{ __html: slider.text }}></span>
                        </TweenOne>
                        <TweenOne className="slider-item-text"
                          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                          {(slider.terms) ? (
                            <ModalBox terms_data={translations_pageDataGlobal.terms}
                              terms_link={translations_pageDataGlobal.title} terms_copy_1={slider.subtext}
                              terms_copy_2={slider.subtext2} />
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{ __html: slider.subtext }}></span>
                          )}
                        </TweenOne>
                      </div>

                    </div>

                    {/*(slider.btn_name) ? (<div className="col-md-12 btn-carousel">
                      <a href={slider.btn_url} className="btn-primary btn--yellow">
                        {slider.btn_name}
                      </a>
                    </div>) : (null)*/}

                    <img className="visibility-hidden" src={(!isMobile) ? (slider.img) : (slider.img_mob)}
                      alt={slider.title} />

                  </div>
                ) : (
                  null
                )}
                {(slider.type === 'video') ? (
                  <div className="slider-item type-simple" key={i}>

                    {(!isMobile) ? (<div className="videoWrapper">
                      <PlayerVideo dataVideo={slider.video_url} />
                    </div>) : (null)}

                    <div className="slider-zonas 3">

                      <div className="left-zone">

                        <h1>
                          <img className="logo-slider" src={slider.logo}
                            alt={slider.title} />
                          {slider.title} <span>{slider.subtitle}</span>
                        </h1>
                      </div>

                      <div className="right-zone">
                        <TweenOne className="slider-item-title"
                          animation={{ y: 30, opacity: 0, type: 'from' }}>
                          <span
                            dangerouslySetInnerHTML={{ __html: slider.text }}></span>
                        </TweenOne>
                        <TweenOne className="slider-item-text"
                          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                          {(slider.terms) ? (
                            <ModalBox terms_data={translations_pageDataGlobal.terms}
                              terms_link={translations_pageDataGlobal.title} terms_copy_1={slider.subtext}
                              terms_copy_2={slider.subtext2} />
                          ) : (
                            <span
                              dangerouslySetInnerHTML={{ __html: slider.subtext }}></span>
                          )}
                        </TweenOne>
                      </div>

                    </div>

                    {/*(slider.btn_name) ? (<div className="col-md-12 btn-carousel">
                      <a href={slider.btn_url} className="btn-primary btn--yellow">
                        {slider.btn_name}
                      </a>
                    </div>) : (null)*/}

                    <img className="visibility-hidden" src={(!isMobile) ? (slider.img) : (slider.img_mob)}
                      alt={slider.title} />

                  </div>
                ) : (
                  null
                )}
              </Element>
            );
          })
        }
      </BannerAnim>
    </div>
  );
}

export default compose(withLocalize, connect(mapStateToProps, null))(Carousel);