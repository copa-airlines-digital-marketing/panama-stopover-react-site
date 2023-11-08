import React, {Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import {compose} from "redux";
import {connect} from "react-redux";

import ReadMore from "../ReadMore";

import {isMobile} from "react-device-detect";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class CreateYourItineraryCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {img, img_mob, title, text, identifier} = this.props.dataForIndividualItinerary;
    const keyID = this.props.dataForIndividualItineraryID;

    // console.log(this.props.dataForIndividualItinerary);
    // console.log(keyID);

    return (
      <div className="crea-tu-itinerario-item-individual">

        <div className="container">

          <div className="row d-flex">

            <div
              className="col-md-6 left-itinerario-item">

              <img loading="lazy" className="visibility-hidden"
                   src={(!isMobile) ? (img) : (img_mob)}
                   alt={title}/>

              <a className="child bg-one"
                 style={{backgroundImage: `url(${(!isMobile) ? (img) : (img_mob)})`}}
                 title={title}>
              </a>

            </div>

            <div
              className="col-md-6 right-itinerario-item">

              <div className={`readmoreArea-not-activado id-sm-${keyID + identifier}`}>
                <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
                <h1 style={{display: `none`}}>{title}</h1>

                <div className="iti-read-more">
                  <ReadMore dataText={text} dataIdIti={keyID + identifier}/>
                </div>
              </div>

            </div>


          </div>

        </div>

      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(CreateYourItineraryCard);