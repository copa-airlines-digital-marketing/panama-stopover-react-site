import palette from "../palette"

const containedPrimary = {
  color: palette.common.white,
  backgroundColor: palette.primary.main,
  boxShadow: "none",
  "&:hover, &:active, &:focus": {
    color: palette.common.white,
    background: palette.gradients.gradient3,
    boxShadow: "none",
  },
  "&:active, &:focus": {
    color: palette.common.white,
    background: palette.gradients.gradient2,
    boxShadow: "none",
  },
  "&:disabled": {
    color: palette.common.white,
    backgroundColor: palette.text.disabled,
  },
}

const outlinedPrimary = {
  borderColor: palette.primary.main,
  border: 1,
  borderStyle: "solid",
  color: palette.primary.main,
  "&:hover, &:active, &:focus": {
    color: palette.common.white,
    backgroundColor: palette.primary.main,
  },
  "&:disabled": {
    bordercolor: palette.grey[400],
    backgroundColor: palette.grey[100],
    color: palette.grey[400],
  },
}

export default {
  root: {
    transition:
      "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    padding: "8px 20px",
    fontSize: "16px",
    lineHeight: 1.5,
    boxShadow: "none",
    color: palette.primary.main,
    "&:hover, &:focus, &:active": {
      color: palette.primary.main,
      backgroundColor: palette.transparent.main,
      cursor: "pointer",
    },
    "&:disabled": {
      color: palette.grey[300],
    },
  },
  sizeSmall: {
    padding: "4px 12px",
    fontSize: "0.75rem",
    lineHeight: 1.33,
  },
  sizeLarge: {
    fontSize: "16px",
    padding: "12px 24px",
  },
  contained: {
    color: palette.text.primary,
    backgroundColor: palette.grey[200],
    boxShadow: "none",
    "&:hover, &:active, &:focus": {
      color: palette.text.primary,
      backgroundColor: palette.grey[200],
      boxShadow: "none",
    },
    "&:disabled": {
      color: palette.common.white,
      backgroundColor: palette.text.disabled,
    },
  },
  containedPrimary,
  containedSecondary: {
    backgroundColor: palette.secondary.dark,
    "&:hover": {
      color: palette.common.white,
      background: palette.gradients[100],
    },
    "&:active, &:focus": {
      color: palette.common.white,
      background: palette.gradients[200],
    },
    "&:disabled": {
      color: palette.common.white,
      backgroundColor: palette.grey[200],
    },
  },
  outlined: {
    ...outlinedPrimary,
  },
  outlinedPrimary,
  outlinedSecondary: {
    borderColor: palette.secondary.dark,
    border: 1,
    borderStyle: "solid",
    color: palette.secondary.dark,
    "&:hover": {
      color: palette.common.white,
      backgroundColor: palette.secondary.dark,
    },
    "&:active, &:focus": {
      color: palette.common.white,
      backgroundColor: palette.secondary.dark,
    },
    "&:disabled": {
      bordercolor: palette.grey[400],
      backgroundColor: palette.grey[100],
      color: palette.grey[400],
    },
  },
  startIcon: {
    marginRight: 4,
  },
  endIcon: {
    marginLeft: 4,
  },
}
