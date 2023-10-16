import { makeStyles } from "@material-ui/core/styles"
import theme from '../../theme'

const useStyles = makeStyles({
  /* General style */
  datePicker: {
    position: "absolute",
    marginTop: -20,
    zIndex: 2,
    [theme.breakpoints.up("md")]: {
      right: 0,
    },
    [theme.breakpoints.down("sm")]: {
      left: "50%",
      transform: "translate(-50%, 0)",
    },

    "@media screen and (min-width: 750px)": {
      marginBottom: theme.spacing(3),
    },
    "@media screen and (max-width: 750px)": {
      marginTop: -28,
      top: theme.spacing(3),
      position: "fixed",
      zIndex: 1500,
    },
  },

  /* month arrow style */
  leftArrow: {
    position: "absolute",
    color: theme.palette.primary.light,
    left: theme.spacing(3),
    visibility: "visible",
  },
  rightArrow: {
    position: "absolute",
    color: theme.palette.primary.light,
    right: -theme.spacing(85),
    visibility: "visible",
  },

  /** Confirmation bar styles */
  finalCheckPosition: {
    marginRight: theme.spacing(3),
    "@media screen and (max-width: 750px)": {
      width: "100%",
      position: "sticky",
      bottom: theme.spacing(2),
      textAligh: "center",
      margin: "0",
    },
  },
  finalCheck: {
    position: "absolute",
    marginTop: -theme.spacing(13),
    marginLeft: theme.spacing(3),
    padding: theme.spacing(1),
    height: theme.spacing(8),
    width: "695px",
    borderRadius: "2px",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.palette.shadows.small,
    display: "flex",
    "@media screen and (max-width: 750px)": {
      width: "80%",
      marginLeft: 0,
      left: "50%",
      transform: "translate(-50%, 0)",
    },

    [theme.breakpoints.down("xs")]: {
      height: 134,
      display: "block",
      marginTop: -theme.spacing(17),
    },
  },
  flexibleDates: {
    marginTop: 0,
    marginLeft: theme.spacing(),

    "@media screen and (min-width: 750px)": {
      position: "absolute",
      top: "50%",
      transform: "translate(0, -50%)",
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: theme.spacing(2),
    },
  },
  customLabel: {
    marginLeft: -theme.spacing(25.5), // This is done by reducing the size of the current label AND the margin
    paddingLeft: theme.spacing(),
  },
  confirmButton: {
    right: 0,
    position: "absolute",
    marginRight: 8,
    top: "50%",
    transform: "translate(0, -50%)",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "100%",
      left: "50%",
      transform: "translate(-50%, 0)",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  confirmButtonInner: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      display: "block",
      width: "100%",
    },
    backgroundColor: theme.palette.secondary.main,
  },
  /** XS Top Bar section */
  xsTop: {
    height: theme.spacing(9),
    backgroundColor: theme.palette.common.white,
    display: "flex",
  },
  xsButton: {
    width: theme.spacing(9),
    height: "100%",
    cursor: "pointer",
    position: "relative",
  },
  exit: {
    position: "absolute",
    color: theme.palette.grey["400"],
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  divider: {
    display: "block",
    backgroundColor: theme.palette.dividerLight,
  },
  xsTextArea: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  flights: {
    fontWeight: 500,
    fontSize: "1.25rem",
  },
  flightsSelected: {
    color: theme.palette.grey["700"],
  },
  flightsPlaceholder: {
    color: theme.palette.grey["300"],
  },

  /**
   * Container Styles
   * */
  CalendarIcon: {
    width: 36,
    height: 36,
  },
  calendarIconContainer: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: -theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(3),
      marginLeft: -theme.spacing(3.75),
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
      paddingRight: 16,
    },
  },

  calendar: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(),
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
    },
  },
})

export default useStyles
