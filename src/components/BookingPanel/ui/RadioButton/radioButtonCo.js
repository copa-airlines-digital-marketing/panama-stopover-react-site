import React from "react"
import PropTypes from "prop-types"
import Radio from "@material-ui/core/Radio"
import { makeStyles } from "@material-ui/core/styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import clsx from "clsx"

const widthLabel = 100
const widthLabelMultiLine = 180
const whitePoint = "radial-gradient(#fff,#fff 20%,transparent 24%)"
const grayPoint = "radial-gradient(#CCCCCB,#CCCCCB 20%,transparent 24%)"

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    height: 32,
    [theme.breakpoints.down("md")]: {
      width: 250,
    },
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
    [theme.breakpoints.down("xs")]: {
      width: 180,
    },
  },
  label: {
    paddingTop: 2,
    alignItems: "center",
    color: theme.palette.grey[600],
    paddingLeft: theme.spacing(1),
    lineHeight: "1.25rem",
    width: ({ full, width }) => (full ? "auto" : width),
  },
  fullWidth: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: "auto",
    height: 32,
  },
  labelControl: {
    display: "flex",
  },
  checked: {
    "&, & + $label": {
      color: theme.palette.grey[700],
    },
  },
  radio: {
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    "&:active": {
      backgroundColor: theme.palette.grey[900],
      backgroundImage: whitePoint,
    },
    width: 24,
    height: 24,
    border: "1px solid",
    borderColor: theme.palette.grey[500],
  },
  icon: {
    borderRadius: "50%",
    "input:disabled ~ &": {
      backgroundColor: theme.palette.grey[100],
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        content: '""',
        borderColor: theme.palette.grey[500],
        border: "1px solid",
        borderRadius: "50%",
      },
    },
    "$radio.Mui-focusVisible &": {
      borderColor: theme.palette.primary.main,
    },
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: whitePoint,
      content: '""',
    },
    "input:disabled ~ &": {
      backgroundColor: theme.palette.grey[100],
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage: grayPoint,
        content: '""',
        borderColor: theme.palette.grey[500],
        border: "1px solid",
        borderRadius: "50%",
      },
    },
  },
}))

function RadioButtonCo({
  id,
  label,
  onChange,
  value,
  fullWidth,
  wcagObject: { message },
  labelStyle,
  ...props
}) {
  const width = label.length <= 20 ? widthLabel : widthLabelMultiLine
  const classes = useStyles({ full: fullWidth, width })

  return (
    <div
      className={clsx(
        fullWidth && classes.fullWidth,
        !fullWidth && classes.root
      )}
    >
      <FormControlLabel
        classes={{
          label: classes.label.concat(labelStyle),
        }}
        className={classes.labelControl}
        value={value}
        control={
          <Radio
            id={id}
            disableRipple
            className={classes.radio}
            classes={{
              checked: classes.checked,
            }}
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            onChange={onChange}
            aria-label={message}
            {...props}
          />
        }
        label={label}
      />
    </div>
  )
}

RadioButtonCo.propTypes = {
  /**
   * The id of the input element.
   */
  id: PropTypes.string.isRequired,
  /**
   * A string to be displayed on the right. It can be empty
   */
  label: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,
  /**
   * Current value taken by the select. Usually is a string of a number It is required,
   * even if it has to be empty
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If true, the radio will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If need the text with full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Object of wcag and message
   */
  wcagObject: PropTypes.shape({ message: PropTypes.string }),
  /**
   * Apply custom styles to label
   */
  labelStyle: PropTypes.string,
}

RadioButtonCo.defaultProps = {
  label: "",
  value: "",
  onChange: null,
  disabled: false,
  fullWidth: false,
  wcagObject: { message: "" },
  labelStyle: "",
}

export default RadioButtonCo
