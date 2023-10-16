import React, {Component} from "react";
import {withLocalize} from "react-localize-redux";
import {compose} from "redux";
import {connect} from 'react-redux';

import KnowPanamaCard from "components/KnowPanama/components/KnowPanamaCard";
import KnowPanamaTranslations from 'data/KnowPanama';
import homeData from 'data/Home';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class KnowPanama extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentLanguage} = this.props.idiomasReducer;
    const translations = KnowPanamaTranslations[currentLanguage];
    const {info, hero, welcome} = translations;
    const homeDataPage = this.props.homeDataPage;

    // console.log(homeDataPage);
    const translations_home = homeData[currentLanguage];

    const {knowpanama_home} = translations_home;

    if (homeDataPage === 'home') {
      return (
        <div className="conoce-panama-cards">
          <div className="conoce-panama-cards-container">
            <div className="container text-center">
              <h1 className="iti-title">{info[0].title}</h1>
              <h2 className="iti-subtitle">
                {info[0].subtitle}
                <br/>
                <strong>{info[0].extra_title}</strong>
              </h2>
            </div>
            <div className="conoce-panama-cards-page-list">
              {knowpanama_home.map((item, i) => (
                <KnowPanamaCard item={item}
                                welcome={knowpanama_home.find(w => w.type === item.type)} key={i}
                                actionButtonText={currentLanguage === 'es' ? 'VER MÁS' : 'SEE MORE'}/>
              ))}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="conoce-panama-cards">
          <div className="conoce-panama-cards-container">
            <div className="container text-center">
              <h1 className="iti-title">{info[0].title}</h1>
              <h2 className="iti-subtitle">
                {info[0].subtitle}
                <br/>
                <strong>{info[0].extra_title}</strong>
              </h2>
            </div>
            <div className="conoce-panama-cards-page-list">
              {hero.map((item, i) => (
                <KnowPanamaCard item={item}
                                welcome={welcome.find(w => w.type === item.type)} key={i}
                                actionButtonText={currentLanguage === 'es' ? 'VER MÁS' : 'SEE MORE'}/>
              ))}
            </div>
          </div>
        </div>
      )
    }

  }
}


export default compose(withLocalize, connect(mapStateToProps, null))(KnowPanama);
