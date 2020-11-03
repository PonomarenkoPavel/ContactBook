import React, { useCallback, useState } from 'react';
import { ModalComponent } from 'components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsOpen,
  selectIsEditable,
  selectContactId,
} from 'ducks/modals/selectors';
import { deleteContact } from 'ducks/contacts/actions';
import { selectCurrentContact } from 'ducks/contacts/selectors';
import { hideModal, editContact, undoEditing } from 'ducks/modals/actions';

/**
 * Displays modal of nothing if modal is closed
 */
export const Modal = () => {
  const currentContact = useSelector(selectCurrentContact);

  const isOpen = useSelector(selectIsOpen);
  const isEditable = useSelector(selectIsEditable);
  const contactId = useSelector(selectContactId);
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);
  const handleEdit = useCallback(() => {
    dispatch(editContact());
  }, [dispatch]);
  const handleCancel = useCallback(() => {
    dispatch(undoEditing());
  }, [dispatch]);
  const handleDelete = useCallback(() => {
    dispatch(deleteContact(contactId));
  }, [dispatch, contactId]);

  return isOpen ? (
    <ModalComponent
      isOpen={isOpen}
      handleClose={handleClose}
      currentContact={currentContact}
      isEditable={isEditable}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      contactId={contactId}
      handleDelete={handleDelete}
    />
  ) : null;
};
