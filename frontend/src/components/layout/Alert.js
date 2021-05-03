import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Alert as AlertMsg } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  alert: {
    margin: theme.spacing(2, 0, 0, 0),
  },
}));

const Alert = ({ alerts }) => {
  const classes = useStyles();

  if (alerts !== null && alerts.length > 0) {
    return alerts.map((alert) => (
      <AlertMsg
        className={classes.alert}
        key={alert.id}
        severity={alert.alertType}
        variant='filled'
      >
        {alert.msg}
      </AlertMsg>
    ));
  } else {
    return null;
  }
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
