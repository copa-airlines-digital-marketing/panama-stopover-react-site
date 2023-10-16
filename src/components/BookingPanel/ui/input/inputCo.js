import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"
import isEmpty from "lodash/isEmpty"
import clsx from "clsx"
import InlineHelperText from "../inlineHelperText/inlineHelperText"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
    },
  },
  label: {
    ...theme.typography.body2,
    color: theme.palette.grey[700],
  },
  helperText: {
    fontSize: "12px",
    marginTop: 0,
    display: "flex",
    alignItems: "center",
    paddingTop: 5,
  },
  helperTextContainer: {
    height: 20,
  },
}))

const InputCo = ({
  component,
  handleChange,
  hasErrors,
  helperText,
  helperTextContainer,
  id,
  label,
  labelClassName,
  placeholder,
  styleTextInline,
  WCAGHelperText,
  InputProps,
  ...props
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root} noValidate autoComplete="off">
      {label && (
        <InputLabel
          data-cy={`label-${id}`}
          htmlFor={id}
          className={clsx(classes.label, labelClassName)}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        {...props}
        id={id}
        aria-errormessage={`${id}-helper-text`}
        placeholder={placeholder}
        helperText={null}
        InputLabelProps={{ shrink: false }}
        InputProps={{ ...InputProps, "aria-describedby": `${id}-helper-text` }}
        FormHelperTextProps={{ classes: classes.helperText }}
        onChange={handleChange}
        fullWidth
        error={hasErrors}
      />
      <InlineHelperText
        id={`${id}-helper-text`}
        styleTextInline={styleTextInline}
        showMessage={hasErrors || !isEmpty(helperText)}
        helperText={helperText}
        WCAGHelperText={WCAGHelperText}
        helperTextContainer={helperTextContainer}
        isError={hasErrors}
        icon={component}
      />
    </div>
  )
}

InputCo.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  helperText: PropTypes.string,
  hasErrors: PropTypes.bool,
  component: PropTypes.element,
  disabled: PropTypes.bool,
  inputProps: PropTypes.shape({}),
  InputProps: PropTypes.shape({}),
  styleTextInline: PropTypes.oneOfType([PropTypes.object]),
  labelClassName: PropTypes.string,
  helperTextContainer: PropTypes.string,
  fullWidth: PropTypes.bool,
  WCAGHelperText: PropTypes.string,
}

InputCo.defaultProps = {
  label: "",
  value: "",
  helperText: "",
  handleChange: null,
  hasErrors: false,
  component: null,
  disabled: false,
  inputProps: {},
  InputProps: {},
  labelClassName: "",
  styleTextInline: {},
  fullWidth: false,
  helperTextContainer: null,
  WCAGHelperText: null,
}

export default InputCo
