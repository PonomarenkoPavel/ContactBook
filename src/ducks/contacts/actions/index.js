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
