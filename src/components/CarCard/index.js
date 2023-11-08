import React from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";

import './index.scss';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const ItemCard = (props) => {
  const idioma = props.idiomasReducer.currentLanguage;
  return (
    <div className="item__card">
      <div
        className="item-card-header"
        style={{backgroundImage: "url(" + props.bannerImg + ")"}}
      ></div>
      <div className="item-card-body">
        <div className="heading">
          <div className="heading-img">
            <img loading="lazy" src={props.promotionImg} alt="img"/>
          </div>
          <div className="heading-title">
            {/* {idioma === 'es' ? 'Promoción' : 'Promotion'}: {props.promotionText} */}
            {props.theName}
          </div>
        </div>
        <div className="body">
          {props.code ? (
            <div className="reservation-code">
              {idioma === 'es' ? 'Debes utilizar el código ' : 'You must use the code '}
              <strong>{props.code}</strong><br />{idioma === 'es' ? 'al momento de hacer tu reserva' : ' at the time of making your reservation'}.
            </div>
          ) : null}
          {props.promotionBody ? (
              <div className="promotion-body">
                {props.promotionBody}
              </div>
          ) : null}
          <div className="considerations">
            <div>{idioma === 'es' ? 'Consideraciones y restricciones' : 'Considerations and restrictions'}:</div>
            <ul>
              {props.considerations.map((txt, i) => (
                <li key={i}>{txt}</li>
              ))}
            </ul>
          </div>
          <div className="btn-cont">
            <a
              className="btn-primary btn--yellow text-uppercase"
              href={props.url}
              target="_blank"
            >
              {idioma === 'es' ? 'MÁS INFORMACIÓN' : 'MORE INFORMATION'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose(withLocalize, connect(mapStateToProps, null))(ItemCard);