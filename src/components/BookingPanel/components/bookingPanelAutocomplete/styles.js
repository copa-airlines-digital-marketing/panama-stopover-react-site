import { makeStyles } from "@material-ui/core/styles"
import theme from "../../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    "& .MuiAutocomplete-inputRoot .MuiAutocomplete-input:first-child": {
      padding: 0,
    },
    "& .MuiAutocomplete-clearIndicator": {
      "&:hover": {
        backgroundColor: theme.palette.transparent.main,
      },
    },
    "& .MuiAutocomplete-input:not(:hover) &  + .MuiInputAdornment-positionEnd": {
      visibility: "hidden",
    },
    "& .MuiAutocomplete-input:not(:focus) + .MuiInputAdornment-positionEnd": {
      visibility: "hidden",
    },
    "& .MuiAutocomplete-popupIndicator": {
      display: "none",
    },
    "& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot": {
      paddingRight: 0,
    },
    "& .MuiAutocomplete-hasPopupIcon .MuiAutocomplete-inputRoot, .MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot": {
      paddingRight: 0,
    },
    "& .MuiAutocomplete-endAdornment": {
      position: "relative",
    },
    "& .MuiAutocomplete-listbox": {
      padding: 0,
    },
    "& .MuiTextField-root .Mui-disabled": {
      color: theme.palette.grey[600],
      background: theme.palette.transparent.main,
    },
  },
  lableStyle: {
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  popper: {
    zIndex: 10,
    marginTop: -20,
  },
  paper: {
    padding: 0,
    width: 360,
    maxHeight: 340,
    margin: 0,
    "& ul": {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      width: 240,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  noOptions: {
    minHeight: 68,
    display: "flex",
    flexDirection: "row",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  circularIcon: {
    width: 24,
    height: 24,
    color: theme.palette.grey[400],
  },
  errorMessageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  errorLoadIcon: {
    fill: theme.palette.grey[400],
    width: 22,
  },
  errorMessageText: {
    color: theme.palette.grey[700],
    fontSize: 14,
    fontWeight: 500,
  },
  retryMessage: {
    textDecoration: "underline",
    fontSize: 12,
    fontWeight: 500,
    padding: 0,
    justifyContent: "left",
  },
  option: {
    height: 68,
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.grey[100],
    "&:hover": {
      backgroundColor: theme.palette.selection,
      backgroundOpacity: 0.5,
    },
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  errorLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.error.main,
  },
  errorIcon: {
    width: 20,
    fill: theme.palette.error.main,
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
  },
}))

export default useStyles
