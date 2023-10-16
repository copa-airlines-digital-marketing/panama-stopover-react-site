import React from "react";
import {withLocalize} from "react-localize-redux";
import GoBackButton from "../../components/GoBackButton";
import {compose} from "redux";
import {connect} from "react-redux";
import Hero from "../../components/Hero";

import pageData from "../../data/CarRental";

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

class NotFound extends React.Component {
  render() {

    const idioma = this.props.idiomasReducer.currentLanguage;

    return (
      <div className="full-page alquiler-de-autos">
        <div className="App">
          <div className="primary-content">

            <Hero heroData={pageData[idioma].bannerImg}/>

            <div className='container page-404'>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <h1>{idioma === 'es' ? '404 - Página no encontrada' : '404 - Page not found'}</h1>
                  <h2>{idioma === 'es' ? 'No pudimos encontrar la página anterior en nuestros servidores.' : 'We could not find the above page on our servers'}</h2>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <div className="d-flex flex-center">
                    <GoBackButton>
                      {idioma === 'es' ? '< VOLVER' : '< GO BACK'}
                    </GoBackButton>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// Se exporta con compose porque se están usando dos HOC para el mismo componente. Si no se coloca con compose el export
// termina estando disponible uno u otros props, pero no ambos
export default compose(
  // Agregar el HOC de la librería para usar el localize
  withLocalize,
  // Agregar connect para utilizar el mapeo y que los props que provengan del store esten disponibles al usar el componente
  connect(mapStateToProps, null)
)(NotFound);
