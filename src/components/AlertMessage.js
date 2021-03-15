import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'absolute',
    zIndex: '1304',
    left: '0',
    top: '0',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertMessage({ severity, text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity}>{text}</Alert>
    </div>
  );
}