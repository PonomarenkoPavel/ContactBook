import React from 'react';
import { Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

/**
 * Displays search line
 * @param value - search string
 * @param handleChange - callback to change search string
 */
export const SearchComponent = ({ handleChange, value }) => {
  const classes = useStyles();

  return (
    <Input
      id="search"
      placeholder="Search"
      fullWidth
      disableUnderline
      classes={{
        root: classes.input,
        focused: classes.focused,
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

SearchComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
