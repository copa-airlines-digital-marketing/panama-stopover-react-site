import React, { Component, useEffect, useState } from 'react';
import { withLocalize } from 'react-localize-redux';
import RadioButton from '../../components/RadioButton';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { compose } from "redux";
import { connect } from "react-redux";

import dataPackages from "../../data/Packages";
import PackagesFilterWelcome from "./_welcome";

import './index.scss';
// import Tabs from "../Tabs";
// import Slider from "react-slick";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

// let url_api = 'https://copa-airlines-stopover-backend.st4ging.dev/api';
// let url_api = process.env.REACT_APP_API_URL;
let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

class PackagesFilter extends Component {

  constructor(props) {

    super(props);

    this.state = {
      itemSelectedDays: null,
      // itemSelectedPrices: -1,
      itemSelectedLimitDays: -1,
      // itemSelectedLimitPrices: -1,
      days: [
        { value: "-1", label: "" },
        { value: "0", label: "1" },
        { value: "1", label: "2" },
        { value: "2", label: "3" },
        { value: "3", label: "4" },
        { value: "4", label: "5" },
        { value: "5", label: "6" },
        // { value: "6", label: "7" },
      ],
      // prices: [
      //   {value: "-1", label: ""},
      //   {value: "0", label: "Basic"},
      //   {value: "1", label: "Comfort"},
      //   {value: "2", label: "Premium"},
      // ]
    };
  }

  componentDidMount() {
    const getPackages = () => {
      fetch(`${url_api}/package/alternative`)
        .then(response => response.json())
        .then((data) => this.setState({
          packages: data,
          isLoading: false,
          noresult: false,
          showAgencyLink: true,
        }))
        .catch((error) => this.setState({ error, isLoading: false }))
    };

    getPackages();
  };

  onChangeDays = (value) => {
    if (value) {
      this.setState(state => ({
        itemSelectedLimitDays: (++value),
        itemSelectedDays: value,
      }));
    }
  };

  // onChangePrices = (value) => {
  //   if (value) {
  //     this.setState(state => ({
  //       itemSelectedLimitPrices: (++value),
  //       itemSelectedPrices: value,
  //     }));
  //   }
  // };

  currentItemPackage = (value, mappingDestination) => {

    // console.log('e:', value);
    this.setState(state => ({
      current_destinations: '' + value + '',
    }));

    // console.log('restoredMappingDestination: ', mappingDestination);
    // console.log('current_destinations: ', value);

    var outputs = [];
    var statusTemporal = false;

    if (value === 'erase_everything') {
      for (var i = 0; i < mappingDestination.length; i++) {
        outputs[i] = {
          identifier: mappingDestination[i].identifier,
          title: mappingDestination[i].title,
          slug: mappingDestination[i].slug,
          category: mappingDestination[i].category,
          img: mappingDestination[i].img,
          slug_type: mappingDestination[i].slug_type,
          status: false
        };
      }
    } else {
      for (var z = 0; z < mappingDestination.length; z++) {

        if (value === mappingDestination[z].slug) {
          // console.log('es igual al sug: ', mappingDestination[i].slug);
          // console.log('y el id es: ', i);
          if (mappingDestination[z].status === true) {
            statusTemporal = false;
          } else {
            statusTemporal = true;
          }

          outputs[z] = {
            identifier: mappingDestination[z].identifier,
            title: mappingDestination[z].title,
            slug: mappingDestination[z].slug,
            category: mappingDestination[z].category,
            img: mappingDestination[z].img,
            slug_type: mappingDestination[z].slug_type,
            status: statusTemporal
          };
        } else {
          outputs.push(mappingDestination[z]);
        }
      }
    }

    localStorage.setItem('__myDataDestinationUpdate', JSON.stringify(outputs));
    // console.log('outputs __myDataDestinationUpdate: ', JSON.parse(localStorage.getItem('__myDataDestinationUpdate')));
  };

  //RENDER/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    let mappingAgency = null;
    let PackagesFiltered = null;
    // let real_filter_prices = null;
    const outputsDestiny = [];

    const { isLoading, packages, error, noresult, showAgencyLink } = this.state;

    const { currentLanguage } = this.props.idiomasReducer;
    const translations = dataPackages[currentLanguage];

