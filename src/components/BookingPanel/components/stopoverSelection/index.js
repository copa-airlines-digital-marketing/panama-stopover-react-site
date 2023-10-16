import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import PropTypes from 'prop-types';
import {
  RadioGroup,
} from '@material-ui/core';

import useStyles from './styles';
import RadioButtonCo from '../../ui/RadioButton/radioButtonCo';


import bookingPanel from '../../../../data/BookingPanel';

const StopoverSelection = ({
  origin,
  destination,
  stopoverSelect,
  setStopoverSelect,
  handleStopoverDateChange,
  typeIndex,
  idiomasReducer,
}) => {
  const classes = useStyles();
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];

  const handleChange = (event) => {
    handleStopoverDateChange({ stopoverDate: ''});
    setStopoverSelect(parseInt(event.target.value, 10));
  }

  return (
    <RadioGroup
      value={stopoverSelect}
      onChange={handleChange}
      className={classes.stopoverRadioGroup}
    >
      <RadioButtonCo
        key='stopover-origin-selector'
        id='stopover-origin-selector'
        label={translations.stopoverDeparture(origin)}
        value={0}
        fullWidth
      />
      <RadioButtonCo
        key='stopover-destination-selector'
        id='stopover-destination-selector'
        label={translations.stopoverReturn(destination)}
        value={1}
        disabled={ typeIndex === 1 ? true : false}
        fullWidth
      />
    </RadioGroup>
  )
}

StopoverSelection.propTypes = {

}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(StopoverSelection);
