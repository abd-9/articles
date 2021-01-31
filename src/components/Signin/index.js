import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField, signInAction } from '../../redux/actions';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

const Signin = ({ updateField, user, signin }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    signin(user.userName, user.password, () => history.push('/articles'));
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="userName"
                  size="small"
                  variant="outlined"
                  value={user.userName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button color="secondary" fullWidth type="submit" variant="contained">
                  Signin
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth onClick={() => history.push('/signup')}>
                  i don't have an acount
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

Signin.propTypes = {
  updateField: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Signin.defaultProps = {
  user: {},
};

const mapStateToProps = (state) => {
  const user = state.auth;
  return {
    user,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  updateField: (fieldName, value) => dispatch(changeField(fieldName, value)),
  signin: (userName, password, callBack) => dispatch(signInAction(userName, password, callBack)),
});

export default connect(mapStateToProps, mapDispatchToPropa)(Signin);
