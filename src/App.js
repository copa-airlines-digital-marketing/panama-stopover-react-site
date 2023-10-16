import React from 'react';
import {withLocalize} from "react-localize-redux";
import {connect} from 'react-redux';
import {Redirect, Switch, Route} from "react-router-dom";

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
    const {width} = this.state;
    const isMobileWidth = width <= 768;

    // console.log(isMobile);

    return (
        <div className={(isMobile) ? ('mobile-panel') : ('desktop-panel')}>

          <NavMobile/>

          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/conoce-panama/:pager/:identifier">
              <KnowPanamaDetail/>
            </Route>
            <Route exact path="/know-panama/:pager/:identifier">
              <KnowPanamaDetail/>
            </Route>
            <Route exact path="/conoce-panama/:identifier">
              <KnowPanamaList/>
            </Route>
            <Route exact path="/know-panama/:identifier">
              <KnowPanamaList/>
            </Route>
            <Route path="/conoce-panama">
              <KnowPanamaPage/>
            </Route>
            <Route path="/know-panama">
              <KnowPanamaPage/>
            </Route>
            <Route exact path="/tours/:identifier">
              <ToursPage/>
            </Route>
            <Route path="/paquetes/:identifier/:iddays?">
              <PackagesPage/>
            </Route>
            <Route path="/packages/:identifier/:iddays?">
              <PackagesPage/>
            </Route>
            <Route path="/donde-hospedarse/:identifier">
              <WhereToStayInterna/>
            </Route>
            <Route path="/donde-hospedarse">
              <WhereToStayPage/>
            </Route>
            <Route path="/where-to-stay/:identifier">
              <WhereToStayInterna/>
            </Route>
            <Route path="/where-to-stay">
              <WhereToStayPage/>
            </Route>
            <Route path="/alquiler-de-autos">
              <CarRentalsPage/>
            </Route>
            <Route path="/car-rentals">
              <CarRentalsPage/>
            </Route>
            <Route path="/restaurant">
              <RestaurantPage/>
            </Route>
            <Redirect from="/home" to="/" />
            <Redirect from="/home/" to="/" />
            <Route>
              <NotFound/>
            </Route>
          </Switch>

          <div className="footer-box">
            <FooterArea/>
          </div>

          <BackTop/>

        </div>
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
