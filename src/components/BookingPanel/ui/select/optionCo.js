import React from "react"
import PropTypes from "prop-types"
import MenuItem from "@material-ui/core/MenuItem"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme"

const useStyles = makeStyles({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.divider,
    "&:last-child": {
      display: "none",
    },
  },
})

function SelectDividerCo() {
  const classes = useStyles()
  return (
    <Divider
      classes={{
        root: classes.root,
      }}
    />
  )
}

const OptionCo = React.forwardRef((props, ref) => {
  const { children, placeholder } = props
  return [
    <MenuItem ref={ref} {...props} placeholder="" key="item">
      {children}
    </MenuItem>,
    !placeholder && <SelectDividerCo key="divider" />,
  ]
})

OptionCo.propTypes = {
  /**
   * Information that will display inside the option
   */
  children: PropTypes.node.isRequired,

  /**
   * Value corresponding to the current option.
   * `value`can be either a string or a number
   * It is required. It cannot be empty ("")
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Value corresponding if the entry is placeholder.
   * Must only be set in `selectCo.js`
   */
  placeholder: PropTypes.bool,
}

OptionCo.defaultProps = {
  value: undefined,
  placeholder: false,
}

export default OptionCo
