import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import { isEqual, isEmpty, fill } from 'lodash';
import { Form, withFormik, Field } from 'formik';
import { Grid } from '@material-ui/core';

import useStyles from './styles';
import { initialProps, fieldsValidation } from './validations';
import CalendarContainer from '../bookingCalendar/calendarContainer';
import SearchPanelAutoComplete from '../searchPanelAutoComplete';
import SearchPanelPassenger from '../searchPanelPassenger';
import StopoverSelection from '../stopoverSelection';
import ButtonCo from '../../ui/button/buttonCo';
import TypographyCo from '../../ui/typography/typographyCo';

import bookingPanel from '../../../../data/BookingPanel';
import StopoverDateSelection from '../stopoverDateSelection';

const schemaForm = {
  enableReinitialize: true,
  mapPropsToValues: initialProps,
  validate: fieldsValidation,
  displayName: 'SearchPanel',
}

const SearchPanel = ({
  setFieldValue,
  values,
  tabValues,
  setTabValues,
  verifyCode,
  resetCode,
  promocodeError,
  promocodeSuccess,
  promocodeLoading,
  promocode,
  typeIndex,
  touched,
  setFieldTouched,
  errors,
  // resetTotalPrice,
  lang,
  handleMulticity,
  // setOriginDestination,
  setTransition,
  transitioning,
  isFlexibleSearch,
  // stopover,
  bookingParams,
  idiomasReducer,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];

  const [baseValues, setBaseValues] = useState(values);
  const [swapClicked, setSwapClick] = useState(false);
  const [fields, setFields] = useState([{ origin: {}, destination: {} }]);
  const [originOptions, setOriginOptions] = useState([[]]);
  const [destinationOptions, setDestinationOptions] = useState([[]]);
  const [sendButtonPressed, setSendButtonPressed] = useState(false);
  const [firstOriginDate, setFirstOriginDate] = useState(moment());
  const [firstDestinationDate, setFirstDestinationDate] = useState(moment());
  const [firstDate, setFirstDate] = useState(moment());
  const [stopoverSelect, setStopoverSelect] = useState(0);
  const [stopoverNights, setStopoverNights] = useState(0);
  const [stopoverDate, setStopoverDate] = useState('');
  const params = new URLSearchParams(history.location.search);
  const areaOne = params.get("area1");
  const dateOne = params.get("date1");
  const dateTwo = params.get("date2");


  // Initial state for the tabValues
  const setInitialState = () => {
    if (isEmpty(tabValues)) {
      setTabValues(values)
    }
    if (!isEmpty(tabValues)) {
      setBaseValues(tabValues)
    }
  }

  useEffect(() => {
    setInitialState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Check if it's roundtrip or oneWay
  const handleTypeIndexChange = () => {
    if (typeIndex === 0) {
      setFieldValue("roundtrip", true);
    } else { 
      setFieldValue("roundtrip", false);
    }
  }
  useEffect(handleTypeIndexChange, [typeIndex]);

  const updateTabValues = () => {
    if (
      !isEqual(baseValues, values) &&
      tabValues.roundtrip === values.roundtrip
    ) {
      setTabValues(values)
    }
  }
  useEffect(updateTabValues, [values]);

  const onTabChange = () => {
    if (transitioning) {
      values = tabValues
      Object.keys(values).forEach((key) => {
        setFieldValue(key, values[key])
      })
      const newTab = { ...tabValues }
      if (typeIndex === 0) {
        setFieldValue("roundtrip", true)
        newTab.roundtrip = true
        setFieldValue("date2", null)
        setFieldValue("date1", null)
        newTab.date2 = null
        newTab.date1 = null
      } else {
        setFieldValue("roundtrip", false)
        newTab.roundtrip = false
        setFieldValue("date2", null)
        newTab.date2 = null
      }
      setFieldValue("advanced_air_search", false)

      setTabValues(newTab)
      setBaseValues(newTab)
    }
    // if (stopover) {
    //   setFieldValue("area1", "")
    //   setFieldValue("area2", "")
    // }
    setTransition(false)
  }
  useEffect(onTabChange, [transitioning]);

  // Handles origin list for each segment
  const handleOriginAirportChanges = (id, data) => {
    const options = [...originOptions]
    const newOptions = fill(options, data, [id], [id + 1])
    setOriginOptions([...newOptions])
  }

  // Handles destination list for ecah segment
  const handleDestinationAirportChanges = (id, data) => {
    const options = [...destinationOptions]
    const newData = data[id].destinations
    const newOptions = fill(options, newData, [id], [id + 1])
    setDestinationOptions([...newOptions])
  }

  // Resets destination airports list for each index when origin is cleared
  const handleOriginClear = (id) => {
    const options = [...destinationOptions]
    const newOptions = fill(options, [], [id], [id + 1])
    setDestinationOptions([...newOptions])
  }

  // changes destination airport list when there is pre populated data
  const changeDestinationOptions = (id, val) => {
    const newData = val[id].destinations
    const options = [...destinationOptions]
    const newOptions = fill(options, newData, [id], [id + 1])
    setDestinationOptions([...newOptions])
  }

  // Sets area1 value
  const handleOriginFieldChange = (prop, data) => {
    if (isEmpty(data)) setFieldValue("area1", areaOne)
    else setFieldValue("area1", data)
  }

    // Sets area2 value
  const handleDestinationFieldChange = (prop, data) => {
    setFieldValue("area2", data)
  }

  // Handle button swap
  const handleSwapChanges = (id) => {
    const newData = fields.map((field, idx) => {
      if (idx === id) {
        const originOperationDate = moment(field.origin?.operationDate)
        setFirstDestinationDate(
          originOperationDate.isAfter(moment()) ? originOperationDate : moment()
        )
        const destinationOperationDate = moment(
          field.destination?.operationDate
        )
        setFirstOriginDate(
          destinationOperationDate.isAfter(moment())
            ? destinationOperationDate
            : moment()
        )
        return {
          ...field,
          origin: field.destination,
          destination: field.origin,
        }
      }
      return field
    })
    setFields(newData)
    if (newData[id]?.origin?.code) {
      handleOriginFieldChange(id, newData[id].origin.code)
    } else {
      handleOriginFieldChange(id, "")
    }
    if (newData[id]?.destination?.code) {
      handleDestinationFieldChange(id, newData[id].destination.code)
    } else {
      handleDestinationFieldChange(id, "")
    }
  }

  useEffect(
    () =>
      setFirstDate(
        firstOriginDate.isAfter(firstDestinationDate)
          ? firstOriginDate
          : firstDestinationDate
      ),
    [firstOriginDate, firstDestinationDate]
  );

  // Handles any origin changes
  const handleOriginChange = (id, data) => {
    if (data?.operationDate) {
      const operationDate = moment(data.operationDate)
      setFirstOriginDate(
        operationDate.isAfter(moment()) ? operationDate : moment()
      )
    }
    setFields((prevState) =>
      prevState.map((item, idx) => {
        if (idx === id) {
          return { ...item, origin: data }
        }
        return item
      })
    )
    if (data?.code) {
      handleOriginFieldChange(id, data.code)
    } else {
      handleOriginFieldChange(id, "")
    }
  }

  // Handle any destination changes
  const handleDestinationChange = (id, data) => {
    if (data?.operationDate) {
      const operationDate = moment(data?.operationDate)
      setFirstDestinationDate(
        operationDate.isAfter(moment()) ? operationDate : moment()
      )
    }
    setFields((prevState) =>
      prevState.map((item, idx) => {
        if (idx === id) {
          return { ...item, destination: data }
        }
        return item
      })
    )
    if (data?.code) {
      handleDestinationFieldChange(id, data.code)
    } else {
      handleDestinationFieldChange(id, "")
    }
  }

  // Handle startDate changes
  const handleStartDate = (prop, data) => {
    let date
    if (typeIndex === 0) date = dateTwo !== "null" ? dateOne : null
    else date = dateOne
    const newData = fields.map((field, idx) => {
      if (idx === prop) {
        return { ...field, startDate: data }
      }
      return field
    })
    setFields(newData)
    setFieldValue("date1", data || date || null)
  }

  // Handle endDate changes
  const handleEndDtate = (data) => {
    if (typeIndex === 0) {
      const date = data?.end ? data.end : null
      const dateAux = dateTwo !== "null" ? dateTwo : null
      setFieldValue("date2", date !== null ? date : dateAux)
    }
  }

  useEffect(() => {
    handleStartDate()
    handleEndDtate()
    handleOriginChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingParams])

  // Handles flexible dates field values
  const handleFlexibleDate = (data) => {
    setFieldValue("flexible_dates_v2", data)
  }

  // Handles passengger field values
  const handlePassengersChange = (data) => {
    setFieldValue("adults", data.adults)
    setFieldValue("children", data.children)
    setFieldValue("infants", data.infants)
  }

  const handleStopoverDateChange = (data) => {
    setFieldValue("stopoverDate", data.stopoverDate);
  }

  // handles date1 touched
  const handleDateTouched = () => {
    setFieldTouched("date1", true)
    setFieldTouched("date2", true)
  }

  // handles any fieldvalues errors
  const handleTouched = (prop) => {
    setFieldTouched(prop, true)
  }

  // handles origin touched
  const handleOriginTouched = () => {
    setFieldTouched("area1", true)
  }

  // handles destination touched
  const handleDestinationTouched = () => {
    setFieldTouched("area2", true)
  }

  useEffect(() => {
    if (touched.stopoverDate) return
    setFieldTouched('stopoverDate', true);
  }, [setFieldTouched, stopoverDate, touched.stopoverDate])

  // checks form on submit
  const checkForm = () => {
    setSendButtonPressed(true)
    if (!isEmpty(errors)) {
      Object.keys(errors).map((error) => handleTouched(error))
      return
    }
    const dateOne = values.date1;
    const dateTwo = values.stopoverDate;
    const dateThree = typeIndex === 0 ? values.date2 : null;
    const areaOne = values.area1;
    const areaTwo = typeIndex === 0 ? stopoverSelect === 0 ? 'PTY' : values.area2 : 'PTY';
    const areaThree = typeIndex === 0 ? stopoverSelect === 0 ? 'PTY' : values.area2 : 'PTY';
    const areaFour = typeIndex === 0 ? stopoverSelect === 0 ? values.area2 : 'PTY' : values.area2;
    const areaFive = typeIndex === 0 ? stopoverSelect === 0 ? values.area2 : 'PTY' : null;
    const areaSix = typeIndex === 0 ? values.area1 : null;

    const stopverLeg = stopoverSelect === 0 ? '1' : '2';

    window.location.replace(`https://shopping.copaair.com/multicity?roundtrip=false&adults=${values.adults}&children=${values.children}&infants=${values.infants}&date1=${dateOne}&date2=${dateTwo}&date3=${dateThree}&date4=null&date5=null&promocode=&area1=${areaOne}&area2=${areaTwo}&area3=${areaThree}&area4=${areaFour}&area5=${areaFive}&area6=${areaSix}&area7=&area8=&area9=&area10=&advanced_air_search=true&flexible_dates_v2=false&stopoverNights=${stopoverNights}&stopoverLegNumber=${stopverLeg}&stopover=false&origin=stopoverinpanama`);
  }

  const testid = typeIndex === 0 ? "roundtrip-description" : "oneway-description";

  return (
    <Form data-cy="searchPanel-form" data-testid={testid} onSubmit={checkForm}>
      <Grid container alignItems="center">
        <Grid item md={8} sm={12} xs={12}>
          <Field name="trips">
            {(field) => (
              <SearchPanelAutoComplete
                {...field}
                id={0}
                onOriginChange={handleOriginChange}
                onDestinationChange={handleDestinationChange}
                onOriginTouched={handleOriginTouched}
                onDestinationTouched={handleDestinationTouched}
                originFieldValue={values.area1}
                destinationFieldValue={values.area2}
                errorOriginField={errors.area1}
                errorDestinationField={errors.area2}
                touchedOrigin={touched.area1}
                touchedDestination={touched.area2}
                sendButtonPressed={sendButtonPressed}
                typeIndex={typeIndex}
                origin={fields[0].origin}
                destination={fields[0].destination}
                originOptions={originOptions[0]}
                destinationOptions={destinationOptions[0]}
                setDestinationOptions={changeDestinationOptions}
                handleOriginAirportChanges={handleOriginAirportChanges}
                handleDestinationAirportChanges={
                  handleDestinationAirportChanges
                }
                handleOriginClear={handleOriginClear}
                setSwap={setSwapClick}
                handleSwapChanges={handleSwapChanges}
              />
            )}
          </Field>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className={classes.calendarGrid}>
          <Field name="calendar">
            {
              (field) => (
                <CalendarContainer
                  {...field}
                  fieldName1="date1"
                  fieldName2="date2"
                  typeIndex={typeIndex}
                  onStartDateChange={handleStartDate}
                  onEndDateChange={handleEndDtate}
                  onDateTouched={handleDateTouched}
                  handleFlexibleDate={handleFlexibleDate}
                  errorStartDate={errors.date1}
                  errorEndDate={errors.date2}
                  touchedStartDate={touched.date1}
                  touchedEndDate={touched.date2}
                  startDateField={values.date1}
                  endDateField={values.date2}
                  area2={values.area2}
                  date1={values.date1}
                  roundtrip={values.roundtrip}
                  lang={lang}
                  swapped={swapClicked}
                  setSwap={setSwapClick}
                  flexibledate={values.flexible_dates_v2}
                  isFlexibleSearch={isFlexibleSearch}
                  prevDate={firstDate.format("YYYY-MM-DD")}
                />
              )
            }
          </Field>
        </Grid>
        <div className={classes.stopoverPanel}>
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.stopoverBox}>
              <TypographyCo
                className={classes.stopoverTitle}
                variant="caption"
              >
                { translations.stopoverTitle }
              </TypographyCo>
              <StopoverSelection
                origin={{ originCode: values.area1 }}
                destination={{ destinationCode: values.area2 }}
                stopoverSelect={stopoverSelect}
                setStopoverSelect={setStopoverSelect}
                handleStopoverDateChange={handleStopoverDateChange}
                typeIndex={typeIndex}
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.stopoverBox}>
              <TypographyCo
                className={classes.stopoverTitle}
                variant="caption"
              >
                { translations.stopoverDateTitle }
              </TypographyCo>
              <StopoverDateSelection
                date1={values.date1}
                date2={values.date2}
                typeIndex={typeIndex}
                selection={stopoverSelect}
                placeholder={translations.stopoverDatePlaceholder}
                setStopoverDate={setStopoverDate}
                setStopoverNights={setStopoverNights}
                handleStopoverDateChange={handleStopoverDateChange}
                stopoverDate={values.stopoverDate}
                touchedStopover={touched.stopoverDate}
                errorStopover={errors.stopoverDate}
              />
            </div>
          </Grid>
        </div>
        <div className={classes.container}>
          <Grid item md={4} sm={12} xs={12}>
            <Field name="passengers">
              {
                (field) => (
                  <SearchPanelPassenger
                    {...field}
                    onChange={handlePassengersChange}
                    adult={values.adults}
                    child={values.children}
                    infant={values.infants}
                  />
                )
              }
            </Field>
          </Grid>
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            className={classes.promocodeContainer}
          />
          <Grid item md={4} sm={12} xs={12} className={classes.submitContainer}>
            <ButtonCo
              color="primary"
              size="medium"
              variant="contained"
              onClick={checkForm}
              className={classes.submitButton}
              // loading={isEmpty(errors)}
              data-cy="searchPanel-submitButton"
              aria-label={translations.accesibility.searchButton}
            >
              {translations.submitButton}
            </ButtonCo>
          </Grid>
        </div>
      </Grid>
    </Form>
  )
}

