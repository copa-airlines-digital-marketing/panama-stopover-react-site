// @flow
import React, {Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {HashLink as Link} from "react-router-hash-link";
import {connect} from "react-redux";
import {compose} from "redux";

import {slide as Menu} from "react-burger-menu";

import "./index.scss"
import dataMobileNav from 'data/PrimaryNav';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class PrimaryNav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {currentLanguage} = this.props.idiomasReducer;
    const translations = dataMobileNav[currentLanguage];

    function showSettings() {
      document.querySelector(".bm-burger-button button").click();
    }

    return (
      <div className="menu-mobile-area">
        <Menu right pageWrapId={"page-wrap"} outerContainerId={"App"}>
          {
            translations.primary_nav.map((item, i) => {
              return (
                (item.type === "anchor") ? (
                  <AnchorLink
                    id={`key-${i}`}
                    onClick={showSettings}
                    className="menu-item"
                    key={i}
                    href={`${item.href}`}
                  >
                    {item.title}
                  </AnchorLink>
                ) : (
                  <Link to={`${item.href}`}
                        key={i}
                        onClick={showSettings}
                        className="menu-item"
                        id={`key-${i}`}
                  >
                    {item.title}
                  </Link>
                )
              );
            })
          }
        </Menu>
      </div>
    );
  }
}


export default compose(withLocalize, connect(mapStateToProps, null))(PrimaryNav);
