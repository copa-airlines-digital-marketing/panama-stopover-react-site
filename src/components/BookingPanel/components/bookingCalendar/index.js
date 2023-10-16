import React, { useState, useEffect } from "react"
import OutsideClickHandler from "react-outside-click-handler"
import { DayPickerRangeController } from "react-dates"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import PropTypes from "prop-types"
import { SvgIcon, Divider } from '@material-ui/core';
import moment from "moment";
import 'moment/locale/es';
import clsx from "clsx";

import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import "./react_dates_override.css"
import useStyles from "./styles"
import { ReactComponent as Left } from "../../assets/icons/Arrow-Left.svg"
import { ReactComponent as Right } from "../../assets/icons/Arrow-Right.svg"
import { ReactComponent as KeyLeft } from "../../assets/icons/KeyboardArrow-Left.svg"
import CheckboxCo from "../../ui/Checkbox/checkboxCo"
import ButtonCo from "../../ui/button/buttonCo"
import TypographyCo from "../../ui/typography/typographyCo"
import bookingPanel from '../../../../data/BookingPanel';

const SpanishDates = {
  monthsShort: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ],
  weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
}

const setMomentLocal = (lang) => {
  moment.updateLocale(lang, lang === "es" ? SpanishDates : {})
}

const PrevPage = React.forwardRef((props, ref) => {
  const { leftArrow } = useStyles()
  return (
    <SvgIcon className={`${leftArrow} arrow`} {...props} ref={ref}>
      <Left />
    </SvgIcon>
  )
})

const NextPage = React.forwardRef((props, ref) => {
  const { rightArrow } = useStyles()
  return (
    <SvgIcon className={`${rightArrow} arrow`} {...props} ref={ref}>
      <Right />
    </SvgIcon>
  )
})

const Exit = () => {
  const { exit } = useStyles()
  return (
    <SvgIcon className={exit}>
      <KeyLeft />
    </SvgIcon>
  )
}

const renderDay = (day) => {
  return (
    <div className="inner-day" data-cy={day.format("MM-DD-YYYY")}>
      {day.format("D")}
    </div>
  )
}

const getMonthFormat = (formatMessage, date) => {
  return formatMessage(date.format("MMMM"), date.format("YYYY"));
}

const getDayFormat = ({ date }, formatMessage, locale) => {
  const day = moment(date, "YYYY-MM-DD");
  const selectedDate = formatMessage[locale];
  return selectedDate(day.format("dddd"), day.format("DD"), day.format("MMMM"));
}

