import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

import logos from '../../assets/logos.png';

const useStyles = makeStyles((theme) => ({
  logos: {
    width: '100%',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: '20vh',
      width: '100%',
    },
    width: '100%',
    height: 'auto',
    textAlign: 'center',
  },
  copyright: {
    fontSize: 12,
    color: '#616161',
  },
}));

const SponsorsLogos = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center' className={classes.logos}>
      <Grid item xs={12}>
        <CardMedia component='img' image={logos} className={classes.logo} />
        <Typography className={classes.copyright} align='center'>
          &#xa9; جميع الحقوق محفوظة لمنظمة تموز.
        </Typography>
        <Typography className={classes.copyright} align='center'>
          هذه المنصة من تصميم وتطوير محمد خصاونة وعادل قدومي.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SponsorsLogos;
