import PropTypes from 'prop-types';

/**
 * PropTypes for contact object
 */
export const CONTACT_SHAPE = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.shape({
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
  phone: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

/**
 * PropTypes for screen size value
 */
export const SIZE_VALUES = PropTypes.oneOf(['small', 'medium', 'large']);