const BookingCalendar = ({
  setStartDate,
  setEndDate,
  startDateState,
  endDateState,
  setCalendarValue,
  calendarValue,
  placeholder,
  label,
  typeIndex,
  closeCalendar,
  calendarActive,
  flexibleDates,
  setFlexibleDates,
  lang,
  prevDate,
  isFlexibleSearch,
  idiomasReducer,
}) => {
  const classes = useStyles()
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];
  const monthSelection = translations.accesibility.datePicker.monthSelection;
  const daySelection = translations.accesibility.datePicker;

  useEffect(() => {
    setMomentLocal(lang);
    // moment.updateLocale(lang)
  }, [lang])
  /**
   * Actions related to the interactions
   */
  const documentBody = document.body
  const closeSettings = () => {
    if (document.body.style) documentBody.removeAttribute("style")
    closeCalendar(false)
  }
  const captureKey = (e) => {
    if (e.keyCode === 27) closeSettings()
  }
  const confirm = () => {
    if (document.body.style) documentBody.removeAttribute("style")
    closeCalendar(true)
  }
  const confirmKey = (e, funcToConfirm) => {
    if (e.keyCode === 32 || e.keyCode === 13) funcToConfirm()
  }

  /*
   * Focus change and date selection
   */
  const [focusedInputState, changeFocus] = useState("startDate")
  const [selectedClass, setClass] = useState(
    startDateState === null || endDateState === null || typeIndex !== 0
      ? ""
      : "selected"
  ) // If both dates have been selected

  // When dates change, send the value to the parent. Also set the values and class
  const onDatesChange = ({ startDate, endDate }) => {
    if (endDate === endDateState && endDate !== null) {
      setStartDate(startDate)
      setEndDate(null)
      endDate = null
    } else {
      setEndDate(endDate)
    }

    setStartDate(startDate)
    if (startDate !== null && endDate !== null) {
      changeFocus(focusedInputState === "endDate" ? "startDate" : "endDate")
      setCalendarValue(
        `${startDate.format("ddd D, MMM")} — ${endDate.format("ddd D, MMM")}`
      )
      if (typeIndex === 0) setClass("selected")
      else confirm()
    }
    if (startDate !== null && endDate === null) {
      setClass("")
      setCalendarValue(`${startDate.format("ddd D, MMM")} — `)
    }
    if (startDate === null && endDate === null) {
      setClass("")
      setCalendarValue(undefined)
    }
  }

  const onDateChange = ({ startDate }) => {
    setStartDate(startDate)
    setCalendarValue(`${startDate.format("ddd D, MMM")}`)
    confirm()
  }
  // Basic function of focus change
  const onFocusChange = (focusedInput) => {
    if (focusedInput !== null) changeFocus(focusedInput)
  }

  /**
   * Setting parameters related to the change of dates
   */
  const maxDate = moment().add(330, "days")
  const minDate = prevDate ? moment(prevDate) : moment()
  const initialDate =
    startDateState === null ? minDate.clone() : startDateState.clone()
  const pm = moment(initialDate.clone().subtract(1, "months"))
  const nm = moment(initialDate.clone().add(2, "months"))
  const [prevMonthState, setPrev] = useState(pm)
  const [nextMonthState, setNext] = useState(nm)
  const [prevMonthWCAG, setPrevWCAG] = useState(
    getMonthFormat(monthSelection, prevMonthState)
  )
  const [nextMonthWCAG, setNextWCAG] = useState(
    getMonthFormat(monthSelection, nextMonthState)
  )
  const onNextMonthClick = () => {
    const prevMonth = prevMonthState.add(1, "months")
    const nextMonth = nextMonthState.add(1, "months")
    setPrev(prevMonth)
    setNext(nextMonth)
    setNextWCAG(getMonthFormat(monthSelection, nextMonth))
    setPrevWCAG(getMonthFormat(monthSelection, prevMonth))
  }
  const onPrevMonthClick = () => {
    const prevMonth = prevMonthState.subtract(1, "months")
    const nextMonth = nextMonthState.subtract(1, "months")
    setPrev(prevMonth)
    setNext(nextMonth)
    setNextWCAG(getMonthFormat(monthSelection, nextMonth))
    setPrevWCAG(getMonthFormat(monthSelection, prevMonth))
  }
  const goNext =
    maxDate.clone().startOf("month") >= nextMonthState.clone().startOf("month")
  const goPrev =
    minDate.clone().startOf("month") <= prevMonthState.clone().startOf("month")
  /**
   * Window Size reactive tasks
   */
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  React.useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth)
      if (window.innerWidth <= 750 && calendarActive) {
        window.scrollTo(0, 0)
        documentBody.style.overflow = "hidden"
      } else if (documentBody.style) {
        documentBody.removeAttribute("style")
      }
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [calendarActive, documentBody])
  const isHorizontal = windowSize > 750

  // Scroll when element present
  const [mounted, setMounted] = useState(false)
  const vScroll = document.getElementsByClassName(
    "DayPicker_transitionContainer__verticalScrollable"
  )
  // Focus into the calendar
  const focusRef = React.useRef()
  const focusRefXS = React.useRef()
  React.useEffect(() => {
    if (!mounted) {
      if (!isHorizontal && startDateState !== null) {
        if (vScroll[0]) {
          const minMonth = minDate.startOf("month")
          const diff = startDateState.diff(minMonth, "months")
          const perMonth = vScroll[0].scrollHeight / 12
          vScroll[0].scrollTop = perMonth * diff
        }
      }

      if (focusRef.current && isHorizontal) {
        focusRef.current.focus()
      }
      if (focusRefXS.current && !isHorizontal) {
        focusRefXS.current.focus()
      }
      const dayPickersNav = document.getElementsByClassName(
        "DayPickerNavigation_button"
      )
      if (dayPickersNav.length === 2) {
        dayPickersNav[0].removeAttribute("role")
        dayPickersNav[1].removeAttribute("role")
      }
      setMounted(true)
    }
  }, [
    setMounted,
    minDate,
    mounted,
    startDateState,
    vScroll,
    isHorizontal,
    focusRef,
    focusRefXS,
  ])

  const orientation = isHorizontal ? "horizontal" : "verticalScrollable"
  const numberOfMonths = isHorizontal ? 2 : 12
  const dayPickerNavigationInlineStyles = isHorizontal
    ? {}
    : { display: "none" }
  let daySize = windowSize > 340 ? 48 : 40
  if (windowSize < 300) {
    daySize = 36
  }
  // XS exclusive properties
  let xsTextClass = classes.flights
  let xsText = calendarValue
  if (calendarValue) {
    xsTextClass = `${xsTextClass} ${classes.flightsSelected}`
  } else {
    xsTextClass = `${xsTextClass} ${classes.flightsPlaceholder}`
    xsText = placeholder
  }
  const initialVisibleMonth = () => {
    if (isHorizontal) {
      if (startDateState !== null) return startDateState
    }
    return minDate
  }

  /**
   * Single or multiple variables
   */
  const singleClass = typeIndex !== 0 ? "single" : ""
  const selectionWCAG =
    typeIndex !== 0 ? "oneWaySelection" : "roundTripSelection"

  /**
   * Props related to the Calendar componen
   */
  const generalProps = {
    weekDayFormat: "ddd",
    firstDayOfWeek: 1,
    daySize,
    numberOfMonths,
    navPrev: (
      <PrevPage
        data-cy="bookingCalendar-prevPage"
        aria-label={prevMonthWCAG}
        tabIndex={goPrev ? "0" : "-1"}
        ref={isHorizontal && !goNext ? focusRef : null}
        role="button"
        aria-hidden={false}
        focusable
      />
    ),
    navNext: (
      <NextPage
        data-cy="bookingCalendar-NextPage"
        aria-label={nextMonthWCAG}
        tabIndex={goNext ? "0" : "-1"}
        role="button"
        ref={isHorizontal && goNext ? focusRef : null}
        aria-hidden={false}
        focusable
      />
    ),
    initialVisibleMonth,
    minimumNights: 0,
    renderDayContents: renderDay,
    dayPickerNavigationInlineStyles,
    maxDate,
    minDate,
    orientation,
    isOutsideRange: (date) =>
      date.isBefore(minDate, "day") || date.isAfter(maxDate, "day"),
    onNextMonthClick,
    onPrevMonthClick,
    dayAriaLabelFormat: "YYYY-MM-DD",
    phrases: {
      chooseAvailableStartDate: (a) =>
        getDayFormat(a, daySelection, "daySelection"),
      dateIsSelectedAsStartDate: (a) =>
        getDayFormat(a, daySelection, selectionWCAG),
      dateIsSelectedAsEndDate: (a) =>
        getDayFormat(a, daySelection, "oneWaySelection"),
      keyboardShortcuts: translations.keyboardShortcuts.title,
      selectFocusedDate: translations.keyboardShortcuts.enter,
      moveFocusByOneDay: translations.keyboardShortcuts.leftAndRight,
      moveFocusByOneWeek: translations.keyboardShortcuts.upAndDown,
      moveFocusByOneMonth: translations.keyboardShortcuts.pageUpAndPageDn,
      moveFocustoStartAndEndOfWeek: translations.keyboardShortcuts.homeAndEnd,
      returnFocusToInput: translations.keyboardShortcuts.escape,
      openThisPanel: translations.keyboardShortcuts.info,
      showKeyboardShortcutsPanel: translations.keyboardShortcuts.botoni,
      hideKeyboardShortcutsPanel: translations.keyboardShortcuts.closeBtn,
    },
  }

  /**
   * Common texts
   */
  const flexibleDatesWCAG = translations.accesibility.datePicker.flexibleDatesSelection(true);
  const flexibleDatesText = translations.datePicker.flexibleDates;
  const confirmText = translations.datePicker.confirmCTA;
  let confirmWCAG = ""

  if (selectedClass) {
    confirmWCAG = translations.accesibility.datePicker.roundTripConfirmationCTA(startDateState?.format("MMMM"), startDateState?.format("DD"), endDateState?.format("MMMM"), endDateState?.format("DD"));
  }
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (startDateState !== null && endDateState !== null) {
          confirm()
        } else if (typeIndex !== 0 && startDateState !== null) {
          confirm()
        } else {
          setCalendarValue(undefined)
          setStartDate(null)
          setEndDate(null)
          closeSettings(false)
        }
      }}
    >
      <div
        data-cy="bookingCalendar"
        className={clsx(
          `${classes.datePicker} ${selectedClass} ${singleClass}`,
          lang === "es" && "dayPicker-es"
        )}
        onKeyDownCapture={captureKey}
      >
        {!isHorizontal && (
          <div className={classes.xsTop}>
            <div
              className={classes.xsButton}
              tabIndex={0}
              role="button"
              onClick={closeSettings}
              onKeyDown={(e) => confirmKey(e, closeSettings)}
              ref={focusRefXS}
              data-cy="exit_calenary"
            >
              <Exit />
            </div>
            <Divider orientation="vertical" className={classes.divider} />
            <div className={classes.xsTextArea}>
              <TypographyCo
                data-cy="bookingCalendar-label"
                variant="caption"
                variantMapping={{ caption: "p" }}
              >
                {label}
              </TypographyCo>
              <TypographyCo
                data-cy="bookingCalendar-xsText"
                variant="body1"
                className={xsTextClass}
              >
                {xsText}
              </TypographyCo>
            </div>
          </div>
        )}

        {/* The calendar */}
        {typeIndex === 0 && (
          <DayPickerRangeController
            startDate={startDateState}
            endDate={endDateState}
            onDatesChange={onDatesChange}
            onFocusChange={onFocusChange}
            focusedInput={focusedInputState}
            {...generalProps}
          />
        )}
        {typeIndex !== 0 && (
          <DayPickerRangeController
            startDate={startDateState}
            onDatesChange={onDateChange}
            onFocusChange={onFocusChange}
            focusedInput={focusedInputState}
            {...generalProps}
          />
        )}

        {/* The extra content */}
        <div className={classes.finalCheckPosition}>
          {selectedClass && (
            <div className={classes.finalCheck}>
              {isFlexibleSearch && (
                <div className={classes.flexibleDates}>
                  <CheckboxCo
                    id="flexible-dates"
                    aria-label={flexibleDatesWCAG}
                    checked={flexibleDates}
                    inputProps={{
                      "data-cy": "bookingCalendar-flexible-dates-checkbox",
                    }}
                    onClick={() => setFlexibleDates(!flexibleDates)}
                  />
                  <TypographyCo
                    data-cy="bookingCalendar-customLabel"
                    variant="body2"
                    className={classes.customLabel}
                    variantMapping={{ body2: "span" }}
                  >
                    {flexibleDatesText}
                  </TypographyCo>
                </div>
              )}
              <div className={classes.confirmButton}>
                <ButtonCo
                  variant="contained"
                  color="secondary"
                  size="large"
                  data-cy="bookingCalendar-confirmButtonInner"
                  className={classes.confirmButtonInner}
                  aria-label={confirmWCAG}
                  onClick={confirm}
                  onKeyDown={(e) => confirmKey(e, confirm)}
                >
                  {confirmText}
                </ButtonCo>
              </div>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  )
}

