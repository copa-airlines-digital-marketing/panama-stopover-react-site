import React from 'react';
import {withLocalize} from 'react-localize-redux';

import PrimaryNav from "./../../components/PrimaryNav";
import KnowPanama from "./../../components/KnowPanama";

import dataKnowPanama from "../../data/KnowPanama";

import {connect} from "react-redux";
import {compose} from "redux";
import GoBackButton from "../../components/GoBackButton";
import {isMobile} from "react-device-detect";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class KnowPanamaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      offsetSecond: 0
    };
  }

  componentWillMount() {
    document.body.classList.add('page-know-panama');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-know-panama');
  }

  render() {
    const {currentLanguage} = this.props.idiomasReducer;
    const translations = dataKnowPanama[currentLanguage];

    return (
      <div className="full-page conoce-panama-the-page">

        <div className="App">

          <div className="primary-content">

            {/*HEADER*/}
            <div className="header-box">
              <div className="primary-nav">
                <div className="container">
                  <PrimaryNav/>
                </div>
              </div>

              <div className="hero-box-data">
                {
                  translations.info.map((item, i) => {
                    return (
                      <div className="hero-box-item" key={i}
                           style={{
                             backgroundImage: `url(${(!isMobile) ? (item.hero) : (item.hero)})`
                           }}>
                        <img className="visibility-hidden" src={(!isMobile) ? (item.hero) : (item.hero)} alt={item.title}/>
                      </div>
                    );
                  })
                }
              </div>

            </div>

            {/*CONOCE*/}
            <div id="anchor_conoce_panama" className="welcome-box conoce-panama-box">
              <div className="list-full-card">
                <div className="conoce-panama-page-box-cards">
                  <KnowPanama knowpanamaData={translations.know_panama}/>
                </div>
              </div>
            </div>

            <div className="d-flex flex-center">
              <GoBackButton>
                {currentLanguage === "es" ? "< VOLVER" : "< GO BACK"}
              </GoBackButton>
            </div>

          </div>

        </div>

      </div>
    );
  }
}


export default compose(withLocalize, connect(mapStateToProps, null))(KnowPanamaPage);