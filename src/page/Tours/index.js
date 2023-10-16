import React, {useState, useEffect} from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";
import {Link, useParams} from "react-router-dom";
import NotFound from './../../page/NotFound';

import Hero from "./../../components/Hero";
import BreadcrumbWithSlug from "./../../components/BreadcrumbWithSlug";
import MainTextBlock from "./../../components/MainTextBlock";
import GallerySlider from "./../../components/GallerySlider";
import Map from "./../../components/Map";
import TourCard from "./../../components/TourCard";
import pageData from "../../data/Tours";
import './index.scss';

import GoBackButton from "../../components/GoBackButton";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const ToursPage = (props) => {

  const {identifier} = useParams();
  const idioma = props.idiomasReducer.currentLanguage;
  const tours = pageData[idioma].tours.filter(tour => tour.slug === identifier)[0];

  if (tours) {
    const mainText = tours.mainText[0];

    const extraInfo = tours.extraInfo[0];

    const cards = tours.cards;

    const social = extraInfo.social.map((soc, k) => {
      if (soc.name != '' && soc.url != '' && soc.text != '') {
        return <p className="extra-social" key={k}> {soc.name}: <a href={soc.url} target="_blank"> {soc.text} </a></p>
      }
    });

    let total_cards = cards.length;
     // console.log(tours)

    return (
      <div className="full-page tours-page">
        <div className="App">
          <div className="primary-content">

            <Hero heroData={tours.bannerImg}/>

            <div className="container">
              <div className="container-small">

                <BreadcrumbWithSlug crumbs={tours.breadcrumb}/>

                <div className="tours-main">
                  <MainTextBlock idioma={idioma} mainText={mainText} textLink={idioma === 'es' ? 'RESERVA YA' : 'BOOK NOW'} />
                </div>

                <div className="extra">
                  <p className="extra-description"> {extraInfo.description ? extraInfo.description : null} </p>
                  <p
                    className="extra-discount-description" dangerouslySetInnerHTML={{__html: extraInfo.discount[0].description ? extraInfo.discount[0].description : ''}}>
		</p>
                  <p
                    className="extra-discount-name"> {extraInfo.discount[0].name ? extraInfo.discount[0].name : null} </p>
                  <p
                    className="extra-discount-code"> {extraInfo.discount[0].code ? extraInfo.discount[0].code : null} </p>
                  <p
                    className="extra-discount-last"> {extraInfo.discount[0].last ? extraInfo.discount[0].last : null} </p>
                  <p className="extra-open"> {extraInfo.open ? extraInfo.open : null} </p>
                  {social ? social : null}
                </div>
                <a className="extra-web" href={extraInfo.website}
                   target="_blank"> {extraInfo.website} </a>
              </div>

            </div>

            {(extraInfo.fees && false) ? (
              <div className="fee">
                <div className="container">
                  <p><strong>{idioma === 'es' ? 'Tarifas' : 'Fee'}:</strong> | <span
                    dangerouslySetInnerHTML={{__html: extraInfo.fees}}></span></p>
                </div>
              </div>
            ) : (
              null
            )}

            <div className="container-small">
              <div className="d-flex align-center justify-center flex-column mobile-view">
                <a
                  className="btn-primary btn--yellow text-uppercase"
                  href={tours.infoUrl} target="_blank">
                  {idioma === 'es' ? 'RESERVA YA' : 'BOOK NOW'}
                </a>
              </div>
            </div>

            <div className="container container-card">

              <div className="row">
                {cards.map((data, k) => (
                  <div className={`mb-5 col-12 col-sm-12 col-md-4`}
                       key={k}>
                    <TourCard {...data} />
                  </div>
                ))}
              </div>

            </div>

            <div className="container-small">
              <div className="container">
                <small className={tours.slug == 'canal-de-panama' ? 'display-none' : ''} >
                {idioma === 'es' ?  'Los productos promocionales y servicios adquiridos con el comprobante de Panamá Stopover en los comercios participantes son responsabilidad única y exclusiva de quienes lo ofrecen.' : 'Promotional products and services purchased with the Panama Parada voucher at participating merchants are the sole and exclusive responsibility of those who offer it.' } 
                <br />
                {idioma === 'es' ?  'Ni Copa Airlines ni Promtur Panamá son responsables por ningún reclamo producido por la disponibilidad, compra y obtención de los mismos.' : 'Neither Copa Airlines nor Promtur Panama are responsible for any claim caused by the availability, purchase and obtaining thereof.' } 
                </small>
              </div>
            </div>

            <div className="container">
              {(tours.map.length > 0) ? (
                  <Map text={idioma === 'es' ? 'Cómo llegar' : 'How to get'} coords={tours.map}/>
              ) : (
                  null
              )}
            </div>

            <GallerySlider slides={tours.gallery}/>

            <div className="d-flex align-center justify-center flex-column">
              <p className="small smaller-text">
                {idioma === 'es' ? 'Visita la página del operador para reservar' : 'Visit the operator\'s page to book'}
              </p>
              <a
                className="btn-primary btn--yellow text-uppercase desktop-view"
                href={tours.infoUrl} target="_blank">
                {idioma === 'es' ? 'RESERVA YA' : 'BOOK NOW'}
              </a>

              <div className="d-flex flex-center">
                <GoBackButton>
                  {idioma === 'es' ? '< VOLVER' : '< GO BACK'}
                </GoBackButton>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
  return <NotFound/>;
};

export default compose(
  withLocalize,
  connect(mapStateToProps, null)
)(ToursPage);
