import { createSelector } from 'reselect';
import { selectFoundContactIds } from 'ducks/search/selectors';

/**
 * Selects all contacts from store
 */
export const selectContacts = ({ contacts }) => contacts.contacts;
/**
 * Selects arrays of contact ids grouped by first letter of contact name
 */
export const selectContactIdsByLetters = ({ contacts }) =>
  contacts.contactIdsByLetters;

/**
 * Selects arrays of found contacts grouped by first letter of contact name
 */
export const selectFoundContactsbyLetters = createSelector(
  [selectContacts, selectContactIdsByLetters, selectFoundContactIds],
  (contacts, contactIdsByLetters, foundContactIds) =>
    Object.entries(contactIdsByLetters).reduce((acc, [letter, contactIds]) => {
      const filteredContactIds = contactIds.filter(id =>
        foundContactIds.includes(id),
      );
      if (filteredContactIds.length) {
        acc[letter] = filteredContactIds.map(id => contacts[id]);
      }
      return acc;
    }, {}),
);
