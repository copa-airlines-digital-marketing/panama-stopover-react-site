import React, {Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import {compose} from "redux";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";

import DATA_P from "./package.json"

import './index.scss';

// let url_api = 'https://copa-airlines-stopover-backend.st4ging.dev/api';
// let url_api = process.env.REACT_APP_API_URL;
let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class PackagesFilterByAgency extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    packages: [],
    error: null
  };

  fetchpackages() {
    fetch(`${url_api}/package`)
      .then(response => response.json())
      .then(data => {
          this.setState({
            packages: DATA_P,
            isLoading: false,
          });
          // localStorage.setItem('myDataPackages', JSON.stringify(data));
          // console.log(JSON.parse(localStorage.getItem('myDataPackages')));
        }
      )
      .catch(error => this.setState({error, isLoading: false}));
  }

  componentDidMount() {
    this.fetchpackages();
  }

  render() {
    let mappingAgency = null;
    // let real_filter_prices = null;

    const {isLoading, packages, error} = this.state;
    const {currentLanguage} = this.props.idiomasReducer;
    const translations = packages[currentLanguage];

    const filter_days = this.props.valueFilterDay;
    // const filter_prices = this.props.valueFilterPrices;
    const filter_destination = this.props.valueFilterDestination;

    console.log(filter_days);

    // if (filter_prices === 1) {
    //   real_filter_prices = 'basic';
    // } else if (filter_prices === 2) {
    //   real_filter_prices = 'comfort';
    // } else {
    //   real_filter_prices = 'premium';
    // }

    if (translations && packages && packages[currentLanguage] && packages[currentLanguage].length > 0) {
      // console.log('translations: ', translations);
      // console.log(`filter_days: `, filter_days);
      // console.log(`filter_prices: `, real_filter_prices);

      //destination selected
      const outputsDestiny = [];
      for (var i = 0; i < filter_destination.length; i++) {
        if (filter_destination[i].status === true) {
          outputsDestiny.push(filter_destination[i].slug);
        }
      }

      // const arrayAvailablesDestinies = translations.map((item) => (item.availableDestinations));
      // console.log('destinos en json packages availables: ', arrayAvailablesDestinies);

      //list matches destinations
      const matchesDestiny = [];
      for (var k = 0; k < translations.length; k++) {
        var bandera = false;
        if (translations[k].days === filter_days) {
          bandera = true
        }

        // if (translations[k].price === real_filter_prices) {
        //   bandera = true
        // }

        for (var y = 0; y < translations[k].availableDestinations.length; y++) {
          // console.log(translations[k].availableDestinations[y]);

          for (var j = 0; j < outputsDestiny.length; j++) {

            if (translations[k].availableDestinations[y] === outputsDestiny[j]) {
              // console.log(outputsDestiny[j]);
              bandera = true
            }

          }

        }

        if (bandera === true) {
          matchesDestiny.push(translations[k]);
        }

      }

      // console.log("filteredDestiny: ", [...new Set(matchesDestiny)]);

      // const filteredDestiny = allSelectedDestinations.filter((item) => arrayAvailablesDestinies.includes(item));
      // console.log("filteredDestiny: ", filteredDestiny);

      mappingAgency = [...new Set(matchesDestiny)];
    }

    // console.log('mappingAgency: ', mappingAgency);

    return (
      <div className="result-list-packages">
        <div className="container">
          <div className="row">
            {error ? <p>{error.message}</p> : null}
            {!isLoading ? (
              mappingAgency.map(function (item, i) {
                return (
                  <Link dataTheDays={filter_days} to={`/${item.parentSlug}/${item.agencySlug}`}
                        className={'col-6 col-md-4 packages-box-slider-item'}
                        key={i}>

                    <div className="packages-box-slider-item-image">

                      <div className="child bg-one"
                           style={{backgroundImage: `url(${item.bannerImg})`}}
                           title={item.agency}>
                      </div>

                      <img loading="lazy" className="visibility-hidden"
                           src={item.bannerImg}
                           alt={item.agency}/>

                      <div className="packages-box-slider-item-data">
                        <div
                          className="packages-box-slider-item-data-title">
                          {item.agency} - {item.id}
                        </div>
                        <div
                          className="packages-box-slider-item-data-btn btn btn-see-more">
                          {currentLanguage === "es" ? "VER MÁS" : "SEE MORE"}
                        </div>
                      </div>
                    </div>
                    {/*<p>{item.availableDestinations.map((ava) => {*/}
                    {/*  return (<span>{ava}<br/></span>)*/}
                    {/*})}</p>*/}
                  </Link>
                );
              })
            ) : (
              <div className="loader-container-relative">
                <div className="loader"></div>
                <h6>{currentLanguage === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(PackagesFilterByAgency);