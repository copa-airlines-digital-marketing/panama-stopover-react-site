import React, { useMemo, forwardRef } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import clsx from "clsx"

import CircularProgress from "@material-ui/core/CircularProgress"

const VARIANTS_COLORS_MAP = {
  // Colors
  grey: "primary",
  inverted: "primary",
  confirm: "primary",

  // Variants
  shadow: "contained",
  link: "contained",
  linkInverted: "contained",
}

const widthSize = 20

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
  loadingLarge: {
    width: widthSize,
    height: widthSize,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(4.1),
    marginLeft: theme.spacing(4.1),
    color: "inherit",
  },
  loadingMedium: {
    width: widthSize,
    height: widthSize,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(3.8),
    marginLeft: theme.spacing(3.8),
    color: "inherit",
  },
  loadingSmall: {
    width: 14,
    height: 14,
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
    marginRight: theme.spacing(3.6),
    marginLeft: theme.spacing(3.6),
    color: "inherit",
  },
}))

// Here are just the new styles "variants"
const useClasses = makeStyles((theme) => ({
  outlinedPrimary: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.transparent.main,
      color: theme.palette.primary.main,
      "&:hover, &:active, &:focus": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
  },
  outlinedSecondary: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.transparent.main,
      color: theme.palette.secondary.dark,
      "&:hover, &:active,  &:focus": {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
      },
    },
  },
  outlinedGrey: {
    borderColor: theme.palette.grey[500],
    border: 1,
    borderStyle: "solid",
    color: theme.palette.grey[500],
    "&:hover, &:focus, &:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[500],
      borderColor: theme.palette.grey[500],
    },
    "&:disabled": {
      bordercolor: theme.palette.grey[400],
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[400],
    },
  },
  outlinedInverted: {
    borderColor: theme.palette.common.white,
    border: 1,
    borderStyle: "solid",
    color: theme.palette.common.white,
    "&:hover, &:focus, &:active": {
      color: theme.palette.primary.main,
      borderColor: theme.palette.common.white,
      background: theme.palette.common.white,
    },
    "&:disabled": {
      bordercolor: theme.palette.transparent.bg,
      border: 1,
      borderStyle: "solid",
      color: theme.palette.transparent.text,
      background: theme.palette.transparent.main,
    },
  },
  shadowPrimary: {
    boxShadow: `1px 2px 4px ${theme.palette.transparent.shadow}`,
    "&:hover": {
      boxShadow: `1px 2px 4px ${theme.palette.transparent.shadow}`,
    },
    "&:disabled": {
      backgroundColor: theme.palette.transparent.main,
      bordercolor: theme.palette.transparent.bg,
      border: 1,
      color: theme.palette.transparent.bg,
      borderStyle: "solid",
      boxShadow: "none",
    },
  },
  linkPrimary: {
    color: theme.palette.primary.main,
    background: theme.palette.transparent.main,
    "&:hover, &:active, &:focus": {
      background: theme.palette.transparent.main,
      color: theme.palette.primary.main,
    },
    "&:disabled": {
      background: theme.palette.transparent.main,
      color: theme.palette.grey[300],
    },
  },
  linkInvertedPrimary: {
    color: theme.palette.common.white,
    background: theme.palette.transparent.main,
    "&:hover, &:active, &:focus": {
      background: theme.palette.transparent.bg2,
      color: theme.palette.primary.white,
    },
    "&:disabled": {
      background: theme.palette.transparent.main,
      color: theme.palette.grey[300],
    },
  },

  containedConfirm: {
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    "&:active, &:focus": {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    "&:disabled": {
      background: theme.palette.grey[200],
      color: theme.palette.common.white,
    },
  },
}))

const LOADING_SIZES = {
  small: "loadingSmall",
  medium: "loadingMedium",
  large: "loadingLarge",
}

const ButtonCo = forwardRef(
  (
    {
      color = "default",
      variant,
      start: StartIcon,
      end: EndIcon,
      children,
      loading,
      className,
      ...props
    },
    ref
  ) => {
    const { size } = props
    const styles = useStyles()
    const classes = useClasses()
    const classNameVariant = useMemo(() => {
      return variant + color[0].toUpperCase() + color.substr(1)
    }, [color, variant])
    const ownClassName = classes[classNameVariant] || null
    const defaultColor = VARIANTS_COLORS_MAP[color] || color
    const defaultVariant = VARIANTS_COLORS_MAP[variant] || variant
    const loadingSize = LOADING_SIZES[size] || LOADING_SIZES.medium
    return (
      <Button
        ref={ref}
        {...props}
        className={clsx(styles.button, ownClassName, className)}
        color={defaultColor}
        variant={defaultVariant}
        startIcon={!loading && StartIcon && <StartIcon />}
        endIcon={!loading && EndIcon && <EndIcon />}
      >
        {loading ? (
          <>
            <CircularProgress
              variant="indeterminate"
              color="primary"
              size="25"
              alt=""
              aria-label="loading"
              className={styles[loadingSize]}
            />
          </>
        ) : (
          children
        )}
      </Button>
    )
  }
)

ButtonCo.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string,
  start: PropTypes.elementType,
  end: PropTypes.elementType,
  loading: PropTypes.bool,
  size: PropTypes.string,
  buttonRef: PropTypes.node,
  className: PropTypes.string,
}

ButtonCo.defaultProps = {
  children: "",
  size: "medium",
  start: null,
  end: null,
  variant: null,
  loading: false,
  buttonRef: null,
  className: "",
}

export default ButtonCo
