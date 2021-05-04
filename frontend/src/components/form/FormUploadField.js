import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  fifty: {
    width: '50%',
  },
  formField: {
    margin: theme.spacing(4, 5, 0, 5),
  },
  submitButton: {
    width: '100%',
  },
  error: {
    color: '#f44336',
    fontSize: '0.75rem',
    marginRight: '14px',
    marginLeft: '14px'
  }
}));

const FormSubmitButton = ({ 
  label, 
  onChange, 
  name, 
  errorText,
  isError }) => {
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const [buttonLabel, setButtonLabel] = useState('تحميل الصورة')
  const [buttonVariant, setButtonVariant] = useState('outlined')

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setButtonVariant('contained')
      setButtonLabel('تم تحميل الصورة')
      setError(false);
      setHelperText('');
      onChange(e);
    }
  };

  useEffect(() => {
    setError(isError);
    if (isError) {
      setHelperText(errorText);
    } else {
      setHelperText('');
    }
  }, [isError, errorText]);

  return (
    <Fragment>
      <Box className={classes.formField}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={6}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={6}>
          <Button
          variant={buttonVariant}
          component="label"
          color='primary'
          className={classes.submitButton}
        >
          {buttonLabel}
          <input
            onChange={(e) => handleChange(e)}
            type="file"
            style={{ display: "none" }}
            name={name}
          />
        </Button>
          </Grid>
        </Grid>
        <Grid container><Typography className={classes.error}>{helperText}</Typography></Grid>
      </Box>
    </Fragment>
  );
};

export default FormSubmitButton;