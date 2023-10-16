import palette from "../palette"

export default {
  select: {
    "&:focus": {
      backgroundColor: palette.common.white,
    },
    "&$disabled": {
      borderColor: palette.grey[400],
      color: palette.grey["500"],
      backgroundColor: palette.grey["100"],
      cursor: "default",
      pointerEvents: "none",
    },
    minWidth: "inherit",
  },
}
