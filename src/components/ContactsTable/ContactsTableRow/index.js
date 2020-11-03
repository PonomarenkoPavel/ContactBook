import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import { CONTACT_SHAPE, SIZE_VALUES } from 'constants/propTypes';
import { tableFieldsBySize } from 'constants/contactsTable';

/**
 * Displays one row of contact table
 * @param contact - contact object
 * @param size - screen size
 */
export const ContactsTableRow = ({ contact, size }) => {
  const classes = useStyles();
  const tableFields = tableFieldsBySize[size] || tableFieldsBySize.large;

  return (
    <TableRow className={classes.row} hover>
      {tableFields.map(field => (
        <TableCell key={field}>{contact[field]}</TableCell>
      ))}
    </TableRow>
  );
};

ContactsTableRow.propTypes = {
  contact: PropTypes.shape(CONTACT_SHAPE).isRequired,
  size: SIZE_VALUES,
};
