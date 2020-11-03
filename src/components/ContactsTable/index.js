import React from 'react';
import { Table, TableBody, TableContainer } from '@material-ui/core';
import { ContactsTableHead } from 'components/ContactsTable/ContactsTableHead';
import { SectionContacts } from 'components/ContactsTable/SectionContacts';
import { SIZE_VALUES } from 'constants/propTypes';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

/**
 * Displays contact table
 * @param contactsByLetters - found contacts object grouped by first letter of contact name
 * @param size - screen size
 */
export const ContactsTableComponent = ({ contactsByLetters, size }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="contact table">
          <ContactsTableHead size={size} />
          <TableBody>
            {Object.entries(contactsByLetters).map(([letter, contacts]) => (
              <SectionContacts
                key={letter}
                letter={letter}
                contacts={contacts}
                size={size}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

ContactsTableComponent.propTypes = {
  contactsByLetters: PropTypes.object.isRequired,
  size: SIZE_VALUES,
};