const valuesShape = {
  promocode: PropTypes.string,
  roundtrip: PropTypes.bool,
  adults: PropTypes.number,
  children: PropTypes.number,
  infants: PropTypes.number,
  area1: PropTypes.string,
  area2: PropTypes.string,
  flexible_dates_v2: PropTypes.bool,
  date1: PropTypes.string,
  date2: PropTypes.string,
  advanced_air_search: PropTypes.bool,
}

SearchPanel.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    promocode: PropTypes.string,
    area1: PropTypes.string,
    area2: PropTypes.string,
    date1: PropTypes.string,
    date2: PropTypes.string,
  }),
  touched: PropTypes.shape({
    area1: PropTypes.bool,
    area2: PropTypes.bool,
    date1: PropTypes.bool,
    date2: PropTypes.bool,
  }),
  values: PropTypes.shape(valuesShape),
  tabValues: PropTypes.shape(valuesShape).isRequired,
  setTabValues: PropTypes.func.isRequired,
  typeIndex: PropTypes.oneOf([0, 1, 2]).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func,
  // resetTotalPrice: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  // setOriginDestination: PropTypes.func.isRequired,
  setTransition: PropTypes.func.isRequired,
  transitioning: PropTypes.bool.isRequired,
  isFlexibleSearch: PropTypes.bool.isRequired,
  // stopover: PropTypes.bool.isRequired,
  // bookingParams: PropTypes.shape({}).isRequired,
}

SearchPanel.defaultProps = {
  promocode: null,
  promocodeError: null,
  touched: {},
  setFieldTouched: null,
  errors: {},
  handleMulticity: null,
  values: {},
}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(withFormik(schemaForm)(SearchPanel));
