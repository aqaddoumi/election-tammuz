import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import SponsorsLogos from '../logos/SponsorsLogos';

import { registerObserverRedirected } from '../../actions/observer';

const useStyles = makeStyles((theme) => ({
  title: {
    width: '100%',
    fontSize: 20,
    margin: theme.spacing(2, 0, 0, 0),
  },
  paragraph: {
    width: '100%',
    fontWeight: 300,
    margin: theme.spacing(2, 5, 0, 5),
  },
  logos: {
    margin: theme.spacing(4, 5, 4, 5),
  },
  extraButton: {
    margin: theme.spacing(3, 0, 0, 0),
  },
  progress: {
    margin: theme.spacing(5, 0, 0, 0),
  }
}));

const RegisterWaiting = ({ observer, registerObserverRedirected }) => {
  const classes = useStyles();

  if (observer.success) {
    return <Redirect to='/register/success' />;
  }

  return (
    <Fragment>
    <Grid container justify='center'>
      <Typography align='center' className={classes.title} color='primary'>
        الرجاء انتظار تحميل المعلومات والصور
      </Typography>
      <Grid container justify="center" xs={12} >
        <CircularProgress className={classes.progress} color="primary"/>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Box className={classes.logos}>
          <SponsorsLogos />
        </Box>
      </Grid>
    </Grid>
  </Fragment>
  );
};

RegisterWaiting.propTypes = {
    registerObserverRedirected: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  observer: state.observer,
});

export default connect(mapStateToProps, { registerObserverRedirected })(RegisterWaiting);