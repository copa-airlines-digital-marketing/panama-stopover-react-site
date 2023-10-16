import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import InputCo from '../../ui/input/inputCo';
import useStyles from './styles';

const InputCoBooking = ({
  alternativePlaceholder,
  className,
  onBlur,
  placeholder,
  value,
  calendarActive,
  inputProps,
  id,
  ...props
}) => {
  const classes = useStyles()
  const [newPlaceholder, setPlaceholder] = useState('');

  useEffect(() => {
    setPlaceholder(placeholder)
  }, [placeholder])

  const handleOnFocus = () => {
    if (alternativePlaceholder) {
      setPlaceholder(alternativePlaceholder)
    } else {
      setPlaceholder(placeholder)
    }
  }

  const handleOnBlur = (e) => {
    onBlur(e)
    if (!value) {
      setPlaceholder(placeholder)
    }
  }

  const classname = calendarActive ? classes.calendarActive : classes.root
  return (
    <InputCo
      {...props}
      id={id}
      value={value}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      placeholder={newPlaceholder}
      className={clsx(classname, className)}
      labelClassName={classes.labelStyle}
      styleTextInline={{ paddingTop: 4 }}
      inputProps={{
        ...inputProps,
        "data-cy": `inputCoBooking-inputCo-${id}`,
      }}
    />
  )
}

InputCoBooking.propTypes = {
  alternativePlaceholder: PropTypes.string,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  calendarActive: PropTypes.bool,
  value: PropTypes.string,
  inputProps: PropTypes.shape({}),
  id: PropTypes.string,
}

InputCoBooking.defaultProps = {
  alternativePlaceholder: "",
  className: null,
  onBlur: () => null,
  placeholder: "",
  calendarActive: false,
  value: "",
  inputProps: {},
  id: "",
}

export default InputCoBooking
