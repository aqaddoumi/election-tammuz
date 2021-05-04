import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid } from '@material-ui/core';

import logo from '../../assets/tammuz-logo.png';

const useStyles = makeStyles((theme) => ({

}));

const TammuzLogo = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Grid item xs={4}>
      <CardMedia component='img' image={logo} />
      </Grid>
    </Grid>
  );
};

export default TammuzLogo;
