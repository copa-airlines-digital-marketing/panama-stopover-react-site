import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import clsx from "clsx"
import theme from "../../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "inherit",
    "& .MuiDivider-flexItem": {
      width: 1,
      height: "inherit",
      backgroundColor: theme.palette.grey[300],
    },
  },
  lightSolid: {
    backgroundColor: theme.palette.grey[300],
    height: 1,
  },
  lightDashed: {
    border: "dashed 1px",
    borderColor: theme.palette.grey[300],
    backgroundColor: theme.palette.transparent.main,
  },
  darkDashed: {
    border: "dashed 1px",
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.transparent.text,
  },
  lightOpSolid: {
    opacity: "50%",
  },
  darkSolid: {
    backgroundColor: theme.palette.common.white,
    opacity: "32%",
  },
}))

const DividerCo = ({ base, ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Divider {...props} className={clsx(classes[base])} variant="fullWidth" />
    </div>
  )
}

DividerCo.propTypes = {
  base: PropTypes.string,
}

DividerCo.defaultProps = {
  base: "",
}

export default DividerCo
