import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';

import FormCheckboxItem from './FormCheckboxItem';

const useStyles = makeStyles((theme) => ({
  formField: {
    margin: theme.spacing(2, 5, 0, 5),
  },
  submitButton: {
    width: '100%',
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

export default function Checkboxes({
  name,
  label,
  isError,
  errorText,
  values,
  onChange,
}) {
  const classes = useStyles();
  const setInitialState = () => {
    let checkedState = {};
    for (var i = 0; i < values.length; i++) {
      checkedState[values[i]] = false;
    }
    return checkedState;
  };

  const [state, setState] = useState(setInitialState());
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    var value = '';

    for (const s in state) {
      if (state[s] === true) {
        value += s;
        value += ', ';
      }
    }

    if (value !== '') {
      value = value.slice(0, -2);
    }

    const e = {
      target: {
        name: name,
        value: value,
      },
    };

    onChange(e);
  }, [state, name]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    setError(false);
    setHelperText('');
  };

  const checkboxes = values.map((v) => (
    <FormCheckboxItem key={v} onChange={handleChange} value={v} label={v} />
  ));

  return (
    <Fragment>
      <FormControl className={classes.formField} error={error}>
        <Typography className={classes.textLabel}>{label}</Typography>
        <FormGroup row>{checkboxes}</FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Fragment>
  );
}
