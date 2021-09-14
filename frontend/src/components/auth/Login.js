import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import FormTextField from '../form/FormTextField';
import FormSubmitButton from '../form/FormSubmitButton';
import SponsorsLogos from '../logos/SponsorsLogos';
import Alert from '../layout/Alert';

import { setAlert, removeAllAlerts } from '../../actions/alert';
import { login } from '../../actions/auth';

import validator from 'validator';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    margin: theme.spacing(2, 0, 0, 0),
  },
  logos: {
    margin: theme.spacing(1, 5, 4, 5),
  },
  extras: {
    margin: theme.spacing(2, 5, 0, 5),
  },
  extraButton: {
    margin: theme.spacing(1, 0, 0, 0),
    width: '100%',
  },
  alert: {
    width: '100%',
    margin: theme.spacing(2, 5, 2, 5),
  },
}));

const Login = ({ setAlert, removeAllAlerts, login }) => {
  const classes = useStyles();
  let { path } = useRouteMatch();

  useEffect(() => {
    removeAllAlerts();
  }, [removeAllAlerts]);

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const { identifier, password } = formData;

  const newErrors = {};
  for (const s in formData) {
    newErrors[s] = false;
  }
  const [errors, setErrors] = useState(newErrors);

  const onChange = (e) => {
    setErrors({ ...errors, [e.target.name]: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    var isAnyErrors = false;
    var newErrors = { ...errors };

    for (const err in errors) {
      if (formData[err] === '') {
        isAnyErrors = true;
        newErrors[err] = true;
      } else {
        newErrors[err] = false;
      }
    }

    if (identifier.length !== 11) {
      isAnyErrors = true;
      newErrors.identifier = true;
    }

    if (password.length !== 8) {
      isAnyErrors = true;
      newErrors.password = true;
    }

    if (isAnyErrors) {
      setErrors(newErrors);
    } else {
      login({ identifier, password });
    }
  };

  return (
    <Fragment>
      <Grid container justify='center'>
        <Box className={classes.alert}>
          <Alert />
        </Box>
        <Typography className={classes.title} color='primary'>
          تسجيل الدخول
        </Typography>
      </Grid>
      <form onSubmit={(e) => onSubmit(e)}>
        <FormTextField
          label='اسم المستخدم(ـة):'
          placeholder='اسم المستخدم(ـة)'
          name='identifier'
          onChange={onChange}
          isError={errors.identifier}
          errorText='الرجاء تعبئة خانة اسم المستخدم(ـة)'
        />

        <FormTextField
          label='كلمة السر:'
          placeholder='كلمة السر'
          name='password'
          type='password'
          onChange={onChange}
          isError={errors.password}
          errorText='الرجاء تعبئة خانة كلمة السر'
        />

        <FormSubmitButton label='تسجيل دخول' />
      </form>

      <Box className={classes.extras}>
        <Grid container justify='center'>
            <Button
              className={classes.extraButton}
              component={Link}
              to='/register'
              color='primary'
              variant='outlined'
            >
              تسجيل المراقبين والمراقبات
            </Button>
        </Grid>
      </Box>

      <Box className={classes.logos}>
        <SponsorsLogos />
      </Box>
    </Fragment>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  removeAllAlerts: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, removeAllAlerts, login })(Login);
