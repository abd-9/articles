import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
  },
}));
