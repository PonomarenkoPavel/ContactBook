const PREFIX = 'modals';

export const SHOW_MODAL = `${PREFIX}/SHOW_MODAL`;
export const showModal = contactId => ({
  type: SHOW_MODAL,
  contactId,
});

export const HIDE_MODAL = `${PREFIX}/HIDE_MODAL`;
export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const EDIT_CONTACT = `${PREFIX}/EDIT_CONTACT`;
export const editContact = () => ({
  type: EDIT_CONTACT,
});

export const UNDO_EDITING = `${PREFIX}/UNDO_EDITING`;
export const undoEditing = () => ({
  type: UNDO_EDITING,
});
