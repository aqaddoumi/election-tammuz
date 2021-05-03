import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formField: {
    margin: theme.spacing(2, 5, 0, 5),
  },
  submitButton: {
    width: '100%',
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

const FormSubmitButton = ({ label }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.formField}>
        <Button
          className={classes.submitButton}
          type='submit'
          color='primary'
          variant='contained'
        >
          {label}
        </Button>
      </Box>
    </Fragment>
  );
};

export default FormSubmitButton;
