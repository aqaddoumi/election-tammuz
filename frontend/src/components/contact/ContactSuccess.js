import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SponsorsLogos from '../logos/SponsorsLogos';

import { contactRedirected } from '../../actions/contact';

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

const ContactSuccess = ({ contactRedirected }) => {
  const classes = useStyles();

  useEffect(() => {
    contactRedirected();
  }, [contactRedirected]);

  return (
    <Fragment>
      <Grid container justify='center'>
        <Typography align='center' className={classes.title} color='primary'>
          شكراً للتواصل
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

ContactSuccess.propTypes = {
  contactRedirected: PropTypes.func.isRequired,
};

export default connect(null, { contactRedirected })(ContactSuccess);
