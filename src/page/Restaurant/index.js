import React, {useState, useEffect} from "react";
import {withLocalize} from "react-localize-redux";
import RadioButton from '../../components/RadioButton';
import {connect} from "react-redux";
import {compose} from "redux";


import Hero from "./../../components/Hero";
import BreadcrumbWithSlug from "./../../components/BreadcrumbWithSlug";
import pageData from "../../data/Restaurant";
import GoBackButton from "../../components/GoBackButton";
import "./index.scss";

const URL_BASE = "https://phpstack-685265-3053015.cloudwaysapps.com/copa-restaurant/api.php";

// Declarar map del store a los props del componente
const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const __orders = 0;
const __fil = [];

const RestaurantPage = props => {


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

  const [restaurants, setRestaurants] = useState({es: [], en: []});
  const [typesFoods, setTypes] = useState({es: [], en: []});
  const [selOrder, setSelOrder] = useState(0);
  
  const [showfilter, setShowFilter] = useState(0);
  const [showAllBtns, setShowAllBtns] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listOrders, getListOrders] = useState([
        {value: "0", label: "A - Z"},
        {value: "1", label: "Z - A"},
      ]);

  const getFilterData = () => {
    fetch(`${URL_BASE}?get=onlyfilters`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setTypes(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setTypes({es: [], en: []});
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  const get = (order) => {

  	setSelOrder(order);

    fetch(`${URL_BASE}?get=restaurants&order=` + order + `&filters=` + __fil.join('|'))
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setRestaurants(result.data);
        setError(null);
      })
      .catch(result => {
        setLoading(false);
        setRestaurants({es: [], en: []});
        setError(null);
        /*
        setError(null);
        setError(result.error);
        */
      });
  };

  useEffect(() => {
    getFilterData();
    get(0);
  }, []);

  const idioma = props.idiomasReducer.currentLanguage;
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


  return (
    <div className="full-page restaurant-page">
      <div className="App">
        <div className="primary-content">

          <Hero heroData={data.masthead}/>

	      <div className="container">
	        <ul className="breadcrumbs">
	           <li><a href={idioma === "es" ? "/conoce-panama" : "/know-panama"} >{idioma === "es" ? "Conoce Panamá" : "Discover Panama"}</a><span> > </span></li>
	           <li><a href={idioma === "es" ? "/conoce-panama/gastronomia" : "/know-panama/gastronomy"} >{idioma === "es" ? "Gastronomia" : "Gastronomy"}</a><span> > </span> <strong>{idioma === "es" ? 'Restaurantes' : 'Restaurants'}</strong></li>
	        </ul>
	      </div>

          <div className="container restaurant-block">
            <div className="filtermobile">
              <a onClick={handleShow} ><img src={data.iconfilter} /></a>
            </div>
            <div className={"filter " + (showfilter ? 'showinmobile' : '')} >
              <h4>{idioma == "es" ? 'Filtrar' : 'Filter'} <a onClick={handleHide} ><img src={data.iconfilter} /></a></h4>

              <div className="content-filters filters-orders">
                <span>{idioma == "es" ? 'Por orden alfabético' : 'In alphabetical order'}</span>
	              <RadioButton items={listOrders} name="order" value="0"
	                         className="radio-group"
	                         onUpdate={_order}/>

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
            </div>

            <div className="restaurant-list">
              {
                restaurants[idioma].map((item, i) => (
                  <div key={i} className="restaurant-card">
                    <h3>{item[5]}</h3>
                    <h6>{item[1]}</h6>
                    <ul>
                      <li className={item[2] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Dirección' : 'Address'}:</strong> {item[2]}</li>
                      <li className={item[3] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Teléfono' : 'Phone'}:</strong> {item[3]}</li>
                      <li className={item[4] != "" ? '' : 'no'}><strong>{idioma == "es" ? 'Sitio web' : 'Website'}:</strong> <a href={'//' + item[4] + item[6]} target="_blank">{item[4]}</a></li>
                    </ul>
                  </div>
                ))
              }
              <div className="clear"></div>

            </div>

            
            <div className="clear"></div>              
          </div>

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


export default compose(withLocalize, connect(mapStateToProps, null))(RestaurantPage);
