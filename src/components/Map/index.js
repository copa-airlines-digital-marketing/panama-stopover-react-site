import React, {useState, useEffect} from "react";
import {withLocalize} from "react-localize-redux";
import {connect} from "react-redux";
import {compose} from "redux";

// import { compose, withProps } from "recompose";
import {withProps} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import MarkerIcon from './../../assets/img/icons/marker.png';
import './index.scss';


const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};


const MyMapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCvGkznVw7qUHj_LsrAbaFFvL-1YmcYHEs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div className="map-one-element" style={{height: `320px`}}/>,
    mapElement: <div style={{height: `100%`, borderRadius: '10px', margin: '1em 0'}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  console.log(props.coords);
    const centerMapIn = props.coords[0];
    const markers = props.coords.map((coord, k) => <Marker position={{...coord}} onClick={props.onMarkerClick} key={k}/>);
    return <GoogleMap
      defaultZoom={16}
      center={{...centerMapIn}}
      defaultCenter={{...centerMapIn}}
    >
      {props.isMarkerShown && markers}
    </GoogleMap>
  }
);

class Map extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  state = {
    isMarkerShown: false,
    keyMAP: 'AIzaSyCvGkznVw7qUHj_LsrAbaFFvL-1YmcYHEs'
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({isMarkerShown: true})
    }, 3000)
  }

  handleMarkerClick = () => {
    // this.setState({isMarkerShown: false})
    // this.delayedShowMarker()
  }

  render() {
    const text = this.props.text
      ?
      <div className="map-title mt-5 text-left">
        <img src={MarkerIcon} alt="marker"/> {this.props.text}
      </div>
      :
      null;
    return (
      <div className="map">
        {text}
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          coords={this.props.coords}
        />
      </div>
    )
  }
}

export default compose(
  // Agregar el HOC de la librería para usar el localize
  withLocalize,
  // Agregar connect para utilizar el mapeo y que los props que provengan del store esten disponibles al usar el componente
  connect(mapStateToProps, null)
)(Map);