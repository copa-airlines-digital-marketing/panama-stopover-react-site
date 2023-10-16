import React, {Component} from 'react';
import {withLocalize} from "react-localize-redux";
import {compose} from "redux";
import {connect} from "react-redux";

import ModalBox from "../ModalBox";

import pageData from "./../../data/Footer";
import pageDataGlobal from "./../../data/Global";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class FooterArea extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {currentLanguage} = this.props.idiomasReducer;
    const translations_pageData = pageData[currentLanguage];
    const translations_pageDataGlobal = pageDataGlobal[currentLanguage];

    return (
      <div className="footer-area-box">

        <div className="footer-brands-area">
          <ul className="footer-brands">
            {
              translations_pageData.brands.map((item, i) => {
                return (
                  <li id={`key-${i}`} className="footer-brands-li" key={i}>
                    <a style={{backgroundImage: `url(${item.img})`}} target="_blank" href={`${item.url}`}
                       className="footer-brands-a">
                      <img className="visibility-hidden" src={item.img} alt={item.title}/>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="footer-area">
          <ul className="footer-social">
            {
              translations_pageData.social.map((item, i) => {
                return (
                  <li id={`key-${i}`} className="footer-li" key={i}>
                    <a href={item.url} target="_blank" className="footer-a">
                      {item.title}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="terms-footer-stopover">

          <div className="d-flex flex-column flex-center justify-content-center text-center">

            <div className="text-panama-terms" id="terms">
              <ModalBox terms_data={translations_pageDataGlobal.terms}
                        terms_link={translations_pageData.terms_stopover} terms_copy_1={null}
                        terms_copy_2={null}/>
            </div>

            <div className="text-panama-terms-btns">
              <p className="linker-coupon">
                {translations_pageData.terms_coupon}
              </p>

              <p className="text-panama displa"
                 dangerouslySetInnerHTML={{__html: translations_pageData.terms_text_coupon}}>
              </p>
              <a href={translations_pageData.terms_coupon_link} target="_blank" >{currentLanguage === "es" ? "OBTÉN TU COMPROBANTE AQUÍ" : "GET YOUR VOUCHER HERE"}</a>
            </div>

          </div>

        </div>

        <div className="disclaimer-box-area">

          <p className="disclaimer-area">
            {translations_pageData.disclaimer}
          </p>

          <p className="copyright-area">
            {translations_pageData.copyright}
          </p>

        </div>

      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(FooterArea);