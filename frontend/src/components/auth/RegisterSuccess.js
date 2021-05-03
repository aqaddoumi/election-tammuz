import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
}));

const RegisterSuccess = ({ registerObserverRedirected }) => {
  const classes = useStyles();

  useEffect(() => {
    registerObserverRedirected();
  }, [registerObserverRedirected]);

  return (
    <Fragment>
      <Grid container justify='center'>
        <Typography align='center' className={classes.title} color='primary'>
          شكراً للتسجيل
        </Typography>
        <Typography align='center' className={classes.paragraph}>
          سوف يتم التواصل معك قريباً
        </Typography>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Button
              className={classes.extraButton}
              component={Link}
              to={'/home'}
              color='primary'
              variant='contained'
            >
              العودة إلي الصفحة الرئيسية
            </Button>
          </Grid>
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

RegisterSuccess.propTypes = {
    registerObserverRedirected: PropTypes.func.isRequired,
};

export default connect(null, { registerObserverRedirected })(RegisterSuccess);
