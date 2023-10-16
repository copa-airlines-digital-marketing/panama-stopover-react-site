import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import isEmpty from "lodash/isEmpty"
import { Grid } from "@material-ui/core"
import moment from "moment"

import BookingCalendar from "./index"
import useStyles from "./styles"
import InputCoBooking from "../inputCoBooking"
import bookingPanel from '../../../../data/BookingPanel';
import { ReactComponent as Calendar } from "../../assets/icons/Calendar.svg"


const CalendarContainer = ({
  typeIndex,
  onStartDateChange,
  onEndDateChange,
  onDateTouched,
  handleFlexibleDate,
  area2,
  date1,
  errorStartDate,
  errorEndDate,
  touchedStartDate,
  touchedEndDate,
  startDateField,
  endDateField,
  flexibledate,
  id,
  lang,
  swapped,
  setSwap,
  prevDate,
  isStopover,
  isFlexibleSearch,
  invalidDateError,
  hasInvalidDate,
  idiomasReducer,
}) => {
  const classes = useStyles();
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];
  let alternateCalendarText = translations.datePicker.departure;
  let calendarPlaceholder = translations.datePicker.dateOneWayPlaceholder;
  let calendarLabel = translations.datePicker.dateOneWay;
  let ariaLabelCalendar = translations.accesibility.datePicker.dateRoundTrip;
  const flexiblDatesText = translations.datePicker.flexibleDates;
  if (typeIndex === 0) {
    alternateCalendarText = translations.datePicker.return;
    calendarPlaceholder = translations.datePicker.dateRoundTripPlaceHolder;
    calendarLabel = translations.datePicker.dateRoundTrip;
    ariaLabelCalendar = translations.accesibility.datePicker.dateOneWayTrip;
  }

  const [startDateState, setStartDate] = useState(null)
  const [endDateState, setEndDate] = useState(null)
  const [calendarValue, setCalendarValue] = useState(undefined)
  const [calendarActive, setCalendarState] = useState(false)

  const [flexibleDates, setFlexibleDates] = useState(false)

  const inputRef = useRef()

  const handleEndState = () => {
    if (endDateState) {
      const data = {
        end: moment(endDateState).format("YYYY-MM-DD"),
        flexibleDate: flexibleDates,
      }
      onEndDateChange(data)
    }
  }

  useEffect(handleEndState, [endDateState])

  useEffect(() => {
    handleFlexibleDate(flexibleDates)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flexibleDates])

  const handleStartDate = () => {
    if (startDateState) {
      if (endDateField && typeIndex !== 2) {
        const endDate = endDateField

        if (!endDate) {
          setEndDate(null)
          onEndDateChange(null)
        } else {
          setEndDate(moment(endDate))
        }

        if (startDateState && endDate) {
          setCalendarValue(
            `${moment(startDateState).format("ddd D, MMM")} - ${moment(
              endDate
            ).format("ddd D, MMM")}`
          )
        }
      }
      const startDate = {
        start: moment(startDateState).format("YYYY-MM-DD"),
      }
      onStartDateChange(id, startDate.start)
    }
  }
  useEffect(handleStartDate, [startDateState])

  const handleValueChange = () => {
    if (flexibledate) {
      setFlexibleDates(true)
    }
    if (!startDateField) {
      setEndDate(null)
      onEndDateChange(null)
    }
    if (startDateField === null) {
      setStartDate(null)
      setEndDate(null)
      setCalendarValue(undefined)
    }
    if (startDateField) {
      const startDate = startDateField
      if (startDate !== null) {
        setStartDate(moment(startDate))
      }

      if (
        startDateState &&
        // eslint-disable-next-line no-underscore-dangle
        startDate !== startDateState._i &&
        endDateState !== null
      ) {
        setEndDate(null)
        onEndDateChange(null)
      }

      if (startDate) {
        setCalendarValue(`${moment(startDate).format("ddd D, MMM")}`)
      }
    }
  }
  useEffect(handleValueChange, [startDateField, endDateField])

  const toggleCalendar = (open) => {
    if (open) {
      setCalendarState(true)
    } else {
      setCalendarState(false)
    }
  }
  const toggleCalendarKey = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      toggleCalendar(true)
    } else if (e.keyCode === 27) {
      toggleCalendar(false)
    }
  }
  const closeCalendar = (safeExit) => {
    if (safeExit) {
      setCalendarState(false)
    } else {
      toggleCalendar(false)
    }
  }

  const handleCalendarBlur = () => {
    onDateTouched(id)
  }

  const handleIconClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
      toggleCalendar(true)
    }
  }

  const handleFocus = () => {
    if (area2 && !date1 && !isStopover) {
      if (swapped) {
        setSwap(false)
      } else {
        setTimeout(() => {
          inputRef.current.focus()
          toggleCalendar(true)
        }, 100)
      }
    }
  }

  useEffect(handleFocus, [area2])

  const handleKeyDown = (event) => {
    if (event.shiftKey && event.keyCode === 9) {
      toggleCalendar(false)
    }
  }

  return (
    <>
      <Grid data-cy="calendarContainer" container>
        <Grid
          item
          md={1}
          sm={1}
          xs={2}
          className={classes.calendarIconContainer}
          onClick={handleIconClick}
        >
          <Calendar className={classes.CalendarIcon} />
        </Grid>
        <Grid
          data-cy="calendarContainer-item"
          item
          lg={11}
          md={11}
          sm={11}
          xs={10}
          className={classes.calendar}
        >
          <InputCoBooking
            name="origin"
            placeholder={
              calendarActive ? alternateCalendarText : calendarPlaceholder
            }
            alternativePlaceholder={alternateCalendarText}
            aria-label={ariaLabelCalendar}
            id={`date-input-${id}`}
            label={calendarLabel}
            onClick={() => toggleCalendar(true)}
            onKeyUp={(e) => toggleCalendarKey(e)}
            onKeyDown={handleKeyDown}
            value={calendarValue}
            onBlur={handleCalendarBlur}
            calendarActive={calendarActive}
            hasErrors={
              (touchedStartDate && !isEmpty(errorStartDate)) ||
              (touchedEndDate && !isEmpty(errorEndDate)) ||
              hasInvalidDate
            }
            helperText={
              (touchedStartDate && errorStartDate) ||
              (touchedEndDate && errorEndDate) ||
              (flexibleDates ? flexiblDatesText : "") ||
              invalidDateError
                ? invalidDateError
                : ""
            }
            inputProps={{ readOnly: true }}
            inputRef={inputRef}
          />
        </Grid>
      </Grid>
      {calendarActive && (
        <BookingCalendar
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDateState={startDateState}
          endDateState={endDateState}
          calendarValue={calendarValue}
          setCalendarValue={setCalendarValue}
          placeholder={alternateCalendarText}
          label={calendarLabel}
          typeIndex={typeIndex}
          closeCalendar={closeCalendar}
          calendarActive={calendarActive}
          flexibleDates={flexibleDates}
          setFlexibleDates={setFlexibleDates}
          lang={lang}
          prevDate={prevDate}
          isFlexibleSearch={isFlexibleSearch}
        />
      )}
    </>
  )
}

