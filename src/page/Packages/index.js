import React, { useState, useEffect } from "react";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";

import Hero from "./../../components/Hero";
import Breadcrumb from "./../../components/Breadcrumb";
import GallerySlider from "./../../components/GallerySlider";
import GoBackButton from "../../components/GoBackButton";
import pageData from "../../data/Packages";

import './index.scss';

let url_api = 'https://phpstack-685265-3053015.cloudwaysapps.com/api';

// Declarar map del store a los props del componente
const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const PackagesPage = (props) => {
  const { identifier, iddays } = useParams();
  const [packageData, setPackageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function tConvert(time) {
    if (time == null) return '';
    // Check correct time format and split into components
    time = time.substring(0, 5);
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' am' : ' pm'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  function tPrice(price) {

    console.log(parseInt(price));
    if (!isNaN(parseInt(price))) {
      price = "USD " + parseInt(price) + ".00";
    } else {
      console.log('no');
    }

    return price;
  }

  function sEmpty(text) {
    if (text === '' || text == null) return true;
    return false;
  }

  const findBySlug = identifier => {

    let _path = 'find';

    fetch(`${url_api}/package/${_path}/${identifier}`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setError(null);
        setPackageData(result);
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
  const data = packageData[idioma];
  const idiomaNum = (idioma === 'es' ? 0 : 1);


  if (loading || !data) {
    return <div className="loader-container">
      <div className="animated yt-loader"></div>
      <div className="loader-container-relative">
        <div className="loader"></div>
        <h6>{idioma === 'es' ? 'CARGANDO...' : 'LOADING...'}</h6>
      </div>
    </div>
  }

  const mappingGallerys = (

    <div>
      {
        pageData[idioma].gallerys.map((item, i) => {
          return (
            (item.name === data[0].agency) ? (
              <GallerySlider key={i} slides={item.gallery} />
            ) : (
              null
            )
          );
        })
      }
    </div>
  );

  return (
    <div className="full-page page-packages-page-interna">
      <div className="App">
        <div className="primary-content">

          <Hero heroData={data[0].banner_img} />

          <Breadcrumb dataslugger={idioma === 'es' ? './#anchor_packages' : './#anchor_packages'}
            crumbs={[data[0].parentName, data[0].name]} />

          <div className="container mt-5 text-cont">

            <div className="col-left text-left">
              <h1> {data[0].agency} </h1>
            </div>

            <div className="col-right">
            </div>

          </div>

          <div className="each-agency-data">
            {
              data.map((data_details, i) => (
                <div key={i} className={`${((data_details.days !== iddays) && (iddays !== 'todos') && (iddays !== 'all')) ? "d-none" : ""}`}>
                  <div className="container mt-5 text-cont">
                    <div className="row">
                      <div className="col-left text-left">
                        <h2> {data_details.name} - {idioma === 'es' ? 'Noches' : 'Nights'} {data_details.days}</h2>

                        {/* <p className={sEmpty(data_details.promotions) ? 'display-none' : ''}>
                          <span dangerouslySetInnerHTML={{ __html: data_details.promotions }}></span>
                        </p> */}

                        {/* <h3>
                          {idioma === 'es' ? 'El paquete incluye:' : 'Package includes'}
                        </h3> */}

                        {/* <ul className={"details-info " + (data_details.details.length != 0 ? '' : 'display-none')} >
                          {
                            data_details.details.map((item, i) => (
                              <li className="py-3" key={i}>
                                {item.replace('*', '')}
                              </li>
                            ))
                          }
                        </ul> */}

                        <p className={sEmpty(data_details.details) ? 'display-none' : ''}>
                          <span dangerouslySetInnerHTML={{ __html: data_details.details }}></span>
                        </p>

                        <p className={sEmpty(data_details.additionalInfo) ? 'display-none' : ''}>
                          <strong>{idioma === 'es' ? 'Información adicional' : 'Additional information'}</strong>: <br />
                          <span dangerouslySetInnerHTML={{ __html: data_details.additionalInfo }}></span>
                        </p>

                        <p className={sEmpty(data_details.notes) ? 'display-none' : ''}>
                          <strong>{idioma === 'es' ? 'Nota' : 'Note'}</strong>:  <br />
                          <span dangerouslySetInnerHTML={{ __html: data_details.notes }}></span>
                        </p>

                        <p className={(data_details.begin_at === "00:00:00" || data_details.begin_at == null) ? 'display-none' : ''}>
                          <strong>{idioma === 'es' ? 'Horario: ' : 'Hours: '}</strong>: {tConvert(data_details.begin_at)}{idioma === 'es' ? ' a ' : ' to '}{tConvert(data_details.end_at)}
                        </p>

                        <p className={sEmpty(data_details.requirements) ? 'display-none' : ''}>
                          <span dangerouslySetInnerHTML={{ __html: data_details.requirements }}></span>
                        </p>

                        <p className={sEmpty(data_details.closedDates) ? 'display-none' : ''}>
                          <strong>{idioma === 'es' ? 'Fechas cerradas' : 'Closed dates'}</strong>: <br />
                          <span dangerouslySetInnerHTML={{ __html: data_details.closedDates }}></span>
                        </p>

                        <div>
                          {
                            data_details.translations[idiomaNum].days_details != null && data_details.translations[idiomaNum].days_details.map((item, i) => (
                              <div className="details-info">
                                <strong>{idioma === 'es' ? 'Día' : 'Day'} {i + 1}</strong>

                                <ul className="details-info details-info-per-days">
                                  {
                                    item.map((item_, i_) => (
                                      <li className="py-3" key={i_}>
                                        {item_.replace('*', '')}
                                      </li>
                                    ))
                                  }
                                </ul>
                                {(false) ? (
                                  <div className={"fee " + (data_details.fees.length !== 0 ? '' : 'display-none')}>
                                    <div className="container">
                                      <div className="row">
                                        <p>
                                          <strong>&nbsp;{idioma === 'es' ? 'Tarifas por habitación' : 'Fee for bedroom'}:</strong>
                                          {
                                            data_details.fees.map((item, f) => (
                                              <div key={i} className={(f === i && item.value ? '' : 'display-none')}>
                                                {(f === i && item.value) ? (item.type + ' ') : ''}
                                                <strong>{(f === i && item.value) ? (tPrice(item.value)) : ''}</strong>
                                              </div>
                                            ))
                                          }
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  null
                                )}
                                <br />
                                <div className={"container-small " + (data_details.fees.length !== 0 ? '' : 'display-none')}>
                                  <div className="container">
                                    <small>
                                      {idioma === 'es' ? 'Los productos promocionales y servicios adquiridos con el comprobante de Panamá Stopover en los comercios participantes son responsabilidad única y exclusiva de quienes lo ofrecen.' : 'Promotional products and services purchased with the Panama Parada voucher at participating merchants are the sole and exclusive responsibility of those who offer it.'}
                                      <br />
                                      {idioma === 'es' ? 'Ni Copa Airlines ni Promtur Panamá son responsables por ningún reclamo producido por la disponibilidad, compra y obtención de los mismos.' : 'Neither Copa Airlines nor Promtur Panama are responsible for any claim caused by the availability, purchase and obtaining thereof.'}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>

                      </div>
                      <div className="col-right">
                        <br />
                        <br />
                      </div>
                    </div>

                  </div>


                  {(false) ? (
                    <div className={"fee " + (data_details.translations[idiomaNum].days_details == null ? '' : 'display-none')} >
                      <div className="container">
                        <div className="row">
                          <p>
                            <strong>{idioma === 'es' ? 'Tarifas por habitación' : 'Fee for bedroom'}:</strong>
                            {
                              data_details.fees.map((item, i) => (
                                <span key={i} className={(item.value ? '' : 'display-none')}  > | {item.type}
                                  <strong> {(item.value > 0) ? (`${tPrice(item.value)}`) : (tPrice(item.value))}</strong></span>
                              ))
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    null
                  )}

                  <div className="d-flex align-center justify-center flex-column">
                    <p className="small smaller-text">
                      {idioma === 'es' ? 'Visita la página de la agencia para reservar' : 'Visit the agency\'s page to book'}
                    </p>
                    <a
                      className="btn-primary btn--yellow text-uppercase"
                      href={idioma === 'es' ? data_details.info_url_es : data_details.info_url_en} target="_blank"  rel='noreferrer'>
                      {idioma === 'es' ? 'RESERVA YA' : 'BOOK NOW'}
                    </a>
                  </div>


                  <div className="package-details-separate container mt-5 text-cont"></div>
                </div>

              ))
            }


            <div className="container-small" >
              <div className="container">
                <br />
                <br />
                <small>
                  {idioma === 'es' ? 'Los productos promocionales y servicios adquiridos con el comprobante de Panamá Stopover en los comercios participantes son responsabilidad única y exclusiva de quienes lo ofrecen.' : 'Promotional products and services purchased with the Panama Parada voucher at participating merchants are the sole and exclusive responsibility of those who offer it.'}
                  <br />
                  {idioma === 'es' ? 'Ni Copa Airlines ni Promtur Panamá son responsables por ningún reclamo producido por la disponibilidad, compra y obtención de los mismos.' : 'Neither Copa Airlines nor Promtur Panama are responsible for any claim caused by the availability, purchase and obtaining thereof.'}
                </small>
              </div>
            </div>

          </div>


          {mappingGallerys}


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

export default compose(withLocalize, connect(mapStateToProps, null))(PackagesPage);
