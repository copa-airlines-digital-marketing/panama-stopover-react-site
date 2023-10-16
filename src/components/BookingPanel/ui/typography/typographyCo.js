import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"

function TypographyCo(props) {
  const { children } = props
  return <Typography {...props}>{children}</Typography>
}
TypographyCo.propTypes = {
  /**
   * Text that will be displayed in the component
   */
  children: PropTypes.node.isRequired,

  /**
   * Color corresponding to the palette to be used
   */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "initial",
    "inherit",
  ]),

  /**
   * Type of text to be displayed
   */
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
  ]),
}

TypographyCo.defaultProps = {
  color: "initial",
  variant: "body1",
}

export default TypographyCo