CalendarContainer.propTypes = {
  typeIndex: PropTypes.oneOf([0, 1, 2]),
  onStartDateChange: PropTypes.func,
  onEndDateChange: PropTypes.func,
  onDateTouched: PropTypes.func,
  area2: PropTypes.string,
  handleFlexibleDate: PropTypes.func,
  date1: PropTypes.string,
  lang: PropTypes.string,
  errorStartDate: PropTypes.string,
  errorEndDate: PropTypes.string,
  touchedStartDate: PropTypes.bool,
  touchedEndDate: PropTypes.bool,
  startDateField: PropTypes.string,
  endDateField: PropTypes.string,
  flexibledate: PropTypes.bool,
  id: PropTypes.number,
  swapped: PropTypes.bool.isRequired,
  setSwap: PropTypes.func.isRequired,
  prevDate: PropTypes.string,
  isStopover: PropTypes.bool,
  isFlexibleSearch: PropTypes.bool,
  invalidDateError: PropTypes.string,
  hasInvalidDate: PropTypes.bool,
}

CalendarContainer.defaultProps = {
  typeIndex: 0,
  onStartDateChange: null,
  onEndDateChange: null,
  onDateTouched: null,
  area2: "",
  handleFlexibleDate: null,
  date1: "",
  lang: "",
  errorStartDate: "",
  errorEndDate: "",
  touchedStartDate: false,
  touchedEndDate: false,
  startDateField: "",
  endDateField: "",
  flexibledate: false,
  id: 0,
  prevDate: "",
  isStopover: false,
  invalidDateError: "",
  hasInvalidDate: false,
  isFlexibleSearch: false,
}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(CalendarContainer);
