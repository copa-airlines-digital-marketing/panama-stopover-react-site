import {createTheme} from "@material-ui/core/styles"

import palette from "./palette"
import overrides from "./overrides"

const suisseFontFamily = "SuisseIntl, Helvetica, Arial, sans-serif"

const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  spacing: 8,
  palette,
  typography: {
    htmlFontSize: 16,
    fontFamily: suisseFontFamily,
  },
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1367,
      xl: 1920,
    },
  },
})

theme.typography.h1 = {
  fontFamily: suisseFontFamily,
  fontSize: "2rem",
  lineHeight: 1.1,
  fontWeight: 400,
  letterSpacing: "-0.042em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.75rem",
  },
}

theme.typography.h2 = {
  fontFamily: suisseFontFamily,
  fontSize: "1.25rem",
  lineHeight: 1.25,
  fontWeight: 500,
  letterSpacing: "-0.0315em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}

theme.typography.h3 = {
  fontFamily: suisseFontFamily,
  fontSize: "1.125rem",
  lineHeight: 1.33,
  fontWeight: 500,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
}

theme.typography.h4 = {
  fontFamily: suisseFontFamily,
  fontSize: "1rem",
  lineHeight: 1.5,
  fontWeight: 500,
}

theme.typography.h5 = {
  // DisplayLarge
  fontFamily: suisseFontFamily,
  fontSize: "1.875rem",
  lineHeight: 1.1,
  fontWeight: 400,
  letterSpacing: "-0.042em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
    lineHeight: 1.33,
  },
}

theme.typography.h6 = {
  // DisplayNormal
  fontFamily: suisseFontFamily,
  fontSize: "1.5rem",
  lineHeight: 1.33,
  fontWeight: 300,
  letterSpacing: "-0.032em",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.875rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.25rem",
    lineHeight: 1.1,
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
    lineHeight: 1.2,
  },
}

theme.typography.subtitle1 = {
  // DisplayTiny
  fontFamily: suisseFontFamily,
  fontSize: "1.125rem",
  lineHeight: 1.33,
  fontWeight: 400,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
}

theme.typography.subtitle2 = {
  // CaptionLarge
  fontFamily: suisseFontFamily,
  fontSize: "1.125rem",
  lineHeight: 1.33,
  fontWeight: 400,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
}

theme.typography.body1 = {
  // bodyLarge
  fontFamily: suisseFontFamily,
  fontSize: "16px",
  lineHeight: 1.5,
  fontWeight: 400,
}

theme.typography.body2 = {
  // bodyNormal
  fontFamily: suisseFontFamily,
  fontSize: "14px",
  lineHeight: 1.5,
  fontWeight: 400,
}

theme.typography.caption = {
  // bodySmall
  fontFamily: suisseFontFamily,
  fontSize: "12px",
  lineHeight: 1.33,
  fontWeight: 400,
}

theme.typography.overline = {
  // OverlineNormal
  fontFamily: suisseFontFamily,
  fontSize: "12px",
  lineHeight: 1.33,
  fontWeight: 600,
  letterSpacing: "0.08rem",
  textTransform: "uppercase",
  color: palette.grey["600"],
}

theme.typography.button = {
  // ButtonLabel slim
  fontFamily: suisseFontFamily,
  fontSize: "12px",
  lineHeight: 1.5,
  fontWeight: 500,
}

theme.breakpoints.values = {
  phoneSE: 320,
  phone: 480,
  tablet: 600,
  laptop: 1024,
}

export default theme
