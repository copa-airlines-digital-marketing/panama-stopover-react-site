import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import { Grid } from '@material-ui/core';


import useStyles, { StylizedTab as Tab, StylizedTabs as Tabs } from './styles';
import bookingPanel from '../../data/BookingPanel';
import TabPanel from './components/tabPanel';
import SearchPanel from './components/searchPanel';

// const TabPanel = lazy(() => import("./components/tabPanel"))

const BookingPanel = ({ idiomasReducer }) => {
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [tabValues, setTabValues] = useState({});
  const [transitioning, setTransition] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.back}>
      <Grid
        container
        spacing={2}
        className={classes.grid}
      >
        <Grid
          item
          xs={12}
        >
          <Tabs
            value={value}
            textColor="inherit"
            onChange={handleChange}
            className={classes.containerTabs}
          >
            <Tab
              label={translations.rountripSearchLabel}
            />
            <Tab
              label={translations.oneWaySearchLabel}
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <SearchPanel
              typeIndex={0}
              setTabValues={setTabValues}
              tabValues={tabValues}
              setTransition={setTransition}
              transitioning={transitioning}
              lang={currentLanguage}
              isFlexibleSearch={false}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SearchPanel
              typeIndex={1}
              setTabValues={setTabValues}
              tabValues={tabValues}
              setTransition={setTransition}
              transitioning={transitioning}
              lang={currentLanguage}
              isFlexibleSearch={false}
            />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  )
}

BookingPanel.propTypes = {

}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(BookingPanel);
