import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { ucFirst } from 'helpers/contacts';
import { contactFields } from 'constants/contact';
import { useStyles } from './styles';
import { CONTACT_SHAPE } from 'constants/propTypes';
import { InputComponent } from 'components/Input';
import PropTypes from 'prop-types';

/**
 * Displays one contact field and input to edit it
 * @param field - contact field (e.g. name)
 * @param content - default field value (e.g. Vasya)
 * @param handleChange - callback to change contact field
 */
const ContentBlockComponent = ({ field, content, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="h6" component="p">
        {`${ucFirst(field)}:`}
      </Typography>
      <InputComponent
        handleChange={handleChange}
        placeholder={ucFirst(field)}
        value={content}
        id={field}
        name={field}
      />
    </div>
  );
};

ContentBlockComponent.propTypes = {
  field: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

/**
 * Displays inputs for editing contact
 * @param contact - contact object
 * @param handleChange - callback to change contact field
 */
export const EditContactComponent = ({ contact, handleChange }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={contact.avatar}
        title="contact avatar"
      />
      {contactFields.map(field => {
        return (
          <ContentBlockComponent
            key={field}
            field={field}
            content={contact[field]}
            handleChange={handleChange}
          />
        );
      })}
    </Card>
  );
};

EditContactComponent.propTypes = {
  contact: PropTypes.shape(CONTACT_SHAPE).isRequired,
  handleChange: PropTypes.func.isRequired,
};
