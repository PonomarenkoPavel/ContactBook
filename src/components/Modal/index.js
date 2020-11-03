import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { EditContactComponent } from 'components/EditContact';
import { ContactCardComponent } from 'components/ContactCard';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { saveChanges } from 'ducks/contacts/actions';
import { CONTACT_SHAPE } from 'constants/propTypes';
import { useStyles } from './styles';

/**
 * Displays modal window with contact card (or with card for editing contacts) and buttons to interact with it
 * @param isOpen - indicates if modal is open
 * @param handleClose - callback to close modal
 * @param currentContact - contact object
 * @param handleEdit - callback to edit contact
 * @param isEditable - indicates if contact is currently being edited
 * @param handleCancel - callback to cancel edit
 * @param contactId - contact id
 * @param handleDelete - callback to delete contact
 */
export const ModalComponent = ({
  isOpen,
  handleClose,
  currentContact,
  handleEdit,
  isEditable,
  handleCancel,
  contactId,
  handleDelete,
}) => {
  const classes = useStyles();
  const [contact, setContact] = useState(currentContact);
  const dispatch = useDispatch();
  const handleChangeContact = useCallback(
    ({ target }) => {
      const value = target.value;
      const field = target.id || target.name;
      setContact(contact => ({
        ...contact,
        [field]: value,
      }));
    },
    [setContact],
  );
  const handleSave = useCallback(() => {
    dispatch(saveChanges(contactId, contact));
  }, [contact, dispatch, contactId]);

  return (
    <Dialog onClose={handleClose} aria-labelledby="contact-card" open={isOpen}>
      <DialogTitle disableTypography className={classes.title}>
        <Typography variant="h6">{currentContact.name}</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className={classes.content}>
        {isEditable ? (
          <EditContactComponent
            contact={contact}
            handleChange={handleChangeContact}
          />
        ) : (
          <ContactCardComponent contact={contact} />
        )}
      </DialogContent>
      <DialogActions className={classes.actions}>
        {isEditable ? (
          <>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
            <Button onClick={handleCancel} color="inherit">
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit} color="primary">
              Edit
            </Button>
            <Button onClick={handleDelete} color="secondary">
              Delete
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  currentContact: PropTypes.shape(CONTACT_SHAPE).isRequired,
  handleEdit: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
