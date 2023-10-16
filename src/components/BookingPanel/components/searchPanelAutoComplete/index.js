import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { isEmpty } from 'lodash';
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { matchSorter } from "match-sorter";
import { Grid, Hidden, InputAdornment } from '@material-ui/core';

import useStyles from './styles';
import theme from '../../theme/index';
import InputCoBooking from '../inputCoBooking';
import BookingPanelAutocomplete from '../bookingPanelAutocomplete';
import ButtonCo from '../../ui/button/buttonCo';
import { ReactComponent as SwapIcon } from '../../assets/icons/Swap-Horizontal.svg';
import { ReactComponent as UpPlane } from '../../assets/icons/UpPlane.svg';
import { ReactComponent as Clear } from "../../assets/icons/Cross.svg";

import bookingPanel from '../../../../data/BookingPanel';
import airportList from '../../../../data/AirportsList';

const SearchPanelAutoComplete = ({
  onOriginChange,
  onDestinationChange,
  onOriginTouched,
  onDestinationTouched,
  loading,
  errorOrigin,
  errorDestination,
  sendButtonPressed,
  getOriginAirports,
  // getDestinationAirports,
  // originAirports,
  id,
  originOptions,
  destinationOptions,
  origin,
  destination,
  setDestinationOptions,
  handleOriginAirportChanges,
  handleDestinationAirportChanges,
  // destinationAirports,
  handleOriginClear,
  errorOriginField,
  errorDestinationField,
  touchedOrigin,
  touchedDestination,
  originFieldValue,
  destinationFieldValue,
  setSwap,
  handleSwapChanges,
  isStopover,
  originDisabledStopover,
  destinationDisabledStopover,
  disableStopoversegment,
  newFieldAdded,
  idiomasReducer,
}) => {
  const classes = useStyles();
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];
  const airportData = airportList[currentLanguage];

  // Airport Data
  const originAirports = airportData.airportOrigin;
  const initialDestinationAirports = [
    { id: 0, destinations: [] },
    { id: 1, destinations: [] },
    { id: 2, destinations: [] },
    { id: 3, destinations: [] },
    { id: 4, destinations: [] },
  ]
  const [destinationAirports, setDestinationAirports] = useState(initialDestinationAirports);

  const [noOptions, setNoOptions] = useState({
    origin: false,
    destination: false,
  });
  const [open, setOpen] = useState({
    origin: false,
    destination: false,
  });
  const [inputValOrigin, setInputValueOrigin] = useState('');
  const [inputValDestination, setInputValueDestination] = useState('');
  const [originalFocus, setOriginalFocus] = useState('');
  const [destinationFocus, setDestinationFocus] = useState('');
  const [swapColor, setSwapColor] = useState(false);
  const [swapClicked, setSwapClick] = useState(false);
  const swapRef = useRef();
  const [showButton, setShowButton] = useState({
    planeButton: true,
    swapButton: true,
  });
  const [noOriginError, setNoOriginError] = useState({
    error: false,
    helperText: "",
  });
  const [prevOrigin, setPrevOrigin] = useState();


  const originRef = useRef();
  const destinationRef = useRef()

  let firstValue = {}

  const getDestinationAirports = (origin, id) => {
    // console.log({ origin });
    // console.log({ id });
    // console.log({ originAirports });
    // destinationAirports[id].destinations.push(...originAirports)
    // destinationAirports.push({ destinations: [...originAirports]});
    const originSelectedIndex = originAirports.findIndex((item) => item.code === origin);
    // originAirports.splice(originSelectedIndex, 1);
    const availableAirports = [
      ...originAirports.slice(0, originSelectedIndex),
      ...originAirports.slice(originSelectedIndex + 1)
    ] 
    // console.log({ filteredDestinations })
    const modifiedDestinationAirports = destinationAirports;
    modifiedDestinationAirports[id].destinations = availableAirports;
    // console.log({ modifiedDestinationAirports })
    setDestinationAirports([
      ...modifiedDestinationAirports,
    ])
    // destinationAirports[id].destinations.splice(value, 1);
    // console.log({ destinationAirports });
  }

  const handleOriginOptionsChanges = () => {
    if (originAirports.length > 0) {
      handleOriginAirportChanges(id, originAirports)
      if (originFieldValue) {
        const initialOrigin = originAirports.find(
          (option) => option.code === originFieldValue
        )
        onOriginChange(id, initialOrigin)
      }
    }
  }
  useEffect(handleOriginOptionsChanges, [originAirports])

  const handleOriginOptionsChange = () => {
    if (originOptions && newFieldAdded && !isStopover) {
      originRef.current.focus()
    }
  }

  useEffect(handleOriginOptionsChange, [originOptions])

  const handleOriginValuesChange = () => {
    if (originFieldValue === "") {
      onOriginChange(id, {})
    }
    if (isStopover) {
      if (originFieldValue) {
        const initialOrigin = originAirports.find(
          (option) => option.code === originFieldValue
        )
        onOriginChange(id, initialOrigin)
      }
    }
  }

  useEffect(handleOriginValuesChange, [originFieldValue])

  const handleDestinationValuesChange = () => {
    if (!destinationFieldValue) {
      onDestinationChange(id, {})
    }
    if (isStopover) {
      if (destinationFieldValue) {
        const initialDestination = originAirports.find(
          (option) => option.code === destinationFieldValue
        )
        onDestinationChange(id, initialDestination)
      }
    }
  }

  useEffect(handleDestinationValuesChange, [destinationFieldValue])

  const handleOriginStatusChanges = () => {
    if (origin?.code) {
      getDestinationAirports(origin.code, id)
      setPrevOrigin(origin.code)
    }
  }
  useEffect(handleOriginStatusChanges, [origin])

  const handlePrevOriginChange = () => {
    // console.log('handlePrevOriginChange destinationAirports', destinationAirports)
    if (prevOrigin && prevOrigin === origin?.code) {
      if (origin?.code && !destinationFieldValue && !isStopover) {
        destinationRef.current.focus()
      }
      setDestinationOptions(id, destinationAirports)
    }
  }
  useEffect(handlePrevOriginChange, [prevOrigin])

  const setAirportsDestination = () => {
    if (destinationAirports.length > 0) {
      if (destinationAirports[id].destinations.length > 0) {
        handleDestinationAirportChanges(id, destinationAirports)
        if (destinationFieldValue && !isStopover) {
          const initialDestination = destinationAirports[id].destinations.find(
            (option) => option.code === destinationFieldValue
          )
          onDestinationChange(id, initialDestination)
        }
      }
    }
  }
  useEffect(setAirportsDestination, [destinationAirports])

  const handleDestinationAirports = () => {
    if (destinationAirports.length > 0) {
      if (destinationAirports[id].destinations.length > 0) {
        if (origin?.code) {
          if (swapClicked) {
            if (swapRef.current) {
              swapRef.current.focus();
            }
            setSwapClick(false)
          } else if (!isStopover) {
            destinationRef.current.focus();
          }
        }
      }
    }
  }
  useEffect(handleDestinationAirports, [destinationOptions])

  const handleSendButton = () => {
    if ((errorOriginField || errorDestination) && sendButtonPressed) {
      originRef.current.focus()
    }
  }
  useEffect(handleSendButton, [sendButtonPressed])

  const handleRetryOrigin = () => {
    // getOriginAirports(id)
    console.log('handleRetryOrigin triggered');
  }

  const handleRetryDestination = () => {
    if (origin?.code) {
      // getDestinationAirports(origin.code, id)
      console.log('handleRetryDestination triggered')
    }
  }

  const handleOriginChange = (event, newValue) => {
    onOriginChange(id, newValue)
    setShowButton({ ...showButton, planeButton: true })
    setNoOptions({ ...noOptions, origin: false })
    if (newValue === null && !isStopover) {
      handleOriginClear(id, [])
      onDestinationChange(id, {})
    }
  }

  const handleOriginBlur = (event) => {
    onOriginTouched(id)
    setOpen({ ...open, origin: false })
    if (!origin?.code) {
      handleOriginChange(event, {})
      if (event.target.value.length > 3 && !origin?.code) {
        setNoOptions({ ...noOptions, origin: true })
      } else {
        setNoOptions({ ...noOptions, origin: false })
      }
    }
  }

  const handleDestinationChange = (event, newValue) => {
    onDestinationChange(id, newValue)
    setShowButton({ ...showButton, swapButton: true })
    setNoOptions({ ...noOptions, destination: false })
  }

  const handleDestinationBlur = (event) => {
    onDestinationTouched(id)
    setOpen({ ...open, destination: false })
    if (!destination?.code) {
      handleDestinationChange(event, {})
      if (event.target.value.length > 3 && !destination?.code) {
        setNoOptions({ ...noOptions, destination: true })
      } else {
        setNoOptions({ ...noOptions, destination: false })
      }
    }
  }

  const handleOpen = (event, prop, button) => {
    event.preventDefault()
    if (event.currentTarget.value.length > 0) {
      if (prop === "destination" && noOriginError.error) {
        setOpen({ ...open, [prop]: false })
        setShowButton({ ...showButton, [button]: true })
        setDestinationFocus(event.currentTarget.value)
      } else {
        setOpen({ ...open, [prop]: true })
        setShowButton({ ...showButton, [button]: false })
        setOriginalFocus(event.currentTarget.value)
      }
    }
  }

  const handleClose = (event, prop) => {
    event.preventDefault()
    if (errorOrigin || errorDestination) {
      setOpen({ ...open, [prop]: true })
    } else {
      setOpen({ ...open, [prop]: false })
    }
  }

  const handleSwap = () => {
    handleSwapChanges(id)
    setSwapColor(!swapColor)
    setSwapClick(true)
    setSwap(true)
  }

  const handleClearOrigin = () => {
    setInputValueOrigin("")
    onOriginChange(id, {})
    handleOriginClear(id)
    if (!isStopover) {
      setInputValueDestination("")
      onDestinationChange(id, {})
    }
  }

  const handleDestinationClear = () => {
    setInputValueDestination("")
    onDestinationChange(id, {})
  }

  const handleOriginHelperText = () => {
    let helperText = ""
    if (noOptions.origin) {
      helperText = translations.noResultsHelperTextOrigin
    } else if (touchedOrigin && errorOriginField) {
      helperText = errorOriginField
    }
    return helperText
  }

  const originError = handleOriginHelperText()

  const handleDestinationHelperText = () => {
    let helperText = ""
    if (noOptions.destination) {
      helperText = translations.noResultsHelperTextDestination;
    } else if (!origin?.code && touchedDestination) {
      helperText = translations.emptyOriginWhenDestination;
    } else if (touchedDestination && errorDestinationField) {
      helperText = errorDestinationField
    }
    return helperText
  }

  const handleDestinationOnFocus = () => {
    if (!origin?.code) {
      setNoOriginError({
        ...noOriginError,
        error: true,
        helperText: translations.emptyOriginWhenDestination,
      })
    } else {
      setNoOriginError({ ...noOriginError, error: false, helperText: "" })
    }
  }

  const destinationError =
    noOriginError.helperText || handleDestinationHelperText()

  const handleIconClick = () => {
    originRef.current.focus()
  }

  const handleOriginKeyDown = (event) => {
    const charCode = event.keyCode
    if (
      charCode === 9 &&
      !isEmpty(firstValue) &&
      originalFocus !== inputValOrigin
    ) {
      handleOriginChange(event, firstValue)
    }
  }

  const handleDestinationKeyDown = (event) => {
    const charCode = event.keyCode
    if (
      charCode === 9 &&
      !isEmpty(firstValue) &&
      destinationFocus !== inputValDestination
    ) {
      handleDestinationChange(event, firstValue)
    }
  }

  const matchSorterAcrossKeys = (list, search, options) => {
    const joinedKeysString = (item) =>
      options.keys.map((key) => item[key]).join(" ")
    return matchSorter(list, search, {
      ...options,
      keys: [...options.keys, joinedKeysString],
    })
  }

  const filterOptions = (options, { inputValue }) => {
    const regExp = new RegExp(/\(([^)]+)\)/)
    const newVal = regExp.exec(inputValue)

    let newInput = inputValue

    if (newVal && newVal[1]) {
      // The newVal expresion returns an array that contains on its second position `newVal[1]` the value without parenthesis.
      // This will be use to match the code in case the users types something like Panama (PTY)
      // The newInput will be PTY which matches the code
      const codeVal = newVal[1]
      newInput = codeVal
    }

    const filterValues = matchSorterAcrossKeys(options, newInput, {
      keys: ["code", "city", "name", "country", "thesaurus"],
    })
    const firstVal = filterValues[0]
    firstValue = firstVal

    return filterValues
  }

  const renderOptions = (option, { inputValue }) => {
    const matches = match(option.city, inputValue)
    const matchesCode = match(option.code, inputValue)
    const cityParts = parse(option.city, matches)
    const codeParts = parse(option.code, matchesCode)

    return (
      <div
        data-cy="searchPanelAutocomplete"
        className={classes.searchContainer}
        role="option"
        aria-selected="true"
      >
        <div
          data-cy="searchPanelAutocomplete-textContainer"
          className={classes.textContainer}
        >
          <div>
            {cityParts.map((part) => (
              <span
                key={part.text}
                data-cy={`searchPanelAutocomplete-cityParts${part.text}`}
                style={{
                  color: part.highlight
                    ? theme.palette.primary.light
                    : theme.palette.grey[700],
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {part.text}
              </span>
            ))}
          </div>
          <span
            data-cy="searchPanelAutocomplete-airportsName"
            className={classes.airports}
          >
            {option.name}
          </span>
        </div>
        <div className={classes.codeContainer}>
          {codeParts.map((part) => (
            <span
              key={part.text}
              data-cy={`searchPanelAutocomplete-codeParts${part.text}`}
              className={classes.code}
              style={{
                color: part.highlight
                  ? theme.palette.primary.light
                  : theme.palette.primary.dark,
              }}
            >
              {part.text}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const ListComponent = React.forwardRef((listProps, ref) => {
    return (
      <div
        className={classes.listComponent}
        role="listbox"
        ref={ref}
        {...listProps}
      />
    )
  })

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item xs={12} sm={6} md={5} lg={6} className={classes.container}>
        <Hidden only="xs">
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            xs={2}
            onClick={handleIconClick}
            className={classes.planeContianer}
          >
            <UpPlane className={classes.upPlaneIcon} />
          </Grid>
        </Hidden>
        <Hidden smUp>
          {showButton.planeButton && (
            <Grid
              item
              lg={2}
              md={2}
              sm={2}
              xs={2}
              onClick={handleIconClick}
              className={classes.planeContianer}
            >
              <UpPlane className={classes.upPlaneIcon} />
            </Grid>
          )}
        </Hidden>
        <Grid
          item
          lg={9}
          md={10}
          sm={10}
          xs={showButton.swapButton ? 10 : 12}
          data-cy="searchPanelAutocomplete-originContainer"
          className={classes.originContainer}
        >
          <div className={classes.autocompleteContainer}>
            <BookingPanelAutocomplete
              id={`origin-autocomplete-${id}`}
              data-cy="origin-autocomplete"
              options={originOptions || []}
              clearOnBlur={false}
              open={open.origin || (errorOrigin && originOptions?.length === 0)}
              ListboxComponent={ListComponent}
              disablePortal
              autoHighlight
              disabled={originDisabledStopover || disableStopoversegment}
              onKeyDown={handleOriginKeyDown}
              inputValue={inputValOrigin}
              forcePopupIcon={false}
              loading={loading}
              error={errorOrigin}
              onInputChange={(event, newInputValue) =>
                setInputValueOrigin(newInputValue)
              }
              value={origin?.code ? origin : null}
              getOptionLabel={(option) => `${option.city} (${option.code})`}
              getOptionSelected={(option, val) => option.code === val.code}
              onOpen={(event) => handleOpen(event, "origin", "planeButton")}
              onClose={(event) => handleClose(event, "origin")}
              onBlur={handleOriginBlur}
              onChange={handleOriginChange}
              errorlabel={translations.noResultsAutocomplete}
              errormessage={translations.noResultsAutocompleteHelperText}
              errorloadinglabel={translations.airportListFail}
              errorloadingaction={translations.retryButton}
              handlereload={handleRetryOrigin}
              filterOptions={filterOptions}
              renderOption={renderOptions}
              renderInput={(params) => (
                <InputCoBooking
                  {...params}
                  name={`origin-${id}`}
                  inputRef={originRef}
                  placeholder={translations.originPlaceholder}
                  alternativePlaceholder={translations.originFocusPlaceholder}
                  aria-label={
                    errorOrigin
                      ? translations.accesibility.airportLoadingFail
                      : translations.accesibility.originField
                  }
                  id={`origin-input-${id}`}
                  label={translations.originTitle}
                  hasErrors={
                    noOptions.origin ||
                    (touchedOrigin && !isEmpty(errorOriginField))
                  }
                  helperText={originError}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: inputValOrigin.length > 0 && (
                      <InputAdornment
                        position="end"
                        className={classes.clearContainer}
                        onClick={handleClearOrigin}
                      >
                        <Clear className={classes.clearButton} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={6} className={classes.container}>
        <Hidden only="xs">
          <Grid
            item
            md={3}
            sm={2}
            xs={2}
            lg={2}
            data-cy="searchPanelAutocomplete-handleSwapContainer"
            className={classes.swapButtonContainer}
          >
            <ButtonCo
              className={classes.swapButton}
              variant="linkInverted"
              size="medium"
              color="primary"
              onClick={handleSwap}
              data-cy="searchPanelAutocomplete-swapButton"
              aria-label={translations.accesibility.swapButton({
                origin: origin ? origin.city : '',
                destination: destination ? destination.city : '',
              })}
              disabled={isStopover}
            >
              <SwapIcon
                className={clsx(
                  classes.swapIcon,
                  swapColor && classes.swapedIcon
                )}
              />
            </ButtonCo>
          </Grid>
        </Hidden>
        <Hidden smUp>
          {showButton.swapButton && (
            <Grid
              item
              md={3}
              sm={2}
              xs={2}
              lg={2}
              data-cy="searchPanelAutocomplete-swapButtonContainer"
              className={classes.swapButtonContainer}
            >
              <ButtonCo
                className={classes.swapButton}
                variant="linkInverted"
                size="medium"
                color="primary"
                onClick={handleSwap}
                data-cy="searchPanelAutocomplete-handleSwap"
                ref={swapRef}
                aria-label={translations.accesibility.swapButton({
                  origin: origin ? origin.city : "",
                  destination: destination ? destination.city : "",
                })}
              >
                <SwapIcon
                  className={clsx(
                    classes.swapIcon,
                    swapColor && classes.swapedIcon
                  )}
                />
              </ButtonCo>
            </Grid>
          )}
        </Hidden>
        <Grid
          item
          lg={9}
          md={7}
          sm={10}
          xs={showButton.planeButton ? 10 : 12}
          data-cy="searchPanelAutocomplete-destinationContianer"
          className={classes.destinationContianer}
        >
          <div className={classes.autocompleteContainer}>
            <BookingPanelAutocomplete
              id={`destination-autocomplete-${id}`}
              data-cy="searchPanelAutocomplete-destination-autocomplete"
              options={destinationOptions}
              clearOnBlur={origin?.code && false}
              ListboxComponent={ListComponent}
              disablePortal
              autoHighlight
              disabled={destinationDisabledStopover || disableStopoversegment}
              onKeyDown={handleDestinationKeyDown}
              loading={loading}
              error={errorDestination}
              inputValue={inputValDestination}
              forcePopupIcon={false}
              onFocus={handleDestinationOnFocus}
              onInputChange={(event, newInputValue) =>
                setInputValueDestination(newInputValue)
              }
              value={destination?.code ? destination : null}
              getOptionLabel={(option) => `${option.city} (${option.code})`}
              getOptionSelected={(option, val) => option.code === val.code}
              open={
                open.destination ||
                (errorDestination && destinationOptions.length === 0)
              }
              onOpen={(event) => handleOpen(event, "destination", "swapButton")}
              onClose={(event) => handleClose(event, "destination")}
              onBlur={handleDestinationBlur}
              onChange={handleDestinationChange}
              errorlabel={translations.noResultsAutocomplete}
              errormessage={translations.noResultsAutocompleteHelperText}
              errorloadinglabel={translations.airportListFail}
              errorloadingaction={translations.retryButton}
              handlereload={handleRetryDestination}
              filterOptions={filterOptions}
              renderOption={renderOptions}
              renderInput={(params) => (
                <InputCoBooking
                  {...params}
                  name={`destination-${id}`}
                  inputRef={destinationRef}
                  placeholder={translations.destinationPlaceholder}
                  alternativePlaceholder={translations.destinationFocusPlaceholder}
                  aria-label={
                    errorDestination
                      ? translations.accesibility.airportLoadingFail
                      : translations.accesibility.destinationField
                  }
                  id={`destination-input-${id}`}
                  label={translations.destinationTitle}
                  hasErrors={
                    noOptions.destination ||
                    (touchedDestination && !isEmpty(errorDestinationField)) ||
                    noOriginError.error
                  }
                  helperText={destinationError}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: inputValDestination.length > 0 && (
                      <InputAdornment
                        position="end"
                        className={classes.clearContainer}
                        onClick={handleDestinationClear}
                      >
                        <Clear className={classes.clearButton} />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

SearchPanelAutoComplete.propTypes = {
  // getOriginAirports: PropTypes.func.isRequired,
  originAirports: PropTypes.arrayOf(PropTypes.shape([])),
  // getDestinationAirports: PropTypes.func.isRequired,
  destinationAirports: PropTypes.arrayOf(PropTypes.shape([])),
  onOriginChange: PropTypes.func,
  onDestinationChange: PropTypes.func,
  onOriginTouched: PropTypes.func,
  onDestinationTouched: PropTypes.func,
  loading: PropTypes.bool,
  errorOrigin: PropTypes.bool,
  errorDestination: PropTypes.bool,
  sendButtonPressed: PropTypes.bool,
  id: PropTypes.number,
  originOptions: PropTypes.arrayOf(PropTypes.shape([])),
  destinationOptions: PropTypes.arrayOf(PropTypes.shape([])),
  origin: PropTypes.shape({ code: PropTypes.string, city: PropTypes.string }),
  destination: PropTypes.shape({
    code: PropTypes.string,
    city: PropTypes.string,
  }),
  setDestinationOptions: PropTypes.func,
  handleOriginAirportChanges: PropTypes.func,
  handleDestinationAirportChanges: PropTypes.func,
  airports: PropTypes.PropTypes.arrayOf(PropTypes.shape([])),
  handleOriginClear: PropTypes.func,
  errorOriginField: PropTypes.string,
  errorDestinationField: PropTypes.string,
  touchedOrigin: PropTypes.bool,
  touchedDestination: PropTypes.bool,
  originFieldValue: PropTypes.string,
  destinationFieldValue: PropTypes.string,
  setSwap: PropTypes.func.isRequired,
  handleSwapChanges: PropTypes.func,
  isStopover: PropTypes.bool,
  originDisabledStopover: PropTypes.bool,
  destinationDisabledStopover: PropTypes.bool,
  disableStopoversegment: PropTypes.bool,
  newFieldAdded: PropTypes.bool,
}

SearchPanelAutoComplete.defaultProps = {
  originAirports: [],
  destinationAirports: [],
  onOriginChange: null,
  onDestinationChange: null,
  onOriginTouched: null,
  onDestinationTouched: null,
  loading: false,
  errorOrigin: false,
  errorDestination: false,
  sendButtonPressed: false,
  id: 0,
  originOptions: [],
  destinationOptions: [],
  origin: {},
  destination: {},
  setDestinationOptions: null,
  handleOriginAirportChanges: null,
  handleDestinationAirportChanges: null,
  airports: [],
  handleOriginClear: null,
  errorOriginField: "",
  errorDestinationField: "",
  touchedOrigin: false,
  touchedDestination: false,
  originFieldValue: "",
  destinationFieldValue: "",
  handleSwapChanges: null,
  isStopover: false,
  originDisabledStopover: false,
  destinationDisabledStopover: false,
  disableStopoversegment: false,
  newFieldAdded: false,
}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(SearchPanelAutoComplete);
