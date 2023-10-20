import React, { useState, useEffect } from "react";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";
import { compose } from "redux";
import { isMobile } from "react-device-detect";

import Hero from "./../../components/Hero";

import MainTextBlock from "./../../components/MainTextBlock";
import Gallery from "./../../components/Gallery";
import HotelFilter from "./../../components/HotelFilter";
import Map from "./../../components/Map";
import pageData from "../../data/WhereToStay";
import GoBackButton from "../../components/GoBackButton";
import "./index.scss";

// let url_api = 'https://copa-airlines-stopover-backend.st4ging.dev/api';
// let url_api = process.env.REACT_APP_API_URL;
let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

// Declarar map del store a los props del componente
const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const WhereToStayPage = props => {
  const [hotels, setHotels] = useState({ es: [], en: [] });
  const [cities, setCities] = useState([]);
  const [filterMin, setFilterMin] = useState(0);
  const [filterMax, setFilterMax] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFilterData = () => {
    fetch(`${url_api}/city/if-has-hotels`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setCities(result.cities);
        setFilterMin(result.min);
        setFilterMax(result.max);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setError(null);
        setError(result.error);
      });
  };

  const getHotels = () => {
    fetch(`${url_api}/hotel`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setHotels(result);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setError(null);
        setError(result.error);
      });
  };

  const getFilteredResults = (e, body) => {
    fetch(`${url_api}/hotel/filtered`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setHotels(result);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setError(null);
        setError(result.error);
      });
  };

  useEffect(() => {
    getFilterData();
    getHotels();
  }, []);

  const idioma = props.idiomasReducer.currentLanguage;
  const data = pageData[idioma];
  const mainText = data.mainText[0];
  let markers = [];
  let map = null;
  let HotelFiltered = null;

  // console.log(filterMin);
  // console.log(filterMax);

  if (loading || !data || !hotels) {
    return <div className="loader-container">
      <div className="animated yt-loader"></div>
      <div className="loader-container-relative">
        <div className="loader"></div>
        <h6>{idioma === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
      </div>
    </div>
  }

  // console.log(hotels[idioma]);

  if (hotels && hotels[idioma] && hotels[idioma].length > 0) {
    hotels[idioma].map((i) =>
      i.map.map(m => markers.push(m))
    );
    map = markers.length ? <Map coords={markers} /> : null;
  }

  if (filterMax !== 0) {
    HotelFiltered = (
      <HotelFilter
        cities={cities}
        min={filterMin}
        max={filterMax}
        filterResults={getFilteredResults}
      />
    )
  }

  return (
    <div className="full-page where-to-stay-page">
      <div className="App">
        <div className="primary-content">

          <Hero heroData={!isMobile ? data.bannerImg : data.bannerMobile} />

          <div className="container mt-5">
            <MainTextBlock mainText={mainText} />
            {HotelFiltered}
            <div className="mapzone">
              {map}
            </div>

          </div>

          <Gallery items={hotels[idioma]} />

          <div className="container">

            <div className="d-flex flex-center">

              <GoBackButton>
                {idioma === "es" ? "< VOLVER" : "< GO BACK"}
              </GoBackButton>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


export default compose(withLocalize, connect(mapStateToProps, null))(WhereToStayPage);
