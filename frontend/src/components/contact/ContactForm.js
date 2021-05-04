import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

import Alert from '../layout/Alert';
import FormTextField from '../form/FormTextField';
import FormDropDownField from '../form/FormDropDownField';
import FormSubmitButton from '../form/FormSubmitButton';
import SponsorsLogos from '../logos/SponsorsLogos';

import { removeAllAlerts, setAlert } from '../../actions/alert';
import { sendContact } from '../../actions/contact';

import validator from 'validator';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    margin: theme.spacing(2, 0, 0, 0),
  },
  logos: {
    margin: theme.spacing(2, 5, 4, 5),
  },
  alert: {
    width: '100%',
    margin: theme.spacing(0, 5, 0, 5),
  },
  divider: {
    height: 3,
    backgroundColor: '#263B8C',
    margin: theme.spacing(5, 5, 3, 5),
    borderRadius: 3,
  },
  email: {
    margin: theme.spacing(3, 0, 0, 0),
  },
}));

const ContactForm = ({ contact, sendContact, removeAllAlerts, setAlert }) => {
  const classes = useStyles();

  useEffect(() => {
    removeAllAlerts();
  }, [removeAllAlerts]);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
    isTrainee: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isTrainee: '',
  });

  const { name, email, phone, subject, message, isTrainee } = formData;

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

    if (!validator.isEmail(email)) {
      isAnyErrors = true;
      newErrors.email = true;
    }

    if (!validator.isInt(phone)) {
      isAnyErrors = true;
      newErrors.phone = true;
    }

    if (isAnyErrors) {
      setErrors(newErrors);
      setAlert('الرجاء إدخال معلومات صحيحة', 'error');
    } else {
      sendContact({
        name,
        email,
        phone,
        subject,
        message,
        isTrainee,
      });
    }
  };

  if (contact.success) {
    return <Redirect to='/contact/success' />;
  }

  return (
    <Fragment>
      <Grid container justify='center'>
        <Grid item xs={12} md={6}>
          <Grid container justify='center'>
            <Typography className={classes.title} color='primary'>
              تواصل معنا
            </Typography>
          </Grid>

          <form onSubmit={(e) => onSubmit(e)}>
            <FormTextField
              label='الاسم:'
              placeholder='الاسم'
              name='name'
              onChange={onChange}
              isError={errors.name}
              errorText='الرجاء تعبئة خانة الاسم'
            />
            <FormTextField
              label='البريد الإلكتروني:'
              placeholder='البريد الإلكتروني'
              name='email'
              onChange={onChange}
              isError={errors.email}
              errorText='الرجاء تعبئة خانة البريد الإلكتروني'
            />
            <FormTextField
              label='رقم الهاتف:'
              placeholder='رقم الهاتف'
              name='phone'
              onChange={onChange}
              isError={errors.phone}
              errorText='الرجاء تعبئة خانة رقم الهاتف'
            />
            <FormTextField
              label='العنوان:'
              placeholder='العنوان'
              name='subject'
              onChange={onChange}
              isError={errors.subject}
              errorText='الرجاء تعبئة خانة العنوان'
            />
            <FormTextField
              label='الرسالة:'
              placeholder='الرسالة'
              name='message'
              onChange={onChange}
              isError={errors.message}
              errorText='الرجاء تعبئة خانة الرسالة'
              multiline={true}
              rows={3}
            />

            <FormDropDownField
              label='هل أنت مراقب(ـة) مع منظمة تموز؟'
              name='isTrainee'
              onChange={onChange}
              errorText='الرجاء اختيار خانة المراقب(ـة)'
              isError={errors.isTrainee}
            >
              <MenuItem value='نعم'>نعم</MenuItem>
              <MenuItem value='لا'>لا</MenuItem>
            </FormDropDownField>

            <FormSubmitButton label='إرسال الرسالة' />
          </form>

          <Grid container justify='center' className={classes.email}>
            <Grid item xs={12}>
              <Typography align='center'>
                يمكن التواصل معنا من خلال البريد الإلكتروني:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center'>
              <Link href="mailto:tammuzftsd@yahoo.com">
            tammuzftsd@yahoo.com
          </Link>
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify='center'>
            <Box className={classes.alert}>
              <Alert />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify='center'>
              <Grid item xs={12}>
                <Box className={classes.divider} />
              </Grid>
            </Grid>
          </Grid>

          <Box className={classes.logos}>
            <SponsorsLogos />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

ContactForm.propTypes = {
  sendContact: PropTypes.func.isRequired,
  removeAllAlerts: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, {
  sendContact,
  removeAllAlerts,
  setAlert,
})(ContactForm);
