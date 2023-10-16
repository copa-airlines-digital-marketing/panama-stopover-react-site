import React from "react";
import { withLocalize } from "react-localize-redux";
import Cookies from "universal-cookie";

import { connect } from "react-redux";
import { compose } from "redux";

import "./index.scss";

const mapStateToProps = (state) => {
  return {
    idiomasReducer: state.idiomasReducer,
  };
};

class CookiesMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideBox: false };
  }

  render() {
    const { currentLanguage } = this.props.idiomasReducer;

    /** Using cookies package
     * cookieSet will determine if a class is applied to the box.
     */
    const cookies = new Cookies();
    let cookieSet = cookies.get("cookieAccepted", "Stopover");

    function ButtonText(lang) {
      if (lang === "es") {
        return "ACEPTAR";
      } else {
        return "ACCEPT";
      }
    }

    /** Create cookie and change temporary state
     * The state change is done because React doesn't update when the cookie gets set, thus not removing the box based on the cookie's existence.
     */
    const setCookie = () => {
      cookies.set(`cookieAccepted`, "Stopover", { path: "/" });

      this.setState({
        hideBox: true,
      });
    };

    function showTerms() {
      // console.log(`Hi there`);
      let elemento = document.querySelector('.linker-copy-unique');
      elemento.click()
    }

    return (
      <div
        className={`cookie-message ${cookieSet != null ? "is-set" : "not-set"
          } ${this.state.hideBox ? "hide" : ""}`}
      >
        <div className="container">
          {
            (currentLanguage === "es")
              ? (
                <div className="">
                  <p>
                    <a href="http://stopoverinpanama.com/"><strong>Panamá Stopover - Copa Airlines</strong></a> utiliza cookies para mejorar tu experiencia y brindarte información relacionada con tus preferencias y navegación. Si decides continuar con la navegación, entendemos que aceptas la política de cookies que está en nuestra <a href="#" onClick={() => showTerms()}>política de privacidad</a>.
                  </p>
                </div>
              )
              : (
                <div className="">
                  <p>
                    <a href="http://stopoverinpanama.com/"><strong>Panamá Stopover - Copa Airlines</strong></a> uses cookies to improve your experience and provide you with information related to your preferences and navigation. If you decide to continue browsing, we understand that you accept the Cookies Policy in our <a href="#" onClick={() => showTerms()}>privacy policy</a>.
                  </p>
                </div>
              )
          }

          <a
            className="btn btn-cookie"
            href="#"
            onClick={setCookie}
            dangerouslySetInnerHTML={{ __html: ButtonText(currentLanguage) }}
          ></a>
        </div>
      </div>
    );
  }
}

export default compose(
  withLocalize,
  connect(mapStateToProps, null)
)(CookiesMessage);
