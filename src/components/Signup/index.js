import React from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { signUpAction } from '../../redux/actions';

import { Button, Container, Grid, TextField } from '@material-ui/core';
import { useStyles } from './style';
import { validationSchema } from './helper';
import { useFormik } from 'formik';

const Signup = ({ user, signUp }) => {
  const history = useHistory();

  const classes = useStyles();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: user,
    validationSchema: validationSchema,
    onSubmit: (_values) => {
      signUp(_values, () => history.push('/articles'));
    },
  });

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Signup</h1>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  placeholder="First name"
                  size="small"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  size="small"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="userName"
                  size="small"
                  variant="outlined"
                  value={values.userName}
                  onChange={handleChange}
                  error={errors.userName}
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
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password}
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
  signUp: (user, callBack) => dispatch(signUpAction(user, callBack)),
});

Signup.propTypes = {
  user: PropTypes.shape({}),
};

Signup.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Signup);
