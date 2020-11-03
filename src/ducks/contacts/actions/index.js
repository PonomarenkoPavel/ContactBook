const PREFIX = 'contacts';

export const FETCH_CONTACTS = `${PREFIX}/FETCH_CONTACTS`;
export const fetchContacts = () => ({
  type: FETCH_CONTACTS,
});

export const FETCH_CONTACTS_SUCCESS = `${PREFIX}/FETCH_CONTACTS_SUCCESS`;
export const fetchContactsSuccess = data => ({
  type: FETCH_CONTACTS_SUCCESS,
  data,
});

export const SAVE_CHANGES = `${PREFIX}/SAVE_CHANGES`;
export const saveChanges = (id, data) => ({
  type: SAVE_CHANGES,
  id,
  data,
});

export const DELETE_CONTACT = `${PREFIX}/DELETE_CONTACT`;
export const deleteContact = id => ({
  type: DELETE_CONTACT,
  id,
});
