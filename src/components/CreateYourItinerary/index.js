import React, { Component } from "react";
import { Player, ControlBar, PlayToggle } from "video-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { withLocalize } from "react-localize-redux";
import { compose } from "redux";
import { connect } from "react-redux";

import ModalVideo from "../ModalVideo";
import RadioButton from "../../components/RadioButton";
import itineraryHomeData from "../../data/ItineraryHome";

import "./index.scss";

import { isMobile } from "react-device-detect";
import CreateYourItineraryCard from "../CreateYourItineraryCard";

const mapStateToProps = (state) => {
  return {
    idiomasReducer: state.idiomasReducer,
  };
};

class CreateYourItinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading2: true,
      addClass: false,
      removeClassHide: true,
      showResults: true,
      visible: false,
      name: "",
      itemSelectedLimit: 1,
      itemSelectedLimitCard: 3,
      ytVideo: '',
      extraCss: 'hide-mobile',
      items: [
        { value: "0", label: "0", checked: true },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
      ],
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.load = this.load.bind(this);
  }

  onChange = (value) => {
    // console.log(value);
    if (value) {
      this.setState((state) => ({
        itemSelectedLimit: ++value,
        removeClassHide: true,
        showResults: true,
        itemSelectedLimitCard: 3,
        isLoading2: false,
      }));
    }

    setTimeout(() => {
      this.setState({ isLoading2: true });
    }, 900);

    this.player.pause();
    this.setState({ addClass: "" });
  };

  onChangeMob = (value) => {
    // console.log(value);
    if (value) {
      this.setState((state) => ({
        itemSelectedLimit: ++value,
        removeClassHide: true,
        showResults: true,
        itemSelectedLimitCard: 3,
        isLoading2: false,
      }));
    }

    setTimeout(() => {
      this.setState({ isLoading2: true });
    }, 900);

    this.setState({ addClass: "" });
  };

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  play() {
    if (!isMobile) {
      this.player.play();
      this.setState({ addClass: !this.state.addClass });
    }
  }

  pause() {
    this.player.pause();
    this.setState({ addClass: !this.state.addClass });
  }

  showModal = (videoUrl) => {
    if(videoUrl) {
      this.setState({
        ytVideo: videoUrl,
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

  load() {
    this.player.load();
  }

  showAll() {
    this.setState({
      removeClassHide: !this.state.removeClassHide,
      showResults: false,
      itemSelectedLimitCard: 999,
    });
  }

  render() {
    const { currentLanguage } = this.props.idiomasReducer;
    const translations = itineraryHomeData[currentLanguage];

    let boxClass = ["box"];

    if (this.state.addClass) {
      boxClass.push("autoplay");
    }

    const resultItinerary = translations.itinerary_list.filter(
      (choice) => choice.identifier === "" + this.state.itemSelectedLimit + ""
    );

    // console.log(resultItinerary);

    return (
      <div className="crea-tu-itinerario-list-box">
        <div className="crea-tu-itinerario-area">
          <div className="crea-tu-itinerario-toparea">
            <h1 className="iti-title">{translations.title}</h1>

            <h2 className="iti-subtitle">{translations.subtitle}</h2>

            <h2
              className="iti-subtitle"
              dangerouslySetInnerHTML={{ __html: translations.bioDisclaimer }}
            ></h2>

            <p className="the-placeholder">{translations.placeholder}</p>

            {!isMobile ? (
              <div
                id={`id-${this.state.itemSelectedLimit}`}
                className="radio-button-box"
              >
                <RadioButton
                  items={this.state.items}
                  name="opt-group"
                  value="0"
                  className="radio-group"
                  onUpdate={this.onChange}
                />
              </div>
            ) : (
              <div
                id={`id-${this.state.itemSelectedLimit}`}
                className="radio-button-box"
              >
                <RadioButton
                  items={this.state.items}
                  name="opt-group"
                  value="0"
                  className="radio-group"
                  onUpdate={this.onChangeMob}
                />
              </div>
            )}

            <div className="section-btn-itinerario">
              {!this.state.isLoading2 ? (
                <div className="loader-container-relative">
                  <div className="loader"></div>
                  <h6>
                    {currentLanguage === "es" ? "CARGANDO..." : "LOADING..."}
                  </h6>
                </div>
              ) : (
                <div className="text-center">
                  <AnchorLink
                    href="#anchoritinerary"
                    className="btn-primary btn--yellow"
                    id={`theDay${this.state.itemSelected}`}
                    title={translations.btn_name}
                  >
                    {translations.btn_name}
                  </AnchorLink>

                  <p className="smaller-text-grey">{translations.disclaimer}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="itinerary-list-map">
          {resultItinerary.map((item, i) => {
            return (
              <div
                className="crea-tu-itinerario-area crea-tu-itinerario-area-listado"
                id={`theDay` + i}
                key={i}
              >
                <div
                  id="anchoritinerary"
                  className={"video-itinerario-box " + boxClass.join(" ")}
                  style={{
                    backgroundImage: `url(${!isMobile ? item.video_img : item.video_img_mob
                      })`,
                  }}
                >
                  {!isMobile ? (
                    <div className="oreporductor-video">
                      <Player
                        ref={(player) => {
                          this.player = player;
                        }}
                        src={item.video_url}
                        muted
                        loop
                      >
                        <ControlBar
                          autoHide={false}
                          disableDefaultControls={false}
                        >
                          <PlayToggle />
                        </ControlBar>
                      </Player>

                      <div
                        className="video-itinerario-box-play"
                        onClick={this.play}
                      >
                        Play
                      </div>

                      <div
                        className="video-itinerario-box-pause"
                        onClick={this.pause}
                      >
                        x
                      </div>
                    </div>
                  ) : (
                    <div className="oreporductor-video">
                      <ModalVideo video_link={item.video_url_mob} />
                    </div>
                  )}

                  <h2 className="video-itinerario-box-h2">{item.video_text}</h2>

                  <img
                    className="visibility-hidden"
                    src={!isMobile ? item.video_img : item.video_img_mob}
                    alt={item.title}
                  />
                </div>

                <div className="crea-tu-itinerario-items">
                  <div className="crea-tu-itinerario-items-grey">
                    <div className="row">
                      <div className="col-md-12">

                        {
                          ((item.identifier - 1) > 0) ? (
                            <span className="crea-tu-itinerario-items-numbers">
                              {item.identifier - 1}
                            </span>
                          ) : (
                            <span className="crea-tu-itinerario-items-numbers">                      
                            </span>
                          )
                        }

                        <h1>{item.intro_title}</h1>

                        <h2>{item.intro_subtitle}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="crea-tu-itinerario-items-grey">
                    <div className="row">
                      <div className="col-md-12">
                        {item.stopovers_list
                          .slice(0, this.state.itemSelectedLimitCard)
                          .map(function (step, i) {
                            return (
                              <div
                                id={`key-${i}`}
                                className={
                                  "row crea-tu-itinerario-item list-of-stopovers direction-" +
                                  (i % 2 ? "r " : "l ")
                                }
                                key={i}
                              >
                                <CreateYourItineraryCard
                                  dataForIndividualItineraryID={`idkey-${item.identifier}`}
                                  dataForIndividualItinerary={step}
                                />
                              </div>
                            );
                          })}
                      </div>

                      <div className="row extra-btns">
                        {resultItinerary[0].stopovers_list.length > 3 ? (
                          <div
                            className={
                              this.state.removeClassHide ? null : "d-none"
                            }
                          >
                            <div className="col-md-12">
                              <button
                                onClick={this.showAll.bind(this)}
                                className="btn-see-all"
                                title={item.btn_all}
                              >
                                {item.btn_all}
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default compose(
  withLocalize,
  connect(mapStateToProps, null)
)(CreateYourItinerary);
