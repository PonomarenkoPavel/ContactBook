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
    padding: '4px 0',
    display: 'flex',
    alignItems: 'center',
    '& > p:first-child': {
      marginRight: '15px',
    },
  },
});
