import React, { Fragment } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import Login from './Login';

import CardMedia from '@material-ui/core/CardMedia';

import mainImage from '../../assets/main-image.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '85vh',
  },
  sideImage: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  },
  side: {
    margin: theme.spacing(2, 2),
  },
}));

const Home = ({ isAuthenticated }) => {
  const classes = useStyles();
  let { path } = useRouteMatch();

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <Grid container className={classes.main}>
        <Hidden smUp>
          <Grid item sm={4} md={7}>
            <CardMedia
              component='img'
              image={mainImage}
              className={classes.sideImage}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={8} md={5}>
          <Box>
            <Switch className={classes.side}>
              <Route exact path={path} component={Login} />
            </Switch>
          </Box>
        </Grid>
        <Hidden only='xs'>
          <Grid item sm={4} md={7}>
            <CardMedia
              component='img'
              image={mainImage}
              className={classes.sideImage}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Fragment>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
