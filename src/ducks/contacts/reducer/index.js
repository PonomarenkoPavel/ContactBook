import { createReducer } from 'store/createReducer';
import { FETCH_CONTACTS_SUCCESS } from 'ducks/contacts/actions';

const initialState = {
  contacts: {},
  contactIdsByLetters: {},
};

const handlers = {
  [FETCH_CONTACTS_SUCCESS]: (state, { data }) => ({
    ...state,
    ...data,
  }),
};

export const contactsReducer = createReducer(initialState, handlers);
