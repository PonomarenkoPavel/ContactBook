import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(styles => ({
  head: {
    '& tr:first-child th': {
      border: '1px solid rgba(224, 224, 224, 1)',
      backgroundColor: styles.palette.grey[100],
      width: '20%',
    },
  },
}));
