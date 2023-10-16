import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';
import {
  InputAdornment,
  SvgIcon,
  Grid,
} from '@material-ui/core';

import {
  useStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./styles";
import InputCoBooking from '../inputCoBooking';
import DividerCo from '../../ui/divider/dividerCo';
import TypographyCo from '../../ui/typography/typographyCo';


import { ReactComponent as CarrotDown } from "../../assets/icons/Carrot-Down.svg"

import bookingPanel from '../../../../data/BookingPanel';

const StopoverDateSelection = ({
  date1,
  date2,
  typeIndex,
  selection,
  placeholder,
  errorStopover,
  setStopoverDate,
  setStopoverNights,
  handleStopoverDateChange,
  stopoverDate,
  touchedStopover,
  idiomasReducer,
}) => {
  const classes = useStyles();
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];
  const ref = useRef(null)
  const [expanded, setExpanded] = useState(false);
  const [accordionInput, setAccordionInput] = useState(placeholder);

  // Check stopover date accordion activation
  let disabledStopoverSelection = true;
  if (typeIndex === 0 && date1 && date2) {
    disabledStopoverSelection = false;
  }

  if (typeIndex === 1 && date1) {
    disabledStopoverSelection = false;
  }

  const carrotDown = () => (
    <InputAdornment position="end" className={classes.containerIcon}>
      <SvgIcon
        className={clsx(classes.downIcon, "carrotDown")}
        component={CarrotDown}
      />
    </InputAdornment>
  )

  const handleChangeAccordion = (event) => {
    // console.log('change accordion:', event.target.value)
    setExpanded(!expanded);
  }

  const handleOptionClick = (date, text, nights) => {
    handleStopoverDateChange({ stopoverDate: date });
    setStopoverNights(nights);
    setStopoverDate(date);
    setAccordionInput(text);
    setExpanded(!expanded);
  }

  const handleDateOptionDetails = () => {
    const origin = moment(date1);
    const destination = moment(date2);
    let dateArray;
    let result;
    if (typeIndex === 0 && selection === 0 && date2) {
      const diff = destination.diff(origin, 'days');
      const validator = diff < 0 ? 0 : diff;
      const counter = validator > 6 ? 6 : validator;
      // setStopoverNights(counter.toString());
      dateArray = Array(counter).fill(0);
      result = dateArray.map((v, i) => {
        const index = i + 1;
        return {
          date: moment(date1).add(index, 'days').format("YYYY-MM-DD"),
          text: `${moment(date1).format("ddd D, MMM")} - ${moment(date1).add(index, 'days').format("ddd D, MMM")} - ${index} ${translations.stopoverDateOptionText}${index > 1 ? 's': ''}`,
          nights: index.toString(),
        }
      })
    }

    if (typeIndex === 0 && selection === 1 && date2) {
      const diff = destination.diff(origin, 'days');
      const validator = diff < 0 ? 0 : diff;
      const counter = validator > 6 ? 6 : validator;
      // setStopoverNights(counter.toString());
      dateArray = Array(counter).fill(0);
      result = dateArray.map((v, i) => {
        const index = i + 1;
        return {
          date: moment(date2).subtract(index, 'days').format("YYYY-MM-DD"),
          text: `${moment(date2).subtract(index, 'days').format("ddd D, MMM")} - ${moment(date2).format("ddd D, MMM")} - ${index} ${translations.stopoverDateOptionText}${index > 1 ? 's': ''}`,
          nights: index.toString(),
        }
      })
    }

    if (typeIndex === 1) {
      // setStopoverNights('6');
      dateArray = Array(6).fill(0);
      result = dateArray.map((v, i) => {
        const index = i + 1;
        return {
          date: moment(date1).add(index, 'days').format("YYYY-MM-DD"),
          text: `${moment(date1).format("ddd D, MMM")} - ${moment(date1).add(index, 'days').format("ddd D, MMM")} - ${index} ${translations.stopoverDateOptionText}${index > 1 ? 's': ''}`,
          nights: index.toString(),
        }
      })
    }

    const buildOptions = result ? result.map(({ date, text, nights }, i) => (
      <>
        <div
          className={classes.itemStepper}
          onClick={() => handleOptionClick(date, text, nights)}
        >
          <TypographyCo>
            { text }
          </TypographyCo>
        </div>
        <DividerCo />
      </>
    )) : <div />

    return buildOptions;
  }

  const handleClickOutside = (event) => {
    if (ref.current) {
      if (!ref.current.contains(event.target)) {
        setExpanded(false);
      }
    }
  }

  const validateClickOutside = () => {
    document.addEventListener("click", handleClickOutside, true)
  }

  useEffect(() => {
    validateClickOutside();
  })

  useEffect(() => {
    if (stopoverDate === '') {
      setAccordionInput(placeholder);
    }
  }, [placeholder, stopoverDate]);

  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.inputContainer}
      >
        <div className={classes.container}>
          <Accordion
            square
            expanded={expanded}
            onChange={handleChangeAccordion}
            disabled={disabledStopoverSelection}
            TransitionProps={{
              classes: {
                root: classes.itemCollapse,
              },
            }}
          >
            <AccordionSummary>
              <InputCoBooking
                id=""
                value={accordionInput}
                type="button"
                onClick={() => setExpanded(false)}
                InputProps={{ endAdornment: carrotDown() }}
                hasErrors={(touchedStopover && !isEmpty(errorStopover))}
                helperText={
                  (touchedStopover && errorStopover) ? errorStopover : '' }
              />
            </AccordionSummary>
            <AccordionDetails>
              <div ref={ref}>
                { date1 && !disabledStopoverSelection ? handleDateOptionDetails() : <div /> }
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </Grid>
  )
}

StopoverDateSelection.propTypes = {

}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(StopoverDateSelection);
