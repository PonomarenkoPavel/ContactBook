import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
  },
  media: {
    height: '150px',
    width: '150px',
    margin: '0 auto 10px',
  },
  content: {
    padding: '0 8px',
    display: 'flex',
    verticalAlign: 'center',
    '& > p:first-child': {
      marginRight: '15px',
    },
  },
});
