import { prepareContacts } from 'ducks/contacts/transformers';
import { INIT_APP } from 'ducks/app/actions';
import {
  fetchContacts,
  fetchContactsSuccess,
  FETCH_CONTACTS,
  SAVE_CHANGES,
  DELETE_CONTACT,
} from 'ducks/contacts/actions';
import { START_SEARCH, endSearch, startSearch } from 'ducks/search/actions';
import {
  fetchContactsFromServer,
  compareNameWithString,
} from 'helpers/contacts';

/**
 * Middleware for requests to server and working with localstorage
 */
export const middleware = ({ dispatch, getState }) => next => action => {
  next(action);
  switch (action.type) {
    case INIT_APP: {
      const contacts = JSON.parse(localStorage.getItem('contacts'));
      dispatch(
        contacts
          ? fetchContactsSuccess(prepareContacts(contacts))
          : fetchContacts(),
      );
      break;
    }
    case FETCH_CONTACTS: {
      fetchContactsFromServer().then(arrayOfContacts => {
        localStorage.setItem('contacts', JSON.stringify(arrayOfContacts));
        dispatch(fetchContactsSuccess(prepareContacts(arrayOfContacts)));
      });
      break;
    }
    case START_SEARCH: {
      const { searchString } = action;
      const {
        contacts: { contacts },
      } = getState();
      const foundContactIds = Object.values(contacts).reduce(
        (acc, { name: contactName, id }) => {
          if (compareNameWithString(contactName, searchString)) {
            acc.push(id);
          }
          return acc;
        },
        [],
      );
      dispatch(endSearch(foundContactIds));
      break;
    }
    case SAVE_CHANGES: {
      const { id, data } = action;
      const {
        contacts: { contacts },
        search: { searchString },
      } = getState();
      localStorage.setItem(
        'contacts',
        JSON.stringify(Object.values({ ...contacts, [id]: data })),
      );
      dispatch(startSearch(searchString));
      break;
    }
    case DELETE_CONTACT: {
      const {
        contacts: { contacts },
        search: { searchString },
      } = getState();
      const { id } = action;
      const updatedContacts = Object.keys(contacts)
        .filter(contactId => contactId !== id)
        .reduce((acc, contactId) => {
          acc[contactId] = contacts[contactId];
          return acc;
        }, {});
      localStorage.setItem(
        'contacts',
        JSON.stringify(Object.values(updatedContacts)),
      );
      dispatch(startSearch(searchString));
      break;
    }
  }
};
