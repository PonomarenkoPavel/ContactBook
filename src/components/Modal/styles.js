import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    margin: 0,
    padding: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
  },
  actions: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
