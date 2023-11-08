import React from "react";
import { withLocalize } from "react-localize-redux";
import { compose } from "redux";

import PrimaryNavHome from "./../../components/PrimaryNav/nav-home";
import Carousel from "./../../components/Carousel";
import SubmenuHome from "./../../components/SubmenuHome";
import HowToStopOver from "./../../components/HowToStopOver";
import CreateYourItinerary from "./../../components/CreateYourItinerary";
import ToursHome from "./../../components/ToursHome";

import KnowPanama from "./../../components/KnowPanama";
import PackagesFilter from "./../../components/PackagesFilter";
import CookiesMessage from "../../components/CookiesMessage";
import BookingPanel from '../../components/BookingPanel';

import fullHomeData from "../../data/Home";
import Cookies from "universal-cookie";
import {Modal} from "antd";
import {isMobile} from "react-device-detect";
import itineraryHomeData from "../../data/ItineraryHome";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};


function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const fixItinerary = () => {
  let divItinerary = document.querySelector(".itinerario-tour-box-title");
  let divItineraryOffset = offset(divItinerary);

  let isSticky =
    document.querySelector(".sticky-itinerary-parent").getBoundingClientRect()
      .top <= document.body.clientHeight;

  //isSticky = document.querySelector('.sticky-itinerary-parent').getBoundingClientRect().top <= divOffset.top;

  if (isSticky) {
    if (divItineraryOffset.top - 500 <= document.documentElement.scrollTop) {
      document
        .querySelector(".sticky-itinerary")
        .classList.remove("sticky-bottom");
    } else {
      document
        .querySelector(".sticky-itinerary")
        .classList.add("sticky-bottom");
    }
  } else {
    document
      .querySelector(".sticky-itinerary")
      .classList.remove("sticky-bottom");
  }
};

const cookies = new Cookies();
let cookieSet = cookies.get("cookieAccepted", "Stopover");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      ytVideo: '',
      extraCss: 'hide-mobile',
      visible: false,
      offsetSecond: 0,
    };
  }

  componentDidMount() {
    if (window.location.hash) {
      const hash = window.location.hash;
      document
        .getElementById(hash.slice(1))
        .scrollIntoView({ behavior: "smooth" });
    }
    window.addEventListener("scroll", fixItinerary);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", fixItinerary);
  }

  showModal = (videoUrl) => {
    if(videoUrl) {
      this.setState({
        ytVideo: videoUrl + '?enablejsapi=1',
        visible: true,
      });
    }
  };

  clickReadMore = (css) => {
    this.setState({
      extraCss: css,
    });
  };

  handleOk = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleAfterClose = e => {
    const frame = document.getElementById("ytiframe");
    frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    this.setState({
      ytVideo: '',
    });
  };

  render() {
    const { currentLanguage } = this.props.idiomasReducer;
    const translations_video = itineraryHomeData[currentLanguage];
    const homeDataPage = "home";

    return (
      <div className="full-page">
        <div className="App">
          {cookieSet == null ? <CookiesMessage /> : ""}
          <div className="primary-content">
            {/*HEADER*/}
            <div className="header-box">

              <div className="primary-nav">
                <div className="container">
                  <PrimaryNavHome />
                </div>
              </div>

              <Carousel />

              <BookingPanel />

              <div className="submenuHomeBox">
                <div className="container">
                  <SubmenuHome fullHomeData={fullHomeData} />
                </div>
              </div>
            </div>

            {/*STOPOVER*/}
            
            <HowToStopOver fullHomeData={fullHomeData} />

            {/*CONOCE*/}
            <div
              id="anchor_conoce_panama"
              className="conoce-panama-box conoce-panama-box-in-home"
            >
              <div className="list-full-card">
                <KnowPanama homeDataPage={homeDataPage} />
              </div>
            </div>

            {/*ITINERARIO*/}
            <div id="anchor_itinerary" className="crea-tu-itinerario-box">
              <CreateYourItinerary />
            </div>

            <ToursHome />

            {/*PACKAGES*/}
            <div id="anchor_packages" className="packages-home-box">
              <PackagesFilter />
            </div>
            <div id="anchor_ytvideos">
              <div className="youtube-video-list">
                <div className="row">
                  <div className="col-md-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="youtube-video-title">
                            { translations_video.yt_title }
                          </div>
                          <div className="youtube-video-subtitle">
                            { translations_video.yt_subtitle }
                          </div>
                        </div>
                      </div>
                      <div className="row youtube-frame-list">
                        {translations_video.video_list.map((item, i) => {
                          return (
                              <div className={`col-sm-12 col-lg-6 youtube-frame-wrapper ${i >= 4? this.state.extraCss : ''}`} key={i}>
                                <div className="row">
                                  <div className="col-6 col-md-7">
                                    <div className="youtube-icon-wrapper pointer" onClick={() => this.showModal(item.video_url)}>
                                      <div className="youtube-play-icon">
                                        <img loading="lazy" src={item.video_img} alt="img" className="pointer"/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6 col-md-5 p-0">
                                    <div className="youtube-video-item-author">
                                      <img loading="lazy" src={item.avatar_img} alt="img"/>
                                      {item.username}
                                    </div>
                                    <div className="youtube-video-item-body">
                                      {item.text_body}
                                    </div>
                                  </div>
                                </div>
                              </div>
                          );
                        })
                        }
                        {this.state.extraCss === 'hide-mobile'
                            ?(
                                <div className="col-sm-12 read-more" onClick={() => this.clickReadMore('')}>
                                  {currentLanguage === 'es'? 'Ver todos ':'See all '}
                                  <img loading="lazy" src={'https://cm-marketing.directus.app/assets/f3ef8eb5-7b4b-45c4-9ddd-cbd03573027a'} alt="img" />
                                </div>
                            )
                            :(
                                <div className="col-sm-12 read-more" onClick={() => this.clickReadMore('hide-mobile')}>
                                  {currentLanguage === 'es'? 'Ver menos ':'See less '}
                                  <img loading="lazy" src={'https://cm-marketing.directus.app/assets/574a1b25-1697-4309-b1a4-39d79b74aad1'} alt="img" />
                                </div>
                            )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
                className="modal-youtube-player"
                title={false}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                afterClose={this.handleAfterClose}
                footer={false}
                width={!isMobile? 854 : 854}
                height={!isMobile? 480 : 480}
            >
              <iframe loading="lazy" className="youtube-video-item" src={this.state.ytVideo} title="YouTube video player"
                      id="ytiframe"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

// Se exporta con compose porque se están usando dos HOC para el mismo componente. Si no se coloca con compose el export
// termina estando disponible uno u otros props, pero no ambos
export default compose(withLocalize, connect(mapStateToProps, null))(Home);
