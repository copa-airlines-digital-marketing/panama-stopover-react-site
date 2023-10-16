import { makeStyles } from '@material-ui/styles';
import theme from '../../theme/index';

const useStyles = makeStyles(() => ({
  autocompleteContainer: {
    width: "100%",
  },
  airports: {
    fontSize: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  code: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 500,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    marginRight: "5%",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  codeContainer: {
    width: "15%",
  },
  planeContianer: {
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
  originContainer: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 9,
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
    },
  },
  destinationContianer: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      padding: 0,
    },
  },
  swapIcon: {
    fill: theme.palette.grey[400],
    width: 30,
    height: 30,
  },
  swapedIcon: {
    fill: theme.palette.primary.main,
  },
  swapButtonContainer: {
    textAlign: "center",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "flex-start",
      margin: 0,
      padding: 0,
      paddingRight: 16,
    },
  },
  swapButton: {
    padding: 0,
    minWidth: 34,
    minHeight: 34,
    [theme.breakpoints.down("sm")]: {
      marginLeft: -7,
    },
    [theme.breakpoints.down("xs")]: {
      transform: "rotate(90deg)",
      marginLeft: 0,
    },
  },
  clearContainer: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  clearButton: {
    fill: theme.palette.grey[400],
  },
  upPlaneIcon: {
    width: 36,
    height: 36,
    alignSelf: "flex-start",
  },
  listComponent: {
    padding: 0,
  },
}))

export default useStyles
