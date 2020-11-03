import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  row: {
    '&:hover': {
      cursor: 'pointer',
    },
    '& td': {
      border: '1px solid rgba(224, 224, 224, 1)',
    },
  },
});
