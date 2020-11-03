import React from 'react';
import { ContactsTableComponent } from 'components/ContactsTable';
import { useSelector } from 'react-redux';
import { selectFoundContactsbyLetters } from 'ducks/contacts/selectors';
import { Hidden } from '@material-ui/core';

/**
 * ContactsTable container.
 * Sets size of contact table based on screen size
 */
export const ContactsTable = () => {
  const contactsByLetters = useSelector(selectFoundContactsbyLetters);

  return (
    <>
      <Hidden mdDown>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          size="large"
        />
      </Hidden>
      <Hidden lgUp xsDown>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          size="medium"
        />
      </Hidden>
      <Hidden smUp>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          size="small"
        />
      </Hidden>
    </>
  );
};
