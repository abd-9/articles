import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeField } from '../../redux/actions';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';

const Home = ({ updateField, user }) => {
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
    <Container className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          left side articles lsit{' '}
        </Grid>
        <Grid item xs={8}>
          currnet arcical
        </Grid>
      </Grid>
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

Home.propTypes = {
  updateField: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

Home.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToPropa)(Home);
