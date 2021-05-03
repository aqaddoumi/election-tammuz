import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formField: {
    margin: theme.spacing(2, 5, 0, 5),
  },
  textField: {
    width: '100%',
  },
  textLabel: {
    margin: theme.spacing(0, 0, 1, 0),
  },
}));

const FormTextField = ({
  onChange,
  name,
  label,
  placeholder,
  errorText,
  isError,
  type = 'text',
  multiline = false,
  rows = 1,
}) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);

    setError(false);
    setHelperText('');
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
        <Typography className={classes.textLabel}>{label}</Typography>
        <TextField
          className={classes.textField}
          variant='outlined'
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          error={error}
          helperText={helperText}
          type={type}
          multiline={multiline}
          rows={rows}
        ></TextField>
      </Box>
    </Fragment>
  );
};

export default FormTextField;
