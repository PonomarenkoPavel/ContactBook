import React, { useCallback } from 'react';
import { ContactsTableComponent } from 'components/ContactsTable';
import { useSelector, useDispatch } from 'react-redux';
import { selectFoundContactsbyLetters } from 'ducks/contacts/selectors';
import { Hidden } from '@material-ui/core';
import { showModal } from 'ducks/modals/actions';

/**
 * ContactsTable container.
 * Sets size of contact table based on screen size
 */
export const ContactsTable = () => {
  const dispatch = useDispatch();
  const contactsByLetters = useSelector(selectFoundContactsbyLetters);
  const handleClick = useCallback(
    ({ currentTarget }) => {
      const contactId = currentTarget.dataset.id;
      dispatch(showModal(contactId));
    },
    [dispatch],
  );

  return (
    <>
      <Hidden mdDown>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          handleClick={handleClick}
          size="large"
        />
      </Hidden>
      <Hidden lgUp xsDown>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          handleClick={handleClick}
          size="medium"
        />
      </Hidden>
      <Hidden smUp>
        <ContactsTableComponent
          contactsByLetters={contactsByLetters}
          handleClick={handleClick}
          size="small"
        />
      </Hidden>
    </>
  );
};
