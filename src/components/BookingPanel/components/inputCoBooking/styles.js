import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/index';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    "& input": {
      fontSize: 20,
      height: 43,
      padding: 0,
      color: theme.palette.grey[300],
    },
    "& .Mui-focused": {
      backgroundColor: theme.palette.selection,
      backgroundOpacity: 0.5,
    },
    "& .MuiInputBase-input:not(:placeholder-shown)": {
      fontWeight: 500,
      color: theme.palette.grey["700"],
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1.5px solid",
      borderBottomColor: theme.palette.grey[100],
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1.5px solid",
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiInput-underline.Mui-focused:before": {
      borderBottom: "1.5px solid",
      borderBottomColor: theme.palette.primary.main,
    },
    "& .MuiInput-underline.Mui-focused:after": {
      transform: "scaleX(0)",
    },
  },
  labelStyle: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  calendarActive: {
    padding: 0,
    backgroundColor: theme.palette.selection,
    borderBottom: "1.5px solid",
    borderBottomColor: theme.palette.primary.main,
    "&:focus": {
      borderBottom: "2.0px solid",
      borderBottomColor: theme.palette.primary.main,
    },
    "& input": {
      fontSize: 20,
      height: 41.5,
      padding: 0,
      paddingBottom: -0.5,
      color: theme.palette.grey[300],
    },
    "& .MuiInputBase-input:not(:placeholder-shown)": {
      fontWeight: 500,
      color: theme.palette.grey["700"],
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: 0,
    },
    "& .MuiInput-underline:before": {
      borderBottom: 0,
    },
    "& .MuiInput-underline:after": {
      borderBottom: 0,
    },
  },
}))

export default useStyles
