import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { ContactsTableRow } from 'components/ContactsTable/ContactsTableRow';
import PropTypes from 'prop-types';
import { CONTACT_SHAPE, SIZE_VALUES } from 'constants/propTypes';
import { tableFieldsBySize } from 'constants/contactsTable';
import { useStyles } from './styles';

/**
 * Displays row with first letter of contact name and rows with contacts whose names begin with that letter
 * @param letter - first letter of contact names
 * @param contacts - array of contacts
 * @param size - screen size
 */
export const SectionContacts = ({ letter, contacts, size }) => {
  const classes = useStyles();
  const tableFields = tableFieldsBySize[size] || tableFieldsBySize.large;

  return (
    <>
      <TableRow className={classes.letter}>
        <TableCell colSpan={tableFields.length}>{letter}</TableCell>
      </TableRow>
      {contacts.map(contact => (
        <ContactsTableRow key={contact.id} contact={contact} size={size} />
      ))}
    </>
  );
};

SectionContacts.propTypes = {
  letter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape(CONTACT_SHAPE)).isRequired,
  size: SIZE_VALUES,
};
