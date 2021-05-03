import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

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

const FormDropDownField = ({
  onChange,
  name,
  label,
  errorText,
  isError,
  children,
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
  }, [setError, isError, errorText]);

  return (
    <Fragment>
      <Box className={classes.formField}>
        <Typography className={classes.textLabel}>{label}</Typography>
        <FormControl
          className={classes.textField}
          variant='outlined'
          error={error}
        >
          <Select
            value={value}
            name={name}
            id={name}
            displayEmpty
            onChange={(e) => handleChange(e)}
          >
            {children}
          </Select>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default FormDropDownField;
