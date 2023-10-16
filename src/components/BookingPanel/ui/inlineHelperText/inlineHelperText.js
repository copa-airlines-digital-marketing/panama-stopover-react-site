import React from "react"
import PropTypes from "prop-types"
import FormHelperText from "@material-ui/core/FormHelperText"
import { makeStyles } from "@material-ui/core/styles"
import WarningIcon from "@material-ui/icons/Warning"
import clsx from "clsx"

const useStyles = makeStyles((theme) => ({
  helperText: ({ infoIcon }) => ({
    fontSize: "12px",
    marginTop: 0,
    display: "flex",
    alignItems: infoIcon ? "flex-start" : "center",
  }),
  iconWarning: {
    fill: theme.palette.alternative.orange,
    height: 12,
    width: 15,
    marginRight: 8,
  },
  helperTextContainer: ({ helperTextContainer }) => ({
    height: 20,
    helperTextContainer,
    "&.helperAlert": {
      height: "auto",
      marginBottom: 14,
      helperText: {
        alignItems: "flex-start",
      },
    },
  }),
  text: (props) => ({
    ...props,
  }),
  icon: {
    marginTop: 4,
    marginRight: 10,
    fontSize: 14,
  },
}))

const InlineHelperText = ({
  helperText,
  WCAGHelperText,
  isError,
  showMessage,
  icon,
  styleTextInline,
  id,
  helperTextContainer,
  infoIcon,
}) => {
  const classes = useStyles({ styleTextInline, infoIcon })
  return (
    <div
      data-cy={`inline-${id}`}
      className={clsx(
        classes.helperTextContainer,
        helperTextContainer,
        infoIcon ? "helperAlert" : ""
      )}
    >
      {showMessage && (
        <FormHelperText
          id={id}
          aria-label={WCAGHelperText}
          className={classes.helperText}
          error={isError}
        >
          {icon && <span>{icon}</span>}
          {infoIcon && <WarningIcon className={classes.iconWarning} />}
          <span className={classes.text}>{helperText}</span>
        </FormHelperText>
      )}
    </div>
  )
}

InlineHelperText.propTypes = {
  id: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  isError: PropTypes.bool,
  showMessage: PropTypes.bool,
  icon: PropTypes.element,
  helperTextContainer: PropTypes.string,
  styleTextInline: PropTypes.oneOfType([PropTypes.object]),
  WCAGHelperText: PropTypes.string,
  infoIcon: PropTypes.element,
}

InlineHelperText.defaultProps = {
  isError: false,
  showMessage: false,
  icon: null,
  styleTextInline: {},
  helperText: "",
  helperTextContainer: null,
  WCAGHelperText: null,
  infoIcon: null,
}

export default InlineHelperText
