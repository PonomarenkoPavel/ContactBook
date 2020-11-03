import { createReducer } from 'store/createReducer';
import { START_SEARCH, END_SEARCH } from 'ducks/search/actions';
import { FETCH_CONTACTS_SUCCESS } from 'ducks/contacts/actions';

const initialState = {
  searchString: '',
  foundContactIds: [],
};

const handlers = {
  [FETCH_CONTACTS_SUCCESS]: (state, { data }) => ({
    ...state,
    foundContactIds: Object.keys(data.contacts),
  }),
  [START_SEARCH]: (state, { searchString }) => ({
    ...state,
    searchString,
  }),
  [END_SEARCH]: (state, { foundContactIds }) => ({
    ...state,
    foundContactIds,
  }),
};

export const searchReducer = createReducer(initialState, handlers);
