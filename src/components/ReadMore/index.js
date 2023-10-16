import ReadMoreReact from "read-more-react";
import React, {Component} from "react";
import {compose} from "redux";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";

import "./index.scss"

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class ReadMore extends Component {
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const dataTextHtml = this.props.dataText;
    const dataIdItiHtml = this.props.dataIdIti;

    const {currentLanguage} = this.props.idiomasReducer;

    function createMarkup() {
      return {__html: dataTextHtml};
    }

    function handleClick(e) {
      const id = e.target.id;
      if (id) {
        document.querySelector(`.${id}`).classList.toggle("readmoreArea-activado");
      }
    }

    return (
      <div className="">
        <div dangerouslySetInnerHTML={createMarkup()} className="read-more-wrap displayed-text"></div>
        <label onClick={handleClick.bind(this)} className="read-more-trigger read-more-button">
          <strong className="v-more" id={`id-sm-${dataIdItiHtml}`}>{(currentLanguage === 'es') ? ('Ver más') : ('See more')}</strong>
          <strong className="o-less" id={`id-sm-${dataIdItiHtml}`}>{(currentLanguage === 'es') ? ('Ocultar') : ('Hide')}</strong>
        </label>
      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(ReadMore);