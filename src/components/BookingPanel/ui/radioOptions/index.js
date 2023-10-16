import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import RadioGroupMa from "@material-ui/core/RadioGroup"
import { useIntl } from "react-intl"

import RadioButtonCo from "../RadioButton/radioButtonCo"
import TypographyCo from "../typography/typographyCo"

const RadioOptions = React.memo(
  ({ options, title, globalValue, onChange, updFilterMood }) => {
    const { formatMessage } = useIntl()
    const [touched, setTouched] = useState(false)
    const handleRadioChange = (event) => {
      onChange(event.target.value)
      setTouched(true)
    }
    const handleRadioSetCompleted = () => {
      if (globalValue) {
        updFilterMood(1, touched)
      }
    }

    useEffect(handleRadioSetCompleted, [globalValue, touched])
    return (
      <div>
        <TypographyCo
          data-testid="titleTag"
          data-cy="radioOptions-title"
          variant="body2"
        >
          {title}
        </TypographyCo>
        <div>
          <RadioGroupMa
            data-testid="radioItems"
            onChange={handleRadioChange}
            value={+globalValue}
          >
            {options.map((opt) => (
              <RadioButtonCo
                key={opt.id}
                id={opt.id}
                label={
                  opt.name === "OptionStopsDinamic" ||
                  opt.name === "OptionStopsDinamicPlural"
                    ? formatMessage(
                        {
                          id: `filterSorting.${opt.name}`,
                        },
                        { stopsNumber: opt.value }
                      )
                    : formatMessage({
                        id: `filterSorting.${opt.name}`,
                      })
                }
                value={opt.value}
                disabled={opt.isDisabled}
                fullWidth
              />
            ))}
          </RadioGroupMa>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => prevProps.globalValue === nextProps.globalValue
)
RadioOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape([])).isRequired,
  title: PropTypes.string.isRequired,
  updFilterMood: PropTypes.func,
  globalValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
RadioOptions.defaultProps = {
  updFilterMood: () => {},
  globalValue: null,
}

export default RadioOptions
