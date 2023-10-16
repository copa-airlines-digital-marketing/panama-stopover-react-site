import React from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";

import Hero from "./../../components/Hero";
import Breadcrumb from "./../../components/Breadcrumb";
import MainTextBlock from "./../../components/MainTextBlock";
import CarCard from "./../../components/CarCard";

import pageData from "../../data/CarRental";
import GoBackButton from "../../components/GoBackButton";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const AlquilerDeAutosPage = props => {

  const idioma = props.idiomasReducer.currentLanguage;
  const mainText = pageData[idioma].mainText[0];
  return (
    <div className="full-page alquiler-de-autos">
      <div className="App">
        <div className="primary-content">
          <Hero heroData={pageData[idioma].bannerImg}/>

          <div className="container">
            <div className="text-center">
              <ul className="breadcrumbs"></ul>
            </div>
            <MainTextBlock mainText={mainText}/>
            <div className="row row-card">
              {pageData[idioma].cars.map((car, k) => (
                <div className="col-sm-12 col-md-6" key={k}>
                  <CarCard {...car} />
                </div>
              ))}
            </div>

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

export default compose(withLocalize, connect(mapStateToProps, null))(AlquilerDeAutosPage);