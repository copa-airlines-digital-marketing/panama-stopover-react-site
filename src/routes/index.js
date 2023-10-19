import React from 'react';
import {Navigate, Route} from "react-router-dom";

import Home from "screens/Home";
import About from "screens/About";
import AppInnerPage from "components/AppInnerPage";



const AppRoutes = () => {
  const isAuth = true;

  return (
    <>
      <Route exact path="/">
        {
          isAuth ?
              <Home/> :
            <About/>
        }
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/404">
        <AppInnerPage title={"Hola mundo"} >
          <p>El content de hola mundo</p>
        </AppInnerPage>
      </Route>
      <Route element={<Navigate replace to="/404"></Navigate>}></Route>
    </>
  );
};

export default AppRoutes;