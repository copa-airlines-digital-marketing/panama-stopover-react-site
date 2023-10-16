import {
  unstable_createMuiStrictModeTheme as createMuiStrictModeTheme,
  createMuiTheme,
} from "@material-ui/core/styles"

export default process.env.NODE_ENV === "development"
  ? createMuiStrictModeTheme
  : createMuiTheme
