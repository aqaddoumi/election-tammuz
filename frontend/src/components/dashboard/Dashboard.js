import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import SponsorsLogos from '../logos/SponsorsLogos';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { getSurveys } from '../../actions/survey';

import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    margin: theme.spacing(2, 0, 2, 0),
  },
  container: {
    width: '100%',
    margin: theme.spacing(5, 0, 10, 0),
  },
  survey: {
    width: '100%',
    margin: theme.spacing(0, 0, 2, 0),
  },
  full: {
    margin: theme.spacing(0, 0, 2, 0),
    width: '300px',
  },
  logos: {
    width: '400px',
    margin: theme.spacing(2, 2, 4, 2),
  },
}));

const Dashboard = ({
  getSurveys,
  auth: { user },
  survey: { surveys }
}) => {
  const classes = useStyles();

  useEffect(() => {
    getSurveys();
  }, [getSurveys]);

  if (surveys !== null) {
    for (const s of surveys) {
      if (moment().isAfter(s.startDate)) {
        s.active = true;
      } else {
        s.active = false;
      }
    }
  }
  
  return surveys === null ? (
    <Fragment />
  ) : (
    <Fragment>
      <Grid container justify='center' className={classes.container}>
        <Typography className={classes.title} color='primary'>
              الاستبيانات
        </Typography>
        {surveys.map((c) => {
          return (
              <Grid key={c.id} item xs={12}>
                <Box display="flex"
                justifyContent="center"
                alignItems="center">
                  <Button key={c.id}
                  className={classes.full}
                  component={Link}
                  to={{ pathname: c.url }}
                  target="_blank"
                  color='primary'
                  variant='contained'
                  disabled={!c.active}
                  >
                  {c.name}
                  </Button>
                </Box>
              </Grid>
            );
        })}

        <Box className={classes.logos}>
          <SponsorsLogos />
        </Box>
      </Grid>


    </Fragment>
  )
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,

  getSurveys: PropTypes.func.isRequired,
  survey: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  survey: state.survey
});

export default connect(mapStateToProps, { getSurveys })(Dashboard);
