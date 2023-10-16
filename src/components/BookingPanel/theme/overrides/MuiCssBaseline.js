import palette from "../palette"

const suisseLight = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `url('/fonts/SuisseIntl-Light.woff') format('woff'), 
        url('/fonts/SuisseIntl-Light.ttf') format('truetype'), 
        url('/fonts/SuisseIntl-Light.woff2') format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseRegular = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url('/fonts/SuisseIntl-Regular.woff') format('woff'), 
  url('/fonts/SuisseIntl-Regular.ttf') format('truetype'), 
  url('/fonts/SuisseIntl-Regular.woff2') format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseMedium = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `url('/fonts/SuisseIntl-Medium.woff') format('woff'), 
  url('/fonts/SuisseIntl-Medium.ttf') format('truetype'), 
  url('/fonts/SuisseIntl-Medium.woff2') format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

const suisseSemibold = {
  fontFamily: "SuisseIntl",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `url('/fonts/SuisseIntl-SemiBold.woff') format('woff'), 
  url('/fonts/SuisseIntl-SemiBold.ttf') format('truetype'), 
  url('/fonts/SuisseIntl-SemiBold.woff2') format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
}

export default {
  "@global": {
    "@font-face": [suisseLight, suisseRegular, suisseMedium, suisseSemibold],
    body: {
      backgroundColor: palette.background.paper,
      height: 1000,
    },
  },
}
