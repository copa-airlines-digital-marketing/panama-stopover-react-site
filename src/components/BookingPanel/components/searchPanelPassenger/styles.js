import { makeStyles } from "@material-ui/styles"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"

import theme from "../../theme/index"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  passengerIcon: {
    width: 36,
    height: 36,
    alignSelf: "flex-start",
  },
  inputContianer: {
    paddingLeft: theme.spacing(2),
    paddingRight: 8,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
      paddingRight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(),
      paddingRight: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
    },
  },
  iconContainer: {
    alignSelf: "flex-start",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: -theme.spacing(2),
      marginRight: 0,
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
  container: {
    width: "100%",
    "& .MuiInputBase-input": {
      textAlign: "left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  componentPassenger: {
    width: 336,
    background: theme.palette.background.paper,
    boxShadow: theme.palette.shadows.tiny,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      zIndex: 50,
    },
  },
  containerIcon: {
    margin: 0,
  },
  downIcon: {
    color: theme.palette.primary.main,
    fontSize: 26,
    height: 44,
    border: 0,
    right: 5,
    cursor: "pointer",
  },
  itemStepper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 72,
    padding: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    "& #stepper-adult, #stepper-child, #stepper-infant": {
      width: 32,
      margin: 0,
    },
    "& .MuiSvgIcon-root": {
      width: 18,
      height: 18,
    },
    "& .MuiButtonBase-root": {
      padding: 2,
    },
  },
  textItem: {
    fontWeight: 500,
    lineHeight: 1,
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 12,
    background: theme.palette.grey["100"],
    "& .MuiTypography-colorError": {
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 1,
      paddingBottom: 12,
    },
  },
  containerBtn: {
    margin: "16px 24px",
  },
  saveBtn: {
    width: "100%",
  },
  contentText: {
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
}))

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    height: 60,
    "& .MuiCollapse-container": {
      width: 336,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    display: "block",
    padding: 0,
    "&$expanded": {
      minHeight: 48,
    },
  },
  content: {
    display: "block",
    margin: 0,
    "&$expanded": {
      margin: 0,
    },
    "& .MuiFormControl-root": {
      height: "auto",
    },
    "& div > .helperTextContainer": {
      display: "none",
    },
  },
  expanded: {
    "& .carrotDown": {
      display: "none",
    },
    "& .MuiInputBase-input": {
      backgroundColor: theme.palette.selection,
      backgroundOpacity: 0.5,
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1.5px solid",
      borderBottomColor: theme.palette.primary.main,
    },
  },
})(MuiAccordionSummary)

const AccordionDetails = withStyles(() => ({
  root: {
    padding: 0,
    width: 336,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}))(MuiAccordionDetails)

export { useStyles, Accordion, AccordionSummary, AccordionDetails }
