import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField } from '../../redux/actions';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

const Signup = ({ updateField, user }) => {
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user', user);
    // send user data
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  placeholder="First name"
                  size="small"
                  variant="outlined"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  size="small"
                  variant="outlined"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </Grid>
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
                  Signup
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth onClick={() => history.push('/signin')}>
                  i already have an acount
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
const mapStateToProps = (state) => {
  const user = state.auth;
  return {
    user,
  };
};

const mapDispatchToPropa = (dispatch) => ({
  updateField: (fieldName, value) => dispatch(changeField(fieldName, value)),
  actionSignup: (fieldName, value) => dispatch(changeField(fieldName, value)),
});

Signup.propTypes = {
  updateField: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Signup.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Signup);