    const mappingInfo = translations;

    // console.log(mappingInfo);

    localStorage.setItem('__myDataDestination', JSON.stringify(translations.tabs));
    let mappingDestination = JSON.parse(localStorage.getItem('__myDataDestination'));
    let mappingDestinationUpdate = JSON.parse(localStorage.getItem('__myDataDestinationUpdate'));

    if (mappingDestinationUpdate) {
      mappingDestination = JSON.parse(localStorage.getItem('__myDataDestinationUpdate'));
    } else {
      mappingDestination = JSON.parse(localStorage.getItem('__myDataDestination'));
    }

    //settings_pack
    const settings_pack = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: false,
      centerPadding: '136px',
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            centerPadding: '136px',
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1366,
          settings: {
            centerPadding: '136px',
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            centerPadding: '166px',
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1140,
          settings: {
            centerPadding: '36px',
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1023,
          settings: {
            centerPadding: '126px',
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '136px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '26px',
          }
        }
      ]
    };

    //daysArea
    const daysArea = (
      <div className="col-md-12 main-bar-left">
        <div className="radio-days-box">
          <p>{mappingInfo.data_1}</p>
          <div id={`id-${this.state.itemSelectedLimitDays}`} className="radio-button-box">
            <RadioButton items={this.state.days} name="opt-group-days" value="-1"
              className="radio-group"
              onUpdate={this.onChangeDays} />
          </div>
        </div>
      </div>
    );

    let filter_days = this.state.itemSelectedDays;

    // if (currentLanguage === 'es') {
    //     this.state.prices[1] = {value: "0", label: "Básico"};
    // } else {
    //   this.state.prices[1] = {value: "0", label: "Basic"};
    // }

    //pricesArea
    // const pricesArea = (
    //   <div className="col-md-6 main-bar-right">
    //     <p>{mappingInfo.data_2}</p>
    //     <div className="radio-button-box">
    //       <ul className="list-prices-ul">
    //         {mappingInfo.list_prices.map(function (item, i) {
    //           return (
    //             <li className="list-prices-li" key={i}>
    //               {item}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //       <div id={`id-${this.state.itemSelectedLimitPrices}`} className="radio-prices-box">
    //         <RadioButton items={this.state.prices} name="opt-group-prices" value="-1"
    //                      className="radio-group"
    //                      onUpdate={this.onChangePrices}/>
    //       </div>
    //     </div>
    //   </div>
    // );
    // const filter_prices = this.state.itemSelectedPrices;

    // if (filter_prices === 1) {
    //   real_filter_prices = 'basic';
    // } else if (filter_prices === 2) {
    //   real_filter_prices = 'comfort';
    // } else if (filter_prices === 3) {
    //   real_filter_prices = 'premium';
    // }


    //destinations
    // const mappingMainAttractions = mappingDestination.filter(find => find.slug_type === 'main');

    // const mappingGreenPanama = mappingDestination.filter(find => find.slug_type === 'green');

    // const mappingCulturaleActivity = mappingDestination.filter(find => find.slug_type === 'activities');

    // console.log(`filter_days: ` + filter_days);
    // console.log(`filter_prices: ` + filter_prices);
    // console.log('mappingAgency1: ', mappingAgency);

    //destination
    // const current_destination = this.state.current_destinations;
    // console.log('current_destination: ', current_destination);

    const fetchPackages = (e, body) => {
      this.setState({ error, isLoading: true });
      fetch(`${url_api}/package/filtered`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then((response) => response.json())
        .then((data) => this.setState({
          packages: data,
          isLoading: false,
          noresult: false,
          showAgencyLink: false,
        }))
        .catch((error) => this.setState({ error, isLoading: false, noresult: false, showAgencyLink: false }))
    };


    if (packages && packages[currentLanguage] && packages[currentLanguage].length > 0) {
      mappingAgency = packages[currentLanguage];


      if (translations && mappingDestination) {
        //destination selected
        for (var i = 0; i < mappingDestination.length; i++) {
          if (mappingDestination[i].status === true) {
            outputsDestiny.push(mappingDestination[i].slug);
          }
        }
      }
      let _recursiveEncoded = '';
      if (!noresult && outputsDestiny.length > 0 && filter_days == null) {
        _recursiveEncoded = "?dest=" + outputsDestiny.join('|');
      }

      let _agencyNoRepeat = new Array();

      PackagesFiltered = (
        <div className="result-list-packages">
          <div className={"no-result-box " + (noresult ? '' : 'display-none')}>
            <p>{currentLanguage === 'es' ? 'Lo sentimos, no hay paquetes que concuerden con tu búsqueda. Mira estas opciones y elige tu preferido.' : "Sorry, we couldn't find any results matching your search. Check out these options and choose your favorite one."}</p>
          </div>
          <div className="container">
            <div className="row">

              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
                mappingAgency.map(function (item, i) {

                  if (_agencyNoRepeat.includes(item.agency)) {
                    return null;
                  } else {
                    _agencyNoRepeat.push(item.agency);
                  }

                  let _slug = item.agencySlug;
                  if (showAgencyLink || _recursiveEncoded != '') {
                    _slug = item.agency.toString().toLowerCase().replace(/á+/g, 'a').replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
                  }

                  if (filter_days == null && filter_days == undefined) {
                    if (currentLanguage === 'es') {
                      filter_days = 'todos';
                    } else {
                      filter_days = 'all';
                    }
                  }

                  return (
                    <Link to={`/${item.parentSlug}/${_slug}/${filter_days}`} className={'col-6 col-md-4 packages-box-slider-item'} key={i}>

                      <div className="packages-box-slider-item-image">

                        <div className="child bg-one"
                          style={{ backgroundImage: `url(${item.bannerImg})` }}
                          title={item.agency}>
                        </div>

                        <img loading="lazy" className="visibility-hidden"
                          src={item.bannerImg}
                          alt={item.agency} />

                        <div className="packages-box-slider-item-data">
                          <div
                            className="packages-box-slider-item-data-title">
                            {item.agency}
                          </div>
                          {/* <p>{item.price}</p> */}
                          <div
                            className="packages-box-slider-item-data-btn btn btn-see-more">
                            {currentLanguage === "es" ? "VER MÁS" : "SEE MORE"}
                          </div>
                        </div>
                      </div>
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
      )
    } else {
      const getPackages = () => {
        fetch(`${url_api}/package/alternative`)
          .then(response => response.json())
          .then((data) => this.setState({
            packages: data,
            isLoading: false,
            noresult: true,
            showAgencyLink: true,
          }))
          .catch((error) => this.setState({ error, isLoading: false }))
      };

      getPackages();

      /*
      PackagesFiltered = (
        <div className="no-result-box">
          <h1>{currentLanguage === 'es' ? 'No hay paquetes que concuerden con su búsqueda' : 'There are no packages that match your search'}</h1>
        </div>
      )
      */
    }

    // const slides_1 = mappingMainAttractions.map((item, i) => {
    //   return (
    //     <div id={`key-${i}`}
    //          className="packages-box-slider-item" key={i}
    //     >
    //       <div
    //         id={`id-${item.slug}`}
    //         className={`packages-box-slider-item-image`}>

    //         <div className="child bg-one"
    //              style={{backgroundImage: `url(${item.img})`}}
    //              title={item.title}>
    //         </div>

    //         <img loading="lazy" className="visibility-hidden"
    //              src={item.img}
    //              alt={item.title}/>

    //         {(item.status) ? (
    //           <div className="btn-check active" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         ) : (
    //           <div className="btn-check" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         )}

    //         <div className="packages-box-slider-item-data">
    //           <h3>
    //             {item.category}
    //           </h3>
    //           <h1>
    //             {item.title}
    //           </h1>
    //         </div>

    //       </div>
    //     </div>
    //   );
    // });

    // const slides_2 = mappingGreenPanama.map((item, i) => {
    //   return (
    //     <div id={`key-${i}`}
    //          className="packages-box-slider-item" key={i}
    //     >
    //       <div
    //         id={`id-${item.slug}`}
    //         className={`packages-box-slider-item-image`}>

    //         <div className="child bg-one"
    //              style={{backgroundImage: `url(${item.img})`}}
    //              title={item.title}>
    //         </div>

    //         <img loading="lazy" className="visibility-hidden"
    //              src={item.img}
    //              alt={item.title}/>

    //         {(item.status) ? (
    //           <div className="btn-check active" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         ) : (
    //           <div className="btn-check" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         )}

    //         <div className="packages-box-slider-item-data">
    //           <h3>
    //             {item.category}
    //           </h3>
    //           <h1>
    //             {item.title}
    //           </h1>
    //         </div>

    //       </div>

    //     </div>
    //   );
    // });

    // const slides_3 = mappingCulturaleActivity.map((item, i) => {
    //   return (
    //     <div id={`key-${i}`}
    //          className="packages-box-slider-item" key={i}
    //     >
    //       <div
    //         id={`id-${item.slug}`}
    //         className={`packages-box-slider-item-image`}>

    //         <div className="child bg-one"
    //              style={{backgroundImage: `url(${item.img})`}}
    //              title={item.title}>
    //         </div>

    //         <img loading="lazy" className="visibility-hidden"
    //              src={item.img}
    //              alt={item.title}/>

    //         {(item.status) ? (
    //           <div className="btn-check active" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         ) : (
    //           <div className="btn-check" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}></div>
    //         )}

    //         <div className="packages-box-slider-item-data">
    //           <h3>
    //             {item.category}
    //           </h3>
    //           <h1>
    //             {item.title}
    //           </h1>
    //         </div>

    //       </div>

    //     </div>
    //   );
    // });

    const allDestinationsSelected = mappingDestination.map((item, i) => {
      return (
        (item.status) ? (
          <li key={i}>
            <button type="button" onClick={() => this.currentItemPackage(item.slug, mappingDestination)}>x</button>
            <label>{item.title}</label>
          </li>
        ) : (
          null
        )
      );
    });

    // console.log('filter_destination: ', mappingDestination);

    if (translations && mappingDestination) {
      //destination selected
      for (var i = 0; i < mappingDestination.length; i++) {
        if (mappingDestination[i].status === true) {
          outputsDestiny.push(mappingDestination[i].slug);
        }
      }
    }

    return (
      <div id="anchor_packages" className="package-home">

        {/*WELCOME*/}
        <PackagesFilterWelcome dataContent={mappingInfo} />

        {/*RADIOS*/}
        <div className="main-bar">
          <div className="container-fluid">
            <div className="row">
              {daysArea}
              {/* {pricesArea} */}
            </div>
          </div>
        </div>

        {/*TABS*/}
        {/* <Tabs>
          <button className={"tabs tab-1 active"}>
            <span></span>
            <p>{mappingInfo.tab1}</p>
          </button>
          <div className="packages-box-slider slider-format-1">
            <Slider {...settings_pack}>
              {slides_1}
              {slides_2}
              {slides_3}
            </Slider>
          </div>
        </Tabs> */}

        {/* <div className="container">
          <ul className="list-of-item-panama">
            {allDestinationsSelected}
            {
              (mappingDestination.filter(find => find.status === true).length > 0) ?
                (
                  <li>
                    <button className="remove_all_icon" type="button"
                            onClick={() => this.currentItemPackage('erase_everything', mappingDestination)}>x
                    </button>
                    <label className="remove_all">
                      {currentLanguage === "es"
                        ? "Borrar todo"
                        : "Remove all"}
                    </label>
                  </li>
                ) : (
                  null
                )
            }
          </ul>
        </div> */}

        <button className="btn-primary btn--yellow"
          title={((filter_days != 'todos') || (filter_days != 'all')) ? (currentLanguage === 'es' ? 'Seleccione noches' : 'Select nights') : (currentLanguage === 'es' ? 'BUSCAR PAQUETES' : 'SEARCH PACKAGES')}
          disabled={((filter_days == 'todos') || (filter_days == 'all'))}
          onClick={e => fetchPackages(e, {
            days: filter_days,
            // price: 'premium',
            availableDestinations: outputsDestiny
          })}>
          {currentLanguage === 'es' ? 'BUSCAR PAQUETES' : 'SEARCH PACKAGES'}
        </button>

        {PackagesFiltered}

      </div>
    );
  }
}

export default compose(withLocalize, connect(mapStateToProps, null))(PackagesFilter);