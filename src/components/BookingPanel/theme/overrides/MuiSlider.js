import palette from "../palette"

const muiSlider = {
  root: {
    color: palette.primary.main,
    height: 8,
  },
  thumb: {
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: palette.primary.main,
    border: `0.5rem solid ${palette.common.white}`,
    marginTop: -9,
    marginLeft: -12,
    boxShadow:
      "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
    "&:focus, &:hover, &$active": {
      cursor: "grab",
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      "@media (hover: none)": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
      },
    },
    "&:focus": {
      cursor: "grabbing",
    },
    "&$disabled": {
      backgroundColor: palette.grey["300"],
      height: "1.5rem",
      width: "1.5rem",
      marginTop: -9,
      marginLeft: -12,
    },
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    color: palette.grey["400"],
    height: 4,
    borderRadius: 4,
  },
}

export default muiSlider
