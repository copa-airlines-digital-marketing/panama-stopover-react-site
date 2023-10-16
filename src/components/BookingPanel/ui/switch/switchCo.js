import React from "react"
import Switch from "@material-ui/core/Switch"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import palette from "../../theme/palette"

const transparentColors = {
  primary: "#0c60a9",
  default: "#ffffff",
}

const useStyles = makeStyles((theme) => ({
  "@keyframes ripplesLoop": {
    from: {
      boxShadow: `0px 0px 0px 0.3rem ${
        transparentColors.primary || transparentColors.default
      }5D`,
    },
    to: {
      boxShadow: `0px 0px 0px 0.6rem ${
        transparentColors.primary || transparentColors.default
      }00`,
    },
  },
  root: {
    width: 50,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    overflow: "initial",
    "& >.Mui-disabled[aria-disabled='true']": {
      backgroundColor: palette.white,
      color: palette.white,
      "& + $track": {
        backgroundColor: palette.grey[300],
        opacity: 1,
      },
    },
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(24px)",
      color: palette.common.white,
      "& + $track": {
        backgroundColor: palette.primary.main,
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: palette.common.white,
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${palette.grey[200]}`,
    backgroundColor: palette.grey[200],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  disabled: {},
  checked: {},
  focusVisible: {
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: 24,
      height: 24,
      display: "block",
      animation: "$ripplesLoop 1.5s linear infinite",
      borderRadius: 50,
      zIndex: 1,
    },
  },
}))

const SwitchCo = ({ name, checked, handleChange, disabled, label }) => {
  const classes = useStyles()
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      name={name}
      onChange={handleChange}
      checked={checked}
      disabled={disabled}
      inputProps={{ "aria-label": `${label}` }}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
    />
  )
}

SwitchCo.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  checked: PropTypes.bool,
  /**
   * Basic Handle Change
   * Return an object when is clicked
   */
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
}

SwitchCo.defaultProps = {
  disabled: false,
  name: "swicht",
  label: "swicht",
  handleChange: () => {},
}

export default SwitchCo
