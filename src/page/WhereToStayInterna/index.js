import React, {useState, useEffect} from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";
import {useParams} from "react-router-dom";

import Hero from "./../../components/Hero";
import Breadcrumb from "./../../components/Breadcrumb";
import Map from "./../../components/Map";
import GallerySlider from "./../../components/GallerySlider";

import GoBackButton from "../../components/GoBackButton";

import './index.scss';

let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const WhereToStayInterna = (props) => {
  const {identifier} = useParams();
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const findBySlug = identifier => {
    fetch(`${url_api}/hotel/find/${identifier}`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setError(null);
        setHotel(result);
      })
      .catch(result => {
        setLoading(false);
        setError(null);
        setError(result.error);
      });
  };

  useEffect(() => {
    findBySlug(identifier);
  });

  const idioma = props.idiomasReducer.currentLanguage;
  const data = hotel[idioma];

  console.log('hotel');
  console.log(hotel);

  if (loading || !data) {
    return <div className="loader-container">
      <div className="animated yt-loader"></div>
      <div className="loader-container-relative">
        <div className="loader"></div>
        <h6>{idioma === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
      </div>
    </div>
  }

  return (
    <div className="full-page where-to-stay-page-interna">
      <div className="App">
        <div className="primary-content">

          <Hero heroData={data.bannerImg}/>

          <Breadcrumb dataslugger={idioma === 'es' ? 'donde-hospedarse' : 'where-to-stay'}
                      crumbs={[data.parentName, data.name]}/>

          <div className="container mt-5 text-cont">
            <div className="row">
              <div className="col-left text-left">
                <h1> {data.name} </h1>
                <div className="py-3">
                  <strong>{idioma === 'es' ? 'Promociones y servicios' : 'Promotions and services'}: </strong> <span dangerouslySetInnerHTML={{__html: data.extraInfo.services}}></span>
                </div>
                <div className="py-3">
                  <strong>{idioma === 'es' ? 'Restricciones' : 'Restrictions'}: </strong><span dangerouslySetInnerHTML={{__html: data.extraInfo.restrictions}}></span>
                </div>
              </div>
              <div className="col-right">
                <Map
                  text={idioma === 'es' ? 'Cómo llegar' : 'How to get'}
                  coords={data.map}
                />
                <br/>
                <br/>
              </div>
            </div>
          </div>

          {false && data.extraInfo.fee > 0 &&
            <div className="fee" >
              <div className="container">
                <div className="row">
                  <strong>{idioma === 'es' ? 'Tarifa' : 'Fee'}:</strong><span className="padrig"> | </span><strong> ${data.extraInfo.fee}</strong>
                </div>
              </div>
            </div>
          }

          <div className="d-flex align-center justify-center flex-column">
            <p className="small smaller-text">
              {idioma === 'es' ? 'Visita la página del hotel para reservar' : 'Visit the hotel\'s page to book'}
            </p>
            <a
              className="btn-primary btn--yellow text-uppercase"
              href={idioma === 'es' ? data.infoUrl : data.infoUrlEn} 
              target="_blank"
              rel='noreferrer'>
              {idioma === 'es' ? 'RESERVA YA' : 'BOOK NOW'}
            </a>
          </div>

          <GallerySlider slides={data.gallery}/>

          <div className="d-flex flex-center">
            <GoBackButton>
              {idioma === 'es' ? '< VOLVER' : '< GO BACK'}
            </GoBackButton>
          </div>

        </div>
      </div>
    </div>
  );

}

export default compose(withLocalize, connect(mapStateToProps, null))(WhereToStayInterna);
