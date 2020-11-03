/**
 * Selects isOpen state for modal from store
 */
export const selectIsOpen = ({ modal }) => modal.isOpen;
/**
 * Selects contact id that is currently being edited
 */
export const selectContactId = ({ modal }) => modal.contactId;
/**
 * Selects isEditable state which indicates whether contact is currently being edited
 */
export const selectIsEditable = ({ modal }) => modal.isEditable;
