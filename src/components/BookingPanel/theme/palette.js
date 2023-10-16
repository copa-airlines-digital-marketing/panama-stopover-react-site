import { colors } from "@material-ui/core"

const white = "#FFF"
const black = "#000"

export default {
  common: {
    black,
    white,
  },
  background: {
    paper: white,
    default: "rgba(239, 239, 238, 1)",
    box: "rgba(252, 253 ,253, 1)",
  },
  primary: {
    light: "rgba(0, 108, 179, 1)",
    main: "rgba(0, 96, 169, 1)",
    dark: "rgba(14, 74, 129, 1)",
    contrastText: white,
  },
  secondary: {
    light: "rgba(224, 235, 242, 1)",
    main: "rgba(14, 74, 129, 1)",
    dark: "rgba(13, 48, 80, 1)",
    contrastText: white,
  },
  warning: {
    main: "#FFC82C",
    contrastText: "rgba(51, 51, 51, 1)",
  },
  error: {
    main: "rgba(219, 49, 49, 1)",
    contrastText: white,
  },
  success: {
    main: "rgba(13, 138, 68, 1)",
    contrastText: white,
  },
  text: {
    primary: "rgba(51, 51, 51, 1)",
    secondary: "rgba(102, 102, 102, 1)",
    disabled: "rgba(219, 218, 216, 1)",
    hint: "rgba(102, 102, 102, 1)",
    inputFocus: "rgba(35, 35, 35, 1)",
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  dividerOpacity: "rgba(102, 102, 102, 0.6)",
  dividerLight: "rgba(209, 209, 209, 0.5)",
  bordeBoxOpacity: "rgba(219, 218, 216, 1)",
  green: "rgba(13,138,68, 1)",
  grey: {
    "50": white,
    "100": "#EFEFEE",
    "200": "#DBDAD8",
    "300": "#CCCCCB",
    "400": "#AAAAAB",
    "500": "#999999",
    "600": "#666666",
    "700": "#333333",
    "750": "#232323",
    "800": "#121212",
    "900": "#0D3050",
    "1000": "#FAFBFB",
    "1001": "#FDFDFD",
  },
  transparent: {
    tooltip: "rgba(18,18,18,0.8)",
    main: "transparent",
    text: "rgba(255, 255, 255, 0.5)",
    bg: "rgba(255, 255, 255, 0.3)",
    bg2: "rgba(255, 255, 255, 0.1)",
    bg3: "rgba(224,235,242,0.25)",
    bg4: "rgba(204, 204, 203, 0.5)",
    alertIcons: "rgba(0,0,0,0.2)",
    shadow: "rgba(0,0,0,0.15)",
    overlayBg: "rgba(0,0,0, 0.5)",
    dimmer: "rgba(0,0,0,0.64)",
    blueLight: "rgba(72, 133, 171, 0.16)",
  },
  gradients: {
    gradientGrey: "linear-gradient(180deg, #FFF 0%, #000 100%)",
    gradientDark: "linear-gradient(90deg, #0E4A81 0%, #0D3050 100%)",
    businessGradient: "linear-gradient(25.06deg, #4B5D67 0%, #7790A5 100%);",
    economyGradient: "linear-gradient(205.67deg, #006CB3 0%, #0E4A81 100%)",
    gradient2: "linear-gradient(90deg, #0060A9 0%, #0D3050 100%)",
    gradient3: "linear-gradient(270deg, #0060A9 0%, #0E4A81 100%)",
    gradient4: "linear-gradient(270deg, #0060A9 0%, #0D3050 100%);",
    gradient5: "linear-gradient(45deg, #0D3050 30%, #0E4A81 90%)",
    gradient6:
      "linear-gradient(0deg, rgba(228,231,233,0.3) 0%, rgba(228,231,233,0.3) 43.87%, rgba(255,255,255,0.3) 100%)",
    "100": "linear-gradient(90deg, #0E4A81 0%, #0D3050 100%)",
    "200": "linear-gradient(90deg, #0060A9 0%, #0D3050 100%)",
    "300": "linear-gradient(270deg, #0060A9 0%, #0E4A81 100%)",
    "400": "linear-gradient(270deg, #0060A9 0%, #0D3050 100%)",
    "500": "linear-gradient(,70deg, #12416e 0%, #0d3050 100%)",
    "600": "linear-gradient(270deg, #006cb3 0%, #12416e 100%)",
    "700": "linear-gradient(90deg, #12416e 0%, #0d3050 100%)",
    gradient7:
      "linear-gradient(0deg, #E4E7E9 0%, #E4E7E9 43.87%, #FFFFFF 100%)",
    gradient8:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 100%)",
  },
  alternative: {
    gold: "#8D7249",
    orange: "#C27028",
    darkOrange: "#9E4E23",
    lightOrange: "#CB9938",
    lowFareGreen: "rgba(218,238,138,0.1)",
    lowCircleGreen: "#74B92F",
    lightBlue: "#006cb3",
  },
  shadows: {
    tiny:
      "0 1px 1px 0 rgba(0,0,0,0.1), 0 2px 1px -1px rgba(0,0,0,0.04), 0 1px 3px 0 rgba(0,0,0,0.08)",
    small: "0 2px 4px 0 rgba(0,0,0,0.15)",
    medium:
      "0 4px 5px 0 rgba(0,0,0,0.07), 0 3px 15px 0 rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.12)",
    large:
      "0 12px 17px 2px rgba(0,0,0,0.06), 0 5px 22px 4px rgba(0,0,0,0.06), 0 7px 8px -4px rgba(0,0,0,0.1)",
    modal: "0 24px 24px 12px rgba(0,0,0,0.1)",
    tooltip: "0 -2px 10px 0 rgba(0,0,0,0.05), 0 4px 5px 0 rgba(0,0,0,0.07)",
  },
  selection: "rgba(224, 235, 242, 0.5)",
  border: {
    light: "#D4DBDF",
  },
  branding: {
    extra: "#2E77A8",
    businessPromo: "#4B5D67",
    businessFull: "#283238",
    insuranceBackground: "rgba(242, 247, 250, 1)",
  },
}
