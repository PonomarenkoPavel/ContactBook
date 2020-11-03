import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(styles => ({
  letter: {
    '& td': {
      border: '1px solid rgba(224, 224, 224, 1)',
      backgroundColor: styles.palette.grey[200],
      position: 'sticky',
      top: '89px',
    },
  },
}));
