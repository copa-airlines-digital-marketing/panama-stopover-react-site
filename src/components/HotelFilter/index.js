import React, {useState} from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";
import {Slider} from 'antd';
import 'antd/dist/antd.css';

import './index.scss';


const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};



const RangeSlider = props => {
  const defaultValue = [props.min, props.max];
  return <Slider range step={1} defaultValue={defaultValue} min={props.min} max={props.max}
                 onChange={e => props.fn(e, [props.min, props.max])}/>
};

const HotelFilter = props => {

  console.log(props);

  const [city, setCity] = useState(null);
  const [val, setVal] = useState([props.min, props.max]);

  const idioma = props.idiomasReducer.currentLanguage;
  const initOption = idioma === 'es' ? <option defaultValue={{ label: '', value: "0" }} label="" value="0" key={-1}>Elije la ciudad</option> :
    <option defaultValue={{ label: '', value: "0" }} label="" value="0" key={-1}>Pick the city</option>;
  const selectOptions = props.cities.map((i, k) => <option value={i.id} key={k}>{i.name}</option>);
  console.log("init");
console.log(initOption);
  const rangeValue = (e) => {
    setVal(e)
  };

  return (
    <div className="hotel-filter">
      <select onChange={(e) => setCity(e.target.value)}>
        {initOption}
        {selectOptions}
      </select>

      <div className="range-cont">
        <div className="first-row d-flex align-items-center justify-content-between">
          <span className="price">{idioma === 'es' ? 'Precio' : 'Price'}</span>
          <span className="caret"></span>
        </div>
        <div className="second-row d-flex align-items-center justify-content-between">
          <span className="minvalue">Min <strong>${props.min}</strong></span>
          <span className="maxvalue">Max <strong>${props.max}</strong></span>
        </div>
        <RangeSlider min={props.min} max={props.max} fn={rangeValue}/>
      </div>

      <button className="btn-primary btn--yellow" onClick={e => props.filterResults(e, {
        city_id: city,
        min: val[0],
        max: val[1]
      })}>{idioma === 'es' ? 'BUSCAR HOTELES' : 'SEARCH HOTELS'}</button>
    </div>
  )

};

// Se exporta con compose porque se están usando dos HOC para el mismo componente. Si no se coloca con compose el export
// termina estando disponible uno u otros props, pero no ambos
export default compose(
  // Agregar el HOC de la librería para usar el localize
  withLocalize,
  // Agregar connect para utilizar el mapeo y que los props que provengan del store esten disponibles al usar el componente
  connect(mapStateToProps, null)
)(HotelFilter);