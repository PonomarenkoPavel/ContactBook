import React from 'react';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { ucFirst } from 'helpers/contacts';
import { contactFields } from 'constants/contact';
import { CONTACT_SHAPE } from 'constants/propTypes';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

/**
 * Displays one contact field and its value
 * @param title - contact field (e.g. name)
 * @param content - field value (e.g. Vasya)
 */
const ContentBlockComponent = ({ title, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Typography variant="h6" component="p">
        {`${title}:`}
      </Typography>
      <Typography variant="h6" component="p" color="textSecondary">
        {content}
      </Typography>
    </div>
  );
};

ContentBlockComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

/**
 * Displays contact card
 * @param contact - contact object
 */
export const ContactCardComponent = ({ contact }) => {
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
            title={ucFirst(field)}
            content={contact[field]}
          />
        );
      })}
    </Card>
  );
};

ContactCardComponent.propTypes = {
  contact: PropTypes.shape(CONTACT_SHAPE).isRequired,
};
