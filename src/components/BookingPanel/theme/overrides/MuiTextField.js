import palette from "../palette"

export default {
  root: {
    "& > *": {
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      marginTop: 8,
      marginBottom: 8,
    },
    "& .Mui-disabled": {
      backgroundColor: palette.grey[100],
      color: palette.grey[600],
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      backgroundColor: palette.transparent.main,
      opacity: 1,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.grey[300],
    },
    "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.grey[300],
    },
    "& .MuiOutlinedInput-root:hover.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.grey[300],
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: palette.primary.main,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: 1,
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "1rem",
    },
  },
}
