import React, { Fragment, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../logos/Logo';

import { logout } from '../../actions/auth';

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    backgroundColor: 'white',
    height: '10',
  },
  root: {
    flexGrow: 1,
  },
  height: {
    height: '100%',
  },
  tabs: {
    height: '3vh',
  },
  extraButton: {
    width: '50%',
  },
}));

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#fff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    opacity: 0.5,
    '&:hover': {
      color: '#fff',
      opacity: 1,
    },
    '&$selected': {
      color: '#fff',
      opacity: 1,
    },
    '&:focus': {
      color: '#fff',
      opacity: 1,
    },
  },
  selected: {},
}))((props) => <Tab {...props} />);

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split('/');
    const path = paths[1];

    if (path === 'about') {
      setValue(1);
    } else if (path === 'howto') {
      setValue(2);
    } else if (path === 'contact') {
      setValue(3);
    } else {
      setValue(0);
    }
  }, [location]);

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const authBar = (
    <Fragment>
      <Grid className={classes.height} item xs={2} md={3}>
        <Grid container justify='center'>
          <Button
            variant='outlined'
            onClick={logout}
            className={classes.extraButton}
            color='primary'
          >
            تسجيل الخروج
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={8} md={6} className={classes.height}>
        <Grid container justify='center'>
          <Logo />
        </Grid>
      </Grid>
      <Grid item xs={2} md={3}></Grid>
    </Fragment>
  );

  const guestBar = (
    <Fragment>
      <Grid item xs={8} md={6} className={classes.height}>
        <Grid container justify='center'>
          <Logo />
        </Grid>
      </Grid>
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position='static'>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.headerLogo}
        >
          {!loading && (
            <Fragment>{isAuthenticated ? authBar : guestBar}</Fragment>
          )}
        </Grid>
        <AntTabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <AntTab component={Link} to='/' label='الصفحة الرئيسية' />
          <AntTab component={Link} to='/about' label='منظمة تموز' />
          <AntTab component={Link} to='/howto' label='التدريب' />
          <AntTab component={Link} to='/contact' label='تواصل معنا' />
        </AntTabs>
      </AppBar>
    </Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
