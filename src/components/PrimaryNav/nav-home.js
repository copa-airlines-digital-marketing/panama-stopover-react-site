// @flow
import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import LanguageToggle from "../LanguageToggle";
import dataPrimaryNav from "data/PrimaryNav/nav-home";

import safetyLogoEs from "../../assets/img/nav/safety_logo_es.svg";
import safetyLogoEn from "../../assets/img/nav/safety_logo_en.svg";

const mapStateToProps = (state) => {
  return {
    idiomasReducer: state.idiomasReducer,
  };
};

class PrimaryNavHome extends Component {
  safetyLogo(lang) {
    if (lang === "es") {
      return safetyLogoEs;
    } else {
      return safetyLogoEn;
    }
  }

  render() {
    const { currentLanguage } = this.props.idiomasReducer;
    const translations = dataPrimaryNav[currentLanguage];

    const mappingTopNav = (
      <ul className="top-nav-area">
        {/* {
          translations.top_nav.map(
            (item, i) =>
              <li className="top-nav-area-item" key={i}>
                <a
                  id={`key-${i}`}
                  href={`${item.href}`}
                  dangerouslySetInnerHTML={{__html: item.title}}></a>
              </li>
          )
        } */}
        <LanguageToggle />
      </ul>
    );

    const mappingPrimaryNav = (
      <ul className="primary-nav-area">
        {translations.primary_nav.map((item, i) => {
          return item.type === "anchor" ? (
            <li className="primary-nav-item" key={i}>
              <AnchorLink id={`key-${i}`} href={`${item.href}`}>
                {item.title}
              </AnchorLink>
            </li>
          ) : (
            <li className="primary-nav-item" key={i}>
              <Link to={`${item.href}`} id={`key-${i}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );

    return (
      <div className="row">
        <div className="top-area">
          <div className="logo-header">
            <Link to="/" className={currentLanguage === "es"? 'es':'en'}>PANAMA STOPOVER</Link>
          </div>

          <div className="navs-area">
            {mappingTopNav}

            {mappingPrimaryNav}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withLocalize,
  connect(mapStateToProps, null)
)(PrimaryNavHome);
