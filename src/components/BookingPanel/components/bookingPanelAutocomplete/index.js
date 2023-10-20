import React from "react"
import PropTypes from "prop-types"
import CircularProgress from "@material-ui/core/CircularProgress"

import useStyles from "./styles"
import AutocompleteCo from "../../ui/Autocomplete/autocompleteCo"
import ButtonCo from "../../ui/button/buttonCo"
import { ReactComponent as ErrorIcon } from "../../assets/icons/Info-Outline.svg"
import { ReactComponent as WarningIcon } from "../../assets/icons/Warning-Outline.svg"

import bookingPanel from "../../../../data/BookingPanel";

const Loading = ({
  error,
  errorloadinglabel,
  errorloadingaction,
  handlereload,
  idiomasReducer,
}) => {
  const classes = useStyles()
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];

  return (
    <>
      {!error ? (
        <div className={classes.loadingContainer}>
          <CircularProgress className={classes.circularIcon} size={24} />
        </div>
      ) : (
        <div
          aria-label={translations.accesibility.airportLoadingFail}
          className={classes.errorMessageContainer}
          tabIndex="-1"
          role="contentinfo"
        >
          <WarningIcon className={classes.errorLoadIcon} />
          <div className={classes.errorContainer}>
            <span className={classes.errorMessageText}>
              {errorloadinglabel}
            </span>
            <ButtonCo
              onClick={handlereload}
              variant="link"
              color="primary"
              size="small"
              aria-label={translations.accesibility.airportLoadingFailButton}
              className={classes.retryMessage}
            >
              {errorloadingaction}
            </ButtonCo>
          </div>
        </div>
      )}
    </>
  )
}

const NoOptions = ({ errorlabel, errormessage }) => {
  const classes = useStyles()

  return (
    <>
      <ErrorIcon className={classes.errorIcon} />
      <div className={classes.errorContainer}>
        <span className={classes.errorLabel}>{errorlabel}</span>
        <span className={classes.errorMessage}>{errormessage}</span>
      </div>
    </>
  )
}

const BookingPanelAutocomplete = ({
  loading,
  error,
  handlereload,
  ...props
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <AutocompleteCo
        {...props}
        fullWidth
        loading={loading}
        loadingText={
          <Loading {...props} error={error} handlereload={handlereload} />
        }
        noOptionsText={
          error ? (
            <Loading {...props} error={error} handlereload={handlereload} />
          ) : (
            <NoOptions {...props} />
          )
        }
        classes={{
          paper: classes.paper,
          option: classes.option,
          popper: classes.popper,
          noOptions: classes.noOptions,
          loading: classes.noOptions,
        }}
      />
    </div>
  )
}

BookingPanelAutocomplete.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  handlereload: PropTypes.func,
}

BookingPanelAutocomplete.defaultProps = {
  error: false,
  loading: false,
  handlereload: null,
}

Loading.propTypes = {
  error: PropTypes.bool,
  errorloadinglabel: PropTypes.string,
  errorloadingaction: PropTypes.string,
  handlereload: PropTypes.func,
}

Loading.defaultProps = {
  error: false,
  errorloadinglabel: "",
  errorloadingaction: "",
  handlereload: null,
}

NoOptions.propTypes = {
  errorlabel: PropTypes.string,
  errormessage: PropTypes.string,
}

NoOptions.defaultProps = {
  errorlabel: "",
  errormessage: "",
}

export default BookingPanelAutocomplete
