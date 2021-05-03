import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';

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

const FormDateField = ({ onChange, name, label, errorText, maxDateError }) => {
  const classes = useStyles();

  useEffect(() => {
    setMaxDate(maxDateError);
  }, [maxDateError]);

  const [maxDate, setMaxDate] = useState(maxDateError);
  const [selectedDate, setDate] = useState(moment());
  const [value, setValue] = useState(moment().format('YYYY-MM-DD'));

  const handleChange = (date, value) => {
    const e = {
      target: {
        name: name,
        value: value,
      },
    };

    setMaxDate(new Date(moment().subtract(18, 'years')));

    setValue(value);
    setDate(date);
    onChange(e);
  };

  return (
    <Fragment>
      <Box className={classes.formField}>
        <Typography className={classes.textLabel}>{label}</Typography>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <KeyboardDatePicker
            className={classes.textField}
            inputVariant='outlined'
            autoOk={true}
            value={selectedDate}
            format='YYYY-MM-DD'
            inputValue={value}
            onChange={handleChange}
            disableFuture
            maxDate={maxDate}
            invalidDateMessage={errorText}
            maxDateMessage={'يجب أن يكون العمر ١٨ سنة على الأقل'}
          />
        </MuiPickersUtilsProvider>
      </Box>
    </Fragment>
  );
};

export default FormDateField;
