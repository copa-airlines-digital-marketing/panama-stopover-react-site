import React from 'react';

import './index.scss';
import {compose} from "redux";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const TourCard = (props) => {
  const {currentLanguage} = props.idiomasReducer;
  let rate = currentLanguage === "es" ? "Tarifa por persona" : "Fee per person";

  return (
    <div className="tour-card">

      <div className="tour-card-img" style={{background: `url(${props.img}) no-repeat center/cover`}}></div>

      <div className="tour-card-body">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>

        <ul>
          {
            props.items
              ?
              props.items.map((item, k) =>
                <div key={k}>
                  {
                    item.text
                      ?
                      <li>
                        {item.text}
                        <br/>
                        {item.feePerPerson && false ? <strong>{rate}: {item.feePerPerson}</strong> : null}
                      </li>
                      :
                      null
                  }
                </div>
              )
              :
              null
          }
        </ul>

        <strong>
          {props.feePerPerson && false ? rate + ': ' + props.feePerPerson : null}
        </strong>

        <div className="tips">
          {
            props.tips
              ?
              props.tips.map((item, k) => <div key={k}>{item}</div>)
              :
              null
          }
        </div>
        <strong>{props.discount ? props.discount : null}</strong>
      </div>

      <a href={props.infoUrl} target="_blank" rel='noreferrer' className="btn-primary btn--yellow text-uppercase tour-card-btn">
        {currentLanguage === "es" ? "Más Información" : "More information"}
      </a>

    </div>
  )
};

export default compose(withLocalize, connect(mapStateToProps, null))(TourCard);