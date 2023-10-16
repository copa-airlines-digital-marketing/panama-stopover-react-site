import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Select from "@material-ui/core/Select"
import { withStyles, makeStyles } from "@material-ui/core/styles"

import OptionCo from "./optionCo"
import theme from "../../theme"
import { ReactComponent as down } from "../../assets/icons/KeyboardArrow-Down.svg"
import TypographyCo from "../typography/typographyCo"

/**
 * Function to make the characteristics of the Select component
 * @param {string} property Which property will affect the current style
 * @param {styple object} mapping How will the property affect the current style
 */
const styledBy = (property, mapping) => (props) => mapping[props[property]]

const isContentScrollable = (element, id) =>
  id &&
  element?.id === `${id}-open` &&
  element?.parentElement?.clientHeight < element?.scrollHeight

const disableScroll = (id, e) => {
  if (isContentScrollable(e?.target?.offsetParent, id)) return true
  e.preventDefault()
  return false
}

const styles = {
  root: {
    /** If color===empty, display not selected color. Body1 if otherwise */
    color: styledBy("color", {
      empty: theme.palette.grey["600"],
      primary: theme.typography.body1.color,
      secondary: theme.palette.grey["700"],
    }),
  },
  select: {
    /** If starticon set, display change the padding to adjust */
    marginLeft: styledBy("starticon", {
      true: -theme.spacing(7),
      false: 0,
    }),
    paddingLeft: styledBy("starticon", {
      true: theme.spacing(6.2),
      false: theme.spacing(1.75),
    }),
  },
}

styles.rootSet = theme.typography.body1.color

/**
 * Default props the MuiSelect component should have
 */
const basePopoverStyles = makeStyles(() => ({
  base: {
    zIndex: '100000 !important',
  },
}))

const defaultProps = (id, handleScroll) => ({
  fullWidth: true,
  variant: "outlined",
  displayEmpty: true,
  MenuProps: {
    onEntered: () => {
      document.addEventListener("touchmove", handleScroll)
    },
    onExited: () => {
      document.removeEventListener("touchmove", handleScroll)
    },
    MenuListProps: { id: `${id}-open` },
    PaperProps: {
      style: {
        maxHeight: theme.spacing(27),
      },
    },
    PopoverClasses: {
      root: basePopoverStyles().base,
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
  },
})

/**
 * Creates an styled select to apply the dynamic changes
 */
const StyledSelect = withStyles(styles)(({ classes, color, ...other }) => {
  const root = color === "primary" ? classes.rootSet : classes.root
  return <Select classes={{ root, select: classes.select }} {...other} />
})

/**
 * Sets the placeholder to be shown in the select when it's empty
 * @param {string} text Text to be shown in the placeholder.
 */
const setPlaceholder = (text) => (
  <OptionCo style={{ display: "none" }} value="" placeholder disabled>
    {text}
  </OptionCo>
)

function SelectCo(props) {
  const {
    id,
    children,
    label,
    value,
    startAdornment,
    placeholder,
    onChange,
  } = props

  /** Inmutable value for the state of the color */
  const [color, setColor] = React.useState(value === "" ? "empty" : "primary")
  const empty = setPlaceholder(placeholder)

  useEffect(() => {
    setColor(value === "" ? "empty" : "primary")
  }, [value])
  /**
   * If an item was selected and value is a new set, change the color of the component
   * @param {event} event event corresponding to the action just performed
   */
  const handleScroll = (e) => disableScroll(id, e)

  const handleChange = (e) => {
    document.removeEventListener("touchmove", handleScroll, {
      passive: false,
    })
    setColor(e.target.value === "" ? "empty" : "primary")
    onChange(e)
  }
  const currentProps = {
    ...defaultProps(id, handleScroll),
    ...props,
  }
  currentProps.inputProps = { "aria-label": currentProps["aria-label"] }
  const starticon = startAdornment !== undefined
  return (
    <div>
      {label && (
        <TypographyCo data-cy={`label-${currentProps.id}`} variant="body2">
          {label}
        </TypographyCo>
      )}
      <StyledSelect
        id={id}
        color={color}
        starticon={starticon.toString()}
        {...currentProps}
        label={undefined}
        IconComponent={down}
        onChange={(e) => handleChange(e)}
      >
        {empty}
        {children}
      </StyledSelect>
    </div>
  )
}

SelectCo.propTypes = {
  id: PropTypes.string,
  /**
   * The children are the `options` for the respective select, must be type `optionCo`
   */
  children: PropTypes.node,

  /**
   * A string which will be shown at the top of the input. It can be empty
   */
  label: PropTypes.string,

  /**
   * Current value taken by the select. Usually is a string of a number
   * It is `required`, even if it has to be empty
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Text that will be shown as the placeholder of the select.
   * If empty, it will show nothing.
   */
  placeholder: PropTypes.string,

  /**
   * Node with the properties for the icon shown at the right of the select
   *
   * If `undefined`it will show nothing
   * If added, it will stylize the select component and add the icon
   */
  startAdornment: PropTypes.node,

  /**
   * Callback fired when the value is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * Text that will be show when there is a error.
   * If empty, it will show nothing.
   */
  "aria-label": PropTypes.string,
}

SelectCo.defaultProps = {
  id: "",
  label: "",
  startAdornment: undefined,
  placeholder: "",
  children: undefined,
  onChange: () => {},
  "aria-label": "",
}

export default SelectCo
