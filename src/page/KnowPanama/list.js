import React, { useLayoutEffect, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { withLocalize } from "react-localize-redux";

import { connect } from "react-redux";
import { compose } from "redux";

import PrimaryNav from "components/PrimaryNav";
import dataKnowPanama from "data/KnowPanama";
import { KnowPanamaListAnimation } from "./animations";

import { Redirect, withRouter } from "react-router";
// import GoBackButton from "../../components/GoBackButton";
import { isMobile } from "react-device-detect";
import classnames from "classnames/bind";


//restaurant data
import pageData from "../../data/Restaurant";
import RadioButton from '../../components/RadioButton';
import "./index.scss";

const url_api_restaurant = "https://phpstack-685265-3053015.cloudwaysapps.com/copa-restaurant/api.php";
// let url_api_restaurant = process.env.REACT_APP_API_URL_RESTAURANT;

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const __orders = 0;
const __fil = [];


function KnowPanamaList({ idiomasReducer, location }) {
  const [showZoom, setZoom] = useState(true);
  let sizeWidth = 0;
  const { pathname } = location;
  let showResults = false;

  useEffect(() => {
    setTimeout(() => {
      setZoom(false);
    }, 0);
    getFilterData();
    get(0);
  }, []);

  const { currentLanguage } = idiomasReducer;
  const translations = dataKnowPanama[currentLanguage];

  const { identifier } = useParams();

  // console.log('identifier');
  // console.log(identifier);

  const [restaurants, setRestaurants] = useState({ es: [], en: [] });
  const [typesFoods, setTypes] = useState({ es: [], en: [] });
  const [selOrder, setSelOrder] = useState(0);

  const [showfilter, setShowFilter] = useState(0);
  const [showAllBtns, setShowAllBtns] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listOrders, getListOrders] = useState([
    { value: "0", label: "A - Z" },
    { value: "1", label: "Z - A" },
  ]);

  const resultHero = translations.hero.find(
    ({ type }) => type === identifier
  );

  if (!resultHero) {
    return <Redirect to='' />
  }

  const resultBreadcrumb = translations.breadcrumb;

  // console.log(resultBreadcrumb);

  const resultWelcome = translations.welcome.find(
    type => type.type === identifier
  );

  const resultList = translations.list.filter(type => type.type === identifier);

  function updateSize() {
    if (window.innerWidth > 768) {
      sizeWidth = window.innerWidth * 450 / 1920;
    } else {
      sizeWidth = 402;
    }
  }
  window.addEventListener('resize', updateSize);
  updateSize();

  function goToUrl() {
    window.open((currentLanguage === "es" ? "/conoce-panama" : "/know-panama"), "_self")
  }

  function handleShow() {
    setShowFilter(1);
  }
  function handleHide() {
    setShowFilter(0);
  }

  function handleShowAllBtns() {
    setShowAllBtns(1);
  }
  function handleHideAllBtns() {
    setShowAllBtns(0);
  }

  function _filterAll() {
    get(selOrder);
  }

  function _filter(fil) {
    let val = fil.currentTarget.value;

    let pos = __fil.indexOf(val);
    if (pos == -1) {
      __fil.push(fil.currentTarget.value);
    } else {
      __fil.splice(pos, 1);
    }
    //get(selOrder);
  }

  function _order(order) {
    get(order);
  }


  const getFilterData = () => {
    fetch(`${url_api_restaurant}?get=onlyfilters`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setTypes(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setTypes({ es: [], en: [] });
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  const get = (order) => {

    setSelOrder(order);

    fetch(`${url_api_restaurant}?get=restaurants&order=` + order + `&filters=` + __fil.join('|'))
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setRestaurants(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setRestaurants({ es: [], en: [] });
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  const idioma = idiomasReducer.currentLanguage;
  const data = pageData[idioma];
  let markers = [];

  // console.log(filterMin);
  // console.log(filterMax);
  // console.log(hotels[idioma]);

  if (loading || !data || !restaurants) {
    return <div className="loader-container">
      <div className="animated yt-loader"></div>
      <div className="loader-container-relative">
        <div className="loader"></div>
        <h6>{idioma === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
      </div>
    </div>
  }

  // console.log('restaurants:');
  // console.log(restaurants);

  function showAll() {
    // console.log(`Hi there`);
    let sections = document.querySelectorAll('.restaurant-card');
    let i = 0;
    // console.log(sections);
    for (i = 0; i < sections.length; i++) {
      sections[i].classList.remove('d-none');
    }

    let btnseeallunique = document.querySelector('.btn-see-all-unique');
    btnseeallunique.style.display = 'none';
  }


  return (
    <div>
      <KnowPanamaListAnimation
        pose={showZoom ? "zoom" : "init"}
        className={"box-list-by-type"}>
        {/*HEADER*/}
        <div className="header-box">
          <div className="primary-nav">
            <div className="container">
              <PrimaryNav />
            </div>
          </div>

          <div className="hero-box-data">
            <div
              className="hero-box-item"
              style={{
                backgroundImage: `url(${(!isMobile) ? (resultHero.img) : (resultHero.img_mob)})`
              }}>
              <img
                className="visibility-hidden"
                src={(!isMobile) ? (resultHero.img) : (resultHero.img_mob)}
                alt={resultWelcome.title}
              />
            </div>
          </div>
        </div>
      </KnowPanamaListAnimation>

      <div className="container">
        {resultBreadcrumb.map((crumb, k) => {
          return (
            <ul className="breadcrumbs" key={k}>
              <li>
                <a
                  href={currentLanguage === "es" ? "/conoce-panama" : "/know-panama"}>{`${crumb.title}`}</a><span> > </span>
              </li>
              {crumb.options.map((opt, i) => {
                return (
                  opt.slug === identifier ? (
                    <li><span key={i}>
                      <strong>{opt.title}</strong>
                    </span></li>
                  ) : null
                );
              })}

            </ul>
          );
        })}
      </div>

      <div className="welcome-box">
        <div className="know-panama-list-welcome">
          <div className="container text-center">
            <div className="intro-box">
              <h1>{resultWelcome.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: resultWelcome.info_extra }}></p>
              { ((identifier == 'vida-nocturna')) ? (
              <a href={currentLanguage === "es" ? "/conoce-panama/gastronomia" : "/know-panama/gastronomia"} className="btn-primary btn--yellow">
                {idioma == "es" ? 'VER MÁS' : 'SEE MORE'}
              </a>
              ) : (null)
              }
            </div>
          </div>
        </div>
      </div>


      {/*Restaurant*/}
      {
        ((identifier == 'gastronomia')) ? (
          <div className="restaurant-list-box">
            <div className="container restaurant-block">
              <div className="filtermobile">
                {/* <a onClick={handleShow} ><img src={data.iconfilter} /></a> */}
                <h4>{idioma == "es" ? 'Filtrar' : 'Filter'} <a onClick={handleShow} ><img src={data.iconfilter} /></a></h4>
              </div>
              <div className={"filter " + (showfilter ? 'showinmobile' : '')} >
                <h4>{idioma == "es" ? 'Filtrar' : 'Filter'} <a onClick={handleHide} ><img src={data.iconfilter} /></a></h4>

                <div className="content-filters filters-orders">
                  <span>{idioma == "es" ? 'Por orden alfabético' : 'In alphabetical order'}</span>
                  <RadioButton items={listOrders} name="order" value="0"
                    className="radio-group"
                    onUpdate={_order} />

                  <span>{idioma == "es" ? 'Por tipo de comida' : 'By type of food'}</span>
                  <ul>
                    {
                      typesFoods[idioma].map((item, i) => (
                        <li key={i}>
                          <input type="checkbox" name="filters[]" value={item} onChange={_filter} /> {item}
                        </li>
                      ))
                    }
                  </ul>
                  <button className="btn-primary btn--yellow" onClick={_filterAll}>{idioma === 'es' ? 'APLICAR FILTROS' : 'APPLY FILTERS'}</button>
                </div>
                <br />

                <div className="bioseguridad-box">
                  {currentLanguage === "es"
                    ? (
                      <div className="bioseguridad-content">
                        <p>
                          En Panamá se han implementado los protocolos de bioseguridad necesarios para que disfrutes con tranquilidad. <a href="https://www.visitpanama.com/es/informacion/protocolos-de-viaje/" target="_blank">Conoce más aquí</a>.
                        </p>
                      </div>
                    )
                    : (
                      <div className="bioseguridad-content">
                        <p>
                          Panama biosafety protocols have been implemented so that you can enjoy with peace of mind. <a href="https://www.visitpanama.com/information/travel-guidelines/" target="_blank">Learn more here</a>.
                        </p>
                      </div>
                    )}
                </div>

              </div>

              <div className="restaurant-list">
                {
                  restaurants[idioma].map((item, i) => (
                    <div key={i} className={`restaurant-card ${i >= 10 ? "d-none" : ""}`}>
                      <h3>{item[5]}</h3>
                      <h6>{item[1]}</h6>
                      <ul>
                        <li className={item[2] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Dirección' : 'Address'}:</strong> {item[2]}</li>
                        <li className={item[3] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Teléfono' : 'Phone'}:</strong> {item[3]}</li>
                        <li className={item[4] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Sitio web' : 'Website'}:</strong> <a href={'//' + item[4] + item[6]} target="_blank">{item[4]}</a></li>
                        <li className={item[7] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Instagram' : 'Instagram'}:</strong> <a href={'//www.instagram.com/' + item[7]} target="_blank">{item[7]}</a></li>
                      </ul>
                    </div>
                  ))
                }
                <div className="clear"></div>

                <div className="row extra-btns">
                  {restaurants[idioma].length > 10 ? (
                    <div className="w-100">
                      <div className="d-flex justify-content-center align-content-center align-items-center">
                        <button
                          onClick={() => showAll()}
                          className="btn-see-all btn-see-all-unique"
                        >
                          {currentLanguage === "es"
                            ? "VER MÁS"
                            : "SEE MORE"}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>

              </div>


              <div className="clear"></div>
            </div>
          </div>
        ) : (null)
      }

      <div id="anchor_conoce_panama" className="conoce-panama-box">
        <div className="container-box">
          <div id="identifier-parameters" className="know-panama-list">
            {resultList.map((item, i) => {
              return (
                <div className="know-panama-list-area" key={i} id={item.slug}>
                  <div className="know-panama-list-area-box">
                    {
                      <div className="container-box-content">
                        <div className="container-box-list horizontal-list-container">
                          <div className="container-box-list-item" style={{ minHeight: `${sizeWidth}px`, maxHeight: `${sizeWidth}px` }} >
                            {/* <Link to={(item.slug != 'restaurant' ? `/${item.slug_parent}/${item.slug_child}/${item.slug}` : '../restaurant')}> */}
                            <Link to={(`/${item.slug_parent}/${item.slug_child}/${item.slug}`)}>
                              <span className="preview-area-active">
                                <span className="preview-area-active-title">
                                  {item.title}
                                </span>
                                <span className="preview-area-active-summary">
                                  {item.subtitle}
                                </span>
                                <span className="btn btn-see-more">
                                  {currentLanguage === "es"
                                    ? "VER MÁS"
                                    : "SEE MORE"}
                                </span>
                              </span>
                            </Link>
                            <div
                              className="container-box-list-item-img effect-scale"
                              style={{ backgroundImage: `url(${(!isMobile) ? (item.img) : (item.img_mob)})` }}
                            >
                              <img
                                className="visibility-hidden"
                                src={`${(!isMobile) ? (item.img) : (item.img_mob)}`}
                                alt={item.title}
                              />
                            </div>
                            <img
                              className="visibility-hidden"
                              src={`${(!isMobile) ? (item.img) : (item.img_mob)}`}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-flex flex-center">
        <button
          type="button"
          onClick={goToUrl}
          className={classnames({
            "go-back-button btn-primary btn--border": true,
          })}
        >
          {currentLanguage === "es" ? "< VOLVER" : "< GO BACK"}
        </button>
      </div>

    </div>
  );
};

export default compose(withRouter, connect(mapStateToProps, null))(KnowPanamaList);
