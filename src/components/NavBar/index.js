import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actions';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ logout, user }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" id="navBar">
        <Toolbar>
          <Grid container justify="space-around">
            <Grid item xs container>
              {user?.isLoggedIn && (
                <>
                  <Button
                    color="inherit"
                    id="articlButton"
                    className={classes.menuButton}
                    onClick={() => history.push('/articles')}
                  >
                    Articles
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.menuButton}
                    onClick={() => history.push('/articles/articleForm/new')}
                  >
                    Add Article
                  </Button>
                </>
              )}
            </Grid>
            <Grid item xs container justify="flex-end">
              {user.isLoggedIn && (
                <Button color="inherit" className={classes.menuButton} onClick={() => logout()}>
                  Logout
                </Button>
              )}
              {!user.isLoggedIn && (
                <>
                  <Button
                    color="inherit"
                    className={classes.menuButton}
                    onClick={() => history.push('/signin')}
                  >
                    Signin
                  </Button>
                  <Button
                    color="inherit"
                    className={classes.menuButton}
                    onClick={() => history.push('/signup')}
                  >
                    Signup
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = state.auth;
  return {
    user,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToPropa)(NavBar);
