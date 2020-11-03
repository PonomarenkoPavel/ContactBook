import { createReducer } from 'store/createReducer';
import {
  FETCH_CONTACTS_SUCCESS,
  SAVE_CHANGES,
  DELETE_CONTACT,
} from 'ducks/contacts/actions';

const initialState = {
  contacts: {},
  contactIdsByLetters: {},
};

const handlers = {
  [FETCH_CONTACTS_SUCCESS]: (state, { data }) => ({
    ...state,
    ...data,
  }),
  [SAVE_CHANGES]: ({ contacts, contactIdsByLetters }, { id, data }) => {
    const updatedContacts = { ...contacts, [id]: data };
    const currentFirstLetter = contacts[id].firstLetterOfName;
    const newFirstLetter = data.name.charAt(0).toUpperCase();
    const arrayIds = contactIdsByLetters[currentFirstLetter].filter(
      contactId => contactId !== id,
    );
    const updatedContactIdsByLetters = {
      ...contactIdsByLetters,
      [currentFirstLetter]: arrayIds,
    };
    updatedContactIdsByLetters[newFirstLetter] = [
      ...updatedContactIdsByLetters[newFirstLetter],
      id,
    ].sort((id1, id2) =>
      updatedContacts[id1].name.localeCompare(updatedContacts[id2].name),
    );

    return {
      contacts: updatedContacts,
      contactIdsByLetters: updatedContactIdsByLetters,
    };
  },
  [DELETE_CONTACT]: ({ contacts, contactIdsByLetters }, { id }) => {
    const firstLetter = contacts[id].firstLetterOfName;
    const updatedContacts = Object.keys(contacts)
      .filter(contactId => contactId !== id)
      .reduce((acc, contactId) => {
        acc[contactId] = contacts[contactId];
        return acc;
      }, {});
    const arrayIds = contactIdsByLetters[firstLetter].filter(
      contactId => contactId !== id,
    );
    return {
      contacts: updatedContacts,
      contactIdsByLetters: {
        ...contactIdsByLetters,
        [firstLetter]: arrayIds,
      },
    };
  },
};

export const contactsReducer = createReducer(initialState, handlers);
