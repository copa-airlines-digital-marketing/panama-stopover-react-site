import React, { useState, useEffect, useRef } from "react"
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withLocalize } from 'react-localize-redux';
import PropTypes from "prop-types"
import clsx from "clsx"

// @Material-ui
import { Grid, Hidden, SvgIcon } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment"
import useMediaQuery from "@material-ui/core/useMediaQuery"

// @components
import InputCoBooking from "../inputCoBooking"
import StepperCo from "../../ui/stepper/stepperCo"
import TypographyCo from "../../ui/typography/typographyCo"
import DividerCo from "../../ui/divider/dividerCo"
import ButtonCo from "../../ui/button/buttonCo"

// @icons
import { ReactComponent as PassengerIcon } from "../../assets/icons/passenger.svg"
import { ReactComponent as CarrotDown } from "../../assets/icons/Carrot-Down.svg"

import bookingPanel from '../../../../data/BookingPanel';

import {
  useStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./styles"

const bookingPassenger = (id, translation) => translation.bookingPassenger[id];
const bookingPassengerWCAG = (id, translation, params) => {
  const value = translation.accesibility.bookingPassenger[id];
  return params ? value(params) : value;
};

const SearchPanelPassenger = ({
  idiomasReducer,
  adult,
  child,
  infant,
  onChange
}) => {
  const classes = useStyles()
  const { currentLanguage } = idiomasReducer;
  const translations = bookingPanel[currentLanguage];
  const [isComponentVisible, setIsComponentVisible] = useState()
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const isMedium = useMediaQuery((theme) => theme.breakpoints.only("md"))

  const [passengerValue, setPassengerValue] = useState()

  const [stepAdult, setStepAdult] = useState(adult)
  const [stepChild, setStepChild] = useState(child)
  const [stepInfant, setStepInfant] = useState(infant)

  const [minAdult, setMinAdult] = useState(1)

  const [maxStepAdult, setMaxStepAdult] = useState(8)
  const [maxStepChild, setMaxStepChild] = useState(7)
  const [maxStepInfant, setMaxStepInfant] = useState(4)

  const [errorMin1Adult, setErrorMin1Adult] = useState(false)
  const [errorInfant, setErrorInfant] = useState(false)
  const [errorMaxPass, setErrorMaxPass] = useState(false)

  const [sumElemnts, setSumElements] = useState()
  const [substantiveAdult, setSubstantiveAdult] = useState()
  const [substantiveChild, setSubstantiveChild] = useState()
  const [substantiveInfant, setSubstantiveInfant] = useState()

  const [showButton, setShowButton] = useState(true)

  const carrotDown = () => (
    <InputAdornment position="end" className={classes.containerIcon}>
      <SvgIcon
        className={clsx(classes.downIcon, "carrotDown")}
        component={CarrotDown}
      />
    </InputAdornment>
  )

  const wcagTextAdult =
    minAdult === stepAdult
      ? bookingPassenger('errorChild', translations)
      : bookingPassengerWCAG('decrementBtn', translations, {
        type: bookingPassenger('adults', translations),
        num: stepAdult,
        name: substantiveAdult,
      });
  const wcagTextInfant =
    stepInfant === maxStepInfant
      ? bookingPassenger('errorChild', translations)
      : bookingPassengerWCAG('incrementBtn', translations, {
        type: bookingPassenger('infants', translations),
        num: stepInfant,
        name: substantiveInfant,
      });

  const handleTraductions = () => {
    setSubstantiveAdult(
      stepAdult === 1
        ? ` ${ bookingPassenger('adult', translations) }`
        : ` ${ bookingPassenger('adults', translations) }`
    )
    if (isMedium) {
      setSubstantiveChild(` ${ bookingPassenger('childMd', translations) }`)
      setSubstantiveInfant(` ${ bookingPassenger('infantMd', translations) }`)
    } else {
      setSubstantiveChild(
        stepChild === 1
          ? ` ${ bookingPassenger('child', translations) }`
          : ` ${ bookingPassenger('children', translations) }`
      )
      setSubstantiveInfant(
        stepInfant === 1
          ? ` ${ bookingPassenger('infant', translations) }`
          : ` ${ bookingPassenger('infants', translations) }`
      )
    }
    setPassengerValue(
      `${stepAdult}${substantiveAdult}${
        stepChild < 1 ? "" : `, ${stepChild}${substantiveChild}`
      }${stepInfant < 1 ? "" : `, ${stepInfant}${substantiveInfant}`}`
    )
  }

  const handleValidations = () => {
    setSumElements(stepAdult + stepChild + stepInfant)
    setMinAdult(stepInfant >= 1 ? stepInfant : 1)
    if (sumElemnts === 8) {
      setMaxStepAdult(stepAdult)
      setMaxStepChild(stepChild)
      setMaxStepInfant(stepInfant)
    } else {
      setMaxStepAdult(8)
      setMaxStepChild(7)
      setMaxStepInfant(stepAdult)
      setErrorMaxPass(false)
    }
  }

  const handlePassengerValue = () => {
    if (passengerValue) {
      const data = {
        adults: stepAdult,
        children: stepChild,
        infants: stepInfant,
      }
      onChange(data)
    }
  }

  useEffect(handlePassengerValue, [passengerValue])

  const handleClickOutside = (event) => {
    setIsComponentVisible(!(ref.current && !ref.current.contains(event.target)))
  }

  const validateClickOutside = () => {
    if (!isComponentVisible) {
      setExpanded(false)
      setShowButton(true)
    }
    document.addEventListener("click", handleClickOutside, true)
  }

  const handleChangeAdult = (event) => {
    setStepAdult(event)
  }

  const handleChangeChild = (event) => {
    setStepChild(event)
  }
  const handleChangeInfant = (event) => {
    setStepInfant(event)
  }

  const handleErrorChange = (element, id) => {
    const errorInfante =
      element === "incrementStep" && id === "stepper-infant" && sumElemnts <= 7
    const errorAdult =
      element === "decrementStep" && id === "stepper-adult" && stepAdult > 1
    setErrorMin1Adult(
      !!(
        element === "decrementStep" &&
        id === "stepper-adult" &&
        stepAdult === 1
      )
    )
    setErrorInfant(!!(errorInfante || errorAdult))
    setErrorMaxPass(!!(sumElemnts === 8 && element === "incrementStep"))
  }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
    setIsComponentVisible(newExpanded)
    setShowButton(false)
  }

  useEffect(() => {
    handleValidations()
    handleTraductions()
    validateClickOutside()
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

  const handleIconClick = () => {
    setExpanded("panel1")
    setIsComponentVisible(true)
    setShowButton(false)
  }

  const handleKeyDown = (event) => {
    if (event.shiftKey && event.keyCode === 9) {
      setIsComponentVisible(false)
      setShowButton(true)
    }
  }

  return (
    <Grid
      data-cy="searchPanelPassenger-container"
      container
      alignItems="center"
      className={classes.root}
      aria-label={bookingPassengerWCAG('field', translations)}
    >
      <Hidden only="xs">
        <Grid
          item
          lg={2}
          md={2}
          sm={1}
          xs={2}
          data-cy="searchPanelPassenger-item"
          className={classes.iconContainer}
          onClick={handleIconClick}
        >
          <PassengerIcon className={classes.passengerIcon} />
        </Grid>
      </Hidden>
      <Hidden smUp>
        {showButton && (
          <Grid
            item
            lg={2}
            md={2}
            sm={1}
            xs={2}
            data-cy="searchPanelPassenger-item-showButton"
            className={classes.iconContainer}
            onClick={handleIconClick}
          >
            <PassengerIcon className={classes.passengerIcon} />
          </Grid>
        )}
      </Hidden>
      <Grid
        item
        lg={10}
        md={9}
        sm={11}
        xs={showButton ? 10 : 12}
        data-cy="searchPanelPassenger-item-inputContianer"
        className={classes.inputContianer}
      >
        <div className={classes.container}>
          <Accordion
            square
            data-cy="searchPanelPassenger-accordion"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            onKeyDown={handleKeyDown}
          >
            <AccordionSummary
              data-cy="searchPanelPassenger-accordionSummary"
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <InputCoBooking
                id="passenger"
                label={bookingPassenger('label', translations)}
                name="passenger"
                value={passengerValue}
                handleChange={(event) => setPassengerValue(event.target.value)}
                type="button"
                InputProps={{ endAdornment: carrotDown() }}
                onKeyDown={handleKeyDown}
              />
            </AccordionSummary>
            <AccordionDetails>
              <div
                data-cy="searchPanelPassenger-componentPassenger"
                className={classes.componentPassenger}
                ref={ref}
              >
                <div
                  data-cy="searchPanelPassenger-itemStepper"
                  className={classes.itemStepper}
                  aria-label={bookingPassengerWCAG('sectionAdult', translations)}
                >
                  <div className={classes.contentText}>
                    <TypographyCo
                      data-cy="searchPanelPassenger-textItem"
                      variant="body1"
                      className={classes.textItem}
                    >
                      {bookingPassenger('adults', translations)}
                    </TypographyCo>
                    <TypographyCo
                      data-cy="searchPanelPassenger-adultAge"
                      variant="caption"
                    >
                      {bookingPassenger('adultAge', translations)}
                    </TypographyCo>
                  </div>
                  <StepperCo
                    id="stepper-adult"
                    data-cy="searchPanelPassenger-stepper-adult"
                    initialValue={stepAdult}
                    maxValue={maxStepAdult}
                    minValue={minAdult}
                    onChange={handleChangeAdult}
                    handleError={handleErrorChange}
                    wcagObject={[
                      {
                        id: "decrementBtn",
                        message:
                          stepAdult === 1
                            ? bookingPassenger('errorAdult', translations)
                            : wcagTextAdult,
                      },
                      {
                        id: "labelAmount",
                        message: bookingPassengerWCAG('labelAmount', translations, {
                          num: stepAdult,
                          name: substantiveAdult,
                        }),
                      },
                      {
                        id: "incrementBtn",
                        message:
                          sumElemnts === 8
                            ? bookingPassenger('errorInfant', translations)
                            : bookingPassengerWCAG('incrementBtn', translations, {
                              type: bookingPassenger('adults', translations),
                              num: stepAdult,
                              name: substantiveAdult,
                            }),
                      },
                    ]}
                  />
                </div>
                <DividerCo />
                <div
                  data-cy="searchPanelPassenger-itemStepper-sectionChild"
                  className={classes.itemStepper}
                  aria-label={bookingPassengerWCAG('sectionChild', translations)}
                >
                  <div className={classes.contentText}>
                    <TypographyCo
                      data-cy="searchPanelPassenger-stepper-children"
                      variant="body1"
                      className={classes.textItem}
                    >
                      {bookingPassenger('children', translations)}
                    </TypographyCo>
                    <TypographyCo
                      data-cy="searchPanelPassenger-stepper-childAge"
                      variant="caption"
                    >
                      {bookingPassenger('childAge', translations)}
                    </TypographyCo>
                  </div>
                  <StepperCo
                    id="stepper-child"
                    data-cy="searchPanelPassenger-stepper-child"
                    initialValue={stepChild}
                    maxValue={maxStepChild}
                    onChange={handleChangeChild}
                    handleError={handleErrorChange}
                    wcagObject={[
                      {
                        id: "decrementBtn",
                        message: bookingPassengerWCAG('decrementBtn', translations, {
                          type: bookingPassenger('children', translations),
                          num: stepChild,
                          name: substantiveChild,
                        }),
                      },
                      {
                        id: "labelAmount",
                        message: bookingPassengerWCAG('labelAmount', translations, {
                          num: stepChild,
                          name: substantiveChild,
                        }),
                      },
                      {
                        id: "incrementBtn",
                        message:
                          sumElemnts === 8
                            ? bookingPassenger('errorInfant', translations)
                            : bookingPassengerWCAG('incrementBtn', translations, {
                              type: bookingPassenger('children', translations),
                              num: stepChild,
                              name: substantiveChild,
                            }),
                      },
                    ]}
                  />
                </div>
                <DividerCo />
                <div
                  data-cy="searchPanelPassenger-stepper-sectionInfant"
                  className={classes.itemStepper}
                  aria-label={bookingPassengerWCAG('sectionInfant', translations)}
                >
                  <div className={classes.contentText}>
                    <TypographyCo
                      data-cy="searchPanelPassenger-stepper-infants"
                      variant="body1"
                      className={classes.textItem}
                    >
                      {bookingPassenger('infants', translations)}
                    </TypographyCo>
                    <TypographyCo
                      data-cy="searchPanelPassenger-stepper-infantsAge"
                      variant="caption"
                    >
                      {bookingPassenger('infantsAge', translations)}
                    </TypographyCo>
                  </div>
                  <StepperCo
                    id="stepper-infant"
                    data-cy="searchPanelPassenger-stepper-infant"
                    initialValue={stepInfant}
                    maxValue={maxStepInfant}
                    onChange={handleChangeInfant}
                    handleError={handleErrorChange}
                    wcagObject={[
                      {
                        id: "decrementBtn",
                        message: bookingPassengerWCAG('decrementBtn', translations, {
                          type: bookingPassenger('infants', translations),
                          num: stepInfant,
                          name: substantiveInfant,
                        }),
                      },
                      {
                        id: "labelAmount",
                        message: bookingPassengerWCAG('labelAmount', translations, {
                          num: stepInfant,
                          name: substantiveInfant,
                        }),
                      },
                      {
                        id: "incrementBtn",
                        message:
                          sumElemnts === 8
                            ? bookingPassenger('errorInfant', translations)
                            : wcagTextInfant,
                      },
                    ]}
                  />
                </div>
                {(errorMin1Adult || errorInfant || errorMaxPass) && (
                  <div className={classes.errorContainer}>
                    <DividerCo />
                    {errorMin1Adult && (
                      <TypographyCo
                        data-cy="searchPanelPassenger-errorAdult"
                        variant="caption"
                        color="error"
                      >
                        {bookingPassenger('errorAdult', translations)}
                      </TypographyCo>
                    )}
                    {errorInfant && (
                      <TypographyCo
                        data-cy="searchPanelPassenger-errorChild"
                        variant="caption"
                        color="error"
                      >
                        {bookingPassenger('errorChild', translations)}
                      </TypographyCo>
                    )}
                    {errorMaxPass && (
                      <TypographyCo
                        data-cy="searchPanelPassenger-errorInfant"
                        variant="caption"
                        color="error"
                      >
                        {bookingPassenger('errorInfant', translations)}
                      </TypographyCo>
                    )}
                  </div>
                )}
                <Hidden only={["md", "xl", "lg", "sm"]}>
                  <div className={classes.containerBtn}>
                    <ButtonCo
                      variant="contained"
                      size="medium"
                      color="primary"
                      className={classes.saveBtn}
                      data-cy="searchPanelPassenger-buttonCo"
                      onClick={() => {
                        setIsComponentVisible(false)
                        setShowButton(true)
                      }}
                      aria-label={bookingPassengerWCAG('saveBtn', translations, {
                        numAdl: stepAdult,
                        textAdl: substantiveAdult,
                        numChil: stepChild,
                        textChil: substantiveChild,
                        numInf: stepInfant,
                        textInf: substantiveInfant,
                      })}
                    >
                      {bookingPassenger('save', translations)}
                    </ButtonCo>
                  </div>
                </Hidden>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </Grid>
  )
}

SearchPanelPassenger.propTypes = {
  onChange: PropTypes.func,
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
}

SearchPanelPassenger.defaultProps = {
  onChange: null,
  adult: 1,
  child: 0,
  infant: 0,
}

const mapStateToProps = state => {
  return {
    idiomasReducer: state.idiomasReducer
  };
};

export default compose(withLocalize, connect(mapStateToProps, null))(SearchPanelPassenger);