BookingCalendar.propTypes = {
  /** Start date function */
  setStartDate: PropTypes.func.isRequired,
  /** End date function */
  setEndDate: PropTypes.func.isRequired,
  /** Start date state */
  startDateState: PropTypes.instanceOf(moment),
  /** End date state */
  endDateState: PropTypes.instanceOf(moment),
  /** Set the value to display in the input */
  setCalendarValue: PropTypes.func.isRequired,
  /** Value displayed in the input */
  calendarValue: PropTypes.string,
  /** Placeholder to display on XS */
  placeholder: PropTypes.string.isRequired,
  /** Label to display on XS */
  label: PropTypes.string.isRequired,
  /** Type of tab */
  typeIndex: PropTypes.oneOf([0, 1, 2]).isRequired,
  /** Function to close the calendar */
  closeCalendar: PropTypes.func.isRequired,
  calendarActive: PropTypes.bool.isRequired,
  flexibleDates: PropTypes.bool,
  setFlexibleDates: PropTypes.func,
  lang: PropTypes.string,
  prevDate: PropTypes.string,
  isFlexibleSearch: PropTypes.bool.isRequired,
}

BookingCalendar.defaultProps = {
  startDateState: null,
  endDateState: null,
  calendarValue: undefined,
  flexibleDates: false,
  setFlexibleDates: null,
  prevDate: "",
}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(BookingCalendar);
