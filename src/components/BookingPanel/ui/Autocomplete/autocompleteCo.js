import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"

import PropTypes from "prop-types"

const AutocompleteCo = ({ renderInput, renderOption, ...props }) => {
  return (
    <Autocomplete
      {...props}
      renderInput={renderInput}
      renderOption={renderOption}
      fullWidth
    />
  )
}

AutocompleteCo.propTypes = {
  renderInput: PropTypes.func.isRequired,
  renderOption: PropTypes.func,
}

AutocompleteCo.defaultProps = {
  renderOption: null,
}

export default AutocompleteCo
