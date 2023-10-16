import React from 'react';

import AppInnerPage from "components/AppInnerPage";

import './styles.scss';
import {withLocalize} from "react-localize-redux";

const Home = ({ setActiveLanguage, currentLanguage, ...props }) => {
  console.log(currentLanguage);
  return (
    <AppInnerPage title="Home page" classNames="home">
      <button onClick={e => setActiveLanguage('en')}>set en</button>
      <button onClick={e => setActiveLanguage('es')}>setear es</button>
      <p>Home page content</p>
    </AppInnerPage>
  );
};

export default withLocalize(Home);