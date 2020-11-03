import { createReducer } from 'store/createReducer';
import {
  SHOW_MODAL,
  HIDE_MODAL,
  EDIT_CONTACT,
  UNDO_EDITING,
} from 'ducks/modals/actions';
import { SAVE_CHANGES, DELETE_CONTACT } from 'ducks/contacts/actions';

const initialState = {
  isOpen: false,
  contactId: '',
  isEditable: false,
};

const handlers = {
  [SHOW_MODAL]: (state, { contactId }) => ({
    ...state,
    isOpen: true,
    contactId,
  }),
  [EDIT_CONTACT]: state => ({
    ...state,
    isEditable: true,
  }),
  [UNDO_EDITING]: state => ({
    ...state,
    isEditable: false,
  }),
  [SAVE_CHANGES]: state => ({
    ...state,
    isEditable: false,
  }),
  [DELETE_CONTACT]: () => initialState,
  [HIDE_MODAL]: () => initialState,
};

export const modalReducer = createReducer(initialState, handlers);
