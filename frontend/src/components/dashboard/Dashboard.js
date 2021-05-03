import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import SponsorsLogos from '../logos/SponsorsLogos';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(5, 0, 10, 0),
  },
  cohortTitle: {
    fontSize: 22,
  },
  cohortDates: {
    fontSize: 12,
    margin: theme.spacing(0, 1, 0, 1),
    color: '#757575',
  },
  cohortDesc: {
    margin: theme.spacing(1, 0, 0, 0),
    color: '#424242',
    fontSize: 14,
  },
  curriculumTitle: {
    margin: theme.spacing(2, 0, 0, 0),
    fontSize: 18,
  },
  desc: {
    margin: theme.spacing(2, 0, 0, 0),
  },
  curriculumDesc: {
    margin: theme.spacing(1, 0, 0, 0),
    color: '#424242',
    fontSize: 14,
  },
  stepperContainer: {
    width: '100%',
  },
  logos: {
    margin: theme.spacing(2, 2, 4, 2),
  },
}));

const Dashboard = ({
  auth: { user },
}) => {
  const classes = useStyles();

  const { id } = useParams();

  const moduleStates = [];

  return (
    <Fragment>
      <h1>AAA</h1>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Dashboard);
