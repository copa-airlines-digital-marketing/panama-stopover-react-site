export default {
  root: {
    "&:focus": {
      outlineColor: "#4D90FE",
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: -2,
    },
    "&:focus:not([data-focus-visible-added])": {
      outline: "none",
    },
  },
}
