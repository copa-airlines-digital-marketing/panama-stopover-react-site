import React, { useState } from "react"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import clsx from "clsx"
import CheckIcon from "@material-ui/icons/Check"

import palette from "../../theme/palette"

const widthSize = 24
const widthLabelNormal = 180
const widthLabelMultiLinea = 141
const heightLabelNormal = 20
const heightLabelMultiLinea = 40

const useStyles = makeStyles({
  root: {
    paddingRight: 8,
    "&:hover": {
      borderColor: palette.primary.main,
      backgroundColor: palette.transparent.text,
      "&.Mui-checked": {
        borderColor: palette.primary.main,
        backgroundColor: palette.transparent.text,
      },
      "& .MuiFormControlLabel-label & .MuiTypography-body1": {
        color: palette.grey[700],
      },
    },
  },
  icon: {
    width: widthSize,
    height: widthSize,
    boxSizing: "border-box",
    border: 1,
    borderStyle: "solid",
    borderColor: palette.grey[500],
    borderRadius: 4,
    "input:focus ~ &": {
      borderColor: palette.primary.main,
    },
    "input:active ~ &": {
      backgroundColor: palette.secondary.dark,
    },
    "input:hover ~ & ": {
      borderColor: palette.primary.main,
    },
    "input:disabled ~ &": {
      borderColor: palette.grey[300],
      backgroundColor: palette.grey[100],
      "& .MuiSvgIcon-root": {
        color: palette.grey[300],
      },
    },
  },
  checkedIcon: {
    color: palette.common.white,
    borderColor: palette.primary.main,
    backgroundColor: palette.primary.main,
    "& .MuiSvgIcon-root": {
      width: "0.8em",
      marginBottom: 6,
    },
  },
  label: {
    "& .MuiTypography-body1": {
      color: (props) => (props.check ? palette.grey[700] : palette.grey[600]),
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      width: (props) => props.width,
      height: (props) => props.height,
      paddingTop: (props) => (props.width === 141 ? 10 : ""),
    },
  },
})

// Inspired by blueprintjs
const CheckboxCo = ({ id, label, full, ...props }) => {
  const [check, setChecked] = useState(false)
  const fullMeasure = full ? "100%" : null
  const width =
    fullMeasure ||
    (label.length <= 20 ? widthLabelNormal : widthLabelMultiLinea)
  const height =
    fullMeasure ||
    (label.length <= 20 ? heightLabelNormal : heightLabelMultiLinea)
  const classes = useStyles({ width, height, check })

  return (
    <FormControlLabel
      className={classes.label}
      labelPlacement="end"
      control={
        <Checkbox
          id={id}
          className={classes.root}
          disableRipple
          onChange={() => setChecked(!check)}
          icon={<span className={clsx(classes.icon)} />}
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)}>
              <CheckIcon />
            </span>
          }
          inputProps={{
            "aria-label": `${label} checkbox`,
          }}
          {...props}
        />
      }
      label={label}
    />
  )
}

CheckboxCo.propTypes = {
  /**
   * The id of the input element.
   */
  id: PropTypes.string.isRequired,
  /**
   * A string to be displayed on the right. It can be empty
   */
  label: PropTypes.string,
  /**
   * If true, the radio will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the width and height is 100%.
   */
  full: PropTypes.bool,
}

CheckboxCo.defaultProps = {
  label: "",
  full: false,
  disabled: false,
}

export default CheckboxCo
