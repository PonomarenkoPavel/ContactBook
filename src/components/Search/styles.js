import { makeStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '20px',
  },
  input: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
    padding: '12px 14px 11px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      borderColor: theme.palette.grey[500],
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${theme.palette.grey[500]} 0 0 0 2px`,
      borderColor: theme.palette.grey[500],
    },
  },
  focused: {},
}));
