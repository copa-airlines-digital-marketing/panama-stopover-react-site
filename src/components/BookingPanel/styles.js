import { makeStyles, withStyles } from "@material-ui/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  containerTabs: {
    marginTop: 0,
    marginBottom: theme.spacing(2),
  },
  back: {
    position: 'absolute',
    top: '600px',
    zIndex: '100000',
    width: '100%',
    '@media (max-width: 1480px)': {
      top: '550px',
    },
    '@media (max-width: 1366px)': {
      top: '460px',
    },
    '@media (max-width: 1023px)': {
      top: '400px',
    },
    '@media (max-width: 768px)': {
      top: '700px',
    },
    '@media (max-width: 590px)': {
      top: '720px',
    },
    '@media (max-width: 580px)': {
      top: '640px',
    },
    '@media (max-width: 375px)': {
      top: '500px',
    },
    '@media (max-width: 320px)': {
      top: '450px',
    }
  },
  box: (isMulticity) => ({
    background: theme.palette.common.white,
    borderRadius: 5,
    padding: "47px 48px 67px 48px",
    marginBottom: isMulticity ? 160 : 0,
    position: 'relative',
    [theme.breakpoints.down("sm")]: {
      padding: "48px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "40px 24px",
      marginBottom: isMulticity ? 216 : 40,
    },
  }),
  boxClone: {
    background: theme.palette.common.white,
    borderRadius: 5,
    padding: "20px 48px 20px 48px",
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 24px",
    },
  },
  grid: {
    width: "80%",
    // padding: "64px 0",
    paddingBottom: '64px',
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "76.3%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "96%",
      padding: "0",
    },
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 48,
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      marginTop: 47,
    },
  },
  arrowIcon: {
    fill: theme.palette.common.white,
    width: 22,
    marginRight: 5,
  },
  returnButton: {
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px",
    },
  },
  titleCotainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
  alertContainer: {
    marginTop: 24,
  },
  stopoverTitle: {
    color: theme.palette.primary.dark,
    fontWeight: 500,
    marginRight: 10,
    [theme.breakpoints.down("md")]: {
      marginRight: -15,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  multicityTab: {
    "@media screen and (max-width: 410px)": {
      maxWidth: 103,
    },
  },
}))

export const StylizedTab = withStyles((theme) => ({
  root: {
    minWidth: "inherit",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      minWidth: "min-content",
    },
  },
  textColorInherit: {
    color: theme.palette.common.white,
    padding: 0,
    opacity: 0.5,
    "&:not(:last-child)": {
      marginRight: theme.spacing(3),
    },
  },
}))(Tab)

export const StylizedTabs = withStyles((theme) => ({
  root: {
    minWidth: "inherit",
    textTransform: "uppercase",
    lineHeight: 16,
    color: theme.palette.common.white,
    "&:focus, &:active, &:selected": {
      color: theme.palette.common.white,
    },
  },
  indicator: {
    height: 3,
    bottom: 3,
  },
}))(Tabs)

export default useStyles
