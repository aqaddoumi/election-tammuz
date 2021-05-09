import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: '12vh',
      width: '100%',
    },
    width: '100%',
    height: 'auto',
    maxHeight: '12vh',
    textAlign: 'center',
  },
}));

const Logo = () => {
  const classes = useStyles();

  return <CardMedia component='img' image={logo} className={classes.logo} />;
};

export default Logo;
