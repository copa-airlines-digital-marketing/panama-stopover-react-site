import React from 'react';
import {withLocalize} from "react-localize-redux";
import {connect} from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";

import {compose} from "redux";

import HomePage from './page/Home';
import KnowPanamaPage from './page/KnowPanama';
import KnowPanamaList from './page/KnowPanama/list.js';
import KnowPanamaDetail from "./page/KnowPanama/detail";
import ToursPage from "./page/Tours";
import PackagesPage from "./page/Packages";
import WhereToStayPage from "./page/WhereToStay";
import WhereToStayInterna from "./page/WhereToStayInterna";
import CarRentalsPage from "./page/CarRental";
import RestaurantPage from "./page/Restaurant";
import NotFound from "./page/NotFound"

import {isMobile} from "react-device-detect";

import 'App.scss';
import FooterArea from "./components/FooterArea";
import NavMobile from "./components/NavMobile";

import {BackTop} from 'antd';


const mapStateToProps = state => ({
  idiomasReducer: state.idiomasReducer
});

class App extends React.Component {

  constructor(props) {
    super(props);

    const defaultLanguage = props.idiomasReducer.currentLanguage;

    this.props.initialize({
      languages: [
        {name: 'Spanish', code: 'es', reference: 'esp'},
        {name: 'English', code: 'en', reference: 'eng'},
      ],
      options: {
        defaultLanguage,
        renderToStaticMarkup: false
      }
    });

    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
  };

  render() {

    return (
        <main>
          <NavMobile/>

          <Routes>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route exact path="/conoce-panama/:pager/:identifier" element={<KnowPanamaDetail/>}></Route>
            <Route exact path="/know-panama/:pager/:identifier" element={<KnowPanamaDetail/>}></Route>
            <Route exact path="/conoce-panama/:identifier" element={<KnowPanamaList/>}></Route>
            <Route exact path="/know-panama/:identifier" element={<KnowPanamaList/>}></Route>
            <Route path="/conoce-panama" element={<KnowPanamaPage/>}></Route>
            <Route path="/know-panama" element={<KnowPanamaPage/>}></Route>
            <Route exact path="/tours/:identifier" element={<ToursPage/>}></Route>
            <Route path="/paquetes/:identifier/:iddays?" element={<PackagesPage/>}></Route>
            <Route path="/packages/:identifier/:iddays?" element={<PackagesPage/>}></Route>
            <Route path="/donde-hospedarse/:identifier" element={<WhereToStayInterna/>}></Route>
            <Route path="/donde-hospedarse" element={<WhereToStayPage/>}></Route>
            <Route path="/where-to-stay/:identifier" element={<WhereToStayInterna/>}></Route>
            <Route path="/where-to-stay" element={<WhereToStayPage/>}></Route>
            <Route path="/alquiler-de-autos" element={<CarRentalsPage/>}></Route>
            <Route path="/car-rentals" element={<CarRentalsPage/>}></Route>
            <Route path="/restaurant" element={<RestaurantPage/>}></Route>
            <Route from="/home" element={<Navigate replace to="/"></Navigate>}></Route>
            <Route from="/home/" element={<Navigate replace to="/"></Navigate>}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>

          <div className="footer-box">
            <FooterArea/>
          </div>

          <BackTop/>

        </main>
    );
  }
}

export default compose(
    connect(
        mapStateToProps,
        null
    ),
    withLocalize
)(App);
