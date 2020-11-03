import React from 'react';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

/**
 * Displays input component
 * @param value - value for input
 * @param handleChange - callback to change value
 * @param props - other props for input
 */
export const InputComponent = ({ handleChange, value, ...props }) => {
  const classes = useStyles();

  return (
    <Input
      fullWidth
      disableUnderline
      classes={{
        root: classes.input,
        focused: classes.focused,
      }}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

InputComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
