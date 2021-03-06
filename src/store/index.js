import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { contactsReducer } from 'ducks/contacts/reducer';
import { searchReducer } from 'ducks/search/reducer';
import { modalReducer } from 'ducks/modals/reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleware } from 'middleware';

/**
 * Creates project store using createStore
 */
export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    search: searchReducer,
    modal: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(middleware)),
);
