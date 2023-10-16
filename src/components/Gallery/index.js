import React, {Component} from 'react';
import {Link,} from "react-router-dom";
import {withLocalize} from 'react-localize-redux';
import {connect} from "react-redux";
import {compose} from "redux";
import './index.scss'

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

const Gallery = ({idiomasReducer, items}) => {
  const idioma = idiomasReducer.currentLanguage;

  let resultHotels = null;

  // console.log(items.length);

  if (items.length > 0 && items != null) {
    resultHotels = (
      <div className="gallery row">
        {
          items.map((item, i) => (
            <div className="col-12 col-md-6 margins" key={i}>

              <div className={`preview-container direction-` + (item.id % 2 ? 'l' : 'r')}>

                <Link to={`/${item.parentSlug}/${item.slug}`}
                      data-id={item.id}
                      className={`preview cover`}>

                  <img className="visibility-hidden" src={item.inGallery} alt={item.name}/>

                  <span className="preview-area-active">
                    <span className="preview-area-active-all transition-all">
                        <span
                          className="preview-area-active-title">{item.name}</span>
                        <span className="preview-area-active-summary">{item.summary}</span>
                        <span className="preview-container-btns">
                            <span
                              className="btn btn-see-more ">{idioma === 'es' ? 'VER MÁS' : 'SEE MORE'}
                            </span>
                        </span>
                    </span>
                  </span>

                </Link>

                <div className="effect-scale"
                     style={{
                       backgroundImage: `url(${item.inGallery})`,
                     }}>

                  <img className="visibility-hidden" src={item.inGallery}
                       alt={item.name}/>
                </div>

              </div>

            </div>
          ))
        }
      </div>
    )
  } else {
    resultHotels = (
      <div className="no-result-box">
        <h1>{idioma === 'es' ? 'No hay hospedajes  que concuerden con su búsqueda' : 'There are no accommodations that match your search'}</h1>
      </div>
    )
  }

  return (
    <div className="parent_gallery">
      {resultHotels}
    </div>
  )
}

export default compose(
  // Agregar el HOC de la librería para usar el localize
  withLocalize,
  // Agregar connect para utilizar el mapeo y que los props que provengan del store esten disponibles al usar el componente
  connect(mapStateToProps, null)
)(Gallery);