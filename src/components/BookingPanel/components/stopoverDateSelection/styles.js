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
  inputContainer: {
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
  container: {
    width: "100%",
    "& .MuiInputBase-input": {
      textAlign: "left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
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
    cursor: 'pointer',
  },
  itemStepper: {
    padding: 24,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 16,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#efefee',
    }
  },
  itemCollapse: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
  },
}))

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    height: 60,
    backgroundColor: 'transparent',
    "& .MuiCollapse-container": {
      width: 336,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  disabled: {
    backgroundColor: 'transparent !important',
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
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
}))(MuiAccordionDetails)

export { useStyles, Accordion, AccordionSummary, AccordionDetails }
