import React from 'react';
import { TableCell, TableHead, TableRow } from '@material-ui/core';
import { Search } from 'containers/Search';
import { tableFieldsBySize } from 'constants/contactsTable';
import { SIZE_VALUES } from 'constants/propTypes';
import { ucFirst } from 'helpers/contacts';
import { useStyles } from './styles';

/**
 * Displays header of contacts table
 * @param size - screen size
 */
export const ContactsTableHead = ({ size }) => {
  const classes = useStyles();
  const tableFields = tableFieldsBySize[size] || tableFieldsBySize.large;

  return (
    <TableHead className={classes.head}>
      <TableRow>
        {tableFields.map(field => (
          <TableCell key={field} align="center">
            {ucFirst(field)}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell colSpan={tableFields.length}>
          <Search />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

ContactsTableHead.propTypes = {
  size: SIZE_VALUES,
};
