import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/index';

const useStyles = makeStyles({
  calendarGrid: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  promocodeContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0px",
      display: "flex",
      justifyContent: "flex-end",
      textAlign: "right",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
    },
  },
  stopoverPanel: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
    backgroundColor: 'rgba(224, 235, 242, 0.25)',
    padding: '32px',
    // opacity: 0.25,
    border: '1px solid rgba(151, 151, 151, 0.25)',
    borderRadius: '5px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
    },
  },
  stopoverTitle: {
    color: '#666',
    fontWeight: '500',
  },
  stopoverBox: {
    padding: '20px 0',
  },
  submitContainer: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      height: 75,
    },
  },
  submitButton: {
    width: "88%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  flightTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      marginLeft: -15,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: -5,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  flightIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flightIcon: {
    fill: theme.palette.grey[900],
    width: 18,
    marginRight: 9,
    marginTop: -2,
  },
  flightTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  fieldsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 71,
    [theme.breakpoints.down("md")]: {
      marginBottom: 64,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 56,
    },
  },
  lastElement: {
    marginBottom: 34,
  },
  removeButton: {
    paddingRight: 10,
    paddingLeft: 10,
    fill: theme.palette.grey[600],
    marginRight: -15,
    "&:hover": {
      fill: theme.palette.common.white,
      "& span": {
        color: theme.palette.common.white,
      },
    },
    "& span": {
      color: theme.palette.grey[600],
    },
    "& .MuiButton-startIcon.MuiButton-iconSizeSmall": {
      margin: 0,
    },
  },
  crossIcon: {
    fill: "inherit",
    height: 16,
  },
  addFlightIcon: {
    marginLeft: -8,
    marginBottom: 34,
    "&:focus": {
      border: "solid 1px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: -30,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: -12,
    },
  },
  toggleArea: {
    [theme.breakpoints.up("md")]: {
      textAlign: "-webkit-right",
    },
  },
  stopoverContainer: (doesNotApply) => ({
    justifyContent: "center",
    marginBottom: doesNotApply ? 24 : 56,
    display: "flex",
    alignItems: "center",
  }),
  stopoverButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "auto",
    width: 294,
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      marginLeft: "20%",
      marginTop: 16,
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginLeft: "5%",
      marginTop: 24,
    },
    "& .MuiToggleButton-root": {
      borderColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.dark,
      "&:hover": {
        borderColor: theme.palette.secondary.dark,
        color: theme.palette.secondary.dark,
        backgroundColor: theme.palette.transparent.main,
      },
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white,
      },
    },
  },
  toggleButton: {
    width: "50%",
    height: 32,
    fontSize: "1rem",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  stopoverDescription: {
    paddingRight: 50,
    color: theme.palette.grey[600],
    fontWeight: 500,
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: 20,
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  flightsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  notApplyAlert: {
    marginTop: 24,
  },
})

export default useStyles
